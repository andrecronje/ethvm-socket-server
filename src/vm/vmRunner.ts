import CacheDb from './cacheDB'
let VM = require('ethereumjs-vm')
let Account = require('ethereumjs-account')
let Trie = require('merkle-patricia-tree/secure')
const GAS_LIMIT = '0x4c4b40' // 50000000
var LRU = require('lru');
interface Itx {
	to: string;
	data: string;
}
const hexToBuffer = (hex: string): Buffer => {
	return Buffer.from(hex.toLowerCase().replace('0x', ''), 'hex')
}
class VmRunner {
	db: CacheDb
	stateTrie: any
	codeCache: any
	constructor(_db: CacheDb) {
		this.db = _db
		this.codeCache = new LRU(2000)
	}
	setStateRoot(_hash: Buffer) {
		let _temp = new Trie(this.db, _hash)
		this.stateTrie = _temp
	}
	call(txs: Itx | Array<Itx>, mCB: (err: Error, result: any) => void) {
		console.log("eth call ====================")
		let _this = this
		let _trie = _this.stateTrie.copy()
		let runCode = (sTree: any, to: Buffer, code: Buffer, gasLimit: string, data: Buffer, _cb: (err: Error, result: any)=>void) => {
					let vm = new VM({
						state: sTree
					})
					vm.runCode({
						address: to,
						code: code,
						gasLimit: gasLimit,
						data: data
					}, (err: Error, result: any) => {
						_cb(err, result ? result.return : null)
					})
		}
		let getResult = (tx: Itx, treeClone: any, cb: (err: Error, result: Buffer) => void) => {
			if(_this.codeCache.peek(tx.to)){
				runCode(treeClone, hexToBuffer(tx.to),_this.codeCache.get(tx.to), GAS_LIMIT, hexToBuffer(tx.data), cb)
				return
			}
			treeClone.get(hexToBuffer(tx.to), (err: Error, val: Buffer) => {
				if (err) {
					cb(err, null)
					return
				}
				let account = new Account(val)
				treeClone.getRaw(account.codeHash, (err: Error, code: Buffer) => {
					if (err) {
						cb(err, null)
						return
					}
					_this.codeCache.set(tx.to, code);
					runCode(treeClone, hexToBuffer(tx.to),code ? code : new Buffer('00', 'hex'), GAS_LIMIT, hexToBuffer(tx.data), cb)
				})
			})
		}
		if (Array.isArray(txs)) {
			let returnArr: Array<{ error: Error, result: any }> = []
			let counter = 0
			txs.forEach((_tx, _idx) => {
				getResult(_tx, _trie.copy(), (err: Error, result: any) => {
					counter++
					returnArr[_idx] = ({ error: err, result: result })
					if (counter == txs.length) mCB(null, returnArr)
				})
			})
		} else {
			getResult(txs, _trie, mCB)
		}
	}
	getKeyValue(_key: Buffer, _cb: (err: Error, result: Buffer)=> void) {
		this.db.get(new Buffer(_key), {
			keyEncoding: 'binary',
			valueEncoding: 'binary'
		}, _cb)
	}
	getCurrentStateRoot(_cb:(err: Error, result: Buffer) =>void) {
		_cb(null, this.stateTrie.root)
	}
	getAccount(_to: string, cb: (err: Error, result: Buffer) => void) {
		let treeClone = this.stateTrie.copy()
		console.log("----getAccountgetAccount -----",_to)
		treeClone.get(hexToBuffer(_to), (err: Error, val: Buffer) => {
			console.log(err,val)
			if (err) {
				cb(err, null)
			} else {
				cb(null, val)
			}
		})
	}
}

export default VmRunner

