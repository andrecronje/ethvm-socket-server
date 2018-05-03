import { log } from '@/globalFuncs'
import ds from '@/datastores'
import { txLayout, blockLayout } from '@/typeLayouts'
import configs from '@/configs'
import * as SocketIO from 'socket.io'
import RethinkDB from '@/rethinkConn'
import {common} from '@/libs'
import  * as VmEngine  from '@/vm/vmEngine'
import  VmRunner  from '@/vm/vmRunner'
//import VmEngine from '@/vm/vmEngine'
type CallbackFunction = (err: Error, result: any) => any;
interface Iinstances {
    rdb: RethinkDB;
    vmR: VmRunner;
    vmE: VmEngine;
}
interface _event {
    name: string,
    onEvent: (_socket: SocketIO.Socket, _msg: string, _glob?: Iinstances, _cb?: CallbackFunction) => void;
}
let events: Array<_event> = [{
    name: "join",
    onEvent: (_socket, _msg): void => {
        if (_msg) {
            _socket.join(_msg)
            log.info(_socket.id, "joined", _msg)
        } else {
            log.error(_socket.id, 'tried to join invalid room', _msg)
        }
    }
}, {
    name: "leave",
    onEvent: (_socket, _msg): void => {
        if (_msg) {
            _socket.leave(_msg)
            log.info(_socket.id, "Left", _msg)
        } else {
            log.error(_socket.id, 'tried to leave invalid room', _msg)
        }
    }
}, {
    name: "pastBlocks",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        ds.getBlocks((_blocks: Array<blockLayout>) => {
            let blocks: Array<blockLayout> = []
            _blocks.forEach((_block: blockLayout, idx: number): void => {
                blocks.unshift(_block)
            })
            console.log(blocks)
            _cb(null, blocks)
        })
    }
}, {
    name: "pastTxs",
    onEvent: (_socket, _msg, _glob, _cb) => {
        ds.getTransactions((_txs: Array<txLayout>) => {
            let txs: Array<txLayout> = []
            _txs.forEach((_tx) => {
                txs.unshift(_tx)
            })
            console.log(txs)
            _cb(null, txs)
        })
    }
}, {
    name: "getBlock",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        _glob.rdb.getBlock(_msg, _cb)
    }
}, {
    name: "getTx",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        _glob.rdb.getTx(_msg, _cb)
    }
}, {
    name: "getBlockTransactions",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        _glob.rdb.getBlockTransactions(_msg, _cb)
    }
}, {
    name: "getBalance",
    onEvent: (_socket, _msg, _glob, _cb): void => {
      //_glob.vmR.getAccount(_msg, _cb)
        _glob.vmE.getBalance(_msg, _cb)
    }
},{
    name: "getTokenBalance",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        _glob.vmE.getAllTokens(_msg, _cb)
    }
},
{
    name: "getTotalTxs",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        _glob.rdb.getTotalTxs(_msg, _cb)
    }
},
{
    name: "getTxs",
    onEvent: (_socket, _msg, _glob, _cb): void => {
        _glob.rdb.getTxsOfAddress(_msg, _cb)
    }
},
{
    name: "ethCall",
    onEvent: (_socket, _msg: any, _glob, _cb): void => {
 
        _glob.vmR.call(_msg, _cb)
    }
}, {
    name: "getKeyValue",
    onEvent: (_socket, _msg: any, _glob, _cb): void => {
        if(!common.check.isBufferObject(_msg, 32)) _cb(common.newError(common.errors.notBuffer), null)
        else _glob.vmR.getKeyValue(_msg, _cb)
    }
}, {
    name: "getCurrentStateRoot",
    onEvent: (_socket, _msg: any, _glob, _cb): void => {
        if(_msg != "") _cb(common.newError(common.errors.invalidInput), null)
        else _glob.vmR.getCurrentStateRoot(_cb)
    }
}, {
    name: "getTransactionPages",
    onEvent: (_socket, reqObj: any, _glob, _cb): void => {
        if (reqObj.hash && (!common.check.isBufferObject(reqObj.hash, 32) || !common.check.isNumber(reqObj.number))) _cb(common.newError(common.errors.notBuffer), null)
        else _glob.rdb.getTransactionPages(reqObj.hash, reqObj.number, _cb)
    }
}, {
    name: "getAddressTransactionPages",
    onEvent: (_socket, reqObj: any, _glob, _cb): void => {
        if (reqObj.hash && (!common.check.isBufferObject(reqObj.hash, 32) || !common.check.isNumber(reqObj.number))) _cb(common.newError(common.errors.notBuffer), null)
        else if(!common.check.isBufferObject(reqObj.address, 20))  _cb(common.newError(common.errors.notBuffer), null)
        else _glob.rdb.getAddressTransactionPages(reqObj.address, reqObj.hash, reqObj.number, _cb)
    }
}] 
let onConnection = (_socket: SocketIO.Socket, _rdb: RethinkDB, _vmR: VmRunner,_vmE: VmEngine) => {
    events.forEach((event: _event, idx: number) => {
        _socket.on(event.name, (msg: any, cb: CallbackFunction) => {
            event.onEvent(_socket, msg, {
                rdb: _rdb,
                vmR: _vmR,
                vmE: _vmE
            }, cb)
        })
    })
}

export default onConnection