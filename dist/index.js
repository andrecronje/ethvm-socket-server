/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-util");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const createPayload = __webpack_require__(9)

module.exports = SubProvider

// this is the base class for a subprovider -- mostly helpers


function SubProvider() {

}

SubProvider.prototype.setEngine = function(engine) {
  const self = this
  self.engine = engine
  engine.on('block', function(block) {
    self.currentBlock = block
  })
}

SubProvider.prototype.handleRequest = function(payload, next, end) {
  throw new Error('Subproviders should override `handleRequest`.')
}

SubProvider.prototype.emitPayload = function(payload, cb){
  const self = this
  self.engine.sendAsync(createPayload(payload), cb)
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ethereum-common");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("safe-buffer");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERROR = {
  OUT_OF_GAS: 'out of gas',
  STACK_UNDERFLOW: 'stack underflow',
  STACK_OVERFLOW: 'stack overflow',
  INVALID_JUMP: 'invalid JUMP',
  INVALID_OPCODE: 'invalid opcode',
  REVERT: 'revert',
  STATIC_STATE_CHANGE: 'static state change',
  INTERNAL_ERROR: 'internal error'
};

function VmError(error) {
  this.error = error;
}

module.exports = {
  ERROR: ERROR,
  VmError: VmError
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAsync = undefined;

var _asyncify = __webpack_require__(42);

var _asyncify2 = _interopRequireDefault(_asyncify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}

function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? (0, _asyncify2.default)(asyncFn) : asyncFn;
}

exports.default = wrapAsync;
exports.isAsync = isAsync;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

const getRandomId = __webpack_require__(96)
const extend = __webpack_require__(19)

module.exports = createPayload


function createPayload(data){
  return extend({
    // defaults
    id: getRandomId(),
    jsonrpc: '2.0',
    params: [],
    // user-specified
  }, data)
}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const global_1 = __webpack_require__(64);
exports.default = {
    global: global_1.default
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-account");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const async = __webpack_require__(2)

module.exports = {
  matchingNibbleLength: matchingNibbleLength,
  callTogether: callTogether,
  asyncFirstSeries: asyncFirstSeries,
  doKeysMatch: doKeysMatch
}

/**
 * Returns the number of in order matching nibbles of two give nibble arrayes
 * @method matchingNibbleLength
 * @param {Array} nib1
 * @param {Array} nib2
 */
function matchingNibbleLength (nib1, nib2) {
  var i = 0
  while (nib1[i] === nib2[i] && nib1.length > i) {
    i++
  }
  return i
}

/**
 * Compare two 'nibble array' keys
 */
function doKeysMatch (keyA, keyB) {
  var length = matchingNibbleLength(keyA, keyB)
  return length === keyA.length && length === keyB.length
}

/**
 * Take two or more functions and returns a function  that will execute all of
 * the given functions
 */
function callTogether () {
  var funcs = arguments
  var length = funcs.length
  var index = length

  if (!length) {
    return function () {}
  }

  return function () {
    length = index

    while (length--) {
      var fn = funcs[length]
      if (typeof fn === 'function') {
        var result = funcs[length].apply(this, arguments)
      }
    }
    return result
  }
}

/**
 * Take a collection of async fns, call the cb on the first to return a truthy value.
 * If all run without a truthy result, return undefined
 */
function asyncFirstSeries (array, iterator, cb) {
  var didComplete = false
  async.eachSeries(array, function (item, next) {
    if (didComplete) return next
    iterator(item, function (err, result) {
      if (result) {
        didComplete = true
        process.nextTick(cb.bind(null, null, result))
      }
      next(err)
    })
  }, function () {
    if (!didComplete) {
      cb()
    }
  })
}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = slice;
function slice(arrayLike, start) {
    start = start | 0;
    var newLen = Math.max(arrayLike.length - start, 0);
    var newArr = Array(newLen);
    for (var idx = 0; idx < newLen; idx++) {
        newArr[idx] = arrayLike[start + idx];
    }
    return newArr;
}
module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const SmallBlock_1 = __webpack_require__(73);
exports.SmallBlock = SmallBlock_1.default;
const SmallTx_1 = __webpack_require__(74);
exports.SmallTx = SmallTx_1.default;
const BlockStats_1 = __webpack_require__(75);
exports.BlockStats = BlockStats_1.default;
const common = __webpack_require__(76);
exports.common = common;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const stringify = __webpack_require__(95)

module.exports = {
  cacheIdentifierForPayload: cacheIdentifierForPayload,
  canCache: canCache,
  blockTagForPayload: blockTagForPayload,
  paramsWithoutBlockTag: paramsWithoutBlockTag,
  blockTagParamIndex: blockTagParamIndex,
  cacheTypeForPayload: cacheTypeForPayload,
}

function cacheIdentifierForPayload(payload, opts = {}){
  if (!canCache(payload)) return null
  const { includeBlockRef } = opts
  const params = includeBlockRef ? payload.params : paramsWithoutBlockTag(payload)
  return payload.method + ':' + stringify(params)
}

function canCache(payload){
  return cacheTypeForPayload(payload) !== 'never'
}

function blockTagForPayload(payload){
  var index = blockTagParamIndex(payload);

  // Block tag param not passed.
  if (index >= payload.params.length) {
    return null;
  }

  return payload.params[index];
}

function paramsWithoutBlockTag(payload){
  var index = blockTagParamIndex(payload);

  // Block tag param not passed.
  if (index >= payload.params.length) {
    return payload.params;
  }

  // eth_getBlockByNumber has the block tag first, then the optional includeTx? param
  if (payload.method === 'eth_getBlockByNumber') {
    return payload.params.slice(1);
  }

  return payload.params.slice(0,index);
}

function blockTagParamIndex(payload){
  switch(payload.method) {
    // blockTag is third param
    case 'eth_getStorageAt':
      return 2
    // blockTag is second param
    case 'eth_getBalance':
    case 'eth_getCode':
    case 'eth_getTransactionCount':
    case 'eth_call':
    case 'eth_estimateGas':
      return 1
    // blockTag is first param
    case 'eth_getBlockByNumber':
      return 0
    // there is no blockTag
    default:
      return undefined
  }
}

function cacheTypeForPayload(payload) {
  switch (payload.method) {
    // cache permanently
    case 'web3_clientVersion':
    case 'web3_sha3':
    case 'eth_protocolVersion':
    case 'eth_getBlockTransactionCountByHash':
    case 'eth_getUncleCountByBlockHash':
    case 'eth_getCode':
    case 'eth_getBlockByHash':
    case 'eth_getTransactionByHash':
    case 'eth_getTransactionByBlockHashAndIndex':
    case 'eth_getTransactionReceipt':
    case 'eth_getUncleByBlockHashAndIndex':
    case 'eth_getCompilers':
    case 'eth_compileLLL':
    case 'eth_compileSolidity':
    case 'eth_compileSerpent':
    case 'shh_version':
      return 'perma'

    // cache until fork
    case 'eth_getBlockByNumber':
    case 'eth_getBlockTransactionCountByNumber':
    case 'eth_getUncleCountByBlockNumber':
    case 'eth_getTransactionByBlockNumberAndIndex':
    case 'eth_getUncleByBlockNumberAndIndex':
      return 'fork'

    // cache for block
    case 'eth_gasPrice':
    case 'eth_blockNumber':
    case 'eth_getBalance':
    case 'eth_getStorageAt':
    case 'eth_getTransactionCount':
    case 'eth_call':
    case 'eth_estimateGas':
    case 'eth_getFilterLogs':
    case 'eth_getLogs':
    case 'net_peerCount':
      return 'block'

    // never cache
    case 'net_version':
    case 'net_peerCount':
    case 'net_listening':
    case 'eth_syncing':
    case 'eth_sign':
    case 'eth_coinbase':
    case 'eth_mining':
    case 'eth_hashrate':
    case 'eth_accounts':
    case 'eth_sendTransaction':
    case 'eth_sendRawTransaction':
    case 'eth_newFilter':
    case 'eth_newBlockFilter':
    case 'eth_newPendingTransactionFilter':
    case 'eth_uninstallFilter':
    case 'eth_getFilterChanges':
    case 'eth_getWork':
    case 'eth_submitWork':
    case 'eth_submitHashrate':
    case 'db_putString':
    case 'db_getString':
    case 'db_putHex':
    case 'db_getHex':
    case 'shh_post':
    case 'shh_newIdentity':
    case 'shh_hasIdentity':
    case 'shh_newGroup':
    case 'shh_addToGroup':
    case 'shh_newFilter':
    case 'shh_uninstallFilter':
    case 'shh_getFilterChanges':
    case 'shh_getMessages':
      return 'never'
  }
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(14).EventEmitter
const inherits = __webpack_require__(1).inherits

module.exports = Stoplight


inherits(Stoplight, EventEmitter)

function Stoplight(){
  const self = this
  EventEmitter.call(self)
  self.isLocked = true
}

Stoplight.prototype.go = function(){
  const self = this
  self.isLocked = false
  self.emit('unlock')
}

Stoplight.prototype.stop = function(){
  const self = this
  self.isLocked = true
  self.emit('lock')
}

Stoplight.prototype.await = function(fn){
  const self = this
  if (self.isLocked) {
    self.once('unlock', fn)
  } else {
    setTimeout(fn)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("xtend");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = onlyOnce;
function onlyOnce(fn) {
    return function () {
        if (fn === null) throw new Error("Callback was already called.");
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(133),
    isLength = __webpack_require__(54);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const datastore_redis_1 = __webpack_require__(70);
const datastore_loki_1 = __webpack_require__(71);
const configs_1 = __webpack_require__(11);
let DS_TYPE = configs_1.default.global.DATASTORE;
let VALID_DS = {
    Redis: datastore_redis_1.default,
    LokiJS: datastore_loki_1.default
};
let expObj = {
    initialize: VALID_DS[DS_TYPE].initialize,
    addBlock: VALID_DS[DS_TYPE].addBlock,
    addTransaction: VALID_DS[DS_TYPE].addTransaction,
    getBlocks: VALID_DS[DS_TYPE].getBlocks,
    getTransactions: VALID_DS[DS_TYPE].getTransactions
};
exports.default = expObj;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("bignumber.js");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

const rlp = __webpack_require__(37)
const ethUtil = __webpack_require__(0)

module.exports = TrieNode

function TrieNode (type, key, value) {
  if (Array.isArray(type)) {
    // parse raw node
    this.parseNode(type)
  } else {
    this.type = type
    if (type === 'branch') {
      var values = key
      this.raw = Array.apply(null, Array(17))
      if (values) {
        values.forEach(function (keyVal) {
          this.set.apply(this, keyVal)
        })
      }
    } else {
      this.raw = Array(2)
      this.setValue(value)
      this.setKey(key)
    }
  }
}

TrieNode.isRawNode = isRawNode
TrieNode.addHexPrefix = addHexPrefix
TrieNode.removeHexPrefix = removeHexPrefix
TrieNode.isTerminator = isTerminator
TrieNode.stringToNibbles = stringToNibbles
TrieNode.nibblesToBuffer = nibblesToBuffer
TrieNode.getNodeType = getNodeType

Object.defineProperty(TrieNode.prototype, 'value', {
  get: function () {
    return this.getValue()
  },
  set: function (v) {
    this.setValue(v)
  }
})

Object.defineProperty(TrieNode.prototype, 'key', {
  get: function () {
    return this.getKey()
  },
  set: function (k) {
    this.setKey(k)
  }
})

// parses a raw node
TrieNode.prototype.parseNode = function (rawNode) {
  this.raw = rawNode
  this.type = getNodeType(rawNode)
}

// sets the value of the node
TrieNode.prototype.setValue = function (key, value) {
  if (this.type !== 'branch') {
    this.raw[1] = key
  } else {
    if (arguments.length === 1) {
      value = key
      key = 16
    }
    this.raw[key] = value
  }
}

TrieNode.prototype.getValue = function (key) {
  if (this.type === 'branch') {
    if (arguments.length === 0) {
      key = 16
    }

    var val = this.raw[key]
    if (val !== null && val !== undefined && val.length !== 0) {
      return val
    }
  } else {
    return this.raw[1]
  }
}

TrieNode.prototype.setKey = function (key) {
  if (this.type !== 'branch') {
    if (Buffer.isBuffer(key)) {
      key = stringToNibbles(key)
    } else {
      key = key.slice(0) // copy the key
    }

    key = addHexPrefix(key, this.type === 'leaf')
    this.raw[0] = nibblesToBuffer(key)
  }
}

// returns the key as a nibble
TrieNode.prototype.getKey = function () {
  if (this.type !== 'branch') {
    var key = this.raw[0]
    key = removeHexPrefix(stringToNibbles(key))
    return (key)
  }
}

TrieNode.prototype.serialize = function () {
  return rlp.encode(this.raw)
}

TrieNode.prototype.hash = function () {
  return ethUtil.sha3(this.serialize())
}

TrieNode.prototype.toString = function () {
  var out = this.type
  out += ': ['
  this.raw.forEach(function (el) {
    if (Buffer.isBuffer(el)) {
      out += el.toString('hex') + ', '
    } else if (el) {
      out += 'object, '
    } else {
      out += 'empty, '
    }
  })
  out = out.slice(0, -2)
  out += ']'
  return out
}

TrieNode.prototype.getChildren = function () {
  var children = []
  switch (this.type) {
    case 'leaf':
      // no children
      break
    case 'extention':
      // one child
      children.push([this.key, this.getValue()])
      break
    case 'branch':
      for (var index = 0, end = 16; index < end; index++) {
        var value = this.getValue(index)
        if (value) {
          children.push([
            [index], value
          ])
        }
      }
      break
  }
  return children
}

/**
 * @param {Array} dataArr
 * @returns {Buffer} - returns buffer of encoded data
 * hexPrefix
 **/
function addHexPrefix (key, terminator) {
  // odd
  if (key.length % 2) {
    key.unshift(1)
  } else {
    // even
    key.unshift(0)
    key.unshift(0)
  }

  if (terminator) {
    key[0] += 2
  }

  return key
}

function removeHexPrefix (val) {
  if (val[0] % 2) {
    val = val.slice(1)
  } else {
    val = val.slice(2)
  }

  return val
}

/*
 * Detrimines if a key has Arnold Schwarzenegger in it.
 * @method isTerminator
 * @param {Array} key - an hexprefixed array of nibbles
 */
function isTerminator (key) {
  return key[0] > 1
}

/*
 * Converts a string OR a buffer to a nibble array
 * @method stringToNibbles
 * @param {Buffer| String} key
 */
function stringToNibbles (key) {
  var bkey = new Buffer(key)
  var nibbles = []

  for (var i = 0; i < bkey.length; i++) {
    var q = i * 2
    nibbles[q] = bkey[i] >> 4
    ++q
    nibbles[q] = bkey[i] % 16
  }
  return nibbles
}

/*
 * Converts a  nibble array into a buffer
 * @method nibblesToBuffer
 * @param arr
 */
function nibblesToBuffer (arr) {
  var buf = new Buffer(arr.length / 2)
  for (var i = 0; i < buf.length; i++) {
    var q = i * 2
    buf[i] = (arr[q] << 4) + arr[++q]
  }
  return buf
}

/*
 * Determines the node type
 * Returns the following
 * - leaf - if teh node is a leaf
 * - branch - if the node is a branch
 * - extention - if the node is an extention
 * - unknown - if somehting fucked up
 */
function getNodeType (node) {
  if (node.length === 17) {
    return 'branch'
  } else if (node.length === 2) {
    var key = stringToNibbles(node[0])
    if (isTerminator(key)) {
      return 'leaf'
    }

    return 'extention'
  }
}

function isRawNode (node) {
  return Array.isArray(node) && !Buffer.isBuffer(node)
}


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const async = __webpack_require__(2)
const inherits = __webpack_require__(1).inherits
const ethUtil = __webpack_require__(0)
const Subprovider = __webpack_require__(3)
const Stoplight = __webpack_require__(18)
const EventEmitter = __webpack_require__(14).EventEmitter

module.exports = FilterSubprovider

// handles the following RPC methods:
//   eth_newBlockFilter
//   eth_newPendingTransactionFilter
//   eth_newFilter
//   eth_getFilterChanges
//   eth_uninstallFilter
//   eth_getFilterLogs

inherits(FilterSubprovider, Subprovider)

function FilterSubprovider(opts) {
  opts = opts || {}
  const self = this
  self.filterIndex = 0
  self.filters = {}
  self.filterDestroyHandlers = {}
  self.asyncBlockHandlers = {}
  self.asyncPendingBlockHandlers = {}
  self._ready = new Stoplight()
  self._ready.setMaxListeners(opts.maxFilters || 25)
  self._ready.go()
  self.pendingBlockTimeout = opts.pendingBlockTimeout || 4000
  self.checkForPendingBlocksActive = false

  // we dont have engine immeditately
  setTimeout(function(){
    // asyncBlockHandlers require locking provider until updates are completed
    self.engine.on('block', function(block){
      // pause processing
      self._ready.stop()
      // update filters
      var updaters = valuesFor(self.asyncBlockHandlers)
      .map(function(fn){ return fn.bind(null, block) })
      async.parallel(updaters, function(err){
        if (err) console.error(err)
        // unpause processing
        self._ready.go()
      })
    })
  })

}

FilterSubprovider.prototype.handleRequest = function(payload, next, end){
  const self = this
  switch(payload.method){

    case 'eth_newBlockFilter':
      self.newBlockFilter(end)
      return

    case 'eth_newPendingTransactionFilter':
      self.newPendingTransactionFilter(end)
      self.checkForPendingBlocks()
      return

    case 'eth_newFilter':
      self.newLogFilter(payload.params[0], end)
      return

    case 'eth_getFilterChanges':
      self._ready.await(function(){
        self.getFilterChanges(payload.params[0], end)
      })
      return

    case 'eth_getFilterLogs':
      self._ready.await(function(){
        self.getFilterLogs(payload.params[0], end)
      })
      return

    case 'eth_uninstallFilter':
      self._ready.await(function(){
        self.uninstallFilter(payload.params[0], end)
      })
      return

    default:
      next()
      return
  }
}

FilterSubprovider.prototype.newBlockFilter = function(cb) {
  const self = this

  self._getBlockNumber(function(err, blockNumber){
    if (err) return cb(err)

    var filter = new BlockFilter({
      blockNumber: blockNumber,
    })

    var newBlockHandler = filter.update.bind(filter)
    self.engine.on('block', newBlockHandler)
    var destroyHandler = function(){
      self.engine.removeListener('block', newBlockHandler)
    }

    self.filterIndex++
    self.filters[self.filterIndex] = filter
    self.filterDestroyHandlers[self.filterIndex] = destroyHandler

    var hexFilterIndex = intToHex(self.filterIndex)
    cb(null, hexFilterIndex)
  })
}

FilterSubprovider.prototype.newLogFilter = function(opts, cb) {
  const self = this

  self._getBlockNumber(function(err, blockNumber){
    if (err) return cb(err)

    var filter = new LogFilter(opts)
    var newLogHandler = filter.update.bind(filter)
    var blockHandler = function(block, cb){
      self._logsForBlock(block, function(err, logs){
        if (err) return cb(err)
        newLogHandler(logs)
        cb()
      })
    }

    self.filterIndex++
    self.asyncBlockHandlers[self.filterIndex] = blockHandler
    self.filters[self.filterIndex] = filter

    var hexFilterIndex = intToHex(self.filterIndex)
    cb(null, hexFilterIndex)
  })
}

FilterSubprovider.prototype.newPendingTransactionFilter = function(cb) {
  const self = this

  var filter = new PendingTransactionFilter()
  var newTxHandler = filter.update.bind(filter)
  var blockHandler = function(block, cb){
    self._txHashesForBlock(block, function(err, txs){
      if (err) return cb(err)
      newTxHandler(txs)
      cb()
    })
  }

  self.filterIndex++
  self.asyncPendingBlockHandlers[self.filterIndex] = blockHandler
  self.filters[self.filterIndex] = filter

  var hexFilterIndex = intToHex(self.filterIndex)
  cb(null, hexFilterIndex)
}

FilterSubprovider.prototype.getFilterChanges = function(hexFilterId, cb) {
  const self = this

  var filterId = Number.parseInt(hexFilterId, 16)
  var filter = self.filters[filterId]
  if (!filter) console.warn('FilterSubprovider - no filter with that id:', hexFilterId)
  if (!filter) return cb(null, [])
  var results = filter.getChanges()
  filter.clearChanges()
  cb(null, results)
}

FilterSubprovider.prototype.getFilterLogs = function(hexFilterId, cb) {
  const self = this

  var filterId = Number.parseInt(hexFilterId, 16)
  var filter = self.filters[filterId]
  if (!filter) console.warn('FilterSubprovider - no filter with that id:', hexFilterId)
  if (!filter) return cb(null, [])
  if (filter.type === 'log') {
    self.emitPayload({
      method: 'eth_getLogs',
      params: [{
        fromBlock: filter.fromBlock,
        toBlock: filter.toBlock,
        address: filter.address,
        topics: filter.topics,
      }],
    }, function(err, res){
      if (err) return cb(err)
      cb(null, res.result)
    })
  } else {
    var results = filter.getAllResults()
    cb(null, results)
  }
}

FilterSubprovider.prototype.uninstallFilter = function(hexFilterId, cb) {
  const self = this

  var filterId = Number.parseInt(hexFilterId, 16)
  var filter = self.filters[filterId]
  if (!filter) {
    cb(null, false)
    return
  }

  self.filters[filterId].removeAllListeners()

  var destroyHandler = self.filterDestroyHandlers[filterId]
  delete self.filters[filterId]
  delete self.asyncBlockHandlers[filterId]
  delete self.asyncPendingBlockHandlers[filterId]
  delete self.filterDestroyHandlers[filterId]
  if (destroyHandler) destroyHandler()

  cb(null, true)
}

// private

// check for pending blocks
FilterSubprovider.prototype.checkForPendingBlocks = function(){
  const self = this
  if (self.checkForPendingBlocksActive) return
  var activePendingTxFilters = !!Object.keys(self.asyncPendingBlockHandlers).length
  if (activePendingTxFilters) {
    self.checkForPendingBlocksActive = true
    self.emitPayload({
      method: 'eth_getBlockByNumber',
      params: ['pending', true],
    }, function(err, res){
      if (err) {
        self.checkForPendingBlocksActive = false
        console.error(err)
        return
      }
      self.onNewPendingBlock(res.result, function(err){
        if (err) console.error(err)
        self.checkForPendingBlocksActive = false
        setTimeout(self.checkForPendingBlocks.bind(self), self.pendingBlockTimeout)
      })
    })
  }
}

FilterSubprovider.prototype.onNewPendingBlock = function(block, cb){
  const self = this
  // update filters
  var updaters = valuesFor(self.asyncPendingBlockHandlers)
  .map(function(fn){ return fn.bind(null, block) })
  async.parallel(updaters, cb)
}

FilterSubprovider.prototype._getBlockNumber = function(cb) {
  const self = this
  var blockNumber = bufferToNumberHex(self.engine.currentBlock.number)
  cb(null, blockNumber)
}

FilterSubprovider.prototype._logsForBlock = function(block, cb) {
  const self = this
  var blockNumber = bufferToNumberHex(block.number)
  self.emitPayload({
    method: 'eth_getLogs',
    params: [{
      fromBlock: blockNumber,
      toBlock: blockNumber,
    }],
  }, function(err, response){
    if (err) return cb(err)
    if (response.error) return cb(response.error)
    cb(null, response.result)
  })

}

FilterSubprovider.prototype._txHashesForBlock = function(block, cb) {
  const self = this
  var txs = block.transactions
  // short circuit if empty
  if (txs.length === 0) return cb(null, [])
  // txs are already hashes
  if ('string' === typeof txs[0]) {
    cb(null, txs)
  // txs are obj, need to map to hashes
  } else {
    var results = txs.map((tx) => tx.hash)
    cb(null, results)
  }
}

//
// BlockFilter
//

inherits(BlockFilter, EventEmitter)

function BlockFilter(opts) {
  // console.log('BlockFilter - new')
  const self = this
  EventEmitter.apply(self)
  self.type = 'block'
  self.engine = opts.engine
  self.blockNumber = opts.blockNumber
  self.updates = []
}

BlockFilter.prototype.update = function(block){
  // console.log('BlockFilter - update')
  const self = this
  var blockHash = bufferToHex(block.hash)
  self.updates.push(blockHash)
  self.emit('data', block)
}

BlockFilter.prototype.getChanges = function(){
  const self = this
  var results = self.updates
  // console.log('BlockFilter - getChanges:', results.length)
  return results
}

BlockFilter.prototype.clearChanges = function(){
  // console.log('BlockFilter - clearChanges')
  const self = this
  self.updates = []
}

//
// LogFilter
//

inherits(LogFilter, EventEmitter)

function LogFilter(opts) {
  // console.log('LogFilter - new')
  const self = this
  EventEmitter.apply(self)
  self.type = 'log'
  self.fromBlock = (opts.fromBlock !== undefined) ? opts.fromBlock : 'latest'
  self.toBlock = (opts.toBlock !== undefined) ? opts.toBlock : 'latest'
  self.address = opts.address ? normalizeHex(opts.address) : opts.address
  self.topics = opts.topics || []
  self.updates = []
  self.allResults = []
}

LogFilter.prototype.validateLog = function(log){
  // console.log('LogFilter - validateLog:', log)
  const self = this

  // check if block number in bounds:
  // console.log('LogFilter - validateLog - blockNumber', self.fromBlock, self.toBlock)
  if (blockTagIsNumber(self.fromBlock) && hexToInt(self.fromBlock) >= hexToInt(log.blockNumber)) return false
  if (blockTagIsNumber(self.toBlock) && hexToInt(self.toBlock) <= hexToInt(log.blockNumber)) return false

  // address is correct:
  // console.log('LogFilter - validateLog - address', self.address)
  if (self.address && self.address !== log.address) return false

  // topics match:
  // topics are position-dependant
  // topics can be nested to represent `or` [[a || b], c]
  // topics can be null, representing a wild card for that position
  // console.log('LogFilter - validateLog - topics', log.topics)
  // console.log('LogFilter - validateLog - against topics', self.topics)
  var topicsMatch = self.topics.reduce(function(previousMatched, topicPattern, index){
    // abort in progress
    if (!previousMatched) return false
    // wild card
    if (!topicPattern) return true
    // pattern is longer than actual topics
    var logTopic = log.topics[index]
    if (!logTopic) return false
    // check each possible matching topic
    var subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [topicPattern]
    var topicDoesMatch = subtopicsToMatch.filter(function(subTopic){
      return logTopic === subTopic
    }).length > 0
    return topicDoesMatch
  }, true)

  // console.log('LogFilter - validateLog - '+(topicsMatch ? 'approved!' : 'denied!')+' ==============')
  return topicsMatch
}

LogFilter.prototype.update = function(logs){
  // console.log('LogFilter - update')
  const self = this
  // validate filter match
  var validLogs = []
  logs.forEach(function(log) {
    var validated = self.validateLog(log)
    if (!validated) return
    // add to results
    validLogs.push(log)
    self.updates.push(log)
    self.allResults.push(log)
  })
  if (validLogs.length > 0) {
    self.emit('data', validLogs)
  }
}

LogFilter.prototype.getChanges = function(){
  // console.log('LogFilter - getChanges')
  const self = this
  var results = self.updates
  return results
}

LogFilter.prototype.getAllResults = function(){
  // console.log('LogFilter - getAllResults')
  const self = this
  var results = self.allResults
  return results
}

LogFilter.prototype.clearChanges = function(){
  // console.log('LogFilter - clearChanges')
  const self = this
  self.updates = []
}

//
// PendingTxFilter
//

inherits(PendingTransactionFilter, EventEmitter)

function PendingTransactionFilter(){
  // console.log('PendingTransactionFilter - new')
  const self = this
  EventEmitter.apply(self)
  self.type = 'pendingTx'
  self.updates = []
  self.allResults = []
}

PendingTransactionFilter.prototype.validateUnique = function(tx){
  const self = this
  return self.allResults.indexOf(tx) === -1
}

PendingTransactionFilter.prototype.update = function(txs){
  // console.log('PendingTransactionFilter - update')
  const self = this
  var validTxs = []
  txs.forEach(function (tx) {
    // validate filter match
    var validated = self.validateUnique(tx)
    if (!validated) return
    // add to results
    validTxs.push(tx)
    self.updates.push(tx)
    self.allResults.push(tx)
  })
  if (validTxs.length > 0) {
    self.emit('data', validTxs)
  }
}

PendingTransactionFilter.prototype.getChanges = function(){
  // console.log('PendingTransactionFilter - getChanges')
  const self = this
  var results = self.updates
  return results
}

PendingTransactionFilter.prototype.getAllResults = function(){
  // console.log('PendingTransactionFilter - getAllResults')
  const self = this
  var results = self.allResults
  return results
}

PendingTransactionFilter.prototype.clearChanges = function(){
  // console.log('PendingTransactionFilter - clearChanges')
  const self = this
  self.updates = []
}

// util

function normalizeHex(hexString) {
  return hexString.slice(0, 2) === '0x' ? hexString : '0x'+hexString
}

function intToHex(value) {
  return ethUtil.intToHex(value)
}

function hexToInt(hexString) {
  return Number(hexString)
}

function bufferToHex(buffer) {
  return '0x'+buffer.toString('hex')
}

function bufferToNumberHex(buffer) {
  return stripLeadingZero(buffer.toString('hex'))
}

function stripLeadingZero(hexNum) {
  let stripped = ethUtil.stripHexPrefix(hexNum)
  while (stripped[0] === '0') {
    stripped = stripped.substr(1)
  }
  return `0x${stripped}`
}

function blockTagIsNumber(blockTag){
  return blockTag && ['earliest', 'latest', 'pending'].indexOf(blockTag) === -1
}

function valuesFor(obj){
  return Object.keys(obj).map(function(key){ return obj[key] })
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("rustbn.js");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-block");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = once;
function once(fn) {
    return function () {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}
module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(51),
    getRawTag = __webpack_require__(134),
    objectToString = __webpack_require__(135);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("json-rpc-error");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("yargs");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("ioredis");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

const CheckpointTrie = __webpack_require__(84)
const secureInterface = __webpack_require__(90)
const inherits = __webpack_require__(1).inherits

module.exports = SecureTrie
inherits(SecureTrie, CheckpointTrie)

/**
 * You can create a secure Trie where the keys are automatically hashed using **SHA3** by using `require('merkle-patricia-tree/secure')`. It has the same methods and constuctor as `Trie`
 * @class SecureTrie
 * @extends Trie
 */
function SecureTrie () {
  CheckpointTrie.apply(this, arguments)
  secureInterface(this)
}


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("levelup");

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("memdown");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("rlp");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("semaphore");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("readable-stream");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

const inherits = __webpack_require__(1).inherits
const ethUtil = __webpack_require__(0)
const BN = ethUtil.BN
const clone = __webpack_require__(94)
const cacheUtils = __webpack_require__(17)
const Stoplight = __webpack_require__(18)
const Subprovider = __webpack_require__(3)

module.exports = BlockCacheProvider

inherits(BlockCacheProvider, Subprovider)

function BlockCacheProvider(opts) {
  const self = this
  opts = opts || {}
  // set initialization blocker
  self._ready = new Stoplight()
  self.strategies = {
    perma: new ConditionalPermaCacheStrategy({
      eth_getTransactionByHash: containsBlockhash,
      eth_getTransactionReceipt: containsBlockhash,
    }),
    block: new BlockCacheStrategy(self),
    fork: new BlockCacheStrategy(self),
  }
}

// setup a block listener on 'setEngine'
BlockCacheProvider.prototype.setEngine = function(engine) {
  const self = this
  self.engine = engine
  // unblock initialization after first block
  engine.once('block', function(block) {
    self.currentBlock = block
    self._ready.go()
    // from now on, empty old cache every block
    engine.on('block', clearOldCache)
  })

  function clearOldCache(newBlock) {
    var previousBlock = self.currentBlock
    self.currentBlock = newBlock
    if (!previousBlock) return
    self.strategies.block.cacheRollOff(previousBlock)
    self.strategies.fork.cacheRollOff(previousBlock)
  }
}

BlockCacheProvider.prototype.handleRequest = function(payload, next, end){
  const self = this

  // skip cache if told to do so
  if (payload.skipCache) {
    // console.log('CACHE SKIP - skip cache if told to do so')
    return next()
  }

  // Ignore block polling requests.
  if (payload.method === 'eth_getBlockByNumber' && payload.params[0] === 'latest') {
    // console.log('CACHE SKIP - Ignore block polling requests.')
    return next()
  }

  // wait for first block
  self._ready.await(function(){
    // actually handle the request
    self._handleRequest(payload, next, end)
  })
}

BlockCacheProvider.prototype._handleRequest = function(payload, next, end){
  const self = this

  var type = cacheUtils.cacheTypeForPayload(payload)
  var strategy = this.strategies[type]

  // If there's no strategy in place, pass it down the chain.
  if (!strategy) {
    return next()
  }

  // If the strategy can't cache this request, ignore it.
  if (!strategy.canCache(payload)) {
    return next()
  }

  var blockTag = cacheUtils.blockTagForPayload(payload)
  if (!blockTag) blockTag = 'latest'
  var requestedBlockNumber

  if (blockTag === 'earliest') {
    requestedBlockNumber = '0x00'
  } else if (blockTag === 'latest') {
    requestedBlockNumber = ethUtil.bufferToHex(self.currentBlock.number)
  } else {
    // We have a hex number
    requestedBlockNumber = blockTag
  }

  //console.log('REQUEST at block 0x' + requestedBlockNumber.toString('hex'))

  // end on a hit, continue on a miss
  strategy.hitCheck(payload, requestedBlockNumber, end, function() {
    // miss fallthrough to provider chain, caching the result on the way back up.
    next(function(err, result, cb) {
      // err is already handled by engine
      if (err) return cb()
      strategy.cacheResult(payload, result, requestedBlockNumber, cb)
    })
  })
}

//
// Cache Strategies
//

function PermaCacheStrategy() {
  var self = this
  self.cache = {}
  // clear cache every ten minutes
  var timeout = setInterval(function(){
    self.cache = {}
  }, 10 * 60 * 1e3)
  // do not require the Node.js event loop to remain active
  if (timeout.unref) timeout.unref()
}

PermaCacheStrategy.prototype.hitCheck = function(payload, requestedBlockNumber, hit, miss) {
  var identifier = cacheUtils.cacheIdentifierForPayload(payload)
  var cached = this.cache[identifier]

  if (!cached) return miss()

  // If the block number we're requesting at is greater than or
  // equal to the block where we cached a previous response,
  // the cache is valid. If it's from earlier than the cache,
  // send it back down to the client (where it will be recached.)
  var cacheIsEarlyEnough = compareHex(requestedBlockNumber, cached.blockNumber) >= 0
  if (cacheIsEarlyEnough) {
    var clonedValue = clone(cached.result)
    return hit(null, clonedValue)
  } else {
    return miss()
  }
}

PermaCacheStrategy.prototype.cacheResult = function(payload, result, requestedBlockNumber, callback) {
  var identifier = cacheUtils.cacheIdentifierForPayload(payload)

  if (result) {
    var clonedValue = clone(result)
    this.cache[identifier] = {
      blockNumber: requestedBlockNumber,
      result: clonedValue,
    }
  }

  callback()
}

PermaCacheStrategy.prototype.canCache = function(payload) {
  return cacheUtils.canCache(payload)
}

//
// ConditionalPermaCacheStrategy
//

function ConditionalPermaCacheStrategy(conditionals) {
  this.strategy = new PermaCacheStrategy()
  this.conditionals = conditionals
}

ConditionalPermaCacheStrategy.prototype.hitCheck = function(payload, requestedBlockNumber, hit, miss) {
  return this.strategy.hitCheck(payload, requestedBlockNumber, hit, miss)
}

ConditionalPermaCacheStrategy.prototype.cacheResult = function(payload, result, requestedBlockNumber, callback) {
  var conditional = this.conditionals[payload.method]

  if (conditional) {
    if (conditional(result)) {
      this.strategy.cacheResult(payload, result, requestedBlockNumber, callback)
    } else {
      callback()
    }
  } else {
    // Cache all requests that don't have a conditional
    this.strategy.cacheResult(payload, result, requestedBlockNumber, callback)
  }
}

ConditionalPermaCacheStrategy.prototype.canCache = function(payload) {
  return this.strategy.canCache(payload)
}

//
// BlockCacheStrategy
//

function BlockCacheStrategy() {
  this.cache = {}
}

BlockCacheStrategy.prototype.getBlockCacheForPayload = function(payload, blockNumber) {
  var blockTag = cacheUtils.blockTagForPayload(payload)
  var blockCache = this.cache[blockNumber]
  // create new cache if necesary
  if (!blockCache) blockCache = this.cache[blockNumber] = {}

  return blockCache
}

BlockCacheStrategy.prototype.hitCheck = function(payload, requestedBlockNumber, hit, miss) {
  var blockCache = this.getBlockCacheForPayload(payload, requestedBlockNumber)

  if (!blockCache) {
    return miss()
  }

  var identifier = cacheUtils.cacheIdentifierForPayload(payload)
  var cached = blockCache[identifier]

  if (cached) {
    return hit(null, cached)
  } else {
    return miss()
  }
}

BlockCacheStrategy.prototype.cacheResult = function(payload, result, requestedBlockNumber, callback) {
  if (result) {
    var blockCache = this.getBlockCacheForPayload(payload, requestedBlockNumber)
    var identifier = cacheUtils.cacheIdentifierForPayload(payload)
    blockCache[identifier] = result
  }
  callback()
}

BlockCacheStrategy.prototype.canCache = function(payload) {
  if (!cacheUtils.canCache(payload)) {
    return false
  }

  var blockTag = cacheUtils.blockTagForPayload(payload)

  return (blockTag !== 'pending')
}

// naively removes older block caches
BlockCacheStrategy.prototype.cacheRollOff = function(previousBlock){
  const self = this
  var previousHex = ethUtil.bufferToHex(previousBlock.number)
  delete self.cache[previousHex]
}


// util

function compareHex(hexA, hexB){
  var numA = parseInt(hexA, 16)
  var numB = parseInt(hexB, 16)
  return numA === numB ? 0 : (numA > numB ? 1 : -1 )
}

function hexToBN(hex){
  return new BN(ethUtil.toBuffer(hex))
}

function containsBlockhash(result) {
  if (!result) return false
  if (!result.blockHash) return false
  const hasNonZeroHash = hexToBN(result.blockHash).gt(new BN(0))
  return hasNonZeroHash
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

const inherits = __webpack_require__(1).inherits
const Subprovider = __webpack_require__(3)

module.exports = FixtureProvider

inherits(FixtureProvider, Subprovider)

function FixtureProvider(staticResponses){
  const self = this
  staticResponses = staticResponses || {}
  self.staticResponses = staticResponses
}

FixtureProvider.prototype.handleRequest = function(payload, next, end){
  const self = this
  var staticResponse = self.staticResponses[payload.method]
  // async function
  if ('function' === typeof staticResponse) {
    staticResponse(payload, next, end)
  // static response - null is valid response
  } else if (staticResponse !== undefined) {
    // return result asynchronously
    setTimeout(() => end(null, staticResponse))
  // no prepared response - skip
  } else {
    next()
  }
}


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = asyncify;

var _isObject = __webpack_require__(43);

var _isObject2 = _interopRequireDefault(_isObject);

var _initialParams = __webpack_require__(99);

var _initialParams2 = _interopRequireDefault(_initialParams);

var _setImmediate = __webpack_require__(100);

var _setImmediate2 = _interopRequireDefault(_setImmediate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Take a sync function and make it async, passing its return value to a
 * callback. This is useful for plugging sync functions into a waterfall,
 * series, or other async functions. Any arguments passed to the generated
 * function will be passed to the wrapped function (except for the final
 * callback argument). Errors thrown will be passed to the callback.
 *
 * If the function passed to `asyncify` returns a Promise, that promises's
 * resolved/rejected state will be used to call the callback, rather than simply
 * the synchronous return value.
 *
 * This also means you can asyncify ES2017 `async` functions.
 *
 * @name asyncify
 * @static
 * @memberOf module:Utils
 * @method
 * @alias wrapSync
 * @category Util
 * @param {Function} func - The synchronous function, or Promise-returning
 * function to convert to an {@link AsyncFunction}.
 * @returns {AsyncFunction} An asynchronous wrapper of the `func`. To be
 * invoked with `(args..., callback)`.
 * @example
 *
 * // passing a regular synchronous function
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(JSON.parse),
 *     function (data, next) {
 *         // data is the result of parsing the text.
 *         // If there was a parsing error, it would have been caught.
 *     }
 * ], callback);
 *
 * // passing a function returning a promise
 * async.waterfall([
 *     async.apply(fs.readFile, filename, "utf8"),
 *     async.asyncify(function (contents) {
 *         return db.model.create(contents);
 *     }),
 *     function (model, next) {
 *         // `model` is the instantiated model object.
 *         // If there was an error, this function would be skipped.
 *     }
 * ], callback);
 *
 * // es2017 example, though `asyncify` is not needed if your JS environment
 * // supports async functions out of the box
 * var q = async.queue(async.asyncify(async function(file) {
 *     var intermediateStep = await processFile(file);
 *     return await somePromise(intermediateStep)
 * }));
 *
 * q.push(files);
 */
function asyncify(func) {
    return (0, _initialParams2.default)(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if ((0, _isObject2.default)(result) && typeof result.then === 'function') {
            result.then(function (value) {
                invokeCallback(callback, null, value);
            }, function (err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

function invokeCallback(callback, error, value) {
    try {
        callback(error, value);
    } catch (e) {
        (0, _setImmediate2.default)(rethrow, e);
    }
}

function rethrow(error) {
    throw error;
}
module.exports = exports['default'];

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("merkle-patricia-tree");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var assert = __webpack_require__(7);
var utils = __webpack_require__(0);
var byteSize = 256;

/**
 * Represents a Bloom
 * @constructor
 * @param {Buffer} bitvector
 */
var Bloom = module.exports = function (bitvector) {
  if (!bitvector) {
    this.bitvector = utils.zeros(byteSize);
  } else {
    assert(bitvector.length === byteSize, 'bitvectors must be 2048 bits long');
    this.bitvector = bitvector;
  }
};

/**
 * adds an element to a bit vector of a 64 byte bloom filter
 * @method add
 * @param {Buffer} element
 */
Bloom.prototype.add = function (e) {
  e = utils.sha3(e);
  var mask = 2047; // binary 11111111111

  for (var i = 0; i < 3; i++) {
    var first2bytes = e.readUInt16BE(i * 2);
    var loc = mask & first2bytes;
    var byteLoc = loc >> 3;
    var bitLoc = 1 << loc % 8;
    this.bitvector[byteSize - byteLoc - 1] |= bitLoc;
  }
};

/**
 * checks if an element is in the blooom
 * @method check
 * @param {Buffer} element
 */
Bloom.prototype.check = function (e) {
  e = utils.sha3(e);
  var mask = 511; // binary 111111111
  var match = true;

  for (var i = 0; i < 3 && match; i++) {
    var first2bytes = e.readUInt16BE(i * 2);
    var loc = mask & first2bytes;
    var byteLoc = loc >> 3;
    var bitLoc = 1 << loc % 8;
    match = this.bitvector[byteSize - byteLoc - 1] & bitLoc;
  }

  return Boolean(match);
};

/**
 * checks if multple topics are in a bloom
 * @method check
 * @param {Buffer} element
 */
Bloom.prototype.multiCheck = function (topics) {
  var self = this;
  return topics.every(function (t) {
    if (!Buffer.isBuffer(t)) {
      t = Buffer.from(t, 'hex');
    }
    return self.check(t);
  });
};

/**
 * bitwise or blooms together
 * @method or
 * @param {Bloom} bloom
 */
Bloom.prototype.or = function (bloom) {
  if (bloom) {
    for (var i = 0; i <= byteSize; i++) {
      this.bitvector[i] = this.bitvector[i] | bloom.bitvector[i];
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

const ethUtil = __webpack_require__(0)
const assert = __webpack_require__(131)

module.exports = {
  intToQuantityHex: intToQuantityHex,
  quantityHexToInt: quantityHexToInt,
}

/*
 * As per https://github.com/ethereum/wiki/wiki/JSON-RPC#hex-value-encoding
 * Quanities should be represented by the most compact hex representation possible
 * This means that no leading zeroes are allowed. There helpers make it easy
 * to convert to and from integers and their compact hex representation
 */

function intToQuantityHex(n){
    assert(typeof n === 'number' && n === Math.floor(n), 'intToQuantityHex arg must be an integer')
    var nHex = ethUtil.toBuffer(n).toString('hex')
    if (nHex[0] === '0') {
        nHex = nHex.substring(1)
    }
    return ethUtil.addHexPrefix(nHex)
}

function quantityHexToInt(prefixedQuantityHex) {
    assert(typeof prefixedQuantityHex === 'string', 'arg to quantityHexToInt must be a string')
    var quantityHex = ethUtil.stripHexPrefix(prefixedQuantityHex)
    var isEven = quantityHex.length % 2 === 0
    if (!isEven) {
        quantityHex = '0' + quantityHex
    }
    var buf = new Buffer(quantityHex, 'hex')
    return ethUtil.bufferToInt(buf)
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Emulate 'eth_accounts' / 'eth_sendTransaction' using 'eth_sendRawTransaction'
 *
 * The two callbacks a user needs to implement are:
 * - getAccounts() -- array of addresses supported
 * - signTransaction(tx) -- sign a raw transaction object
 */

const waterfall = __webpack_require__(48)
const parallel = __webpack_require__(132)
const inherits = __webpack_require__(1).inherits
const ethUtil = __webpack_require__(0)
const sigUtil = __webpack_require__(156)
const extend = __webpack_require__(19)
const Semaphore = __webpack_require__(38)
const Subprovider = __webpack_require__(3)
const estimateGas = __webpack_require__(157)
const hexRegex = /^[0-9A-Fa-f]+$/g

module.exports = HookedWalletSubprovider

// handles the following RPC methods:
//   eth_coinbase
//   eth_accounts
//   eth_sendTransaction
//   eth_sign
//   eth_signTypedData
//   personal_sign
//   personal_ecRecover
//   parity_postTransaction
//   parity_checkRequest
//   parity_defaultAccount

//
// Tx Signature Flow
//
// handleRequest: eth_sendTransaction
//   validateTransaction (basic validity check)
//     validateSender (checks that sender is in accounts)
//   processTransaction (sign tx and submit to network)
//     approveTransaction (UI approval hook)
//     checkApproval
//     finalizeAndSubmitTx (tx signing)
//       nonceLock.take (bottle neck to ensure atomic nonce)
//         fillInTxExtras (set fallback gasPrice, nonce, etc)
//         signTransaction (perform the signature)
//         publishTransaction (publish signed tx to network)
//


inherits(HookedWalletSubprovider, Subprovider)

function HookedWalletSubprovider(opts){
  const self = this
  // control flow
  self.nonceLock = Semaphore(1)

  // data lookup
  if (opts.getAccounts) self.getAccounts = opts.getAccounts
  // high level override
  if (opts.processTransaction) self.processTransaction = opts.processTransaction
  if (opts.processMessage) self.processMessage = opts.processMessage
  if (opts.processPersonalMessage) self.processPersonalMessage = opts.processPersonalMessage
  if (opts.processTypedMessage) self.processTypedMessage = opts.processTypedMessage
  // approval hooks
  self.approveTransaction = opts.approveTransaction || self.autoApprove
  self.approveMessage = opts.approveMessage || self.autoApprove
  self.approvePersonalMessage = opts.approvePersonalMessage || self.autoApprove
  self.approveTypedMessage = opts.approveTypedMessage || self.autoApprove
  // actually perform the signature
  if (opts.signTransaction) self.signTransaction = opts.signTransaction  || mustProvideInConstructor('signTransaction')
  if (opts.signMessage) self.signMessage = opts.signMessage  || mustProvideInConstructor('signMessage')
  if (opts.signPersonalMessage) self.signPersonalMessage = opts.signPersonalMessage  || mustProvideInConstructor('signPersonalMessage')
  if (opts.signTypedMessage) self.signTypedMessage = opts.signTypedMessage  || mustProvideInConstructor('signTypedMessage')
  if (opts.recoverPersonalSignature) self.recoverPersonalSignature = opts.recoverPersonalSignature
  // publish to network
  if (opts.publishTransaction) self.publishTransaction = opts.publishTransaction
}

HookedWalletSubprovider.prototype.handleRequest = function(payload, next, end){
  const self = this
  self._parityRequests = {}
  self._parityRequestCount = 0

  // switch statement is not block scoped
  // sp we cant repeat var declarations
  let txParams, msgParams, extraParams
  let message, address

  switch(payload.method) {

    case 'eth_coinbase':
      // process normally
      self.getAccounts(function(err, accounts){
        if (err) return end(err)
        let result = accounts[0] || null
        end(null, result)
      })
      return

    case 'eth_accounts':
      // process normally
      self.getAccounts(function(err, accounts){
        if (err) return end(err)
        end(null, accounts)
      })
      return

    case 'eth_sendTransaction':
      txParams = payload.params[0]
      waterfall([
        (cb) => self.validateTransaction(txParams, cb),
        (cb) => self.processTransaction(txParams, cb),
      ], end)
      return

    case 'eth_signTransaction':
      txParams = payload.params[0]
      waterfall([
        (cb) => self.validateTransaction(txParams, cb),
        (cb) => self.processSignTransaction(txParams, cb),
      ], end)
      return

    case 'eth_sign':
      // process normally
      address = payload.params[0]
      message = payload.params[1]
      // non-standard "extraParams" to be appended to our "msgParams" obj
      // good place for metadata
      extraParams = payload.params[2] || {}
      msgParams = extend(extraParams, {
        from: address,
        data: message,
      })
      waterfall([
        (cb) => self.validateMessage(msgParams, cb),
        (cb) => self.processMessage(msgParams, cb),
      ], end)
      return

    case 'personal_sign':
      // process normally
      const first = payload.params[0]
      const second = payload.params[1]

      // We initially incorrectly ordered these parameters.
      // To gracefully respect users who adopted this API early,
      // we are currently gracefully recovering from the wrong param order
      // when it is clearly identifiable.
      //
      // That means when the first param is definitely an address,
      // and the second param is definitely not, but is hex.
      if (resemblesData(second) && resemblesAddress(first)) {
        let warning = `The eth_personalSign method requires params ordered `
        warning += `[message, address]. This was previously handled incorrectly, `
        warning += `and has been corrected automatically. `
        warning += `Please switch this param order for smooth behavior in the future.`
        console.warn(warning)

        address = payload.params[0]
        message = payload.params[1]
      } else {
        message = payload.params[0]
        address = payload.params[1]
      }

      // non-standard "extraParams" to be appended to our "msgParams" obj
      // good place for metadata
      extraParams = payload.params[2] || {}
      msgParams = extend(extraParams, {
        from: address,
        data: message,
      })
      waterfall([
        (cb) => self.validatePersonalMessage(msgParams, cb),
        (cb) => self.processPersonalMessage(msgParams, cb),
      ], end)
      return

    case 'personal_ecRecover':
      message = payload.params[0]
      let signature = payload.params[1]
      // non-standard "extraParams" to be appended to our "msgParams" obj
      // good place for metadata
      extraParams = payload.params[2] || {}
      msgParams = extend(extraParams, {
        sig: signature,
        data: message,
      })
      self.recoverPersonalSignature(msgParams, end)
      return

    case 'eth_signTypedData':
      // process normally
      message = payload.params[0]
      address = payload.params[1]
      extraParams = payload.params[2] || {}
      msgParams = extend(extraParams, {
        from: address,
        data: message,
      })
      waterfall([
        (cb) => self.validateTypedMessage(msgParams, cb),
        (cb) => self.processTypedMessage(msgParams, cb),
      ], end)
      return

    case 'parity_postTransaction':
      txParams = payload.params[0]
      self.parityPostTransaction(txParams, end)
      return

    case 'parity_postSign':
      address = payload.params[0]
      message = payload.params[1]
      self.parityPostSign(address, message, end)
      return

    case 'parity_checkRequest':
      const requestId = payload.params[0]
      self.parityCheckRequest(requestId, end)
      return

    case 'parity_defaultAccount':
      self.getAccounts(function(err, accounts){
        if (err) return end(err)
        const account = accounts[0] || null
        end(null, account)
      })
      return

    default:
      next()
      return

  }
}

//
// data lookup
//

HookedWalletSubprovider.prototype.getAccounts = function(cb) {
  cb(null, [])
}


//
// "process" high level flow
//

HookedWalletSubprovider.prototype.processTransaction = function(txParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveTransaction(txParams, cb),
    (didApprove, cb) => self.checkApproval('transaction', didApprove, cb),
    (cb) => self.finalizeAndSubmitTx(txParams, cb),
  ], cb)
}


HookedWalletSubprovider.prototype.processSignTransaction = function(txParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveTransaction(txParams, cb),
    (didApprove, cb) => self.checkApproval('transaction', didApprove, cb),
    (cb) => self.finalizeTx(txParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('message', didApprove, cb),
    (cb) => self.signMessage(msgParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processPersonalMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approvePersonalMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('message', didApprove, cb),
    (cb) => self.signPersonalMessage(msgParams, cb),
  ], cb)
}

HookedWalletSubprovider.prototype.processTypedMessage = function(msgParams, cb) {
  const self = this
  waterfall([
    (cb) => self.approveTypedMessage(msgParams, cb),
    (didApprove, cb) => self.checkApproval('message', didApprove, cb),
    (cb) => self.signTypedMessage(msgParams, cb),
  ], cb)
}

//
// approval
//

HookedWalletSubprovider.prototype.autoApprove = function(txParams, cb) {
  cb(null, true)
}

HookedWalletSubprovider.prototype.checkApproval = function(type, didApprove, cb) {
  cb( didApprove ? null : new Error('User denied '+type+' signature.') )
}

//
// parity
//

HookedWalletSubprovider.prototype.parityPostTransaction = function(txParams, cb) {
  const self = this

  // get next id
  const count = self._parityRequestCount
  const reqId = `0x${count.toString(16)}`
  self._parityRequestCount++

  self.emitPayload({
    method: 'eth_sendTransaction',
    params: [txParams],
  }, function(error, res){
    if (error) {
      self._parityRequests[reqId] = { error }
      return
    }
    const txHash = res.result
    self._parityRequests[reqId] = txHash
  })

  cb(null, reqId)
}


HookedWalletSubprovider.prototype.parityPostSign = function(address, message, cb) {
  const self = this

  // get next id
  const count = self._parityRequestCount
  const reqId = `0x${count.toString(16)}`
  self._parityRequestCount++

  self.emitPayload({
    method: 'eth_sign',
    params: [address, message],
  }, function(error, res){
    if (error) {
      self._parityRequests[reqId] = { error }
      return
    }
    const result = res.result
    self._parityRequests[reqId] = result
  })

  cb(null, reqId)
}

HookedWalletSubprovider.prototype.parityCheckRequest = function(reqId, cb) {
  const self = this
  const result = self._parityRequests[reqId] || null
  // tx not handled yet
  if (!result) return cb(null, null)
  // tx was rejected (or other error)
  if (result.error) return cb(result.error)
  // tx sent
  cb(null, result)
}

//
// signature and recovery
//

HookedWalletSubprovider.prototype.recoverPersonalSignature = function(msgParams, cb) {
  let senderHex
  try {
    senderHex = sigUtil.recoverPersonalSignature(msgParams)
  } catch (err) {
    return cb(err)
  }
  cb(null, senderHex)
}

//
// validation
//

HookedWalletSubprovider.prototype.validateTransaction = function(txParams, cb){
  const self = this
  // shortcut: undefined sender is invalid
  if (txParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign transaction.`))
  self.validateSender(txParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign transaction for this address: "${txParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateMessage = function(msgParams, cb){
  const self = this
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign message.`))
  self.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validatePersonalMessage = function(msgParams, cb){
  const self = this
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign personal message.`))
  if (msgParams.data === undefined) return cb(new Error(`Undefined message - message required to sign personal message.`))
  if (!isValidHex(msgParams.data)) return cb(new Error(`HookedWalletSubprovider - validateMessage - message was not encoded as hex.`))
  self.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateTypedMessage = function(msgParams, cb){
  if (msgParams.from === undefined) return cb(new Error(`Undefined address - from address required to sign typed data.`))
  if (msgParams.data === undefined) return cb(new Error(`Undefined data - message required to sign typed data.`))
  this.validateSender(msgParams.from, function(err, senderIsValid){
    if (err) return cb(err)
    if (!senderIsValid) return cb(new Error(`Unknown address - unable to sign message for this address: "${msgParams.from}"`))
    cb()
  })
}

HookedWalletSubprovider.prototype.validateSender = function(senderAddress, cb){
  const self = this
  // shortcut: undefined sender is invalid
  if (!senderAddress) return cb(null, false)
  self.getAccounts(function(err, accounts){
    if (err) return cb(err)
    const senderIsValid = (accounts.map(toLowerCase).indexOf(senderAddress.toLowerCase()) !== -1)
    cb(null, senderIsValid)
  })
}

//
// tx helpers
//

HookedWalletSubprovider.prototype.finalizeAndSubmitTx = function(txParams, cb) {
  const self = this
  // can only allow one tx to pass through this flow at a time
  // so we can atomically consume a nonce
  self.nonceLock.take(function(){
    waterfall([
      self.fillInTxExtras.bind(self, txParams),
      self.signTransaction.bind(self),
      self.publishTransaction.bind(self),
    ], function(err, txHash){
      self.nonceLock.leave()
      if (err) return cb(err)
      cb(null, txHash)
    })
  })
}

HookedWalletSubprovider.prototype.finalizeTx = function(txParams, cb) {
  const self = this
  // can only allow one tx to pass through this flow at a time
  // so we can atomically consume a nonce
  self.nonceLock.take(function(){
    waterfall([
      self.fillInTxExtras.bind(self, txParams),
      self.signTransaction.bind(self),
    ], function(err, signedTx){
      self.nonceLock.leave()
      if (err) return cb(err)
      cb(null, {raw: signedTx, tx: txParams})
    })
  })
}

HookedWalletSubprovider.prototype.publishTransaction = function(rawTx, cb) {
  const self = this
  self.emitPayload({
    method: 'eth_sendRawTransaction',
    params: [rawTx],
  }, function(err, res){
    if (err) return cb(err)
    cb(null, res.result)
  })
}

HookedWalletSubprovider.prototype.fillInTxExtras = function(txParams, cb){
  const self = this
  const address = txParams.from
  // console.log('fillInTxExtras - address:', address)

  const reqs = {}

  if (txParams.gasPrice === undefined) {
    // console.log("need to get gasprice")
    reqs.gasPrice = self.emitPayload.bind(self, { method: 'eth_gasPrice', params: [] })
  }

  if (txParams.nonce === undefined) {
    // console.log("need to get nonce")
    reqs.nonce = self.emitPayload.bind(self, { method: 'eth_getTransactionCount', params: [address, 'pending'] })
  }

  if (txParams.gas === undefined) {
    // console.log("need to get gas")
    reqs.gas = estimateGas.bind(null, self.engine, cloneTxParams(txParams))
  }

  parallel(reqs, function(err, result) {
    if (err) return cb(err)
    // console.log('fillInTxExtras - result:', result)

    const res = {}
    if (result.gasPrice) res.gasPrice = result.gasPrice.result
    if (result.nonce) res.nonce = result.nonce.result
    if (result.gas) res.gas = result.gas

    cb(null, extend(txParams, res))
  })
}

// util

// we use this to clean any custom params from the txParams
function cloneTxParams(txParams){
  return {
    from: txParams.from,
    to: txParams.to,
    value: txParams.value,
    data: txParams.data,
    gas: txParams.gas,
    gasPrice: txParams.gasPrice,
    nonce: txParams.nonce,
  }
}

function toLowerCase(string){
  return string.toLowerCase()
}

function resemblesAddress (string) {
  const fixed = ethUtil.addHexPrefix(string)
  const isValid = ethUtil.isValidAddress(fixed)
  return isValid
}

// Returns true if resembles hex data
// but definitely not a valid address.
function resemblesData (string) {
  const fixed = ethUtil.addHexPrefix(string)
  const isValidAddress = ethUtil.isValidAddress(fixed)
  return !isValidAddress && isValidHex(string)
}

function isValidHex(data) {
  const isString = typeof data === 'string'
  if (!isString) return false
  const isHexPrefixed = data.slice(0,2) === '0x'
  if (!isHexPrefixed) return false
  const nonPrefixed = data.slice(2)
  const isValid = nonPrefixed.match(hexRegex)
  return isValid
}

function mustProvideInConstructor(methodName) {
  return function(params, cb) {
    cb(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + methodName + '" fn in constructor options'))
  }
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (tasks, callback) {
    callback = (0, _once2.default)(callback || _noop2.default);
    if (!(0, _isArray2.default)(tasks)) return callback(new Error('First argument to waterfall must be an array of functions'));
    if (!tasks.length) return callback();
    var taskIndex = 0;

    function nextTask(args) {
        var task = (0, _wrapAsync2.default)(tasks[taskIndex++]);
        args.push((0, _onlyOnce2.default)(next));
        task.apply(null, args);
    }

    function next(err /*, ...args*/) {
        if (err || taskIndex === tasks.length) {
            return callback.apply(null, arguments);
        }
        nextTask((0, _slice2.default)(arguments, 1));
    }

    nextTask([]);
};

var _isArray = __webpack_require__(49);

var _isArray2 = _interopRequireDefault(_isArray);

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(28);

var _once2 = _interopRequireDefault(_once);

var _slice = __webpack_require__(15);

var _slice2 = _interopRequireDefault(_slice);

var _onlyOnce = __webpack_require__(20);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
 * Runs the `tasks` array of functions in series, each passing their results to
 * the next in the array. However, if any of the `tasks` pass an error to their
 * own callback, the next function is not executed, and the main `callback` is
 * immediately called with the error.
 *
 * @name waterfall
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array} tasks - An array of [async functions]{@link AsyncFunction}
 * to run.
 * Each function should complete with any number of `result` values.
 * The `result` values will be passed as arguments, in order, to the next task.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed. This will be passed the results of the last task's
 * callback. Invoked with (err, [results]).
 * @returns undefined
 * @example
 *
 * async.waterfall([
 *     function(callback) {
 *         callback(null, 'one', 'two');
 *     },
 *     function(arg1, arg2, callback) {
 *         // arg1 now equals 'one' and arg2 now equals 'two'
 *         callback(null, 'three');
 *     },
 *     function(arg1, callback) {
 *         // arg1 now equals 'three'
 *         callback(null, 'done');
 *     }
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 *
 * // Or, with named functions:
 * async.waterfall([
 *     myFirstFunction,
 *     mySecondFunction,
 *     myLastFunction,
 * ], function (err, result) {
 *     // result now equals 'done'
 * });
 * function myFirstFunction(callback) {
 *     callback(null, 'one', 'two');
 * }
 * function mySecondFunction(arg1, arg2, callback) {
 *     // arg1 now equals 'one' and arg2 now equals 'two'
 *     callback(null, 'three');
 * }
 * function myLastFunction(arg1, callback) {
 *     // arg1 now equals 'three'
 *     callback(null, 'done');
 * }
 */

/***/ }),
/* 49 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll, iteratee, callback) {
    var eachOfImplementation = (0, _isArrayLike2.default)(coll) ? eachOfArrayLike : eachOfGeneric;
    eachOfImplementation(coll, (0, _wrapAsync2.default)(iteratee), callback);
};

var _isArrayLike = __webpack_require__(21);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _breakLoop = __webpack_require__(55);

var _breakLoop2 = _interopRequireDefault(_breakLoop);

var _eachOfLimit = __webpack_require__(136);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _doLimit = __webpack_require__(58);

var _doLimit2 = _interopRequireDefault(_doLimit);

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(28);

var _once2 = _interopRequireDefault(_once);

var _onlyOnce = __webpack_require__(20);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eachOf implementation optimized for array-likes
function eachOfArrayLike(coll, iteratee, callback) {
    callback = (0, _once2.default)(callback || _noop2.default);
    var index = 0,
        completed = 0,
        length = coll.length;
    if (length === 0) {
        callback(null);
    }

    function iteratorCallback(err, value) {
        if (err) {
            callback(err);
        } else if (++completed === length || value === _breakLoop2.default) {
            callback(null);
        }
    }

    for (; index < length; index++) {
        iteratee(coll[index], index, (0, _onlyOnce2.default)(iteratorCallback));
    }
}

// a generic version of eachOf which can handle array, object, and iterator cases.
var eachOfGeneric = (0, _doLimit2.default)(_eachOfLimit2.default, Infinity);

/**
 * Like [`each`]{@link module:Collections.each}, except that it passes the key (or index) as the second argument
 * to the iteratee.
 *
 * @name eachOf
 * @static
 * @memberOf module:Collections
 * @method
 * @alias forEachOf
 * @category Collection
 * @see [async.each]{@link module:Collections.each}
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - A function to apply to each
 * item in `coll`.
 * The `key` is the item's key, or index in the case of an array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 * @example
 *
 * var obj = {dev: "/dev.json", test: "/test.json", prod: "/prod.json"};
 * var configs = {};
 *
 * async.forEachOf(obj, function (value, key, callback) {
 *     fs.readFile(__dirname + value, "utf8", function (err, data) {
 *         if (err) return callback(err);
 *         try {
 *             configs[key] = JSON.parse(data);
 *         } catch (e) {
 *             return callback(e);
 *         }
 *         callback();
 *     });
 * }, function (err) {
 *     if (err) console.error(err.message);
 *     // configs is now a map of JSON data
 *     doSomethingWith(configs);
 * });
 */
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(52);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(53);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// A temporary value used to identify if the loop should be broken.
// See #1064, #1293
exports.default = {};
module.exports = exports["default"];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _eachOfLimit;

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _once = __webpack_require__(28);

var _once2 = _interopRequireDefault(_once);

var _iterator = __webpack_require__(137);

var _iterator2 = _interopRequireDefault(_iterator);

var _onlyOnce = __webpack_require__(20);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _breakLoop = __webpack_require__(55);

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        callback = (0, _once2.default)(callback || _noop2.default);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        var nextElem = (0, _iterator2.default)(obj);
        var done = false;
        var running = 0;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            } else if (value === _breakLoop2.default || done && running <= 0) {
                done = true;
                return callback(null);
            } else {
                replenish();
            }
        }

        function replenish() {
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                iteratee(elem.value, elem.key, (0, _onlyOnce2.default)(iterateeCallback));
            }
        }

        replenish();
    };
}
module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doLimit;
function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}
module.exports = exports["default"];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

const inherits = __webpack_require__(1).inherits
const Transaction = __webpack_require__(158)
const ethUtil = __webpack_require__(0)
const Subprovider = __webpack_require__(3)
const blockTagForPayload = __webpack_require__(17).blockTagForPayload

module.exports = NonceTrackerSubprovider

// handles the following RPC methods:
//   eth_getTransactionCount (pending only)
// observes the following RPC methods:
//   eth_sendRawTransaction


inherits(NonceTrackerSubprovider, Subprovider)

function NonceTrackerSubprovider(opts){
  const self = this

  self.nonceCache = {}
}

NonceTrackerSubprovider.prototype.handleRequest = function(payload, next, end){
  const self = this

  switch(payload.method) {

    case 'eth_getTransactionCount':
      var blockTag = blockTagForPayload(payload)
      var address = payload.params[0].toLowerCase()
      var cachedResult = self.nonceCache[address]
      // only handle requests against the 'pending' blockTag
      if (blockTag === 'pending') {
        // has a result
        if (cachedResult) {
          end(null, cachedResult)
        // fallthrough then populate cache
        } else {
          next(function(err, result, cb){
            if (err) return cb()
            if (self.nonceCache[address] === undefined) {
              self.nonceCache[address] = result
            }
            cb()
          })
        }
      } else {
        next()
      }
      return

    case 'eth_sendRawTransaction':
      // allow the request to continue normally
      next(function(err, result, cb){
        // only update local nonce if tx was submitted correctly
        if (err) return cb()
        // parse raw tx
        var rawTx = payload.params[0]
        var stripped = ethUtil.stripHexPrefix(rawTx)
        var rawData = new Buffer(ethUtil.stripHexPrefix(rawTx), 'hex')
        var tx = new Transaction(new Buffer(ethUtil.stripHexPrefix(rawTx), 'hex'))
        // extract address
        var address = '0x'+tx.getSenderAddress().toString('hex').toLowerCase()
        // extract nonce and increment
        var nonce = ethUtil.bufferToInt(tx.nonce)
        nonce++
        // hexify and normalize
        var hexNonce = nonce.toString(16)
        if (hexNonce.length%2) hexNonce = '0'+hexNonce
        hexNonce = '0x'+hexNonce
        // dont update our record on the nonce until the submit was successful
        // update cache
        self.nonceCache[address] = hexNonce
        cb()
      })
      return

    default:
      next()
      return

  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("promise-to-callback");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("cross-fetch");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-abi");

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = __webpack_require__(11);
const http = __webpack_require__(65);
const rethinkConn_1 = __webpack_require__(66);
const addEvents_1 = __webpack_require__(78);
const datastores_1 = __webpack_require__(22);
const yargs_1 = __webpack_require__(32);
const cacheDB_1 = __webpack_require__(80);
const vmRunner_1 = __webpack_require__(82);
const vmEngine_1 = __webpack_require__(92);
if (yargs_1.argv.resetDS) datastores_1.default.initialize();
const server = http.createServer();
const io = __webpack_require__(192)(server, configs_1.default.global.SOCKET_IO);
server.listen(configs_1.default.global.SOCKET_IO.port, configs_1.default.global.SOCKET_IO.ip, () => {
    console.log("Listening on", configs_1.default.global.SOCKET_IO.port);
});
let cacheDB = new cacheDB_1.default(configs_1.default.global.REDIS.URL, {
    port: configs_1.default.global.GETH_RPC.port,
    host: configs_1.default.global.GETH_RPC.host
});
let vmRunner = new vmRunner_1.default(cacheDB);
let rdb = new rethinkConn_1.default(io, vmRunner);
datastores_1.default.getBlocks(_blocks => {
    vmRunner.setStateRoot(_blocks && _blocks[0] && _blocks[0].stateRoot ? new Buffer(_blocks[0].stateRoot) : new Buffer('d7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544', 'hex'));
});
console.log("Start VmEngine");
vmEngine_1.default.start();
io.on('connection', _socket => {
    addEvents_1.default(_socket, rdb, vmRunner, vmEngine_1.default);
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    BLOCK_TIME: 14,
    LOKI: {
        dbName: "loki.json",
        tableNames: ["blocks", "transactions"],
        ttl: {
            interval: 5000,
            age: 5 * 60 * 1000
        }
    },
    REDIS: {
        URL: process.env.REDIS_URL
    },
    SOCKET_IO: {
        port: parseInt(process.env.PORT) || 3000,
        serveClient: false,
        pingInterval: 10000,
        pingTimeout: 5000,
        cookie: true,
        ip: "0.0.0.0"
    },
    DATASTORE: 'Redis',
    RETHINK_DB: {
        host: "localhost",
        port: 28015,
        db: "eth_mainnet",
        env_cert: "RETHINKDB_CERT",
        env_cert_raw: "RETHINKDB_CERT_RAW",
        env_url: "RETHINKDB_URL"
    },
    MAX: {
        socketRows: 64
    },
    GETH_RPC: {
        port: process.env.RPC_PORT ? parseInt(process.env.RPC_PORT) : 8545,
        host: process.env.RPC_HOST || "localhost"
    },
    ID: process.env.DYNO || "local"
};

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const configs_1 = __webpack_require__(11);
const fs = __webpack_require__(67);
const url_1 = __webpack_require__(68);
const yargs_1 = __webpack_require__(32);
const r = __webpack_require__(69);
const datastores_1 = __webpack_require__(22);
const libs_1 = __webpack_require__(16);
class RethinkDB {
    constructor(_socketIO, _vmR) {
        this.socketIO = _socketIO;
        this.vmRunner = _vmR;
        this.start();
    }
    start() {
        let _this = this;
        this.tempTxs = [];
        let conf = configs_1.default.global.RETHINK_DB;
        let tempConfig = {
            host: conf.host,
            port: conf.port,
            db: conf.db
        };
        let connect = _config => {
            r.connect(_config, (err, conn) => {
                if (!err) {
                    _this.dbConn = conn;
                    _this.setAllEvents();
                } else {
                    console.log(err);
                }
            });
        };
        let connectWithCert = _cert => {
            let url = new url_1.URL(process.env[conf.env_url]);
            tempConfig = {
                host: url.hostname,
                port: parseInt(url.port),
                password: url.password,
                ssl: {
                    ca: _cert
                },
                db: conf.db
            };
            if (!_cert) delete tempConfig.ssl;
            connect(tempConfig);
        };
        if (yargs_1.argv.remoteRDB && !yargs_1.argv.rawCert) {
            fs.readFile(process.env[conf.env_cert], (err, caCert) => {
                connectWithCert(caCert);
            });
        } else if (yargs_1.argv.remoteRDB && yargs_1.argv.rawCert) {
            connectWithCert(process.env[conf.env_cert_raw]);
        } else {
            connect(tempConfig);
        }
    }
    setAllEvents() {
        let _this = this;
        r.table('blocks').changes().map(change => {
            return change('new_val');
        }).merge(block => {
            return {
                transactions: r.table('transactions').getAll(r.args(block('transactionHashes'))).coerceTo('array'),
                blockStats: {
                    pendingTxs: r.table('data').get('cached').getField('pendingTxs')
                }
            };
        }).run(_this.dbConn, (err, cursor) => {
            cursor.each((err, block) => {
                if (!err) {
                    _this.vmRunner.setStateRoot(block.stateRoot);
                    let bstats = new libs_1.BlockStats(block, block.transactions);
                    block.blockStats = Object.assign({}, bstats.getBlockStats(), block.blockStats);
                    let sBlock = new libs_1.SmallBlock(block);
                    let blockHash = sBlock.hash();
                    _this.socketIO.to(blockHash).emit(blockHash + '_update', block);
                    _this.onNewBlock(sBlock.smallify());
                    _this.onNewTx(block.transactions.map(_tx => {
                        let sTx = new libs_1.SmallTx(_tx);
                        let txHash = sTx.hash();
                        _this.socketIO.to(txHash).emit(txHash + '_update', _tx);
                        return sTx.smallify();
                    }));
                }
            });
        });
        r.table('transactions').changes().filter(r.row('new_val')('pending').eq(true)).run(_this.dbConn, (err, cursor) => {
            cursor.each((err, row) => {
                if (!err) {
                    let _tx = row.new_val;
                    if (_tx.pending) {
                        let sTx = new libs_1.SmallTx(_tx);
                        let txHash = sTx.hash();
                        _this.socketIO.to(txHash).emit(txHash + '_update', _tx);
                        _this.socketIO.to('pendingTxs').emit('newPendingTx', sTx.smallify());
                    }
                }
            });
        });
    }
    getAddressTransactionPages(address, hash, bNumber, cb) {
        let _this = this;
        let sendResults = _cursor => {
            _cursor.toArray((err, results) => {
                if (err) cb(err, null);else cb(null, results.map(_tx => {
                    return new libs_1.SmallTx(_tx).smallify();
                }));
            });
        };
        if (!hash) {
            r.table("transactions").orderBy({ index: r.desc("numberAndHash") }).filter(r.row("from").eq(r.args([new Buffer(address)])).or(r.row("to").eq(r.args([new Buffer(address)])))).limit(25).run(_this.dbConn, (err, cursor) => {
                if (err) cb(err, null);else sendResults(cursor);
            });
        } else {
            r.table("transactions").orderBy({ index: r.desc("numberAndHash") }).between(r.args([[r.minval, r.minval]]), r.args([[bNumber, new Buffer(hash)]]), { leftBound: "open", index: "numberAndHash" }).filter(r.or(r.row("from").eq(r.args([new Buffer(address)])), r.row("to").eq(r.args([new Buffer(address)])))).limit(25).run(_this.dbConn, function (err, cursor) {
                if (err) cb(err, null);else sendResults(cursor);
            });
        }
    }
    getTransactionPages(hash, bNumber, cb) {
        let _this = this;
        let sendResults = _cursor => {
            _cursor.toArray((err, results) => {
                if (err) cb(err, null);else cb(null, results.map(_tx => {
                    return new libs_1.SmallTx(_tx).smallify();
                }));
            });
        };
        if (!hash) {
            r.table("transactions").orderBy({ index: r.desc("numberAndHash") }).filter({ pending: false }).limit(25).run(_this.dbConn, (err, cursor) => {
                if (err) cb(err, null);else sendResults(cursor);
            });
        } else {
            r.table("transactions").orderBy({ index: r.desc("numberAndHash") }).between(r.args([[r.minval, r.minval]]), r.args([[bNumber, new Buffer(hash)]]), { leftBound: "open", index: "numberAndHash" }).filter({ pending: false }).limit(25).run(_this.dbConn, function (err, cursor) {
                if (err) cb(err, null);else sendResults(cursor);
            });
        }
    }
    getBlockTransactions(hash, cb) {
        r.table('blocks').get(r.args([new Buffer(hash)])).do(block => {
            return r.table('transactions').getAll(r.args(block('transactionHashes'))).coerceTo('array');
        }).run(this.dbConn, (err, result) => {
            if (err) cb(err, null);else cb(null, result.map(_tx => {
                return new libs_1.SmallTx(_tx).smallify();
            }));
        });
    }
    getTotalTxs(hash, cb) {
        var bhash = Buffer.from(hash.toLowerCase().replace('0x', ''), 'hex');
        r.table("transactions").getAll(r.args([bhash]), { index: "cofrom" }).count().run(this.dbConn, function (err, count) {
            if (err) cb(err, null);else cb(null, count);
        });
    }
    getTxsOfAddress(hash, cb) {
        let _this = this;
        let sendResults = _cursor => {
            _cursor.toArray((err, results) => {
                if (err) cb(err, null);else cb(null, results.map(_tx => {
                    return new libs_1.SmallTx(_tx).smallify();
                }));
            });
        };
        var bhash = Buffer.from(hash.toLowerCase().replace('0x', ''), 'hex');
        r.table("transactions").getAll(r.args([bhash]), { index: "cofrom" }).limit(20).run(this.dbConn, function (err, count) {
            if (err) cb(err, null);else sendResults(count);
        });
    }
    getBlock(hash, cb) {
        r.table('blocks').get(r.args([new Buffer(hash)])).run(this.dbConn, (err, result) => {
            if (err) cb(err, null);else cb(null, result);
        });
    }
    getTx(hash, cb) {
        r.table("transactions").get(r.args([new Buffer(hash)])).merge(function (_tx) {
            return {
                trace: r.db("eth_mainnet").table('traces').get(_tx('hash')),
                logs: r.db("eth_mainnet").table('logs').get(_tx('hash'))
            };
        }).run(this.dbConn, (err, result) => {
            if (err) cb(err, null);else cb(null, result);
        });
    }
    onNewBlock(_block) {
        let _this = this;
        this.socketIO.to('blocks').emit('newBlock', _block);
        datastores_1.default.addBlock(_block);
    }
    onNewTx(_tx) {
        if (Array.isArray(_tx) && !_tx.length) return;
        this.socketIO.to('txs').emit('newTx', _tx);
        datastores_1.default.addTransaction(_tx);
    }
}
exports.default = RethinkDB;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("rethinkdb");

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const Redis = __webpack_require__(33);
const configs_1 = __webpack_require__(11);
let redis = new Redis(configs_1.default.global.REDIS.URL);
let tableCache = {
    transactions: [],
    blocks: []
};
let tables = {
    transactions: "transactions",
    blocks: 'blocks'
};
let bufferify = obj => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && obj[key]) {
            if (obj[key].type && obj[key].type === 'Buffer') {
                obj[key] = new Buffer(obj[key]);
            } else if (Array.isArray(obj[key])) {
                obj[key] = obj[key].map(_item => {
                    if (_item.type && _item.type === 'Buffer') return new Buffer(_item);else return _item;
                });
            }
        }
    }
    return obj;
};
let getArray = (tbName, cb) => {
    let tbKey = tbName;
    if (tableCache[tbKey].length) cb(tableCache[tbKey]);else {
        let vals = redis.get(tbName, (err, result) => {
            if (!err && result) {
                let bufferedArr = JSON.parse(result).map(_item => {
                    return bufferify(_item);
                });
                tableCache[tbKey] = bufferedArr;
                cb(bufferedArr);
            } else cb([]);
        });
    }
};
let addTransaction = tx => {
    getArray(tables.transactions, pTxs => {
        if (Array.isArray(tx)) {
            tx.forEach(tTx => {
                pTxs.unshift(tTx);
            });
        } else {
            pTxs.unshift(tx);
        }
        if (pTxs.length > configs_1.default.global.MAX.socketRows) pTxs = pTxs.slice(0, configs_1.default.global.MAX.socketRows);
        let tbKey = "transactions";
        tableCache[tbKey] = pTxs;
        redis.set(tables.transactions, JSON.stringify(pTxs));
    });
};
let addBlock = block => {
    getArray(tables.blocks, pBlocks => {
        pBlocks.unshift(block);
        if (pBlocks.length > configs_1.default.global.MAX.socketRows) pBlocks = pBlocks.slice(0, configs_1.default.global.MAX.socketRows);
        let tbKey = "blocks";
        tableCache[tbKey] = pBlocks;
        redis.set(tables.blocks, JSON.stringify(pBlocks));
    });
};
let getBlocks = cb => {
    getArray(tables.blocks, cb);
};
let getTransactions = cb => {
    getArray(tables.transactions, cb);
};
let thisReturnsANumber = (id, name) => {
    return 0;
};
let initialize = () => {
    redis.set(tables.transactions, JSON.stringify([]));
    redis.set(tables.blocks, JSON.stringify([]));
};
exports.default = {
    addTransaction,
    addBlock,
    getBlocks,
    getTransactions,
    initialize
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const loki = __webpack_require__(72);
const configs_1 = __webpack_require__(11);
let lokiDB = new loki(configs_1.default.global.LOKI.dbName, { autosave: true, autosaveInterval: 5000, autoload: true });
let tables = configs_1.default.global.LOKI.tableNames;
let setCollections = () => {
    tables.forEach((item, idx) => {
        if (!lokiDB.getCollection(item)) lokiDB.addCollection(item, { unique: ['hash'] }).setTTL(configs_1.default.global.LOKI.ttl.age, configs_1.default.global.LOKI.ttl.interval);
    });
};
let hexify = obj => {
    let _obj = Object.assign({}, obj);
    for (var key in _obj) {
        if (_obj.hasOwnProperty(key)) {
            if (Buffer.isBuffer(_obj[key])) _obj[key] = '0x' + _obj[key].toString('hex');
        }
    }
    return _obj;
};
let bufferify = obj => {
    let _obj = Object.assign({}, obj);
    for (var key in _obj) {
        if (_obj.hasOwnProperty(key)) {
            if ((typeof _obj[key] === 'string' || _obj[key] instanceof String) && _obj[key].substring(0, 2) == '0x') _obj[key] = new Buffer(_obj[key].substring(2).toUpperCase(), 'hex');
        }
    }
    return _obj;
};
let processTx = tx => {
    let hexed = hexify(tx);
    let col = lokiDB.getCollection('transactions');
    var obj = col.by('hash', hexed.hash);
    if (obj) {
        col.remove(obj);
    }
    lokiDB.getCollection('transactions').insert(hexed);
};
let addTransaction = tx => {
    if (Array.isArray(tx)) {
        tx.forEach(tTx => {
            processTx(tTx);
        });
    } else {
        processTx(tx);
    }
};
let addBlock = block => {
    let hexed = hexify(block);
    let col = lokiDB.getCollection('blocks');
    var obj = col.by('hash', hexed.hash);
    if (obj) {
        col.remove(obj);
    }
    lokiDB.getCollection('blocks').insert(hexed);
};
let getBlocks = cb => {
    cb(lokiDB.getCollection('blocks').chain().simplesort('blockNumber').data().map(_block => {
        return bufferify(_block);
    }));
};
let getTransactions = cb => {
    cb(lokiDB.getCollection('transactions').chain().simplesort('blockNumber').data().map(_tx => {
        return bufferify(_tx);
    }));
};
let thisReturnsANumber = (id, name) => {
    return 0;
};
let initialize = () => {
    setCollections();
    lokiDB.getCollection('transactions').clear();
    lokiDB.getCollection('blocks').clear();
};
exports.default = {
    addTransaction,
    addBlock,
    getBlocks,
    getTransactions,
    initialize
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("lokijs");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const libs_1 = __webpack_require__(16);
const bignumber_js_1 = __webpack_require__(23);
class SmallBlock {
    constructor(_block) {
        this.block = _block;
    }
    hash() {
        return '0x' + new Buffer(this.block.hash).toString('hex');
    }
    smallify() {
        let _block = this.block;
        return {
            number: _block.number,
            intNumber: _block.intNumber,
            hash: _block.hash,
            miner: _block.miner,
            timestamp: _block.timestamp,
            transactionCount: _block.transactionHashes.length,
            uncleHashes: _block.uncleHashes,
            isUncle: _block.isUncle,
            totalBlockReward: Buffer.from(new bignumber_js_1.default(libs_1.common.bufferToHex(_block.blockReward)).plus(new bignumber_js_1.default(libs_1.common.bufferToHex(_block.txFees))).plus(new bignumber_js_1.default(libs_1.common.bufferToHex(_block.uncleReward))).toString(16), 'hex'),
            blockReward: _block.blockReward,
            txFees: _block.txFees,
            stateRoot: _block.stateRoot,
            uncleReward: _block.uncleReward,
            difficulty: _block.difficulty,
            blockStats: _block.blockStats
        };
    }
}
exports.default = SmallBlock;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
class SmallTx {
    constructor(_tx) {
        this.tx = _tx;
    }
    hash() {
        return '0x' + new Buffer(this.tx.hash).toString('hex');
    }
    smallify() {
        let _tx = this.tx;
        return {
            blockNumber: _tx.blockNumber,
            blockHash: _tx.blockHash,
            from: _tx.from,
            to: _tx.to,
            gasUsed: _tx.gasUsed,
            contractAddress: _tx.contractAddress,
            gas: _tx.gas,
            gasPrice: _tx.gasPrice,
            hash: _tx.hash,
            input: _tx.input,
            value: _tx.value,
            status: _tx.status,
            timestamp: _tx.timestamp
        };
    }
}
exports.default = SmallTx;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __webpack_require__(23);
const libs_1 = __webpack_require__(16);
const configs_1 = __webpack_require__(11);
let previousBlockTime = new bignumber_js_1.default(0);
const BLOCK_TIME = configs_1.default.global.BLOCK_TIME;
class BlockStats {
    constructor(_block, _txs) {
        this.block = _block;
        this.txs = _txs;
        let ts = new bignumber_js_1.default(libs_1.common.bufferToHex(this.block.timestamp));
        if (!previousBlockTime) previousBlockTime = ts.sub(BLOCK_TIME);
        this.blockTime = ts.sub(previousBlockTime).abs();
        if (!this.block.isUncle) previousBlockTime = new bignumber_js_1.default(libs_1.common.bufferToHex(this.block.timestamp));
    }
    getBlockStats() {
        if (!this.txs.length) return {
            blockTime: '0x0',
            failed: '0x0',
            success: '0x0',
            avgGasPrice: '0x0',
            avgTxFees: '0x0'
        };
        let txStatus = {
            blockTime: new bignumber_js_1.default(0),
            failed: new bignumber_js_1.default(0),
            success: new bignumber_js_1.default(0),
            totGasPrice: new bignumber_js_1.default(0),
            totTxFees: new bignumber_js_1.default(0)
        };
        this.txs.forEach(_tx => {
            if (_tx.status) txStatus.success = txStatus.success.add(1);else txStatus.failed = txStatus.failed.add(1);
            txStatus.totGasPrice = txStatus.totGasPrice.add(new bignumber_js_1.default(libs_1.common.bufferToHex(_tx.gasPrice)));
            txStatus.totTxFees = txStatus.totTxFees.add(new bignumber_js_1.default(libs_1.common.bufferToHex(_tx.gasPrice)).mul(new bignumber_js_1.default(libs_1.common.bufferToHex(_tx.gasUsed))));
        });
        return {
            blockTime: libs_1.common.bnToHex(this.blockTime),
            failed: libs_1.common.bnToHex(txStatus.failed),
            success: libs_1.common.bnToHex(txStatus.success),
            avgGasPrice: libs_1.common.bnToHex(txStatus.totGasPrice.div(this.txs.length).ceil()),
            avgTxFees: libs_1.common.bnToHex(txStatus.totTxFees.div(this.txs.length).ceil())
        };
    }
}
exports.default = BlockStats;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(77);
let bufferToHex = _buf => {
    let r = '0x' + new Buffer(_buf).toString('hex');
    if (r == '0x') r = "0x0";
    return r;
};
exports.bufferToHex = bufferToHex;
let bnToHex = _bn => {
    return '0x' + _bn.toString(16);
};
exports.bnToHex = bnToHex;
let validateHexString = str => {
    if (str == "") return true;
    str = str.substring(0, 2) == '0x' ? str.substring(2).toUpperCase() : str.toUpperCase();
    var re = /^[0-9A-F]+$/g;
    return re.test(str);
};
let validateByteArray = arr => {
    let valid = true;
    arr.forEach(_item => {
        if (!_.isNumber(_item) || _item < 0 || _item > 255) valid = false;
    });
    return valid;
};
let check = {
    isNumber(_item) {
        return _.isNumber(_item);
    },
    isHashString(_item) {
        return _item.substr(0, 2) == "0x" && validateHexString(_item.substring(2).toUpperCase()) && _item.length === 66;
    },
    isHashBuffer(_item) {
        return Buffer.isBuffer(_item) && _item.length === 32;
    },
    isAddressString(_item) {
        return _item.substr(0, 2) == "0x" && validateHexString(_item.substring(2).toUpperCase()) && _item.length === 42;
    },
    isAddressBuffer(_item) {
        return Buffer.isBuffer(_item) && _item.length === 20;
    },
    isBufferObject(_item, length) {
        return _item.type && _item.type == "Buffer" && _item.data && _.isArray(_item.data) && validateByteArray(_item.data) && _item.data.length == length;
    }
};
exports.check = check;
let newError = _msg => {
    return {
        message: _msg
    };
};
exports.newError = newError;
let errors = {
    notNumber: "Not a valid number",
    notBuffer: "Not a valid Buffer",
    notHash: "Not a valid Hash string",
    notAddress: "Not a valid Address string",
    invalidInput: "Invalid input"
};
exports.errors = errors;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const globalFuncs_1 = __webpack_require__(79);
const datastores_1 = __webpack_require__(22);
const libs_1 = __webpack_require__(16);
let events = [{
    name: "join",
    onEvent: (_socket, _msg) => {
        if (_msg) {
            _socket.join(_msg);
            globalFuncs_1.log.info(_socket.id, "joined", _msg);
        } else {
            globalFuncs_1.log.error(_socket.id, 'tried to join invalid room', _msg);
        }
    }
}, {
    name: "leave",
    onEvent: (_socket, _msg) => {
        if (_msg) {
            _socket.leave(_msg);
            globalFuncs_1.log.info(_socket.id, "Left", _msg);
        } else {
            globalFuncs_1.log.error(_socket.id, 'tried to leave invalid room', _msg);
        }
    }
}, {
    name: "pastBlocks",
    onEvent: (_socket, _msg, _glob, _cb) => {
        datastores_1.default.getBlocks(_blocks => {
            let blocks = [];
            _blocks.forEach((_block, idx) => {
                blocks.unshift(_block);
            });
            _cb(null, blocks);
        });
    }
}, {
    name: "pastTxs",
    onEvent: (_socket, _msg, _glob, _cb) => {
        datastores_1.default.getTransactions(_txs => {
            let txs = [];
            _txs.forEach(_tx => {
                txs.unshift(_tx);
            });
            _cb(null, txs);
        });
    }
}, {
    name: "getBlock",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.rdb.getBlock(_msg, _cb);
    }
}, {
    name: "getTx",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.rdb.getTx(_msg, _cb);
    }
}, {
    name: "getBlockTransactions",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.rdb.getBlockTransactions(_msg, _cb);
    }
}, {
    name: "getBalance",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.vmE.getBalance(_msg, _cb);
    }
}, {
    name: "getTokenBalance",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.vmE.getAllTokens(_msg, _cb);
    }
}, {
    name: "getTotalTxs",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.rdb.getTotalTxs(_msg, _cb);
    }
}, {
    name: "getTxs",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.rdb.getTxsOfAddress(_msg, _cb);
    }
}, {
    name: "ethCall",
    onEvent: (_socket, _msg, _glob, _cb) => {
        _glob.vmR.call(_msg, _cb);
    }
}, {
    name: "getKeyValue",
    onEvent: (_socket, _msg, _glob, _cb) => {
        if (!libs_1.common.check.isBufferObject(_msg, 32)) _cb(libs_1.common.newError(libs_1.common.errors.notBuffer), null);else _glob.vmR.getKeyValue(_msg, _cb);
    }
}, {
    name: "getCurrentStateRoot",
    onEvent: (_socket, _msg, _glob, _cb) => {
        if (_msg != "") _cb(libs_1.common.newError(libs_1.common.errors.invalidInput), null);else _glob.vmR.getCurrentStateRoot(_cb);
    }
}, {
    name: "getTransactionPages",
    onEvent: (_socket, reqObj, _glob, _cb) => {
        if (reqObj.hash && (!libs_1.common.check.isBufferObject(reqObj.hash, 32) || !libs_1.common.check.isNumber(reqObj.number))) _cb(libs_1.common.newError(libs_1.common.errors.notBuffer), null);else _glob.rdb.getTransactionPages(reqObj.hash, reqObj.number, _cb);
    }
}, {
    name: "getAddressTransactionPages",
    onEvent: (_socket, reqObj, _glob, _cb) => {
        if (reqObj.hash && (!libs_1.common.check.isBufferObject(reqObj.hash, 32) || !libs_1.common.check.isNumber(reqObj.number))) _cb(libs_1.common.newError(libs_1.common.errors.notBuffer), null);else if (!libs_1.common.check.isBufferObject(reqObj.address, 20)) _cb(libs_1.common.newError(libs_1.common.errors.notBuffer), null);else _glob.rdb.getAddressTransactionPages(reqObj.address, reqObj.hash, reqObj.number, _cb);
    }
}];
let onConnection = (_socket, _rdb, _vmR, _vmE) => {
    events.forEach((event, idx) => {
        _socket.on(event.name, (msg, cb) => {
            event.onEvent(_socket, msg, {
                rdb: _rdb,
                vmR: _vmR,
                vmE: _vmE
            }, cb);
        });
    });
};
exports.default = onConnection;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
let log = {
    error: (..._msg) => {
        console.error(_msg.join(' '));
    },
    info: (..._msg) => {
        console.info(_msg.join(' '));
    }
};
exports.log = log;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const Redis = __webpack_require__(33);
const rpc = __webpack_require__(81);
class CacheDB {
    constructor(_redis, _rpc) {
        this.redisConn = new Redis(_redis);
        this.rpcConn = rpc.Client.$create(_rpc.port, _rpc.host);
    }
    get(key, options, cb) {
        let _this = this;
        this.redisConn.get(key, (err, result) => {
            if (!err && result) {
                cb(null, new Buffer(result, 'hex'));
            } else {
                this.rpcConn.call('eth_getKeyValue', ['0x' + key.toString('hex')], function (err, result) {
                    if (err) {
                        cb(err, null);
                    } else {
                        let resBuf = new Buffer(result.substring(2), 'hex');
                        _this.redisConn.set(key, resBuf.toString('hex'));
                        cb(null, resBuf);
                    }
                });
            }
        });
    }
    put(key, val, options, cb) {
        cb(null, true);
    }
    batch(ops, options, cb) {
        cb(null, true);
    }
    del(key, cb) {
        cb(null, true);
    }
    isOpen() {
        return true;
    }
}
exports.default = CacheDB;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("json-rpc2");

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
let VM = __webpack_require__(83);
let Account = __webpack_require__(12);
let Trie = __webpack_require__(34);
const GAS_LIMIT = '0x4c4b40';
var LRU = __webpack_require__(91);
const hexToBuffer = hex => {
    return Buffer.from(hex.toLowerCase().replace('0x', ''), 'hex');
};
class VmRunner {
    constructor(_db) {
        this.db = _db;
        this.codeCache = new LRU(2000);
    }
    setStateRoot(_hash) {
        let _temp = new Trie(this.db, _hash);
        this.stateTrie = _temp;
    }
    call(txs, mCB) {
        console.log("eth call ====================");
        let _this = this;
        let _trie = _this.stateTrie.copy();
        let runCode = (sTree, to, code, gasLimit, data, _cb) => {
            let vm = new VM({
                state: sTree
            });
            vm.runCode({
                address: to,
                code: code,
                gasLimit: gasLimit,
                data: data
            }, (err, result) => {
                _cb(err, result ? result.return : null);
            });
        };
        let getResult = (tx, treeClone, cb) => {
            if (_this.codeCache.peek(tx.to)) {
                runCode(treeClone, hexToBuffer(tx.to), _this.codeCache.get(tx.to), GAS_LIMIT, hexToBuffer(tx.data), cb);
                return;
            }
            treeClone.get(hexToBuffer(tx.to), (err, val) => {
                if (err) {
                    cb(err, null);
                    return;
                }
                let account = new Account(val);
                treeClone.getRaw(account.codeHash, (err, code) => {
                    if (err) {
                        cb(err, null);
                        return;
                    }
                    _this.codeCache.set(tx.to, code);
                    runCode(treeClone, hexToBuffer(tx.to), code ? code : new Buffer('00', 'hex'), GAS_LIMIT, hexToBuffer(tx.data), cb);
                });
            });
        };
        if (Array.isArray(txs)) {
            let returnArr = [];
            let counter = 0;
            txs.forEach((_tx, _idx) => {
                getResult(_tx, _trie.copy(), (err, result) => {
                    counter++;
                    returnArr[_idx] = { error: err, result: result };
                    if (counter == txs.length) mCB(null, returnArr);
                });
            });
        } else {
            getResult(txs, _trie, mCB);
        }
    }
    getKeyValue(_key, _cb) {
        this.db.get(new Buffer(_key), {
            keyEncoding: 'binary',
            valueEncoding: 'binary'
        }, _cb);
    }
    getCurrentStateRoot(_cb) {
        _cb(null, this.stateTrie.root);
    }
    getAccount(_to, cb) {
        let treeClone = this.stateTrie.copy();
        console.log("----getAccountgetAccount -----", _to);
        treeClone.get(hexToBuffer(_to), (err, val) => {
            if (err) {
                cb(err, null);
            } else {
                cb(null, val);
            }
        });
    }
}
exports.default = VmRunner;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-vm");

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

const BaseTrie = __webpack_require__(85)
const checkpointInterface = __webpack_require__(87)
const inherits = __webpack_require__(1).inherits
const proof = __webpack_require__(89)

module.exports = CheckpointTrie

inherits(CheckpointTrie, BaseTrie)

function CheckpointTrie () {
  BaseTrie.apply(this, arguments)
  checkpointInterface(this)
}

CheckpointTrie.prove = proof.prove
CheckpointTrie.verifyProof = proof.verifyProof



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

const assert = __webpack_require__(7)
const levelup = __webpack_require__(35)
const memdown = __webpack_require__(36)
const async = __webpack_require__(2)
const rlp = __webpack_require__(37)
const ethUtil = __webpack_require__(0)
const semaphore = __webpack_require__(38)
const TrieNode = __webpack_require__(24)
const ReadStream = __webpack_require__(86)
const matchingNibbleLength = __webpack_require__(13).matchingNibbleLength
const doKeysMatch = __webpack_require__(13).doKeysMatch
const callTogether = __webpack_require__(13).callTogether
const asyncFirstSeries = __webpack_require__(13).asyncFirstSeries

module.exports = Trie

/**
 * Use `require('merkel-patricia-tree')` for the base interface. In Ethereum applications stick with the Secure Trie Overlay `require('merkel-patricia-tree/secure')`. The API for the raw and the secure interface are about the same
 * @class Trie
 * @param {Object} [db] An instance of [levelup](https://github.com/rvagg/node-levelup/) or a compatible API. If the db is `null` or left undefined, then the trie will be stored in memory via [memdown](https://github.com/rvagg/memdown)
 * @param {Buffer|String} [root]` A hex `String` or `Buffer` for the root of a previously stored trie
 * @prop {Buffer} root The current root of the `trie`
 * @prop {Boolean} isCheckpoint  determines if you are saving to a checkpoint or directly to the db
 * @prop {Buffer} EMPTY_TRIE_ROOT the Root for an empty trie
 */
function Trie (db, root) {
  var self = this
  this.EMPTY_TRIE_ROOT = ethUtil.SHA3_RLP
  this.sem = semaphore(1)

  // setup dbs
  this.db = db ||
    levelup('', {
      db: memdown
    })

  this._getDBs = [this.db]
  this._putDBs = [this.db]

  Object.defineProperty(this, 'root', {
    set: function (value) {
      if (value) {
        value = ethUtil.toBuffer(value)
        assert(value.length === 32, 'Invalid root length. Roots are 32 bytes')
      } else {
        value = self.EMPTY_TRIE_ROOT
      }

      this._root = value
    },
    get: function () {
      return this._root
    }
  })

  this.root = root
}

/**
 * Gets a value given a `key`
 * @method get
 * @param {Buffer|String} key - the key to search for
 * @param {Function} cb A callback `Function` which is given the arguments `err` - for errors that may have occured and `value` - the found value in a `Buffer` or if no value was found `null`
 */
Trie.prototype.get = function (key, cb) {
  var self = this

  key = ethUtil.toBuffer(key)

  self.findPath(key, function (err, node, remainder, stack) {
    var value = null
    if (node && remainder.length === 0) {
      value = node.value
    }

    cb(err, value)
  })
}

/**
 * Stores a given `value` at the given `key`
 * @method put
 * @param {Buffer|String} key
 * @param {Buffer|String} Value
 * @param {Function} cb A callback `Function` which is given the argument `err` - for errors that may have occured
 */
Trie.prototype.put = function (key, value, cb) {
  var self = this

  key = ethUtil.toBuffer(key)
  value = ethUtil.toBuffer(value)

  if (!value || value.toString() === '') {
    self.del(key, cb)
  } else {
    cb = callTogether(cb, self.sem.leave)

    self.sem.take(function () {
      if (self.root.toString('hex') !== ethUtil.SHA3_RLP.toString('hex')) {
        // first try to find the give key or its nearst node
        self.findPath(key, function (err, foundValue, keyRemainder, stack) {
          if (err) {
            return cb(err)
          }
          // then update
          self._updateNode(key, value, keyRemainder, stack, cb)
        })
      } else {
        self._createInitialNode(key, value, cb) // if no root initialize this trie
      }
    })
  }
}

/**
 * deletes a value given a `key`
 * @method del
 * @param {Buffer|String} key
 * @param {Function} callback the callback `Function`
 */
Trie.prototype.del = function (key, cb) {
  var self = this

  key = ethUtil.toBuffer(key)
  cb = callTogether(cb, self.sem.leave)

  self.sem.take(function () {
    self.findPath(key, function (err, foundValue, keyRemainder, stack) {
      if (err) {
        return cb(err)
      }
      if (foundValue) {
        self._deleteNode(key, stack, cb)
      } else {
        cb()
      }
    })
  })
}

/**
 * Retrieves a raw value in the underlying db
 * @method getRaw
 * @param {Buffer} key
 * @param {Function} callback A callback `Function`, which is given the arguments `err` - for errors that may have occured and `value` - the found value in a `Buffer` or if no value was found `null`.
 */
Trie.prototype.getRaw = function (key, cb) {
  key = ethUtil.toBuffer(key)

  function dbGet (db, cb2) {
    db.get(key, {
      keyEncoding: 'binary',
      valueEncoding: 'binary'
    }, function (err, foundNode) {
      if (err || !foundNode) {
        cb2(null, null)
      } else {
        cb2(null, foundNode)
      }
    })
  }
  asyncFirstSeries(this._getDBs, dbGet, cb)
}

// retrieves a node from dbs by hash
Trie.prototype._lookupNode = function (node, cb) {
  if (TrieNode.isRawNode(node)) {
    cb(new TrieNode(node))
  } else {
    this.getRaw(node, function (err, value) {
      if (err) {
        throw err
      }

      if (value) {
        value = new TrieNode(rlp.decode(value))
      }

      cb(value)
    })
  }
}

// TODO: remove the proxy method when changing the caching
Trie.prototype._putRaw = function (key, val, cb) {
  function dbPut (db, cb2) {
    db.put(key, val, {
      keyEncoding: 'binary',
      valueEncoding: 'binary'
    }, cb2)
  }
  async.each(this._putDBs, dbPut, cb)
}

/**
 * Writes a value directly to the underlining db
 * @method putRaw
 * @param {Buffer|String} key The key as a `Buffer` or `String`
 * @param {Buffer} value The value to be stored
 * @param {Function} callback A callback `Function`, which is given the argument `err` - for errors that may have occured
 */
Trie.prototype.putRaw = Trie.prototype._putRaw

/**
 * Removes a raw value in the underlying db
 * @method delRaw
 * @param {Buffer|String} key
 * @param {Function} callback A callback `Function`, which is given the argument `err` - for errors that may have occured
 */
Trie.prototype.delRaw = function (key, cb) {
  function del (db, cb2) {
    db.del(key, {
      keyEncoding: 'binary'
    }, cb2)
  }
  async.each(this._putDBs, del, cb)
}

// writes a single node to dbs
Trie.prototype._putNode = function (node, cb) {
  var hash = node.hash()
  var serialized = node.serialize()
  this._putRaw(hash, serialized, cb)
}

// writes many nodes to db
Trie.prototype._batchNodes = function (opStack, cb) {
  function dbBatch (db, cb) {
    db.batch(opStack, {
      keyEncoding: 'binary',
      valueEncoding: 'binary'
    }, cb)
  }

  async.each(this._putDBs, dbBatch, cb)
}

/**
 * Trys to find a path to the node for the given key
 * It returns a `stack` of nodes to the closet node
 * @method findPath
 * @param {String|Buffer} - key - the search key
 * @param {Function} - cb - the callback function. Its is given the following
 * arguments
 *  - err - any errors encontered
 *  - node - the last node found
 *  - keyRemainder - the remaining key nibbles not accounted for
 *  - stack - an array of nodes that forms the path to node we are searching for
 */

Trie.prototype.findPath = function (targetKey, cb) {
  var self = this
  var root = self.root
  var stack = []
  targetKey = TrieNode.stringToNibbles(targetKey)

  this._walkTrie(root, processNode, cb)

  function processNode (nodeRef, node, keyProgress, walkController) {
    var nodeKey = node.key || []
    var keyRemainder = targetKey.slice(matchingNibbleLength(keyProgress, targetKey))
    var matchingLen = matchingNibbleLength(keyRemainder, nodeKey)

    stack.push(node)

    if (node.type === 'branch') {
      if (keyRemainder.length === 0) {
        walkController.return(null, node, [], stack)
      // we exhausted the key without finding a node
      } else {
        var branchIndex = keyRemainder[0]
        var branchNode = node.getValue(branchIndex)
        if (!branchNode) {
          // there are no more nodes to find and we didn't find the key
          walkController.return(null, null, keyRemainder, stack)
        } else {
          // node found, continuing search
          walkController.only(branchIndex)
        }
      }
    } else if (node.type === 'leaf') {
      if (doKeysMatch(keyRemainder, nodeKey)) {
        // keys match, return node with empty key
        walkController.return(null, node, [], stack)
      } else {
        // reached leaf but keys dont match
        walkController.return(null, null, keyRemainder, stack)
      }
    } else if (node.type === 'extention') {
      if (matchingLen !== nodeKey.length) {
        // keys dont match, fail
        walkController.return(null, null, keyRemainder, stack)
      } else {
        // keys match, continue search
        walkController.next()
      }
    }
  }
}

/*
 * Finds all nodes that store k,v values
 */
Trie.prototype._findNode = function (key, root, stack, cb) {
  this.findPath(key, function () {
    cb.apply(null, arguments)
  })
}

/*
 * Finds all nodes that store k,v values
 */
Trie.prototype._findValueNodes = function (onFound, cb) {
  this._walkTrie(this.root, function (nodeRef, node, key, walkController) {
    var fullKey = key

    if (node.key) {
      fullKey = key.concat(node.key)
    }

    if (node.type === 'leaf') {
      // found leaf node!
      onFound(nodeRef, node, fullKey, walkController.next)
    } else if (node.type === 'branch' && node.value) {
      // found branch with value
      onFound(nodeRef, node, fullKey, walkController.next)
    } else {
      // keep looking for value nodes
      walkController.next()
    }
  }, cb)
}

/*
 * Finds all nodes that are stored directly in the db
 * (some nodes are stored raw inside other nodes)
 */
Trie.prototype._findDbNodes = function (onFound, cb) {
  this._walkTrie(this.root, function (nodeRef, node, key, walkController) {
    if (TrieNode.isRawNode(nodeRef)) {
      walkController.next()
    } else {
      onFound(nodeRef, node, key, walkController.next)
    }
  }, cb)
}

/**
 * Updates a node
 * @method _updateNode
 * @param {Buffer} key
 * @param {Buffer| String} value
 * @param {Array} keyRemainder
 * @param {Array} stack -
 * @param {Function} cb - the callback
 */
Trie.prototype._updateNode = function (key, value, keyRemainder, stack, cb) {
  var toSave = []
  var lastNode = stack.pop()

  // add the new nodes
  key = TrieNode.stringToNibbles(key)

  // Check if the last node is a leaf and the key matches to this
  var matchLeaf = false
  if (lastNode.type === 'leaf') {
    var l = 0
    for (var i = 0; i < stack.length; i++) {
      var n = stack[i]
      if (n.type === 'branch') {
        l++
      } else {
        l += n.key.length
      }
    }
    if ((matchingNibbleLength(lastNode.key, key.slice(l)) === lastNode.key.length) && (keyRemainder.length === 0)) {
      matchLeaf = true
    }
  }

  if (matchLeaf) {
    // just updating a found value
    lastNode.value = value
    stack.push(lastNode)
  } else if (lastNode.type === 'branch') {
    stack.push(lastNode)
    if (keyRemainder !== 0) {
      // add an extention to a branch node
      keyRemainder.shift()
      // create a new leaf
      var newLeaf = new TrieNode('leaf', keyRemainder, value)
      stack.push(newLeaf)
    } else {
      lastNode.value = value
    }
  } else {
    // create a branch node
    var lastKey = lastNode.key
    var matchingLength = matchingNibbleLength(lastKey, keyRemainder)
    var newBranchNode = new TrieNode('branch')

    // create a new extention node
    if (matchingLength !== 0) {
      var newKey = lastNode.key.slice(0, matchingLength)
      var newExtNode = new TrieNode('extention', newKey, value)
      stack.push(newExtNode)
      lastKey.splice(0, matchingLength)
      keyRemainder.splice(0, matchingLength)
    }

    stack.push(newBranchNode)

    if (lastKey.length !== 0) {
      var branchKey = lastKey.shift()
      if (lastKey.length !== 0 || lastNode.type === 'leaf') {
        // shriking extention or leaf
        lastNode.key = lastKey
        var formatedNode = this._formatNode(lastNode, false, toSave)
        newBranchNode.setValue(branchKey, formatedNode)
      } else {
        // remove extention or attaching
        this._formatNode(lastNode, false, true, toSave)
        newBranchNode.setValue(branchKey, lastNode.value)
      }
    } else {
      newBranchNode.value = lastNode.value
    }

    if (keyRemainder.length !== 0) {
      keyRemainder.shift()
      // add a leaf node to the new branch node
      var newLeafNode = new TrieNode('leaf', keyRemainder, value)
      stack.push(newLeafNode)
    } else {
      newBranchNode.value = value
    }
  }

  this._saveStack(key, stack, toSave, cb)
}

// walk tree

Trie.prototype._walkTrie = function (root, onNode, onDone) {
  var self = this
  root = root || self.root
  onDone = onDone || function () {}
  var aborted = false
  var returnValues = []

  if (root.toString('hex') === ethUtil.SHA3_RLP.toString('hex')) {
    return onDone()
  }

  self._lookupNode(root, function (node) {
    processNode(root, node, null, function (err) {
      if (err) {
        return onDone(err)
      }
      onDone.apply(null, returnValues)
    })
  })

  function processNode (nodeRef, node, key, cb) {
    if (!node) return cb()
    if (aborted) return cb()
    var stopped = false
    key = key || []

    var walkController = {
      stop: function () {
        stopped = true
        cb()
      },
      // end all traversal and return values to the onDone cb
      return: function () {
        aborted = true
        returnValues = arguments
        cb()
      },
      next: function () {
        if (aborted) {
          return cb()
        }
        if (stopped) {
          return cb()
        }
        var children = node.getChildren()
        async.forEachOf(children, function (childData, index, cb) {
          var keyExtension = childData[0]
          var childRef = childData[1]
          var childKey = key.concat(keyExtension)
          self._lookupNode(childRef, function (childNode) {
            processNode(childRef, childNode, childKey, cb)
          })
        }, cb)
      },
      only: function (childIndex) {
        var childRef = node.getValue(childIndex)
        self._lookupNode(childRef, function (childNode) {
          var childKey = key.slice()
          childKey.push(childIndex)
          processNode(childRef, childNode, childKey, cb)
        })
      }
    }
    onNode(nodeRef, node, key, walkController)
  }
}

/**
 * saves a stack
 * @method _saveStack
 * @param {Array} key - the key. Should follow the stack
 * @param {Array} stack - a stack of nodes to the value given by the key
 * @param {Array} opStack - a stack of levelup operations to commit at the end of this funciton
 * @param {Function} cb
 */
Trie.prototype._saveStack = function (key, stack, opStack, cb) {
  var lastRoot

  // update nodes
  while (stack.length) {
    var node = stack.pop()
    if (node.type === 'leaf') {
      key.splice(key.length - node.key.length)
    } else if (node.type === 'extention') {
      key.splice(key.length - node.key.length)
      if (lastRoot) {
        node.value = lastRoot
      }
    } else if (node.type === 'branch') {
      if (lastRoot) {
        var branchKey = key.pop()
        node.setValue(branchKey, lastRoot)
      }
    }
    lastRoot = this._formatNode(node, stack.length === 0, opStack)
  }

  if (lastRoot) {
    this.root = lastRoot
  }

  this._batchNodes(opStack, cb)
}

Trie.prototype._deleteNode = function (key, stack, cb) {
  function processBranchNode (key, branchKey, branchNode, parentNode, stack) {
    // branchNode is the node ON the branch node not THE branch node
    var branchNodeKey = branchNode.key
    if (!parentNode || parentNode.type === 'branch') {
      // branch->?
      if (parentNode) {
        stack.push(parentNode)
      }

      if (branchNode.type === 'branch') {
        // create an extention node
        // branch->extention->branch
        var extentionNode = new TrieNode('extention', [branchKey], null)
        stack.push(extentionNode)
        key.push(branchKey)
      } else {
        // branch key is an extention or a leaf
        // branch->(leaf or extention)
        branchNodeKey.unshift(branchKey)
        branchNode.key = branchNodeKey

        // hackery. This is equvilant to array.concat except we need keep the
        // rerfance to the `key` that was passed in.
        branchNodeKey.unshift(0)
        branchNodeKey.unshift(key.length)
        key.splice.apply(key, branchNodeKey)
      }
      stack.push(branchNode)
    } else {
      // parent is a extention
      var parentKey = parentNode.key
      if (branchNode.type === 'branch') {
        // ext->branch
        parentKey.push(branchKey)
        key.push(branchKey)
        parentNode.key = parentKey
        stack.push(parentNode)
      } else {
        // branch node is an leaf or extention and parent node is an exstention
        // add two keys together
        // dont push the parent node
        branchNodeKey.unshift(branchKey)
        key = key.concat(branchNodeKey)
        parentKey = parentKey.concat(branchNodeKey)
        branchNode.key = parentKey
      }
      stack.push(branchNode)
    }

    return key
  }

  var lastNode = stack.pop()
  var parentNode = stack.pop()
  var opStack = []
  var self = this

  if (!Array.isArray(key)) {
    // convert key to nibbles
    key = TrieNode.stringToNibbles(key)
  }

  if (!parentNode) {
    // the root here has to be a leaf.
    this.root = this.EMPTY_TRIE_ROOT
    cb()
  } else {
    if (lastNode.type === 'branch') {
      lastNode.value = null
    } else {
      // the lastNode has to be a leaf if its not a branch. And a leaf's parent
      // if it has one must be a branch.
      var lastNodeKey = lastNode.key
      key.splice(key.length - lastNodeKey.length)
      // delete the value
      this._formatNode(lastNode, false, true, opStack)
      parentNode.setValue(key.pop(), null)
      lastNode = parentNode
      parentNode = stack.pop()
    }

    // nodes on the branch
    var branchNodes = []
    // count the number of nodes on the branch
    lastNode.raw.forEach(function (node, i) {
      var val = lastNode.getValue(i)
      if (val) branchNodes.push([i, val])
    })

    // if there is only one branch node left, collapse the branch node
    if (branchNodes.length === 1) {
      // add the one remaing branch node to node above it
      var branchNode = branchNodes[0][1]
      var branchNodeKey = branchNodes[0][0]

      // look up node
      this._lookupNode(branchNode, function (foundNode) {
        key = processBranchNode(key, branchNodeKey, foundNode, parentNode, stack, opStack)
        self._saveStack(key, stack, opStack, cb)
      })
    } else {
      // simple removing a leaf and recaluclation the stack
      if (parentNode) {
        stack.push(parentNode)
      }

      stack.push(lastNode)
      self._saveStack(key, stack, opStack, cb)
    }
  }
}

// Creates the initial node from an empty tree
Trie.prototype._createInitialNode = function (key, value, cb) {
  var newNode = new TrieNode('leaf', key, value)
  this.root = newNode.hash()
  this._putNode(newNode, cb)
}

// formats node to be saved by levelup.batch.
// returns either the hash that will be used key or the rawNode
Trie.prototype._formatNode = function (node, topLevel, remove, opStack) {
  if (arguments.length === 3) {
    opStack = remove
    remove = false
  }

  var rlpNode = node.serialize()
  if (rlpNode.length >= 32 || topLevel) {
    var hashRoot = node.hash()

    if (remove && this.isCheckpoint) {
      opStack.push({
        type: 'del',
        key: hashRoot
      })
    } else {
      opStack.push({
        type: 'put',
        key: hashRoot,
        value: rlpNode
      })
    }
    return hashRoot
  }
  return node.raw
}

/**
 * The `data` event is given an `Object` hat has two properties; the `key` and the `value`. Both should be Buffers.
 * @method createReadStream
 * @return {stream.Readable} Returns a [stream](https://nodejs.org/dist/latest-v5.x/docs/api/stream.html#stream_class_stream_readable) of the contents of the `trie`
 */
Trie.prototype.createReadStream = function () {
  return new ReadStream(this)
}

// creates a new trie backed by the same db
// and starting at the same root
Trie.prototype.copy = function () {
  return new Trie(this.db, this.root)
}

/**
 * The given hash of operations (key additions or deletions) are executed on the DB
 * @method batch
 * @example
 * var ops = [
 *    { type: 'del', key: 'father' }
 *  , { type: 'put', key: 'name', value: 'Yuri Irsenovich Kim' }
 *  , { type: 'put', key: 'dob', value: '16 February 1941' }
 *  , { type: 'put', key: 'spouse', value: 'Kim Young-sook' }
 *  , { type: 'put', key: 'occupation', value: 'Clown' }
 * ]
 * trie.batch(ops)
 * @param {Array} ops
 * @param {Function} cb
 */
Trie.prototype.batch = function (ops, cb) {
  var self = this

  async.eachSeries(ops, function (op, cb2) {
    if (op.type === 'put') {
      self.put(op.key, op.value, cb2)
    } else if (op.type === 'del') {
      self.del(op.key, cb2)
    } else {
      cb2()
    }
  }, cb)
}

/**
 * Checks if a given root exists
 * @method checkRoot
 * @param {Buffer} root
 * @param {Function} cb
 */
Trie.prototype.checkRoot = function (root, cb) {
  root = ethUtil.toBuffer(root)
  this._lookupNode(root, function (value) {
    cb(null, !!value)
  })
}


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

const Readable = __webpack_require__(39).Readable
const TrieNode = __webpack_require__(24)
const util = __webpack_require__(1)

module.exports = TrieReadStream

function TrieReadStream (trie) {
  this.trie = trie
  this.next = null
  Readable.call(this, {
    objectMode: true
  })
}

util.inherits(TrieReadStream, Readable)

TrieReadStream.prototype._read = function () {
  var self = this
  if (!self._started) {
    self._started = true
    self.trie._findValueNodes(function (nodeRef, node, key, next) {
      self.push({
        key: TrieNode.nibblesToBuffer(key),
        value: node.value
      })
      next()
    }, function () {
      // close stream
      self.push(null)
    })
  }
}


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

const levelup = __webpack_require__(35)
const memdown = __webpack_require__(36)
const async = __webpack_require__(2)
const inherits = __webpack_require__(1).inherits
const Readable = __webpack_require__(39).Readable
const levelws = __webpack_require__(88)
const callTogether = __webpack_require__(13).callTogether

module.exports = checkpointInterface

function checkpointInterface (trie) {
  this._scratch = null
  trie._checkpoints = []

  Object.defineProperty(trie, 'isCheckpoint', {
    get: function () {
      return !!trie._checkpoints.length
    }
  })

  // new methods
  trie.checkpoint = checkpoint
  trie.commit = commit
  trie.revert = revert
  trie._enterCpMode = _enterCpMode
  trie._exitCpMode = _exitCpMode
  trie.createScratchReadStream = createScratchReadStream

  // overwrites
  trie.copy = copy.bind(trie, trie.copy.bind(trie))
}

/**
 * Creates a checkpoint that can later be reverted to or committed. After this is called, no changes to the trie will be permanently saved until `commit` is called
 * @method checkpoint
 */
function checkpoint () {
  var self = this
  var wasCheckpoint = self.isCheckpoint
  self._checkpoints.push(self.root)
  if (!wasCheckpoint && self.isCheckpoint) {
    self._enterCpMode()
  }
}

/**
 * commits a checkpoint to disk
 * @method commit
 * @param {Function} cb the callback
 */
function commit (cb) {
  var self = this
  cb = callTogether(cb, self.sem.leave)

  self.sem.take(function () {
    if (self.isCheckpoint) {
      self._checkpoints.pop()
      if (!self.isCheckpoint) {
        self._exitCpMode(true, cb)
      } else {
        cb()
      }
    } else {
      throw new Error('trying to commit when not checkpointed')
    }
  })
}

/**
 * Reverts the trie to the state it was at when `checkpoint` was first called.
 * @method revert
 * @param {Function} cb the callback
 */
function revert (cb) {
  var self = this
  cb = callTogether(cb, self.sem.leave)

  self.sem.take(function () {
    if (self.isCheckpoint) {
      self.root = self._checkpoints.pop()
      if (!self.isCheckpoint) {
        self._exitCpMode(false, cb)
        return
      }
    }

    cb()
  })
}

// enter into checkpoint mode
function _enterCpMode () {
  this._scratch = levelup('', {
    db: memdown
  })
  this._getDBs.unshift(this._scratch)
  this.__putDBs = this._putDBs
  this._putDBs = [this._scratch]
  this._putRaw = this.putRaw
  this.putRaw = putRaw
}

// exit from checkpoint mode
function _exitCpMode (commitState, cb) {
  var self = this
  var scratch = this._scratch
  this._scratch = null
  this._getDBs.shift()
  this._putDBs = this.__putDBs
  this.putRaw = this._putRaw

  function flushScratch (db, cb) {
    if (!db.createWriteStream) {
      db = levelws(db)
    }

    self.createScratchReadStream(scratch)
      .pipe(db.createWriteStream())
      .on('close', cb)
  }

  if (commitState) {
    async.map(this._putDBs, flushScratch, cb)
  } else {
    cb()
  }
}

// adds the interface when copying the trie
function copy (_super) {
  var trie = _super()
  checkpointInterface(trie)
  trie._scratch = this._scratch
  // trie._checkpoints = this._checkpoints.slice()
  return trie
}

function putRaw (key, val, cb) {
  function dbPut (db, cb2) {
    db.put(key, val, {
      keyEncoding: 'binary',
      valueEncoding: 'binary'
    }, cb2)
  }
  async.each(this.__putDBs, dbPut, cb)
}

function createScratchReadStream (scratch) {
  var trie = this.copy()
  scratch = scratch || this._scratch
  // only read from the scratch
  trie._getDBs = [scratch]
  trie._scratch = scratch
  return new ScratchReadStream(trie)
}

// ScratchReadStream
// this is used to minimally dump the scratch into the db

inherits(ScratchReadStream, Readable)

function ScratchReadStream (trie) {
  this.trie = trie
  this.next = null
  Readable.call(this, {
    objectMode: true
  })
}

ScratchReadStream.prototype._read = function () {
  var self = this
  if (!self._started) {
    self._started = true
    self.trie._findDbNodes(function (nodeRef, node, key, next) {
      self.push({
        key: nodeRef,
        value: node.serialize()
      })
      next()
    }, function () {
      // close stream
      self.push(null)
    })
  }
}


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("level-ws");

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

const TrieNode = __webpack_require__(24)
const ethUtil = __webpack_require__(0)
const matchingNibbleLength = __webpack_require__(13).matchingNibbleLength

/**
 * Returns a merkle proof for a given key
 * @method Trie.prove
 * @param {Trie} trie
 * @param {String} key
 * @param {Function} cb A callback `Function` (arguments {Error} `err`, {Array.<TrieNode>} `proof`)
 */
exports.prove = function (trie, key, cb) {
  var nodes

  trie.findPath(key, function (err, node, remaining, stack) {
    if (err) return cb(err)
    if (remaining.length > 0) return cb(new Error('Node does not contain the key'))
    nodes = stack
    var p = []
    for (var i = 0; i < nodes.length; i++) {
      var rlpNode = nodes[i].serialize()

      if ((rlpNode.length >= 32) || (i === 0)) {
        p.push(rlpNode)
      }
    }
    cb(null, p)
  })
}

/**
 * Verifies a merkle proof for a given key
 * @method Trie.verifyProof
 * @param {Buffer} rootHash
 * @param {String} key
 * @param {Array.<TrieNode>} proof
 * @param {Function} cb A callback `Function` (arguments {Error} `err`, {String} `val`)
 */
exports.verifyProof = function (rootHash, key, proof, cb) {
  key = TrieNode.stringToNibbles(key)
  var wantHash = ethUtil.toBuffer(rootHash)
  for (var i = 0; i < proof.length; i++) {
    var p = ethUtil.toBuffer(proof[i])
    var hash = ethUtil.sha3(proof[i])
    if (Buffer.compare(hash, wantHash)) {
      return cb(new Error('Bad proof node ' + i + ': hash mismatch'))
    }
    var node = new TrieNode(ethUtil.rlp.decode(p))
    var cld
    if (node.type === 'branch') {
      if (key.length === 0) {
        if (i !== proof.length - 1) {
          return cb(new Error('Additional nodes at end of proof (branch)'))
        }
        return cb(null, node.value)
      }
      cld = node.raw[key[0]]
      key = key.slice(1)
      if (cld.length === 2) {
        var embeddedNode = new TrieNode(cld)
        if (i !== proof.length - 1) {
          return cb(new Error('Additional nodes at end of proof (embeddedNode)'))
        }

        if (matchingNibbleLength(embeddedNode.key, key) !== embeddedNode.key.length) {
          return cb(new Error('Key length does not match with the proof one (embeddedNode)'))
        }
        key = key.slice(embeddedNode.key.length)
        if (key.length !== 0) {
          return cb(new Error('Key does not match with the proof one (embeddedNode)'))
        }
        return cb(null, embeddedNode.value)
      } else {
        wantHash = cld
      }
    } else if ((node.type === 'extention') || (node.type === 'leaf')) {
      if (matchingNibbleLength(node.key, key) !== node.key.length) {
        return cb(new Error('Key does not match with the proof one (extention|leaf)'))
      }
      cld = node.value
      key = key.slice(node.key.length)
      if (key.length === 0) {
        if (i !== proof.length - 1) {
          return cb(new Error('Additional nodes at end of proof (extention|leaf)'))
        }
        return cb(null, cld)
      } else {
        wantHash = cld
      }
    } else {
      return cb(new Error('Invalid node type'))
    }
  }
  cb(new Error('Unexpected end of proof'))
}


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

const ethUtil = __webpack_require__(0)

module.exports = secureInterface

function secureInterface (trie) {
  // overwrites
  trie.copy = copy.bind(trie, trie.copy.bind(trie))
  trie.get = get.bind(trie, trie.get.bind(trie))
  trie.put = put.bind(trie, trie.put.bind(trie))
  trie.del = del.bind(trie, trie.del.bind(trie))
}

// adds the interface when copying the trie
function copy (_super) {
  var trie = _super()
  secureInterface(trie)
  return trie
}

function get (_super, key, cb) {
  var hash = ethUtil.sha3(key)
  _super(hash, cb)
}

// for a falsey value, use the original key
// to avoid double hashing the key
function put (_super, key, val, cb) {
  if (!val) {
    this.del(key, cb)
  } else {
    var hash = ethUtil.sha3(key)
    _super(hash, val, cb)
  }
}

function del (_super, key, cb) {
  var hash = ethUtil.sha3(key)
  _super(hash, cb)
}


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("lru");

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
const ProviderEngine = __webpack_require__(93);
const CacheSubprovider = __webpack_require__(40);
const FixtureSubprovider = __webpack_require__(41);
const FilterSubprovider = __webpack_require__(25);
const VmSubprovider = __webpack_require__(97);
const HookedWalletSubprovider = __webpack_require__(47);
const NonceSubprovider = __webpack_require__(59);
const RpcSubprovider = __webpack_require__(159);
const createPayload = __webpack_require__(9);
const ZeroClientProvider = __webpack_require__(162);
var abi = __webpack_require__(62);
var utils = __webpack_require__(189);
var tokenAbi = [{ "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "inputs": [], "type": "constructor" }];
var BN = __webpack_require__(191);
var VmEngine = ZeroClientProvider({
    rpcUrl: 'https://mainnet.infura.io'
});
VmEngine.getBalance = function (args, a) {
    console.log("getbalance====== ==================");
    var payload = createPayload({ jsonrpc: '2.0', method: 'eth_getBalance', params: [args, "latest"], id: 1 });
    VmEngine.sendAsync(payload, a);
};
VmEngine.getAccount = function (args, a) {
    VmEngine.sendAsync(createPayload({ jsonrpc: '2.0', method: 'eth_getKeyValue', params: ['0x2a65aca4d5fc5b5c859090a6c34d164135398226'], id: 1 }), function (err, response) {
        console.log("response", response);
    });
};
VmEngine.getAllTokens = function (args, a) {
    var argss = ["address", "bool", "bool", "bool", "uint256"];
    console.log("Get Token Balance for : ", args);
    var vals = [args, "true", "true", "true", 0];
    var encoded = utils.encodeCall("getAllBalance", argss, vals);
    var pl = createPayload({ jsonrpc: '2.0', method: 'eth_call', params: [{ to: "0xbe1ecf8e340f13071761e0eef054d9a511e1cb56", data: encoded }, "pending"], id: 1 });
    VmEngine.sendAsync(pl, a);
};
exports.default = VmEngine;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("web3-provider-engine");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("clone");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("json-stable-stringify");

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// gotta keep it within MAX_SAFE_INTEGER
const extraDigits = 3

module.exports = createRandomId


function createRandomId(){
  // 13 time digits
  var datePart = new Date().getTime()*Math.pow(10, extraDigits)
  // 3 random digits
  var extraPart = Math.floor(Math.random()*Math.pow(10, extraDigits))
  // 16 digits
  return datePart+extraPart
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

const doWhilst = __webpack_require__(98)
const inherits = __webpack_require__(1).inherits
const Stoplight = __webpack_require__(18)
const createVm = __webpack_require__(101).fromWeb3Provider
const Block = __webpack_require__(27)
const FakeTransaction = __webpack_require__(128)
const ethUtil = __webpack_require__(0)
const createPayload = __webpack_require__(9)
const rpcHexEncoding = __webpack_require__(46)
const Subprovider = __webpack_require__(3)

module.exports = VmSubprovider

// handles the following RPC methods:
//   eth_call
//   eth_estimateGas


inherits(VmSubprovider, Subprovider)

function VmSubprovider(opts){
  const self = this
  self.opts = opts || {};
  self.methods = ['eth_call', 'eth_estimateGas']
  // set initialization blocker
  self._ready = new Stoplight()
  self._blockGasLimit = null
}

// setup a block listener on 'setEngine'
VmSubprovider.prototype.setEngine = function(engine) {
  const self = this
  Subprovider.prototype.setEngine.call(self, engine)
  // unblock initialization after first block
  engine.once('block', function(block) {
    self._blockGasLimit = ethUtil.bufferToInt(block.gasLimit)
    self._ready.go()
  })
}

VmSubprovider.prototype.handleRequest = function(payload, next, end) {
  if (this.methods.indexOf(payload.method) < 0) {
    return next()
  }

  const self = this
  switch (payload.method) {

    case 'eth_call':
      self.runVm(payload, function(err, results){
        if (err) return end(err)
        var result = '0x'
        if (!results.error && results.vm.return) {
          result = ethUtil.addHexPrefix(results.vm.return.toString('hex'))
        }
        end(null, result)
      })
      return

    case 'eth_estimateGas':
      self.estimateGas(payload, end)
      return
  }
}

VmSubprovider.prototype.estimateGas = function(payload, end) {
    const self = this
    var lo = 0
    var hi = self._blockGasLimit

    var minDiffBetweenIterations = 1200
    var prevGasLimit = self._blockGasLimit
    doWhilst(
      function(callback) {
        // Take a guess at the gas, and check transaction validity
        var mid = (hi + lo) / 2
        payload.params[0].gas = mid
        self.runVm(payload, function(err, results) {
            gasUsed = err ? self._blockGasLimit : ethUtil.bufferToInt(results.gasUsed)
            if (err || gasUsed === 0) {
                lo = mid
            } else {
                hi = mid
                // Perf improvement: stop the binary search when the difference in gas between two iterations
                // is less then `minDiffBetweenIterations`. Doing this cuts the number of iterations from 23
                // to 12, with only a ~1000 gas loss in precision.
                if (Math.abs(prevGasLimit - mid) < minDiffBetweenIterations) {
                    lo = hi
                }
            }
            prevGasLimit = mid
            callback()
        })
      },
      function() { return lo+1 < hi },
      function(err) {
          if (err) {
              end(err)
          } else {
              hi = Math.floor(hi)
              var gasEstimateHex = rpcHexEncoding.intToQuantityHex(hi)
              end(null, gasEstimateHex)
          }
      }
    )
}

VmSubprovider.prototype.runVm = function(payload, cb){
  const self = this

  var blockData = self.currentBlock
  var block = blockFromBlockData(blockData)
  var blockNumber = ethUtil.addHexPrefix(blockData.number.toString('hex'))

  // create vm with state lookup intercepted
  var vm = self.vm = createVm(self.engine, blockNumber, {
    enableHomestead: true
  })

  if (self.opts.debug) {
    vm.on('step', function (data) {
      console.log(data.opcode.name)
    })
  }

  // create tx
  var txParams = payload.params[0]
  // console.log('params:', payload.params)

  const normalizedTxParams = {
    to: txParams.to ? ethUtil.addHexPrefix(txParams.to) : undefined,
    from: txParams.from ? ethUtil.addHexPrefix(txParams.from) : undefined,
    value: txParams.value ? ethUtil.addHexPrefix(txParams.value) : undefined,
    data: txParams.data ? ethUtil.addHexPrefix(txParams.data) : undefined,
    gasLimit: txParams.gas ? ethUtil.addHexPrefix(txParams.gas) : block.header.gasLimit,
    gasPrice: txParams.gasPrice ? ethUtil.addHexPrefix(txParams.gasPrice) : undefined,
    nonce: txParams.nonce ? ethUtil.addHexPrefix(txParams.nonce) : undefined,
  }
  var tx = new FakeTransaction(normalizedTxParams)
  tx._from = normalizedTxParams.from || '0x0000000000000000000000000000000000000000'

  vm.runTx({
    tx: tx,
    block: block,
    skipNonce: true,
    skipBalance: true
  }, function(err, results) {
    if (err) return cb(err)
    if (results.error != null) {
      return cb(new Error("VM error: " + results.error))
    }
    if (results.vm && results.vm.exception !== 1) {
      return cb(new Error("VM Exception while executing " + payload.method + ": " + results.vm.exceptionError))
    }

    cb(null, results)
  })

}

function blockFromBlockData(blockData){
  var block = new Block()
  // block.header.hash = ethUtil.addHexPrefix(blockData.hash.toString('hex'))

  block.header.parentHash = blockData.parentHash
  block.header.uncleHash = blockData.sha3Uncles
  block.header.coinbase = blockData.miner
  block.header.stateRoot = blockData.stateRoot
  block.header.transactionTrie = blockData.transactionsRoot
  block.header.receiptTrie = blockData.receiptRoot || blockData.receiptsRoot
  block.header.bloom = blockData.logsBloom
  block.header.difficulty = blockData.difficulty
  block.header.number = blockData.number
  block.header.gasLimit = blockData.gasLimit
  block.header.gasUsed = blockData.gasUsed
  block.header.timestamp = blockData.timestamp
  block.header.extraData = blockData.extraData
  return block
}


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doWhilst;

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _slice = __webpack_require__(15);

var _slice2 = _interopRequireDefault(_slice);

var _onlyOnce = __webpack_require__(20);

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = (0, _onlyOnce2.default)(callback || _noop2.default);
    var _iteratee = (0, _wrapAsync2.default)(iteratee);
    var next = function (err /*, ...args*/) {
        if (err) return callback(err);
        var args = (0, _slice2.default)(arguments, 1);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}
module.exports = exports['default'];

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (fn) {
    return function () /*...args, callback*/{
        var args = (0, _slice2.default)(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};

var _slice = __webpack_require__(15);

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasNextTick = exports.hasSetImmediate = undefined;
exports.fallback = fallback;
exports.wrap = wrap;

var _slice = __webpack_require__(15);

var _slice2 = _interopRequireDefault(_slice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hasSetImmediate = exports.hasSetImmediate = typeof setImmediate === 'function' && setImmediate;
var hasNextTick = exports.hasNextTick = typeof process === 'object' && typeof process.nextTick === 'function';

function fallback(fn) {
    setTimeout(fn, 0);
}

function wrap(defer) {
    return function (fn /*, ...args*/) {
        var args = (0, _slice2.default)(arguments, 1);
        defer(function () {
            fn.apply(null, args);
        });
    };
}

var _defer;

if (hasSetImmediate) {
    _defer = setImmediate;
} else if (hasNextTick) {
    _defer = process.nextTick;
} else {
    _defer = fallback;
}

exports.default = wrap(_defer);

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var inherits = __webpack_require__(1).inherits;
var async = __webpack_require__(2);
var ethUtil = __webpack_require__(0);
var Account = __webpack_require__(12);
var FakeMerklePatriciaTree = __webpack_require__(102);
var VM = __webpack_require__(103);
var ZERO_BUFFER = Buffer.alloc(32, 0);

module.exports = createHookedVm;
module.exports.fromWeb3Provider = fromWeb3Provider;

/*

  This is a helper for creating a vm with modified state lookups
  this should be made obsolete by a better public API for StateManager

  ```js
  var vm = createHookedVm({}, {
    fetchAccountBalance: function(addressHex, cb){ ... },
    fetchAccountNonce: function(addressHex, cb){ ... },
    fetchAccountCode: function(addressHex, cb){ ... },
    fetchAccountStorage: function(addressHex, keyHex, cb){ ... },
  })
  vm.runTx(txParams, cb)
  ```

*/

function createHookedVm(opts, hooks) {
  var codeStore = new FallbackAsyncStore(hooks.fetchAccountCode.bind(hooks));

  var vm = new VM(opts);
  vm.stateManager._lookupStorageTrie = createAccountStorageTrie;
  vm.stateManager.cache._lookupAccount = loadAccount;
  vm.stateManager.getContractCode = codeStore.get.bind(codeStore);
  vm.stateManager.setContractCode = codeStore.set.bind(codeStore);

  return vm;

  function createAccountStorageTrie(address, cb) {
    var addressHex = ethUtil.addHexPrefix(address.toString('hex'));
    var storageTrie = new FallbackStorageTrie({
      fetchStorage: function fetchStorage(key, cb) {
        hooks.fetchAccountStorage(addressHex, ethUtil.addHexPrefix(key), cb);
      }
    });
    cb(null, storageTrie);
  }

  function loadAccount(address, cb) {
    var addressHex = ethUtil.addHexPrefix(address.toString('hex'));
    async.parallel({
      nonce: hooks.fetchAccountNonce.bind(hooks, addressHex),
      balance: hooks.fetchAccountBalance.bind(hooks, addressHex)
    }, function (err, results) {
      if (err) return cb(err);

      results._exists = results.nonce !== '0x0' || results.balance !== '0x0' || results._code !== '0x';
      // console.log('fetch account results:', results)
      var account = new Account(results);
      // not used but needs to be anything but the default (ethUtil.SHA3_NULL)
      // code lookups are handled by `codeStore`
      account.codeHash = ZERO_BUFFER.slice();
      cb(null, account);
    });
  }
}

/*

  Additional helper for creating a vm with rpc state lookups
  blockNumber to query against is fixed

*/

function fromWeb3Provider(provider, blockNumber, opts) {
  return createHookedVm(opts, {
    fetchAccountBalance: createRpcFunction(provider, 'eth_getBalance', blockNumber),
    fetchAccountNonce: createRpcFunction(provider, 'eth_getTransactionCount', blockNumber),
    fetchAccountCode: createRpcFunction(provider, 'eth_getCode', blockNumber),
    fetchAccountStorage: createRpcFunction(provider, 'eth_getStorageAt', blockNumber)
  });

  function createRpcFunction(provider, method, blockNumber) {
    return function sendRpcRequest() {
      // prepare arguments
      var args = [].slice.call(arguments);
      var cb = args.pop();
      args.push(blockNumber);
      // send rpc payload
      provider.sendAsync({
        id: 1,
        jsonrpc: '2.0',
        method: method,
        params: args
      }, function (err, res) {
        if (err) return cb(err);
        cb(null, res.result);
      });
    };
  }
}

//
// FallbackStorageTrie
//
// is a FakeMerklePatriciaTree that will let lookups
// fallback to the fetchStorage fn. writes shadow the underlying fetchStorage value.
// doesn't bother with a stateRoot
//

inherits(FallbackStorageTrie, FakeMerklePatriciaTree);

function FallbackStorageTrie(opts) {
  var self = this;
  FakeMerklePatriciaTree.call(self);
  self._fetchStorage = opts.fetchStorage;
}

FallbackStorageTrie.prototype.get = function (key, cb) {
  var self = this;
  var _super = FakeMerklePatriciaTree.prototype.get.bind(self);

  _super(key, function (err, value) {
    if (err) return cb(err);
    if (value) return cb(null, value);
    // if value not in tree, try network
    var keyHex = key.toString('hex');
    self._fetchStorage(keyHex, function (err, rawValue) {
      if (err) return cb(err);
      var value = ethUtil.toBuffer(rawValue);
      value = ethUtil.unpad(value);
      var encodedValue = ethUtil.rlp.encode(value);
      cb(null, encodedValue);
    });
  });
};

//
// FallbackAsyncStore
//
// is an async key-value store that will let lookups
// fallback to the network. puts are not sent.
//

function FallbackAsyncStore(fetchFn) {
  // console.log('FallbackAsyncStore - new')
  var self = this;
  self.fetch = fetchFn;
  self.cache = {};
}

FallbackAsyncStore.prototype.get = function (address, cb) {
  // console.log('FallbackAsyncStore - get', arguments)
  var self = this;
  var addressHex = '0x' + address.toString('hex');
  var code = self.cache[addressHex];
  if (code !== undefined) {
    cb(null, code);
  } else {
    // console.log('FallbackAsyncStore - fetch init')
    self.fetch(addressHex, function (err, value) {
      // console.log('FallbackAsyncStore - fetch return', arguments)
      if (err) return cb(err);
      value = ethUtil.toBuffer(value);
      self.cache[addressHex] = value;
      cb(null, value);
    });
  }
};

FallbackAsyncStore.prototype.set = function (address, code, cb) {
  // console.log('FallbackAsyncStore - set', arguments)
  var self = this;
  var addressHex = '0x' + address.toString('hex');
  self.cache[addressHex] = code;
  cb();
};

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("fake-merkle-patricia-tree");

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var util = __webpack_require__(1);
var ethUtil = __webpack_require__(0);
var StateManager = __webpack_require__(104);
var Account = __webpack_require__(12);
var AsyncEventEmitter = __webpack_require__(108);
var BN = ethUtil.BN;

// require the percomiled contracts
var num01 = __webpack_require__(109);
var num02 = __webpack_require__(110);
var num03 = __webpack_require__(111);
var num04 = __webpack_require__(112);
var num05 = __webpack_require__(113);
var num06 = __webpack_require__(114);
var num07 = __webpack_require__(115);
var num08 = __webpack_require__(116);

module.exports = VM;

VM.deps = {
  ethUtil: ethUtil,
  Account: __webpack_require__(12),
  Trie: __webpack_require__(44),
  rlp: __webpack_require__(0).rlp

  /**
   * @constructor
   * @param {Object} [opts]
   * @param {StateManager} [opts.stateManager] A state manager instance (EXPERIMENTAL - unstable API)
   * @param {Trie} [opts.state] A merkle-patricia-tree instance for the state tree (ignored if stateManager is passed)
   * @param {Blockchain} [opts.blockchain] A blockchain object for storing/retrieving blocks (ignored if stateManager is passed)
   * @param {Boolean} [opts.activatePrecompiles] Create entries in the state tree for the precompiled contracts
   * @param {Boolean} [opts.allowUnlimitedContractSize] Allows unlimited contract sizes while debugging (default: false; ONLY use during debugging)
   */
};function VM() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this.opts = opts;

  if (opts.stateManager) {
    this.stateManager = opts.stateManager;
  } else {
    this.stateManager = new StateManager({
      trie: opts.state,
      blockchain: opts.blockchain
    });
  }

  this.allowUnlimitedContractSize = opts.allowUnlimitedContractSize === undefined ? false : opts.allowUnlimitedContractSize;

  // temporary
  // this is here for a gradual transition to StateManager
  this.blockchain = this.stateManager.blockchain;
  this.trie = this.stateManager.trie;

  // precompiled contracts
  this._precompiled = {};
  this._precompiled['0000000000000000000000000000000000000001'] = num01;
  this._precompiled['0000000000000000000000000000000000000002'] = num02;
  this._precompiled['0000000000000000000000000000000000000003'] = num03;
  this._precompiled['0000000000000000000000000000000000000004'] = num04;
  this._precompiled['0000000000000000000000000000000000000005'] = num05;
  this._precompiled['0000000000000000000000000000000000000006'] = num06;
  this._precompiled['0000000000000000000000000000000000000007'] = num07;
  this._precompiled['0000000000000000000000000000000000000008'] = num08;

  if (this.opts.activatePrecompiles) {
    for (var i = 1; i <= 7; i++) {
      this.trie.put(new BN(i).toArrayLike(Buffer, 'be', 20), new Account().serialize());
    }
  }

  AsyncEventEmitter.call(this);
}

util.inherits(VM, AsyncEventEmitter);

VM.prototype.runCode = __webpack_require__(117);
VM.prototype.runJIT = __webpack_require__(122);
VM.prototype.runBlock = __webpack_require__(124);
VM.prototype.runTx = __webpack_require__(125);
VM.prototype.runCall = __webpack_require__(126);
VM.prototype.runBlockchain = __webpack_require__(127);

VM.prototype.copy = function () {
  return new VM({
    state: this.trie.copy(),
    blockchain: this.blockchain
  });
};

/**
 * Loads precompiled contracts into the state
 */
VM.prototype.loadCompiled = function (address, src, cb) {
  this.trie.db.put(address, src, cb);
};

VM.prototype.populateCache = function (addresses, cb) {
  this.stateManager.warmCache(addresses, cb);
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var Trie = __webpack_require__(34);
var common = __webpack_require__(4);
var async = __webpack_require__(2);
var Account = __webpack_require__(12);
var fakeBlockchain = __webpack_require__(105);
var Cache = __webpack_require__(106);
var utils = __webpack_require__(0);
var BN = utils.BN;
var rlp = utils.rlp;

module.exports = StateManager;

function StateManager(opts) {
  var self = this;

  var trie = opts.trie;
  if (!trie) {
    trie = new Trie(trie);
  }

  var blockchain = opts.blockchain;
  if (!blockchain) {
    blockchain = fakeBlockchain;
  }

  self.blockchain = blockchain;
  self.trie = trie;
  self._storageTries = {}; // the storage trie cache
  self.cache = new Cache(trie);
  self.touched = [];
}

var proto = StateManager.prototype;

// gets the account from the cache, or triggers a lookup and stores
// the result in the cache
proto.getAccount = function (address, cb) {
  this.cache.getOrLoad(address, cb);
};

// checks if an account exists
proto.exists = function (address, cb) {
  this.cache.getOrLoad(address, function (err, account) {
    cb(err, account.exists);
  });
};

// saves the account
proto._putAccount = function (address, account, cb) {
  var self = this;
  var addressHex = Buffer.from(address, 'hex');
  // TODO: dont save newly created accounts that have no balance
  // if (toAccount.balance.toString('hex') === '00') {
  // if they have money or a non-zero nonce or code, then write to tree
  self.cache.put(addressHex, account);
  self.touched.push(address);
  // self.trie.put(addressHex, account.serialize(), cb)
  cb();
};

proto.getAccountBalance = function (address, cb) {
  var self = this;
  self.getAccount(address, function (err, account) {
    if (err) {
      return cb(err);
    }
    cb(null, account.balance);
  });
};

proto.putAccountBalance = function (address, balance, cb) {
  var self = this;

  self.getAccount(address, function (err, account) {
    if (err) {
      return cb(err);
    }

    if (new BN(balance).isZero() && !account.exists) {
      return cb(null);
    }

    account.balance = balance;
    self._putAccount(address, account, cb);
  });
};

// sets the contract code on the account
proto.putContractCode = function (address, value, cb) {
  var self = this;
  self.getAccount(address, function (err, account) {
    if (err) {
      return cb(err);
    }
    // TODO: setCode use trie.setRaw which creates a storage leak
    account.setCode(self.trie, value, function (err) {
      if (err) {
        return cb(err);
      }
      self._putAccount(address, account, cb);
    });
  });
};

// given an account object, returns the code
proto.getContractCode = function (address, cb) {
  var self = this;
  self.getAccount(address, function (err, account) {
    if (err) {
      return cb(err);
    }
    account.getCode(self.trie, cb);
  });
};

// creates a storage trie from the primary storage trie
proto._lookupStorageTrie = function (address, cb) {
  var self = this;
  // from state trie
  self.getAccount(address, function (err, account) {
    if (err) {
      return cb(err);
    }
    var storageTrie = self.trie.copy();
    storageTrie.root = account.stateRoot;
    storageTrie._checkpoints = [];
    cb(null, storageTrie);
  });
};

// gets the storage trie from the storage cache or does lookup
proto._getStorageTrie = function (address, cb) {
  var self = this;
  var storageTrie = self._storageTries[address.toString('hex')];
  // from storage cache
  if (storageTrie) {
    return cb(null, storageTrie);
  }
  // lookup from state
  self._lookupStorageTrie(address, cb);
};

proto.getContractStorage = function (address, key, cb) {
  var self = this;
  self._getStorageTrie(address, function (err, trie) {
    if (err) {
      return cb(err);
    }
    trie.get(key, function (err, value) {
      if (err) {
        return cb(err);
      }
      var decoded = rlp.decode(value);
      cb(null, decoded);
    });
  });
};

proto.putContractStorage = function (address, key, value, cb) {
  var self = this;
  self._getStorageTrie(address, function (err, storageTrie) {
    if (err) {
      return cb(err);
    }

    if (value && value.length) {
      // format input
      var encodedValue = rlp.encode(value);
      storageTrie.put(key, encodedValue, finalize);
    } else {
      // deleting a value
      storageTrie.del(key, finalize);
    }

    function finalize(err) {
      if (err) return cb(err);
      // update storage cache
      self._storageTries[address.toString('hex')] = storageTrie;
      // update contract stateRoot
      var contract = self.cache.get(address);
      contract.stateRoot = storageTrie.root;
      self._putAccount(address, contract, cb);
      self.touched.push(address);
    }
  });
};

proto.commitContracts = function (cb) {
  var self = this;
  async.each(Object.keys(self._storageTries), function (address, cb) {
    var trie = self._storageTries[address];
    delete self._storageTries[address];
    // TODO: this is broken on the block level; all the contracts get written to
    // disk redardless of whether or not the block is valid
    if (trie.isCheckpoint) {
      trie.commit(cb);
    } else {
      cb();
    }
  }, cb);
};

proto.revertContracts = function () {
  var self = this;
  self._storageTries = {};
};

//
// blockchain
//
proto.getBlockHash = function (number, cb) {
  var self = this;
  self.blockchain.getBlock(number, function (err, block) {
    if (err) {
      return cb(err);
    }
    var blockHash = block.hash();
    cb(null, blockHash);
  });
};

//
// revision history
//
proto.checkpoint = function () {
  var self = this;
  self.trie.checkpoint();
  self.cache.checkpoint();
};

proto.commit = function (cb) {
  var self = this;
  // setup trie checkpointing
  self.trie.commit(function () {
    // setup cache checkpointing
    self.cache.commit();
    cb();
  });
};

proto.revert = function (cb) {
  var self = this;
  // setup trie checkpointing
  self.trie.revert();
  // setup cache checkpointing
  self.cache.revert();
  cb();
};

//
// cache stuff
//
proto.getStateRoot = function (cb) {
  var self = this;
  self.cacheFlush(function (err) {
    if (err) {
      return cb(err);
    }
    var stateRoot = self.trie.root;
    cb(null, stateRoot);
  });
};

/**
 * @param {Set} address
 * @param {cb} function
 */
proto.warmCache = function (addresses, cb) {
  this.cache.warm(addresses, cb);
};

proto.dumpStorage = function (address, cb) {
  var self = this;
  self._getStorageTrie(address, function (err, trie) {
    if (err) {
      return cb(err);
    }
    var storage = {};
    var stream = trie.createReadStream();
    stream.on('data', function (val) {
      storage[val.key.toString('hex')] = val.value.toString('hex');
    });
    stream.on('end', function () {
      cb(storage);
    });
  });
};

proto.hasGenesisState = function (cb) {
  var root = common.genesisStateRoot.v;
  this.trie.checkRoot(root, cb);
};

proto.generateCanonicalGenesis = function (cb) {
  var self = this;

  this.hasGenesisState(function (err, genesis) {
    if (!genesis && !err) {
      self.generateGenesis(common.genesisState, cb);
    } else {
      cb(err);
    }
  });
};

proto.generateGenesis = function (initState, cb) {
  var self = this;
  var addresses = Object.keys(initState);
  async.eachSeries(addresses, function (address, done) {
    var account = new Account();
    account.balance = new BN(initState[address]).toArrayLike(Buffer);
    address = Buffer.from(address, 'hex');
    self.trie.put(address, account.serialize(), done);
  }, cb);
};

proto.accountIsEmpty = function (address, cb) {
  var self = this;
  self.getAccount(address, function (err, account) {
    if (err) {
      return cb(err);
    }

    cb(null, account.nonce.toString('hex') === '' && account.balance.toString('hex') === '' && account.codeHash.toString('hex') === utils.SHA3_NULL_S);
  });
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var utils = __webpack_require__(0);

module.exports = {
  getBlock: function getBlock(blockTag, cb) {
    var _hash;

    if (Buffer.isBuffer(blockTag)) {
      _hash = utils.sha3(blockTag);
    } else if (Number.isInteger(blockTag)) {
      _hash = utils.sha3('0x' + utils.toBuffer(blockTag).toString('hex'));
    } else {
      cb(new Error('Unknown blockTag type'));
    }

    var block = {
      hash: function hash() {
        return _hash;
      }
    };

    cb(null, block);
  },

  delBlock: function delBlock(hash, cb) {
    cb(null);
  }
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var Tree = __webpack_require__(107);
var Account = __webpack_require__(12);
var async = __webpack_require__(2);

var Cache = module.exports = function (trie) {
  this._cache = Tree();
  this._checkpoints = [];
  this._deletes = [];
  this._trie = trie;
};

Cache.prototype.put = function (key, val, fromTrie) {
  var modified = !fromTrie;
  this._update(key, val, modified, true);
};

// returns the queried account or an empty account
Cache.prototype.get = function (key) {
  var account = this.lookup(key);
  if (!account) {
    account = new Account();
    account.exists = false;
  }
  return account;
};

// returns the queried account or undefined
Cache.prototype.lookup = function (key) {
  key = key.toString('hex');

  var it = this._cache.find(key);
  if (it.node) {
    var account = new Account(it.value.val);
    account.exists = it.value.exists;
    return account;
  }
};

Cache.prototype._lookupAccount = function (address, cb) {
  var self = this;
  self._trie.get(address, function (err, raw) {
    if (err) return cb(err);
    var account = new Account(raw);
    var exists = !!raw;
    account.exists = exists;
    cb(null, account, exists);
  });
};

Cache.prototype.getOrLoad = function (key, cb) {
  var self = this;
  var account = this.lookup(key);
  if (account) {
    cb(null, account);
  } else {
    self._lookupAccount(key, function (err, account, exists) {
      if (err) return cb(err);
      self._update(key, account, false, exists);
      cb(null, account);
    });
  }
};

Cache.prototype.warm = function (addresses, cb) {
  var self = this;
  // shim till async supports iterators
  var accountArr = [];
  addresses.forEach(function (val) {
    if (val) accountArr.push(val);
  });

  async.eachSeries(accountArr, function (addressHex, done) {
    var address = Buffer.from(addressHex, 'hex');
    self._lookupAccount(address, function (err, account) {
      if (err) return done(err);
      self._update(address, account, false, account.exists);
      done();
    });
  }, cb);
};

Cache.prototype.flush = function (cb) {
  var it = this._cache.begin;
  var self = this;
  var next = true;
  async.whilst(function () {
    return next;
  }, function (done) {
    if (it.value && it.value.modified) {
      it.value.modified = false;
      it.value.val = it.value.val.serialize();
      self._trie.put(Buffer.from(it.key, 'hex'), it.value.val, function () {
        next = it.hasNext;
        it.next();
        done();
      });
    } else {
      next = it.hasNext;
      it.next();
      done();
    }
  }, function () {
    async.eachSeries(self._deletes, function (address, done) {
      self._trie.del(address, done);
    }, function () {
      self._deletes = [];
      cb();
    });
  });
};

Cache.prototype.checkpoint = function () {
  this._checkpoints.push(this._cache);
};

Cache.prototype.revert = function () {
  this._cache = this._checkpoints.pop(this._cache);
};

Cache.prototype.commit = function () {
  this._checkpoints.pop();
};

Cache.prototype.clear = function () {
  this._deletes = [];
  this._cache = Tree();
};

Cache.prototype.del = function (key) {
  this._deletes.push(key);
  key = key.toString('hex');
  this._cache = this._cache.remove(key);
};

Cache.prototype._update = function (key, val, modified, exists) {
  key = key.toString('hex');
  var it = this._cache.find(key);
  if (it.node) {
    this._cache = it.update({
      val: val,
      modified: modified,
      exists: true
    });
  } else {
    this._cache = this._cache.insert(key, {
      val: val,
      modified: modified,
      exists: exists
    });
  }
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("functional-red-black-tree");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("async-eventemitter");

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var error = __webpack_require__(6).ERROR;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};

  results.gasUsed = new BN(fees.ecrecoverGas.v);

  if (opts.gasLimit.lt(results.gasUsed)) {
    results.gasUsed = opts.gasLimit;
    results.exception = 0; // 0 means VM fail (in this case because of OOG)
    results.exceptionError = error.OUT_OF_GAS;
    return results;
  }

  var data = utils.setLengthRight(opts.data, 128);

  var msgHash = data.slice(0, 32);
  var v = data.slice(32, 64);
  var r = data.slice(64, 96);
  var s = data.slice(96, 128);

  var publicKey;
  try {
    publicKey = utils.ecrecover(msgHash, new BN(v).toNumber(), r, s);
  } catch (e) {
    return results;
  }

  results.return = utils.setLengthLeft(utils.publicToAddress(publicKey), 32);
  results.exception = 1;

  return results;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var error = __webpack_require__(6).ERROR;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;

  results.gasUsed = new BN(fees.sha256Gas.v);
  results.gasUsed.iadd(new BN(fees.sha256WordGas.v).imuln(Math.ceil(data.length / 32)));

  if (opts.gasLimit.lt(results.gasUsed)) {
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0; // 0 means VM fail (in this case because of OOG)
    return results;
  }

  results.return = utils.sha256(data);
  results.exception = 1;

  return results;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var error = __webpack_require__(6).ERROR;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;

  results.gasUsed = new BN(fees.ripemd160Gas.v);
  results.gasUsed.iadd(new BN(fees.ripemd160WordGas.v).imuln(Math.ceil(data.length / 32)));

  if (opts.gasLimit.lt(results.gasUsed)) {
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0; // 0 means VM fail (in this case because of OOG)
    return results;
  }

  results.return = utils.ripemd160(data, true);
  results.exception = 1;

  return results;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var fees = __webpack_require__(4);
var error = __webpack_require__(6).ERROR;
var assert = __webpack_require__(7);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;

  results.gasUsed = new BN(fees.identityGas.v);
  results.gasUsed.iadd(new BN(fees.identityWordGas.v).imuln(Math.ceil(data.length / 32)));

  if (opts.gasLimit.lt(results.gasUsed)) {
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0; // 0 means VM fail (in this case because of OOG)
    return results;
  }

  results.return = data;
  results.exception = 1;

  return results;
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var error = __webpack_require__(6).ERROR;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

var Gquaddivisor = fees.modexpGquaddivisor.v;

function multComplexity(x) {
  var fac1 = new BN(0);
  var fac2 = new BN(0);
  if (x.lten(64)) {
    return x.sqr();
  } else if (x.lten(1024)) {
    // return Math.floor(Math.pow(x, 2) / 4) + 96 * x - 3072
    fac1 = x.sqr().divn(4);
    fac2 = x.muln(96);
    return fac1.add(fac2).subn(3072);
  } else {
    // return Math.floor(Math.pow(x, 2) / 16) + 480 * x - 199680
    fac1 = x.sqr().divn(16);
    fac2 = x.muln(480);
    return fac1.add(fac2).subn(199680);
  }
}

function getAdjustedExponentLength(data) {
  var baseLen = new BN(data.slice(0, 32)).toNumber();
  var expLen = new BN(data.slice(32, 64));
  var expBytesStart = 96 + baseLen; // 96 for base length, then exponent length, and modulus length, then baseLen for the base data, then exponent bytes start
  var firstExpBytes = Buffer.from(data.slice(expBytesStart, expBytesStart + 32)); // first word of the exponent data
  firstExpBytes = utils.setLengthRight(firstExpBytes, 32); // reading past the data reads virtual zeros
  firstExpBytes = new BN(firstExpBytes);
  var max32expLen = 0;
  if (expLen.ltn(32)) {
    max32expLen = 32 - expLen.toNumber();
  }
  firstExpBytes = firstExpBytes.shrn(8 * Math.max(max32expLen, 0));

  var bitLen = -1;
  while (firstExpBytes.gtn(0)) {
    bitLen = bitLen + 1;
    firstExpBytes = firstExpBytes.ushrn(1);
  }
  var expLenMinus32OrZero = expLen.subn(32);
  if (expLenMinus32OrZero.ltn(0)) {
    expLenMinus32OrZero = new BN(0);
  }
  var eightTimesExpLenMinus32OrZero = expLenMinus32OrZero.muln(8);
  var adjustedExpLen = eightTimesExpLenMinus32OrZero;
  if (bitLen > 0) {
    adjustedExpLen.iaddn(bitLen);
  }
  return adjustedExpLen;
}

// Taken from https://stackoverflow.com/a/1503019
function expmod(B, E, M) {
  if (E.isZero()) return new BN(1).mod(M);
  var BM = B.mod(M);
  var R = expmod(BM, E.divn(2), M);
  R = R.mul(R).mod(M);
  if (E.mod(new BN(2)).isZero()) return R;
  return R.mul(BM).mod(M);
}

function getOOGResults(opts, results) {
  results.gasUsed = opts.gasLimit;
  results.exception = 0; // 0 means VM fail (in this case because of OOG)
  results.exceptionError = error.OUT_OF_GAS;
  return results;
}

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;

  var adjustedELen = getAdjustedExponentLength(data);
  if (adjustedELen.ltn(1)) {
    adjustedELen = new BN(1);
  }

  var bLen = new BN(data.slice(0, 32));
  var eLen = new BN(data.slice(32, 64));
  var mLen = new BN(data.slice(64, 96));

  var maxLen = bLen;
  if (maxLen.lt(mLen)) {
    maxLen = mLen;
  }
  var gasUsed = adjustedELen.mul(multComplexity(maxLen)).divn(Gquaddivisor);

  if (opts.gasLimit.lt(gasUsed)) {
    return getOOGResults(opts, results);
  }

  results.gasUsed = gasUsed;

  if (bLen.isZero()) {
    results.return = new BN(0).toArrayLike(Buffer, 'be', 1);
    results.exception = 1;
    return results;
  }

  if (mLen.isZero()) {
    results.return = Buffer.from([0]);
    results.exception = 1;
    return results;
  }

  var maxInt = new BN(Number.MAX_SAFE_INTEGER);
  var maxSize = new BN(2147483647); // ethereumjs-util setLengthRight limitation

  if (bLen.gt(maxSize) || eLen.gt(maxSize) || mLen.gt(maxSize)) {
    return getOOGResults(opts, results);
  }

  var bStart = new BN(96);
  var bEnd = bStart.add(bLen);
  var eStart = bEnd;
  var eEnd = eStart.add(eLen);
  var mStart = eEnd;
  var mEnd = mStart.add(mLen);

  if (mEnd.gt(maxInt)) {
    return getOOGResults(opts, results);
  }

  bLen = bLen.toNumber();
  eLen = eLen.toNumber();
  mLen = mLen.toNumber();

  var B = new BN(utils.setLengthRight(data.slice(bStart.toNumber(), bEnd.toNumber()), bLen));
  var E = new BN(utils.setLengthRight(data.slice(eStart.toNumber(), eEnd.toNumber()), eLen));
  var M = new BN(utils.setLengthRight(data.slice(mStart.toNumber(), mEnd.toNumber()), mLen));

  // console.log('MODEXP input')
  // console.log('B:', bLen, B)
  // console.log('E:', eLen, E)
  // console.log('M:', mLen, M)

  var R;
  if (M.isZero()) {
    R = new BN(0);
  } else {
    R = expmod(B, E, M);
  }
  var result = R.toArrayLike(Buffer, 'be', mLen);

  results.return = result;
  results.exception = 1;

  // console.log('MODEXP output', result)

  return results;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var error = __webpack_require__(6).ERROR;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

var bn128Module = __webpack_require__(26);
var ecAddPrecompile = bn128Module.cwrap('ec_add', 'string', ['string']);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;
  var inputHexStr = data.toString('hex');

  results.gasUsed = new BN(fees.ecAddGas.v);
  if (opts.gasLimit.lt(results.gasUsed)) {
    results.return = Buffer.alloc(0);
    results.exception = 0;
    results.gasUsed = new BN(opts.gasLimit);
    results.exceptionError = error.OUT_OF_GAS;
    return results;
  }

  var returnData = ecAddPrecompile(inputHexStr);

  // check ecadd success or failure by comparing the output length
  if (returnData.length !== 128) {
    results.return = Buffer.alloc(0);
    results.exception = 0;
    results.gasUsed = new BN(opts.gasLimit);
    results.exceptionError = error.OUT_OF_GAS;
  } else {
    results.return = Buffer.from(returnData, 'hex');
    results.exception = 1;
  }

  return results;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var ERROR = __webpack_require__(6).ERROR;
var BN = utils.BN;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

var bn128Module = __webpack_require__(26);
var ecMulPrecompile = bn128Module.cwrap('ec_mul', 'string', ['string']);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;

  var inputHexStr = data.toString('hex');
  results.gasUsed = new BN(fees.ecMulGas.v);

  if (opts.gasLimit.lt(results.gasUsed)) {
    results.return = Buffer.alloc(0);
    results.exception = 0;
    results.gasUsed = new BN(opts.gasLimit);
    results.exceptionError = ERROR.OUT_OF_GAS;
    return results;
  }

  var returnData = ecMulPrecompile(inputHexStr);

  // check ecmul success or failure by comparing the output length
  if (returnData.length !== 128) {
    results.return = Buffer.alloc(0);
    results.exception = 0;
  } else {
    results.return = Buffer.from(returnData, 'hex');
    results.exception = 1;
  }

  return results;
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var error = __webpack_require__(6).ERROR;
var fees = __webpack_require__(4);
var assert = __webpack_require__(7);

var bn128Module = __webpack_require__(26);
var ecPairingPrecompile = bn128Module.cwrap('ec_pairing', 'string', ['string']);

module.exports = function (opts) {
  assert(opts.data);

  var results = {};
  var data = opts.data;

  var inputHexStr = data.toString('hex');
  var inputData = Buffer.from(inputHexStr, 'hex');
  var inputDataSize = Math.floor(inputData.length / 192);

  var gascost = fees.ecPairingGas.v + inputDataSize * fees.ecPairingWordGas.v;
  results.gasUsed = new BN(gascost);

  if (opts.gasLimit.ltn(gascost)) {
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0; // 0 means VM fail (in this case because of OOG)
    return results;
  }

  var returnData = ecPairingPrecompile(inputHexStr);

  // check ecpairing success or failure by comparing the output length
  if (returnData.length !== 64) {
    results.return = Buffer.alloc(0);
    results.gasUsed = opts.gasLimit;
    results.exceptionError = error.OUT_OF_GAS;
    results.exception = 0;
  } else {
    results.return = Buffer.from(returnData, 'hex');
    results.exception = 1;
  }

  return results;
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*

This is the core of the Ethereum Virtual Machine (EVM or just VM).

NOTES:

stack items are lazly dupilicated.
So you must never directly change a buffer from the stack,
instead you should `copy` it first

not all stack items are 32 bytes, so if the operation realies on the stack
item length then you must use utils.pad(<item>, 32) first.
*/
var Buffer = __webpack_require__(5).Buffer;
var async = __webpack_require__(2);
var utils = __webpack_require__(0);
var Block = __webpack_require__(27);
var lookupOpInfo = __webpack_require__(118);
var opFns = __webpack_require__(119);
var exceptions = __webpack_require__(6);
var setImmediate = __webpack_require__(121).setImmediate;
var BN = utils.BN;

var ERROR = exceptions.ERROR;
var VmError = exceptions.VmError;

/**
 * Runs EVM code
 * @param opts
 * @param opts.account {Account} the account that the exucuting code belongs to
 * @param opts.address {Buffer}  the address of the account that is exucuting this code
 * @param opts.block {Block} the block that the transaction is part of
 * @param opts.caller {Buffer} the address that ran this code
 * @param opts.code {Buffer} the code to be run
 * @param opts.data {Buffer}  the input data
 * @param opts.gasLimit {Buffer}
 * @param opts.origin {Buffer} the address where the call originated from
 * @param opts.value {Buffer} the amount the being transfered
 * @param cb {Function}
 */
module.exports = function (opts, cb) {
  var self = this;
  var stateManager = self.stateManager;

  var block = opts.block || new Block();

  // VM internal state
  var runState = {
    stateManager: stateManager,
    returnValue: false,
    stopped: false,
    vmError: false,
    programCounter: 0,
    opCode: undefined,
    opName: undefined,
    gasLeft: new BN(opts.gasLimit),
    gasLimit: new BN(opts.gasLimit),
    gasPrice: opts.gasPrice,
    memory: [],
    memoryWordCount: new BN(0),
    stack: [],
    lastReturned: [],
    logs: [],
    validJumps: [],
    gasRefund: new BN(0),
    highestMemCost: new BN(0),
    depth: opts.depth || 0,
    // opts.suicides is kept for backward compatiblity with pre-EIP6 syntax
    selfdestruct: opts.selfdestruct || opts.suicides || {},
    block: block,
    callValue: opts.value || new BN(0),
    address: opts.address || utils.zeros(32),
    caller: opts.caller || utils.zeros(32),
    origin: opts.origin || opts.caller || utils.zeros(32),
    callData: opts.data || Buffer.from([0]),
    code: opts.code,
    populateCache: opts.populateCache === undefined ? true : opts.populateCache,
    static: opts.static || false

    // temporary - to be factored out
  };runState._precompiled = self._precompiled;
  runState._vm = self;

  // prepare to run vm
  preprocessValidJumps(runState);
  // load contract then start vm run
  loadContract(runVm);

  // iterate through the given ops until something breaks or we hit STOP
  function runVm() {
    async.whilst(vmIsActive, iterateVm, parseVmResults);
  }

  // ensure contract is loaded; only used if runCode is called directly
  function loadContract(cb) {
    stateManager.getAccount(runState.address, function (err, account) {
      if (err) return cb(err);
      runState.contract = account;
      cb();
    });
  }

  function vmIsActive() {
    var notAtEnd = runState.programCounter < runState.code.length;

    return !runState.stopped && notAtEnd && !runState.vmError && !runState.returnValue;
  }

  function iterateVm(done) {
    var opCode = runState.code[runState.programCounter];
    var opInfo = lookupOpInfo(opCode);
    var opName = opInfo.name;
    var opFn = opFns[opName];

    runState.opName = opName;
    runState.opCode = opCode;

    async.series([runStepHook, runOp], function (err) {
      setImmediate(done.bind(null, err));
    });

    function runStepHook(cb) {
      var eventObj = {
        pc: runState.programCounter,
        gasLeft: runState.gasLeft,
        opcode: lookupOpInfo(opCode, true),
        stack: runState.stack,
        depth: runState.depth,
        address: runState.address,
        account: runState.contract,
        cache: runState.stateManager.cache,
        memory: runState.memory
      };
      self.emit('step', eventObj, cb);
    }

    function runOp(cb) {
      // check for invalid opcode
      if (opName === 'INVALID') {
        return cb(new VmError(ERROR.INVALID_OPCODE));
      }

      // check for stack underflows
      if (runState.stack.length < opInfo.in) {
        return cb(new VmError(ERROR.STACK_UNDERFLOW));
      }

      if (runState.stack.length - opInfo.in + opInfo.out > 1024) {
        return cb(new VmError(ERROR.STACK_OVERFLOW));
      }

      // calculate gas
      var fee = new BN(opInfo.fee);
      // TODO: move to a shared funtion; subGas in opFuns
      runState.gasLeft = runState.gasLeft.sub(fee);
      if (runState.gasLeft.ltn(0)) {
        runState.gasLeft = new BN(0);
        cb(new VmError(ERROR.OUT_OF_GAS));
        return;
      }

      // advance program counter
      runState.programCounter++;
      var argsNum = opInfo.in;
      var retNum = opInfo.out;
      // pop the stack
      var args = argsNum ? runState.stack.splice(-argsNum) : [];

      args.reverse();
      args.push(runState);
      // create a callback for async opFunc
      if (opInfo.async) {
        args.push(function (err, result) {
          if (err) return cb(err);

          // save result to the stack
          if (result !== undefined) {
            if (retNum !== 1) {
              // opcode post-stack mismatch
              return cb(new VmError(ERROR.INTERNAL_ERROR));
            }

            runState.stack.push(result);
          } else {
            if (retNum !== 0) {
              // opcode post-stack mismatch
              return cb(new VmError(ERROR.INTERNAL_ERROR));
            }
          }

          cb();
        });
      }

      try {
        // run the opcode
        var result = opFn.apply(null, args);
      } catch (e) {
        cb(e);
        return;
      }

      // save result to the stack
      if (result !== undefined) {
        if (retNum !== 1) {
          // opcode post-stack mismatch
          return cb(VmError(ERROR.INTERNAL_ERROR));
        }

        runState.stack.push(result);
      } else {
        if (!opInfo.async && retNum !== 0) {
          // opcode post-stack mismatch
          return cb(VmError(ERROR.INTERNAL_ERROR));
        }
      }

      // call the callback if opFn was sync
      if (!opInfo.async) {
        cb();
      }
    }
  }

  function parseVmResults(err) {
    // remove any logs on error
    if (err) {
      runState.logs = [];
      stateManager.revertContracts();
      runState.vmError = true;
    }

    var results = {
      runState: runState,
      selfdestruct: runState.selfdestruct,
      gasRefund: runState.gasRefund,
      exception: err ? 0 : 1,
      exceptionError: err,
      logs: runState.logs,
      gas: runState.gasLeft,
      'return': runState.returnValue ? runState.returnValue : Buffer.alloc(0)
    };

    if (results.exceptionError) {
      delete results.gasRefund;
      delete results.selfdestruct;
      self.stateManager.touched = [];
    }

    if (err && err.error !== ERROR.REVERT) {
      results.gasUsed = runState.gasLimit;
    } else {
      results.gasUsed = runState.gasLimit.sub(runState.gasLeft);
    }

    if (runState.populateCache) {
      self.stateManager.cache.flush(function () {
        self.stateManager.cache.clear();
        cb(err, results);
      });
    } else {
      cb(err, results);
    }
  }
};

// find all the valid jumps and puts them in the `validJumps` array
function preprocessValidJumps(runState) {
  for (var i = 0; i < runState.code.length; i++) {
    var curOpCode = lookupOpInfo(runState.code[i]).name;

    // no destinations into the middle of PUSH
    if (curOpCode === 'PUSH') {
      i += runState.code[i] - 0x5f;
    }

    if (curOpCode === 'JUMPDEST') {
      runState.validJumps.push(i);
    }
  }
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var codes = {
  // 0x0 range - arithmetic ops
  // name, baseCost, off stack, on stack, dynamic, async
  0x00: ['STOP', 0, 0, 0, false],
  0x01: ['ADD', 3, 2, 1, false],
  0x02: ['MUL', 5, 2, 1, false],
  0x03: ['SUB', 3, 2, 1, false],
  0x04: ['DIV', 5, 2, 1, false],
  0x05: ['SDIV', 5, 2, 1, false],
  0x06: ['MOD', 5, 2, 1, false],
  0x07: ['SMOD', 5, 2, 1, false],
  0x08: ['ADDMOD', 8, 3, 1, false],
  0x09: ['MULMOD', 8, 3, 1, false],
  0x0a: ['EXP', 10, 2, 1, false],
  0x0b: ['SIGNEXTEND', 5, 2, 1, false],

  // 0x10 range - bit ops
  0x10: ['LT', 3, 2, 1, false],
  0x11: ['GT', 3, 2, 1, false],
  0x12: ['SLT', 3, 2, 1, false],
  0x13: ['SGT', 3, 2, 1, false],
  0x14: ['EQ', 3, 2, 1, false],
  0x15: ['ISZERO', 3, 1, 1, false],
  0x16: ['AND', 3, 2, 1, false],
  0x17: ['OR', 3, 2, 1, false],
  0x18: ['XOR', 3, 2, 1, false],
  0x19: ['NOT', 3, 1, 1, false],
  0x1a: ['BYTE', 3, 2, 1, false],

  // 0x20 range - crypto
  0x20: ['SHA3', 30, 2, 1, false],

  // 0x30 range - closure state
  0x30: ['ADDRESS', 2, 0, 1, true],
  0x31: ['BALANCE', 400, 1, 1, true, true],
  0x32: ['ORIGIN', 2, 0, 1, true],
  0x33: ['CALLER', 2, 0, 1, true],
  0x34: ['CALLVALUE', 2, 0, 1, true],
  0x35: ['CALLDATALOAD', 3, 1, 1, true],
  0x36: ['CALLDATASIZE', 2, 0, 1, true],
  0x37: ['CALLDATACOPY', 3, 3, 0, true],
  0x38: ['CODESIZE', 2, 0, 1, false],
  0x39: ['CODECOPY', 3, 3, 0, false],
  0x3a: ['GASPRICE', 2, 0, 1, false],
  0x3b: ['EXTCODESIZE', 700, 1, 1, true, true],
  0x3c: ['EXTCODECOPY', 700, 4, 0, true, true],
  0x3d: ['RETURNDATASIZE', 2, 0, 1, true],
  0x3e: ['RETURNDATACOPY', 3, 3, 0, true],

  // '0x40' range - block operations
  0x40: ['BLOCKHASH', 20, 1, 1, true, true],
  0x41: ['COINBASE', 2, 0, 1, true],
  0x42: ['TIMESTAMP', 2, 0, 1, true],
  0x43: ['NUMBER', 2, 0, 1, true],
  0x44: ['DIFFICULTY', 2, 0, 1, true],
  0x45: ['GASLIMIT', 2, 0, 1, true],

  // 0x50 range - 'storage' and execution
  0x50: ['POP', 2, 1, 0, false],
  0x51: ['MLOAD', 3, 1, 1, false],
  0x52: ['MSTORE', 3, 2, 0, false],
  0x53: ['MSTORE8', 3, 2, 0, false],
  0x54: ['SLOAD', 200, 1, 1, true, true],
  0x55: ['SSTORE', 0, 2, 0, true, true],
  0x56: ['JUMP', 8, 1, 0, false],
  0x57: ['JUMPI', 10, 2, 0, false],
  0x58: ['PC', 2, 0, 1, false],
  0x59: ['MSIZE', 2, 0, 1, false],
  0x5a: ['GAS', 2, 0, 1, false],
  0x5b: ['JUMPDEST', 1, 0, 0, false],

  // 0x60, range
  0x60: ['PUSH', 3, 0, 1, false],
  0x61: ['PUSH', 3, 0, 1, false],
  0x62: ['PUSH', 3, 0, 1, false],
  0x63: ['PUSH', 3, 0, 1, false],
  0x64: ['PUSH', 3, 0, 1, false],
  0x65: ['PUSH', 3, 0, 1, false],
  0x66: ['PUSH', 3, 0, 1, false],
  0x67: ['PUSH', 3, 0, 1, false],
  0x68: ['PUSH', 3, 0, 1, false],
  0x69: ['PUSH', 3, 0, 1, false],
  0x6a: ['PUSH', 3, 0, 1, false],
  0x6b: ['PUSH', 3, 0, 1, false],
  0x6c: ['PUSH', 3, 0, 1, false],
  0x6d: ['PUSH', 3, 0, 1, false],
  0x6e: ['PUSH', 3, 0, 1, false],
  0x6f: ['PUSH', 3, 0, 1, false],
  0x70: ['PUSH', 3, 0, 1, false],
  0x71: ['PUSH', 3, 0, 1, false],
  0x72: ['PUSH', 3, 0, 1, false],
  0x73: ['PUSH', 3, 0, 1, false],
  0x74: ['PUSH', 3, 0, 1, false],
  0x75: ['PUSH', 3, 0, 1, false],
  0x76: ['PUSH', 3, 0, 1, false],
  0x77: ['PUSH', 3, 0, 1, false],
  0x78: ['PUSH', 3, 0, 1, false],
  0x79: ['PUSH', 3, 0, 1, false],
  0x7a: ['PUSH', 3, 0, 1, false],
  0x7b: ['PUSH', 3, 0, 1, false],
  0x7c: ['PUSH', 3, 0, 1, false],
  0x7d: ['PUSH', 3, 0, 1, false],
  0x7e: ['PUSH', 3, 0, 1, false],
  0x7f: ['PUSH', 3, 0, 1, false],

  0x80: ['DUP', 3, 0, 1, false],
  0x81: ['DUP', 3, 0, 1, false],
  0x82: ['DUP', 3, 0, 1, false],
  0x83: ['DUP', 3, 0, 1, false],
  0x84: ['DUP', 3, 0, 1, false],
  0x85: ['DUP', 3, 0, 1, false],
  0x86: ['DUP', 3, 0, 1, false],
  0x87: ['DUP', 3, 0, 1, false],
  0x88: ['DUP', 3, 0, 1, false],
  0x89: ['DUP', 3, 0, 1, false],
  0x8a: ['DUP', 3, 0, 1, false],
  0x8b: ['DUP', 3, 0, 1, false],
  0x8c: ['DUP', 3, 0, 1, false],
  0x8d: ['DUP', 3, 0, 1, false],
  0x8e: ['DUP', 3, 0, 1, false],
  0x8f: ['DUP', 3, 0, 1, false],

  0x90: ['SWAP', 3, 0, 0, false],
  0x91: ['SWAP', 3, 0, 0, false],
  0x92: ['SWAP', 3, 0, 0, false],
  0x93: ['SWAP', 3, 0, 0, false],
  0x94: ['SWAP', 3, 0, 0, false],
  0x95: ['SWAP', 3, 0, 0, false],
  0x96: ['SWAP', 3, 0, 0, false],
  0x97: ['SWAP', 3, 0, 0, false],
  0x98: ['SWAP', 3, 0, 0, false],
  0x99: ['SWAP', 3, 0, 0, false],
  0x9a: ['SWAP', 3, 0, 0, false],
  0x9b: ['SWAP', 3, 0, 0, false],
  0x9c: ['SWAP', 3, 0, 0, false],
  0x9d: ['SWAP', 3, 0, 0, false],
  0x9e: ['SWAP', 3, 0, 0, false],
  0x9f: ['SWAP', 3, 0, 0, false],

  0xa0: ['LOG', 375, 2, 0, false],
  0xa1: ['LOG', 375, 3, 0, false],
  0xa2: ['LOG', 375, 4, 0, false],
  0xa3: ['LOG', 375, 5, 0, false],
  0xa4: ['LOG', 375, 6, 0, false],

  // '0xf0' range - closures
  0xf0: ['CREATE', 32000, 3, 1, true, true],
  0xf1: ['CALL', 700, 7, 1, true, true],
  0xf2: ['CALLCODE', 700, 7, 1, true, true],
  0xf3: ['RETURN', 0, 2, 0, false],
  0xf4: ['DELEGATECALL', 700, 6, 1, true, true],
  0xfa: ['STATICCALL', 700, 6, 1, true, true],
  0xfd: ['REVERT', 0, 2, 0, false],

  // '0x70', range - other
  0xfe: ['INVALID', 0, 0, 0, false],
  0xff: ['SELFDESTRUCT', 5000, 1, 0, false, true]
};

module.exports = function (op, full) {
  var code = codes[op] ? codes[op] : ['INVALID', 0, 0, 0, false, false];
  var opcode = code[0];

  if (full) {
    if (opcode === 'LOG') {
      opcode += op - 0xa0;
    }

    if (opcode === 'PUSH') {
      opcode += op - 0x5f;
    }

    if (opcode === 'DUP') {
      opcode += op - 0x7f;
    }

    if (opcode === 'SWAP') {
      opcode += op - 0x8f;
    }
  }

  return { name: opcode, opcode: op, fee: code[1], in: code[2], out: code[3], dynamic: code[4], async: code[5] };
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var async = __webpack_require__(2);
var fees = __webpack_require__(4);
var utils = __webpack_require__(0);
var BN = utils.BN;
var exceptions = __webpack_require__(6);
var logTable = __webpack_require__(120);
var ERROR = exceptions.ERROR;
var VmError = exceptions.VmError;
var MASK_160 = new BN(1).shln(160).subn(1);

// Find Ceil(`this` / `num`)
BN.prototype.divCeil = function divCeil(num) {
  var dm = this.divmod(num);

  // Fast case - exact division
  if (dm.mod.isZero()) return dm.div;

  // Round up
  return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
};

function addressToBuffer(address) {
  return address.and(MASK_160).toArrayLike(Buffer, 'be', 20);
}

// the opcode functions
module.exports = {
  STOP: function STOP(runState) {
    runState.stopped = true;
  },
  ADD: function ADD(a, b, runState) {
    return a.add(b).mod(utils.TWO_POW256);
  },
  MUL: function MUL(a, b, runState) {
    return a.mul(b).mod(utils.TWO_POW256);
  },
  SUB: function SUB(a, b, runState) {
    return a.sub(b).toTwos(256);
  },
  DIV: function DIV(a, b, runState) {
    if (b.isZero()) {
      return new BN(b);
    } else {
      return a.div(b);
    }
  },
  SDIV: function SDIV(a, b, runState) {
    if (b.isZero()) {
      return new BN(b);
    } else {
      a = a.fromTwos(256);
      b = b.fromTwos(256);
      return a.div(b).toTwos(256);
    }
  },
  MOD: function MOD(a, b, runState) {
    if (b.isZero()) {
      return new BN(b);
    } else {
      return a.mod(b);
    }
  },
  SMOD: function SMOD(a, b, runState) {
    if (b.isZero()) {
      return new BN(b);
    } else {
      a = a.fromTwos(256);
      b = b.fromTwos(256);
      var r = a.abs().mod(b.abs());
      if (a.isNeg()) {
        r = r.ineg();
      }
      return r.toTwos(256);
    }
  },
  ADDMOD: function ADDMOD(a, b, c, runState) {
    if (c.isZero()) {
      return new BN(c);
    } else {
      return a.add(b).mod(c);
    }
  },
  MULMOD: function MULMOD(a, b, c, runState) {
    if (c.isZero()) {
      return new BN(c);
    } else {
      return a.mul(b).mod(c);
    }
  },
  EXP: function EXP(base, exponent, runState) {
    var m = BN.red(utils.TWO_POW256);

    base = base.toRed(m);

    if (!exponent.isZero()) {
      var bytes = 1 + logTable(exponent);
      subGas(runState, new BN(bytes).muln(fees.expByteGas.v));
      return base.redPow(exponent);
    } else {
      return new BN(1);
    }
  },
  SIGNEXTEND: function SIGNEXTEND(k, val, runState) {
    val = val.toArrayLike(Buffer, 'be', 32);
    var extendOnes = false;

    if (k.lten(31)) {
      k = k.toNumber();

      if (val[31 - k] & 0x80) {
        extendOnes = true;
      }

      // 31-k-1 since k-th byte shouldn't be modified
      for (var i = 30 - k; i >= 0; i--) {
        val[i] = extendOnes ? 0xff : 0;
      }
    }

    return new BN(val);
  },
  // 0x10 range - bit ops
  LT: function LT(a, b, runState) {
    return new BN(a.lt(b) ? 1 : 0);
  },
  GT: function GT(a, b, runState) {
    return new BN(a.gt(b) ? 1 : 0);
  },
  SLT: function SLT(a, b, runState) {
    return new BN(a.fromTwos(256).lt(b.fromTwos(256)) ? 1 : 0);
  },
  SGT: function SGT(a, b, runState) {
    return new BN(a.fromTwos(256).gt(b.fromTwos(256)) ? 1 : 0);
  },
  EQ: function EQ(a, b, runState) {
    return new BN(a.eq(b) ? 1 : 0);
  },
  ISZERO: function ISZERO(a, runState) {
    return new BN(a.isZero() ? 1 : 0);
  },
  AND: function AND(a, b, runState) {
    return a.and(b);
  },
  OR: function OR(a, b, runState) {
    return a.or(b);
  },
  XOR: function XOR(a, b, runState) {
    return a.xor(b);
  },
  NOT: function NOT(a, runState) {
    return a.notn(256);
  },
  BYTE: function BYTE(pos, word, runState) {
    if (pos.gten(32)) {
      return new BN(0);
    }

    return word.shrn((31 - pos.toNumber()) * 8).andln(0xff);
  },
  // 0x20 range - crypto
  SHA3: function SHA3(offset, length, runState) {
    var data = memLoad(runState, offset, length);
    // copy fee
    subGas(runState, new BN(fees.sha3WordGas.v).imul(length.divCeil(new BN(32))));
    return new BN(utils.sha3(data));
  },
  // 0x30 range - closure state
  ADDRESS: function ADDRESS(runState) {
    return new BN(runState.address);
  },
  BALANCE: function BALANCE(address, runState, cb) {
    var stateManager = runState.stateManager;
    // stack to address
    address = addressToBuffer(address);

    // shortcut if current account
    if (address.toString('hex') === runState.address.toString('hex')) {
      cb(null, new BN(runState.contract.balance));
      return;
    }

    // otherwise load account then return balance
    stateManager.getAccountBalance(address, function (err, value) {
      if (err) {
        return cb(err);
      }
      cb(null, new BN(value));
    });
  },
  ORIGIN: function ORIGIN(runState) {
    return new BN(runState.origin);
  },
  CALLER: function CALLER(runState) {
    return new BN(runState.caller);
  },
  CALLVALUE: function CALLVALUE(runState) {
    return new BN(runState.callValue);
  },
  CALLDATALOAD: function CALLDATALOAD(pos, runState) {
    if (pos.gtn(runState.callData.length)) {
      return new BN(0);
    } else {
      pos = pos.toNumber();
      var loaded = runState.callData.slice(pos, pos + 32);
      loaded = loaded.length ? loaded : Buffer.from([0]);
      return new BN(utils.setLengthRight(loaded, 32));
    }
  },
  CALLDATASIZE: function CALLDATASIZE(runState) {
    if (runState.callData.length === 1 && runState.callData[0] === 0) {
      return new BN(0);
    } else {
      return new BN(runState.callData.length);
    }
  },
  CALLDATACOPY: function CALLDATACOPY(memOffset, dataOffset, dataLength, runState) {
    memStore(runState, memOffset, runState.callData, dataOffset, dataLength);
    // sub the COPY fee
    subGas(runState, new BN(fees.copyGas.v).imul(dataLength.divCeil(new BN(32))));
  },
  CODESIZE: function CODESIZE(runState) {
    return new BN(runState.code.length);
  },
  CODECOPY: function CODECOPY(memOffset, codeOffset, length, runState) {
    memStore(runState, memOffset, runState.code, codeOffset, length);
    // sub the COPY fee
    subGas(runState, new BN(fees.copyGas.v).imul(length.divCeil(new BN(32))));
  },
  EXTCODESIZE: function EXTCODESIZE(address, runState, cb) {
    var stateManager = runState.stateManager;
    address = addressToBuffer(address);
    stateManager.getContractCode(address, function (err, code) {
      if (err) return cb(err);
      cb(null, new BN(code.length));
    });
  },
  EXTCODECOPY: function EXTCODECOPY(address, memOffset, codeOffset, length, runState, cb) {
    var stateManager = runState.stateManager;
    address = addressToBuffer(address);

    // FIXME: for some reason this must come before subGas
    subMemUsage(runState, memOffset, length);
    // copy fee
    subGas(runState, new BN(fees.copyGas.v).imul(length.divCeil(new BN(32))));

    stateManager.getContractCode(address, function (err, code) {
      if (err) return cb(err);
      memStore(runState, memOffset, code, codeOffset, length, false);
      cb(null);
    });
  },
  RETURNDATASIZE: function RETURNDATASIZE(runState) {
    return new BN(runState.lastReturned.length);
  },
  RETURNDATACOPY: function RETURNDATACOPY(memOffset, returnDataOffset, length, runState) {
    if (returnDataOffset.add(length).gtn(runState.lastReturned.length)) {
      trap(ERROR.OUT_OF_GAS);
    }

    memStore(runState, memOffset, utils.toBuffer(runState.lastReturned), returnDataOffset, length, false);
    // sub the COPY fee
    subGas(runState, new BN(fees.copyGas.v).mul(length.divCeil(new BN(32))));
  },
  GASPRICE: function GASPRICE(runState) {
    return new BN(runState.gasPrice);
  },
  // '0x40' range - block operations
  BLOCKHASH: function BLOCKHASH(number, runState, cb) {
    var stateManager = runState.stateManager;
    var diff = new BN(runState.block.header.number).sub(number);

    // block lookups must be within the past 256 blocks
    if (diff.gtn(256) || diff.lten(0)) {
      cb(null, new BN(0));
      return;
    }

    stateManager.getBlockHash(number.toArrayLike(Buffer, 'be', 32), function (err, blockHash) {
      if (err) return cb(err);
      cb(null, new BN(blockHash));
    });
  },
  COINBASE: function COINBASE(runState) {
    return new BN(runState.block.header.coinbase);
  },
  TIMESTAMP: function TIMESTAMP(runState) {
    return new BN(runState.block.header.timestamp);
  },
  NUMBER: function NUMBER(runState) {
    return new BN(runState.block.header.number);
  },
  DIFFICULTY: function DIFFICULTY(runState) {
    return new BN(runState.block.header.difficulty);
  },
  GASLIMIT: function GASLIMIT(runState) {
    return new BN(runState.block.header.gasLimit);
  },
  // 0x50 range - 'storage' and execution
  POP: function POP() {},
  MLOAD: function MLOAD(pos, runState) {
    return new BN(memLoad(runState, pos, new BN(32)));
  },
  MSTORE: function MSTORE(offset, word, runState) {
    word = word.toArrayLike(Buffer, 'be', 32);
    memStore(runState, offset, word, new BN(0), new BN(32));
  },
  MSTORE8: function MSTORE8(offset, byte, runState) {
    // NOTE: we're using a 'trick' here to get the least significant byte
    byte = Buffer.from([byte.andln(0xff)]);
    memStore(runState, offset, byte, new BN(0), new BN(1));
  },
  SLOAD: function SLOAD(key, runState, cb) {
    var stateManager = runState.stateManager;
    key = key.toArrayLike(Buffer, 'be', 32);

    stateManager.getContractStorage(runState.address, key, function (err, value) {
      if (err) return cb(err);
      value = value.length ? new BN(value) : new BN(0);
      cb(null, value);
    });
  },
  SSTORE: function SSTORE(key, val, runState, cb) {
    if (runState.static) {
      trap(ERROR.STATIC_STATE_CHANGE);
    }
    var stateManager = runState.stateManager;
    var address = runState.address;
    key = key.toArrayLike(Buffer, 'be', 32);
    // NOTE: this should be the shortest representation
    var value;
    if (val.isZero()) {
      value = Buffer.from([]);
    } else {
      value = val.toArrayLike(Buffer, 'be');
    }

    stateManager.getContractStorage(runState.address, key, function (err, found) {
      if (err) return cb(err);
      try {
        if (value.length === 0 && !found.length) {
          subGas(runState, new BN(fees.sstoreResetGas.v));
        } else if (value.length === 0 && found.length) {
          subGas(runState, new BN(fees.sstoreResetGas.v));
          runState.gasRefund.iaddn(fees.sstoreRefundGas.v);
        } else if (value.length !== 0 && !found.length) {
          subGas(runState, new BN(fees.sstoreSetGas.v));
        } else if (value.length !== 0 && found.length) {
          subGas(runState, new BN(fees.sstoreResetGas.v));
        }
      } catch (e) {
        cb(e.error);
        return;
      }

      stateManager.putContractStorage(address, key, value, function (err) {
        if (err) return cb(err);
        runState.contract = stateManager.cache.get(address);
        cb(null);
      });
    });
  },
  JUMP: function JUMP(dest, runState) {
    if (dest.gtn(runState.code.length)) {
      trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState));
    }

    dest = dest.toNumber();

    if (!jumpIsValid(runState, dest)) {
      trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState));
    }

    runState.programCounter = dest;
  },
  JUMPI: function JUMPI(dest, cond, runState) {
    if (!cond.isZero()) {
      if (dest.gtn(runState.code.length)) {
        trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState));
      }

      dest = dest.toNumber();

      if (!jumpIsValid(runState, dest)) {
        trap(ERROR.INVALID_JUMP + ' at ' + describeLocation(runState));
      }

      runState.programCounter = dest;
    }
  },
  PC: function PC(runState) {
    return new BN(runState.programCounter - 1);
  },
  MSIZE: function MSIZE(runState) {
    return runState.memoryWordCount.muln(32);
  },
  GAS: function GAS(runState) {
    return new BN(runState.gasLeft);
  },
  JUMPDEST: function JUMPDEST(runState) {},
  PUSH: function PUSH(runState) {
    var numToPush = runState.opCode - 0x5f;
    var loaded = new BN(runState.code.slice(runState.programCounter, runState.programCounter + numToPush).toString('hex'), 16);
    runState.programCounter += numToPush;
    return loaded;
  },
  DUP: function DUP(runState) {
    // NOTE: this function manipulates the stack directly!

    var stackPos = runState.opCode - 0x7f;
    if (stackPos > runState.stack.length) {
      trap(ERROR.STACK_UNDERFLOW);
    }
    // create a new copy
    return new BN(runState.stack[runState.stack.length - stackPos]);
  },
  SWAP: function SWAP(runState) {
    // NOTE: this function manipulates the stack directly!

    var stackPos = runState.opCode - 0x8f;

    // check the stack to make sure we have enough items on teh stack
    var swapIndex = runState.stack.length - stackPos - 1;
    if (swapIndex < 0) {
      trap(ERROR.STACK_UNDERFLOW);
    }

    // preform the swap
    var topIndex = runState.stack.length - 1;
    var tmp = runState.stack[topIndex];
    runState.stack[topIndex] = runState.stack[swapIndex];
    runState.stack[swapIndex] = tmp;
  },
  LOG: function LOG(memOffset, memLength) {
    var args = Array.prototype.slice.call(arguments, 0);
    var runState = args.pop();
    if (runState.static) {
      trap(ERROR.STATIC_STATE_CHANGE);
    }

    var topics = args.slice(2);
    topics = topics.map(function (a) {
      return a.toArrayLike(Buffer, 'be', 32);
    });

    var numOfTopics = runState.opCode - 0xa0;
    var mem = memLoad(runState, memOffset, memLength);
    subGas(runState, new BN(fees.logTopicGas.v).imuln(numOfTopics).iadd(memLength.muln(fees.logDataGas.v)));

    // add address
    var log = [runState.address];
    log.push(topics);

    // add data
    log.push(mem);
    runState.logs.push(log);
  },

  // '0xf0' range - closures
  CREATE: function CREATE(value, offset, length, runState, done) {
    if (runState.static) {
      trap(ERROR.STATIC_STATE_CHANGE);
    }

    var data = memLoad(runState, offset, length);

    // set up config
    var options = {
      value: value,
      data: data
    };

    var localOpts = {
      inOffset: offset,
      inLength: length,
      outOffset: new BN(0),
      outLength: new BN(0)
    };

    checkCallMemCost(runState, options, localOpts);
    checkOutOfGas(runState, options);
    makeCall(runState, options, localOpts, done);
  },
  CALL: function CALL(gasLimit, toAddress, value, inOffset, inLength, outOffset, outLength, runState, done) {
    var stateManager = runState.stateManager;
    toAddress = addressToBuffer(toAddress);

    if (runState.static && !value.isZero()) {
      trap(ERROR.STATIC_STATE_CHANGE);
    }

    var data = memLoad(runState, inOffset, inLength);

    var options = {
      gasLimit: gasLimit,
      value: value,
      to: toAddress,
      data: data,
      static: runState.static
    };

    var localOpts = {
      inOffset: inOffset,
      inLength: inLength,
      outOffset: outOffset,
      outLength: outLength
    };

    if (!value.isZero()) {
      subGas(runState, new BN(fees.callValueTransferGas.v));
    }

    stateManager.exists(toAddress, function (err, exists) {
      if (err) {
        done(err);
        return;
      }

      stateManager.accountIsEmpty(toAddress, function (err, empty) {
        if (err) {
          done(err);
          return;
        }

        if (!exists || empty) {
          if (!value.isZero()) {
            try {
              subGas(runState, new BN(fees.callNewAccountGas.v));
            } catch (e) {
              done(e.error);
              return;
            }
          }
        }

        try {
          checkCallMemCost(runState, options, localOpts);
          checkOutOfGas(runState, options);
        } catch (e) {
          done(e.error);
          return;
        }

        if (!value.isZero()) {
          runState.gasLeft.iaddn(fees.callStipend.v);
          options.gasLimit.iaddn(fees.callStipend.v);
        }

        makeCall(runState, options, localOpts, done);
      });
    });
  },
  CALLCODE: function CALLCODE(gas, toAddress, value, inOffset, inLength, outOffset, outLength, runState, done) {
    var stateManager = runState.stateManager;
    toAddress = addressToBuffer(toAddress);

    var data = memLoad(runState, inOffset, inLength);

    var options = {
      gasLimit: gas,
      value: value,
      data: data,
      to: runState.address,
      static: runState.static
    };

    var localOpts = {
      inOffset: inOffset,
      inLength: inLength,
      outOffset: outOffset,
      outLength: outLength
    };

    if (!value.isZero()) {
      subGas(runState, new BN(fees.callValueTransferGas.v));
    }

    checkCallMemCost(runState, options, localOpts);
    checkOutOfGas(runState, options);

    if (!value.isZero()) {
      runState.gasLeft.iaddn(fees.callStipend.v);
      options.gasLimit.iaddn(fees.callStipend.v);
    }

    // load the code
    stateManager.getAccount(toAddress, function (err, account) {
      if (err) return done(err);
      if (runState._precompiled[toAddress.toString('hex')]) {
        options.compiled = true;
        options.code = runState._precompiled[toAddress.toString('hex')];
        makeCall(runState, options, localOpts, done);
      } else {
        stateManager.getContractCode(toAddress, function (err, code, compiled) {
          if (err) return done(err);
          options.compiled = compiled || false;
          options.code = code;
          makeCall(runState, options, localOpts, done);
        });
      }
    });
  },
  DELEGATECALL: function DELEGATECALL(gas, toAddress, inOffset, inLength, outOffset, outLength, runState, done) {
    var stateManager = runState.stateManager;
    var value = runState.callValue;
    toAddress = addressToBuffer(toAddress);

    var data = memLoad(runState, inOffset, inLength);

    var options = {
      gasLimit: gas,
      value: value,
      data: data,
      to: runState.address,
      caller: runState.caller,
      delegatecall: true,
      static: runState.static
    };

    var localOpts = {
      inOffset: inOffset,
      inLength: inLength,
      outOffset: outOffset,
      outLength: outLength
    };

    checkCallMemCost(runState, options, localOpts);
    checkOutOfGas(runState, options);

    // load the code
    stateManager.getAccount(toAddress, function (err, account) {
      if (err) return done(err);
      if (runState._precompiled[toAddress.toString('hex')]) {
        options.compiled = true;
        options.code = runState._precompiled[toAddress.toString('hex')];
        makeCall(runState, options, localOpts, done);
      } else {
        stateManager.getContractCode(toAddress, function (err, code, compiled) {
          if (err) return done(err);
          options.compiled = compiled || false;
          options.code = code;
          makeCall(runState, options, localOpts, done);
        });
      }
    });
  },
  STATICCALL: function STATICCALL(gasLimit, toAddress, inOffset, inLength, outOffset, outLength, runState, done) {
    var stateManager = runState.stateManager;
    var value = new BN(0);
    toAddress = addressToBuffer(toAddress);

    var data = memLoad(runState, inOffset, inLength);

    var options = {
      gasLimit: gasLimit,
      value: value,
      to: toAddress,
      data: data,
      static: true
    };

    var localOpts = {
      inOffset: inOffset,
      inLength: inLength,
      outOffset: outOffset,
      outLength: outLength
    };

    stateManager.exists(toAddress, function (err, exists) {
      if (err) {
        done(err);
        return;
      }

      stateManager.accountIsEmpty(toAddress, function (err, empty) {
        if (err) {
          done(err);
          return;
        }

        try {
          checkCallMemCost(runState, options, localOpts);
          checkOutOfGas(runState, options);
        } catch (e) {
          done(e.error);
          return;
        }

        makeCall(runState, options, localOpts, done);
      });
    });
  },
  RETURN: function RETURN(offset, length, runState) {
    runState.returnValue = memLoad(runState, offset, length);
  },
  REVERT: function REVERT(offset, length, runState) {
    runState.stopped = true;
    runState.returnValue = memLoad(runState, offset, length);
    trap(ERROR.REVERT);
  },
  // '0x70', range - other
  SELFDESTRUCT: function SELFDESTRUCT(selfdestructToAddress, runState, cb) {
    if (runState.static) {
      trap(ERROR.STATIC_STATE_CHANGE);
    }
    var stateManager = runState.stateManager;
    var contract = runState.contract;
    var contractAddress = runState.address;
    selfdestructToAddress = addressToBuffer(selfdestructToAddress);

    stateManager.getAccount(selfdestructToAddress, function (err, toAccount) {
      // update balances
      if (err) {
        cb(err);
        return;
      }

      stateManager.accountIsEmpty(selfdestructToAddress, function (error, empty) {
        if (error) {
          cb(error);
          return;
        }

        if (new BN(contract.balance).gtn(0)) {
          if (!toAccount.exists || empty) {
            try {
              subGas(runState, new BN(fees.callNewAccountGas.v));
            } catch (e) {
              cb(e.error);
              return;
            }
          }
        }

        // only add to refund if this is the first selfdestruct for the address
        if (!runState.selfdestruct[contractAddress.toString('hex')]) {
          runState.gasRefund = runState.gasRefund.addn(fees.suicideRefundGas.v);
        }
        runState.selfdestruct[contractAddress.toString('hex')] = selfdestructToAddress;
        runState.stopped = true;

        var newBalance = new BN(contract.balance).add(new BN(toAccount.balance));
        async.series([stateManager.putAccountBalance.bind(stateManager, selfdestructToAddress, newBalance), stateManager.putAccountBalance.bind(stateManager, contractAddress, new BN(0))], function (err) {
          // The reason for this is to avoid sending an array of results
          cb(err);
        });
      });
    });
  }
};

function describeLocation(runState) {
  var hash = utils.sha3(runState.code).toString('hex');
  var address = runState.address.toString('hex');
  var pc = runState.programCounter - 1;
  return hash + '/' + address + ':' + pc;
}

function subGas(runState, amount) {
  runState.gasLeft.isub(amount);
  if (runState.gasLeft.ltn(0)) {
    runState.gasLeft = new BN(0);
    trap(ERROR.OUT_OF_GAS);
  }
}

function trap(err) {
  throw new VmError(err);
}

/**
 * Subtracts the amount needed for memory usage from `runState.gasLeft`
 * @method subMemUsage
 * @param {BN} offset
 * @param {BN} length
 * @return {String}
 */
function subMemUsage(runState, offset, length) {
  // YP (225): access with zero length will not extend the memory
  if (length.isZero()) return;

  var newMemoryWordCount = offset.add(length).divCeil(new BN(32));
  if (newMemoryWordCount.lte(runState.memoryWordCount)) return;

  var words = newMemoryWordCount;
  var fee = new BN(fees.memoryGas.v);
  var quadCoeff = new BN(fees.quadCoeffDiv.v);
  // words * 3 + words ^2 / 512
  var cost = words.mul(fee).add(words.mul(words).div(quadCoeff));

  if (cost.gt(runState.highestMemCost)) {
    subGas(runState, cost.sub(runState.highestMemCost));
    runState.highestMemCost = cost;
  }

  runState.memoryWordCount = newMemoryWordCount;
}

/**
 * Loads bytes from memory and returns them as a buffer. If an error occurs
 * a string is instead returned. The function also subtracts the amount of
 * gas need for memory expansion.
 * @method memLoad
 * @param {BN} offset where to start reading from
 * @param {BN} length how far to read
 * @return {Buffer|String}
 */
function memLoad(runState, offset, length) {
  // check to see if we have enougth gas for the mem read
  subMemUsage(runState, offset, length);

  // shortcut
  if (length.isZero()) {
    return Buffer.alloc(0);
  }

  // NOTE: in theory this could overflow, but unlikely due to OOG above
  offset = offset.toNumber();
  length = length.toNumber();

  var loaded = runState.memory.slice(offset, offset + length);
  // fill the remaining lenth with zeros
  for (var i = loaded.length; i < length; i++) {
    loaded[i] = 0;
  }
  return Buffer.from(loaded);
}

/**
 * Stores bytes to memory. If an error occurs a string is instead returned.
 * The function also subtracts the amount of gas need for memory expansion.
 * @method memStore
 * @param {BN} offset where to start reading from
 * @param {Buffer} val
 * @param {BN} valOffset
 * @param {BN} length how far to read
 * @param {Boolean} skipSubMem
 * @return {Buffer|String}
 */
function memStore(runState, offset, val, valOffset, length, skipSubMem) {
  if (skipSubMem !== false) {
    subMemUsage(runState, offset, length);
  }

  // shortcut
  if (length.isZero()) {
    return;
  }

  // NOTE: in theory this could overflow, but unlikely due to OOG above
  offset = offset.toNumber();
  length = length.toNumber();

  var safeLen = 0;
  if (valOffset.addn(length).gtn(val.length)) {
    if (valOffset.gten(val.length)) {
      safeLen = 0;
    } else {
      valOffset = valOffset.toNumber();
      safeLen = val.length - valOffset;
    }
  } else {
    valOffset = valOffset.toNumber();
    safeLen = val.length;
  }

  var i = 0;
  if (safeLen > 0) {
    safeLen = safeLen > length ? length : safeLen;
    for (; i < safeLen; i++) {
      runState.memory[offset + i] = val[valOffset + i];
    }
  }

  /*
    pad the remaining length with zeros IF AND ONLY IF a value was stored
    (even if value offset > value length, strange spec...)
  */
  if (val.length > 0 && i < length) {
    for (; i < length; i++) {
      runState.memory[offset + i] = 0;
    }
  }
}

// checks if a jump is valid given a destination
function jumpIsValid(runState, dest) {
  return runState.validJumps.indexOf(dest) !== -1;
}

// checks to see if we have enough gas left for the memory reads and writes
// required by the CALLs
function checkCallMemCost(runState, callOptions, localOpts) {
  // calculates the gas need for saving the output in memory
  subMemUsage(runState, localOpts.outOffset, localOpts.outLength);

  if (!callOptions.gasLimit) {
    callOptions.gasLimit = new BN(runState.gasLeft);
  }
}

function checkOutOfGas(runState, callOptions) {
  var gasAllowed = runState.gasLeft.sub(runState.gasLeft.divn(64));
  if (callOptions.gasLimit.gt(gasAllowed)) {
    callOptions.gasLimit = gasAllowed;
  }
}

// sets up and calls runCall
function makeCall(runState, callOptions, localOpts, cb) {
  callOptions.caller = callOptions.caller || runState.address;
  callOptions.origin = runState.origin;
  callOptions.gasPrice = runState.gasPrice;
  callOptions.block = runState.block;
  callOptions.populateCache = false;
  callOptions.static = callOptions.static || false;
  callOptions.selfdestruct = runState.selfdestruct;

  // increment the runState.depth
  callOptions.depth = runState.depth + 1;

  // empty the return data buffer
  runState.lastReturned = Buffer.alloc(0);

  // check if account has enough ether
  // Note: in the case of delegatecall, the value is persisted and doesn't need to be deducted again
  if (runState.depth >= fees.stackLimit.v || callOptions.delegatecall !== true && new BN(runState.contract.balance).lt(callOptions.value)) {
    cb(null, new BN(0));
  } else {
    // if creating a new contract then increament the nonce
    if (!callOptions.to) {
      runState.contract.nonce = new BN(runState.contract.nonce).addn(1);
    }

    runState.stateManager.cache.put(runState.address, runState.contract);
    runState._vm.runCall(callOptions, parseCallResults);
  }

  function parseCallResults(err, results) {
    if (err) return cb(err);

    // concat the runState.logs
    if (results.vm.logs) {
      runState.logs = runState.logs.concat(results.vm.logs);
    }

    // add gasRefund
    if (results.vm.gasRefund) {
      runState.gasRefund = runState.gasRefund.add(results.vm.gasRefund);
    }

    // this should always be safe
    runState.gasLeft.isub(results.gasUsed);

    // save results to memory
    if (results.vm.return && (!results.vm.exceptionError || results.vm.exceptionError.error === ERROR.REVERT)) {
      memStore(runState, localOpts.outOffset, results.vm.return, new BN(0), localOpts.outLength, false);

      if (results.vm.exceptionError && results.vm.exceptionError.error === ERROR.REVERT && runState.opName === 'CREATE') {
        runState.lastReturned = results.vm.return;
      }

      switch (runState.opName) {
        case 'CALL':
        case 'CALLCODE':
        case 'DELEGATECALL':
        case 'STATICCALL':
          runState.lastReturned = results.vm.return;
          break;
      }
    }

    if (!results.vm.exceptionError) {
      // update stateRoot on current contract
      runState.stateManager.getAccount(runState.address, function (err, account) {
        if (err) return cb(err);

        runState.contract = account;
        // push the created address to the stack
        if (results.createdAddress) {
          cb(null, new BN(results.createdAddress));
        } else {
          cb(null, new BN(results.vm.exception));
        }
      });
    } else {
      // creation failed so don't increament the nonce
      if (results.vm.createdAddress) {
        runState.contract.nonce = new BN(runState.contract.nonce).subn(1);
      }

      cb(null, new BN(results.vm.exception));
    }
  }
}

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var BN = utils.BN;
var pow32 = new BN('010000000000000000000000000000000000000000000000000000000000000000', 16);
var pow31 = new BN('0100000000000000000000000000000000000000000000000000000000000000', 16);
var pow30 = new BN('01000000000000000000000000000000000000000000000000000000000000', 16);
var pow29 = new BN('010000000000000000000000000000000000000000000000000000000000', 16);
var pow28 = new BN('0100000000000000000000000000000000000000000000000000000000', 16);
var pow27 = new BN('01000000000000000000000000000000000000000000000000000000', 16);
var pow26 = new BN('010000000000000000000000000000000000000000000000000000', 16);
var pow25 = new BN('0100000000000000000000000000000000000000000000000000', 16);
var pow24 = new BN('01000000000000000000000000000000000000000000000000', 16);
var pow23 = new BN('010000000000000000000000000000000000000000000000', 16);
var pow22 = new BN('0100000000000000000000000000000000000000000000', 16);
var pow21 = new BN('01000000000000000000000000000000000000000000', 16);
var pow20 = new BN('010000000000000000000000000000000000000000', 16);
var pow19 = new BN('0100000000000000000000000000000000000000', 16);
var pow18 = new BN('01000000000000000000000000000000000000', 16);
var pow17 = new BN('010000000000000000000000000000000000', 16);
var pow16 = new BN('0100000000000000000000000000000000', 16);
var pow15 = new BN('01000000000000000000000000000000', 16);
var pow14 = new BN('010000000000000000000000000000', 16);
var pow13 = new BN('0100000000000000000000000000', 16);
var pow12 = new BN('01000000000000000000000000', 16);
var pow11 = new BN('010000000000000000000000', 16);
var pow10 = new BN('0100000000000000000000', 16);
var pow9 = new BN('01000000000000000000', 16);
var pow8 = new BN('010000000000000000', 16);
var pow7 = new BN('0100000000000000', 16);
var pow6 = new BN('01000000000000', 16);
var pow5 = new BN('010000000000', 16);
var pow4 = new BN('0100000000', 16);
var pow3 = new BN('01000000', 16);
var pow2 = new BN('010000', 16);
var pow1 = new BN('0100', 16);

module.exports = function (a) {
  if (a.cmp(pow1) === -1) {
    return 0;
  } else if (a.cmp(pow2) === -1) {
    return 1;
  } else if (a.cmp(pow3) === -1) {
    return 2;
  } else if (a.cmp(pow4) === -1) {
    return 3;
  } else if (a.cmp(pow5) === -1) {
    return 4;
  } else if (a.cmp(pow6) === -1) {
    return 5;
  } else if (a.cmp(pow7) === -1) {
    return 6;
  } else if (a.cmp(pow8) === -1) {
    return 7;
  } else if (a.cmp(pow9) === -1) {
    return 8;
  } else if (a.cmp(pow10) === -1) {
    return 9;
  } else if (a.cmp(pow11) === -1) {
    return 10;
  } else if (a.cmp(pow12) === -1) {
    return 11;
  } else if (a.cmp(pow13) === -1) {
    return 12;
  } else if (a.cmp(pow14) === -1) {
    return 13;
  } else if (a.cmp(pow15) === -1) {
    return 14;
  } else if (a.cmp(pow16) === -1) {
    return 15;
  } else if (a.cmp(pow17) === -1) {
    return 16;
  } else if (a.cmp(pow18) === -1) {
    return 17;
  } else if (a.cmp(pow19) === -1) {
    return 18;
  } else if (a.cmp(pow20) === -1) {
    return 19;
  } else if (a.cmp(pow21) === -1) {
    return 20;
  } else if (a.cmp(pow22) === -1) {
    return 21;
  } else if (a.cmp(pow23) === -1) {
    return 22;
  } else if (a.cmp(pow24) === -1) {
    return 23;
  } else if (a.cmp(pow25) === -1) {
    return 24;
  } else if (a.cmp(pow26) === -1) {
    return 25;
  } else if (a.cmp(pow27) === -1) {
    return 26;
  } else if (a.cmp(pow28) === -1) {
    return 27;
  } else if (a.cmp(pow29) === -1) {
    return 28;
  } else if (a.cmp(pow30) === -1) {
    return 29;
  } else if (a.cmp(pow31) === -1) {
    return 30;
  } else if (a.cmp(pow32) === -1) {
    return 31;
  } else {
    return 32;
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("timers");

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (opts, cb) {
  // for precompiled
  var results;
  if (typeof opts.code === 'function') {
    results = opts.code(opts);
    results.account = opts.account;
    if (results.exception === undefined) {
      results.exception = 1;
    }
    cb(results.exceptionError, results);
  } else {
    var f = new Function('require', 'opts', opts.code.toString()); // eslint-disable-line
    results = f(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), opts);
    results.account = opts.account;
    cb(results.exceptionError, results);
  }
};

/***/ }),
/* 123 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 123;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var async = __webpack_require__(2);
var ethUtil = __webpack_require__(0);
var Bloom = __webpack_require__(45);
var common = __webpack_require__(4);
var rlp = ethUtil.rlp;
var Trie = __webpack_require__(44);
var BN = ethUtil.BN;

var minerReward = new BN(common.minerReward.v);

/**
 * process the transaction in a block and pays the miners
 * @param opts
 * @param opts.block {Block} the block we are processing
 * @param opts.generate {Boolean} [gen=false] whether to generate the stateRoot
 * @param cb {Function} the callback which is given an error string
 */
module.exports = function (opts, cb) {
  var self = this;

  // parse options
  var block = opts.block;
  var generateStateRoot = !!opts.generate;
  var validateStateRoot = !generateStateRoot;
  var bloom = new Bloom();
  var receiptTrie = new Trie();
  // the total amount of gas used processing this block
  var gasUsed = new BN(0);
  // miner account
  var minerAccount;
  var receipts = [];
  var txResults = [];
  var result;

  if (opts.root) {
    self.stateManager.trie.root = opts.root;
  }

  this.trie.checkpoint();

  // run everything
  async.series([beforeBlock, populateCache, processTransactions], parseBlockResults);

  function beforeBlock(cb) {
    self.emit('beforeBlock', opts.block, cb);
  }

  function afterBlock(cb) {
    self.emit('afterBlock', result, cb);
  }

  // populates the cache with accounts that we know we will need
  function populateCache(cb) {
    var accounts = new Set();
    accounts.add(block.header.coinbase.toString('hex'));
    block.transactions.forEach(function (tx) {
      accounts.add(tx.getSenderAddress().toString('hex'));
      accounts.add(tx.to.toString('hex'));
    });

    block.uncleHeaders.forEach(function (uh) {
      accounts.add(uh.coinbase.toString('hex'));
    });

    self.populateCache(accounts, cb);
  }

  /**
   * Processes all of the transaction in the block
   * @method processTransaction
   * @param {Function} cb the callback is given error if there are any
   */
  function processTransactions(cb) {
    var validReceiptCount = 0;

    async.eachSeries(block.transactions, processTx, cb);

    function processTx(tx, cb) {
      var gasLimitIsHigherThanBlock = new BN(block.header.gasLimit).lt(new BN(tx.gasLimit).add(gasUsed));
      if (gasLimitIsHigherThanBlock) {
        cb(new Error('tx has a higher gas limit than the block'));
        return;
      }

      // run the tx through the VM
      self.runTx({
        tx: tx,
        block: block,
        populateCache: false
      }, parseTxResult);

      function parseTxResult(err, result) {
        txResults.push(result);
        // var receiptResult = new BN(1)

        // abort if error
        if (err) {
          receipts.push(null);
          cb(err);
          return;
        }

        gasUsed = gasUsed.add(result.gasUsed);
        // combine blooms via bitwise OR
        bloom.or(result.bloom);

        if (generateStateRoot) {
          block.header.bloom = bloom.bitvector;
        }

        var txLogs = result.vm.logs || [];

        var rawTxReceipt = [result.vm.exception ? 1 : 0, // result.vm.exception is 0 when an exception occurs, and 1 when it doesn't.  TODO make this the opposite
        gasUsed.toArrayLike(Buffer), result.bloom.bitvector, txLogs];
        var txReceipt = {
          status: rawTxReceipt[0],
          gasUsed: rawTxReceipt[1],
          bitvector: rawTxReceipt[2],
          logs: rawTxReceipt[3]
        };

        receipts.push(txReceipt);
        receiptTrie.put(rlp.encode(validReceiptCount), rlp.encode(rawTxReceipt));
        validReceiptCount++;
        cb();
      }
    }
  }

  // handle results or error from block run
  function parseBlockResults(err) {
    if (err) {
      self.trie.revert();
      cb(err);
      return;
    }

    // credit all block rewards
    payOmmersAndMiner();

    // credit all block rewards
    if (generateStateRoot) {
      block.header.stateRoot = self.trie.root;
    }

    self.trie.commit(function (err) {
      self.stateManager.cache.flush(function () {
        if (validateStateRoot) {
          if (receiptTrie.root && receiptTrie.root.toString('hex') !== block.header.receiptTrie.toString('hex')) {
            err = new Error((err || '') + 'invalid receiptTrie ');
          }
          if (bloom.bitvector.toString('hex') !== block.header.bloom.toString('hex')) {
            err = new Error((err || '') + 'invalid bloom ');
          }
          if (ethUtil.bufferToInt(block.header.gasUsed) !== Number(gasUsed)) {
            err = new Error((err || '') + 'invalid gasUsed ');
          }
          if (self.trie.root.toString('hex') !== block.header.stateRoot.toString('hex')) {
            err = new Error((err || '') + 'invalid block stateRoot ');
          }
        }

        self.stateManager.cache.clear();

        result = {
          receipts: receipts,
          results: txResults,
          error: err
        };

        afterBlock(cb.bind(this, err, result));
      });
    });
  }

  // credit all block rewards
  function payOmmersAndMiner() {
    var ommers = block.uncleHeaders;
    // pay each ommer
    ommers.forEach(rewardOmmer);

    // calculate nibling reward
    var niblingReward = minerReward.divn(32);
    var totalNiblingReward = niblingReward.muln(ommers.length);
    minerAccount = self.stateManager.cache.get(block.header.coinbase);
    // give miner the block reward
    minerAccount.balance = new BN(minerAccount.balance).add(minerReward).add(totalNiblingReward);
    self.stateManager.cache.put(block.header.coinbase, minerAccount);
  }

  // credit ommer
  function rewardOmmer(ommer) {
    // calculate reward
    var heightDiff = new BN(block.header.number).sub(new BN(ommer.number));
    var reward = new BN(8).sub(heightDiff).mul(minerReward.divn(8));

    if (reward.ltn(0)) {
      reward = new BN(0);
    }

    // credit miners account
    var ommerAccount = self.stateManager.cache.get(ommer.coinbase);
    ommerAccount.balance = reward.add(new BN(ommerAccount.balance));
    self.stateManager.cache.put(ommer.coinbase, ommerAccount);
  }
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var async = __webpack_require__(2);
var utils = __webpack_require__(0);
var BN = utils.BN;
var Bloom = __webpack_require__(45);
var Block = __webpack_require__(27);

/**
 * Process a transaction. Run the vm. Transfers eth. Checks balances.
 * @method processTx
 * @param opts
 * @param opts.tx {Transaction} - a transaction
 * @param opts.skipNonce - skips the nonce check
 * @param opts.skipBalance - skips the balance check
 * @param opts.block {Block} needed to process the transaction, if no block is given a default one is created
 * @param cb {Function} - the callback
 */
module.exports = function (opts, cb) {
  var self = this;
  var block = opts.block;
  var tx = opts.tx;
  var gasLimit;
  var results;
  var basefee;

  // create a reasonable default if no block is given
  if (!block) {
    block = new Block();
  }

  if (new BN(block.header.gasLimit).lt(new BN(tx.gasLimit))) {
    cb(new Error('tx has a higher gas limit than the block'));
    return;
  }

  if (opts.populateCache === undefined) {
    opts.populateCache = true;
  }

  // run everything
  async.series([populateCache, runTxHook, runCall, saveTries, flushCache, runAfterTxHook], function (err) {
    cb(err, results);
  });

  // run the transaction hook
  function runTxHook(cb) {
    self.emit('beforeTx', tx, cb);
  }

  // run the transaction hook
  function runAfterTxHook(cb) {
    self.emit('afterTx', results, cb);
  }

  /**
   * populates the cache with the 'to' and 'from' of the tx
   */
  function populateCache(cb) {
    var accounts = new Set();
    accounts.add(tx.from.toString('hex'));
    accounts.add(block.header.coinbase.toString('hex'));

    if (tx.to.toString('hex') !== '') {
      accounts.add(tx.to.toString('hex'));
      self.stateManager.touched.push(tx.to);
    }

    if (opts.populateCache === false) {
      return cb();
    }

    self.stateManager.warmCache(accounts, cb);
  }

  // sets up the environment and runs a `call`
  function runCall(cb) {
    // check to the sender's account to make sure it has enough wei and the correct nonce
    var fromAccount = self.stateManager.cache.get(tx.from);
    var message;

    if (!opts.skipBalance && new BN(fromAccount.balance).lt(tx.getUpfrontCost())) {
      message = "sender doesn't have enough funds to send tx. The upfront cost is: " + tx.getUpfrontCost().toString() + ' and the sender\'s account only has: ' + new BN(fromAccount.balance).toString();
      cb(new Error(message));
      return;
    } else if (!opts.skipNonce && !new BN(fromAccount.nonce).eq(new BN(tx.nonce))) {
      message = "the tx doesn't have the correct nonce. account has nonce of: " + new BN(fromAccount.nonce).toString() + ' tx has nonce of: ' + new BN(tx.nonce).toString();
      cb(new Error(message));
      return;
    }

    // increment the nonce
    fromAccount.nonce = new BN(fromAccount.nonce).addn(1);

    basefee = tx.getBaseFee();
    gasLimit = new BN(tx.gasLimit);
    if (gasLimit.lt(basefee)) {
      return cb(new Error('base fee exceeds gas limit'));
    }
    gasLimit.isub(basefee);

    fromAccount.balance = new BN(fromAccount.balance).sub(new BN(tx.gasLimit).mul(new BN(tx.gasPrice)));
    self.stateManager.cache.put(tx.from, fromAccount);

    var options = {
      caller: tx.from,
      gasLimit: gasLimit,
      gasPrice: tx.gasPrice,
      to: tx.to,
      value: tx.value,
      data: tx.data,
      block: block,
      populateCache: false
    };

    if (tx.to.toString('hex') === '') {
      delete options.to;
    }

    // run call
    self.runCall(options, parseResults);

    function parseResults(err, _results) {
      if (err) return cb(err);
      results = _results;

      // generate the bloom for the tx
      results.bloom = txLogsBloom(results.vm.logs);
      fromAccount = self.stateManager.cache.get(tx.from);

      // caculate the total gas used
      results.gasUsed = results.gasUsed.add(basefee);

      // process any gas refund
      results.gasRefund = results.vm.gasRefund;
      if (results.gasRefund) {
        if (results.gasRefund.lt(results.gasUsed.divn(2))) {
          results.gasUsed.isub(results.gasRefund);
        } else {
          results.gasUsed.isub(results.gasUsed.divn(2));
        }
      }

      results.amountSpent = results.gasUsed.mul(new BN(tx.gasPrice));
      // refund the leftover gas amount
      fromAccount.balance = new BN(tx.gasLimit).sub(results.gasUsed).mul(new BN(tx.gasPrice)).add(new BN(fromAccount.balance));

      self.stateManager.cache.put(tx.from, fromAccount);
      self.stateManager.touched.push(tx.from);

      var minerAccount = self.stateManager.cache.get(block.header.coinbase);
      // add the amount spent on gas to the miner's account
      minerAccount.balance = new BN(minerAccount.balance).add(results.amountSpent);

      // save the miner's account
      if (!new BN(minerAccount.balance).isZero()) {
        self.stateManager.cache.put(block.header.coinbase, minerAccount);
      }

      if (!results.vm.selfdestruct) {
        results.vm.selfdestruct = {};
      }

      var keys = Object.keys(results.vm.selfdestruct);

      keys.forEach(function (s) {
        self.stateManager.cache.del(Buffer.from(s, 'hex'));
      });

      // delete all touched accounts
      var touched = self.stateManager.touched;
      async.forEach(touched, function (address, next) {
        self.stateManager.accountIsEmpty(address, function (err, empty) {
          if (err) {
            next(err);
            return;
          }

          if (empty) {
            self.stateManager.cache.del(address);
          }
          next(null);
        });
      }, function () {
        self.stateManager.touched = [];
        cb();
      });
    }
  }

  function saveTries(cb) {
    self.stateManager.commitContracts(cb);
  }

  function flushCache(cb) {
    self.stateManager.cache.flush(function () {
      if (opts.populateCache) {
        self.stateManager.cache.clear();
      }
      cb();
    });
  }
};

/**
 * @method txLogsBloom
 */
function txLogsBloom(logs) {
  var bloom = new Bloom();
  if (logs) {
    for (var i = 0; i < logs.length; i++) {
      var log = logs[i];
      // add the address
      bloom.add(log[0]);
      // add the topics
      var topics = log[1];
      for (var q = 0; q < topics.length; q++) {
        bloom.add(topics[q]);
      }
    }
  }
  return bloom;
}

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Buffer = __webpack_require__(5).Buffer;
var async = __webpack_require__(2);
var ethUtil = __webpack_require__(0);
var BN = ethUtil.BN;
var fees = __webpack_require__(4);
var exceptions = __webpack_require__(6);

var ERROR = exceptions.ERROR;

/**
 * runs a CALL operation
 * @method runCall
 * @param opts
 * @param opts.block {Block}
 * @param opts.caller {Buffer}
 * @param opts.code {Buffer} this is for CALLCODE where the code to load is different than the code from the to account.
 * @param opts.data {Buffer}
 * @param opts.gasLimit {Buffer | BN.js }
 * @param opts.gasPrice {Buffer}
 * @param opts.origin {Buffer} []
 * @param opts.to {Buffer}
 * @param opts.value {Buffer}
 */
module.exports = function (opts, cb) {
  var self = this;
  var stateManager = self.stateManager;

  var vmResults = {};
  var toAccount;
  var toAddress = opts.to;
  var createdAddress;
  var txValue = opts.value || Buffer.from([0]);
  var caller = opts.caller;
  var account = stateManager.cache.get(caller);
  var block = opts.block;
  var code = opts.code;
  var txData = opts.data;
  var gasLimit = opts.gasLimit || new BN(0xffffff);
  gasLimit = new BN(opts.gasLimit); // make sure is a BN
  var gasPrice = opts.gasPrice;
  var gasUsed = new BN(0);
  var origin = opts.origin;
  var isCompiled = opts.compiled;
  var depth = opts.depth;
  // opts.suicides is kept for backward compatiblity with pre-EIP6 syntax
  var selfdestruct = opts.selfdestruct || opts.suicides;
  var delegatecall = opts.delegatecall || false;
  var isStatic = opts.static || false;

  txValue = new BN(txValue);

  stateManager.checkpoint();

  // run and parse
  subTxValue();

  async.series([loadToAccount, loadCode, runCode, saveCode], parseCallResult);

  function loadToAccount(done) {
    // get receiver's account
    // toAccount = stateManager.cache.get(toAddress)
    if (!toAddress) {
      // generate a new contract if no `to`
      code = txData;
      txData = undefined;
      var newNonce = new BN(account.nonce).subn(1);
      createdAddress = toAddress = ethUtil.generateAddress(caller, newNonce.toArray());
      stateManager.getAccount(createdAddress, function (err, account) {
        toAccount = account;
        var NONCE_OFFSET = 1;
        toAccount.nonce = new BN(toAccount.nonce).addn(NONCE_OFFSET).toArrayLike(Buffer);
        done(err);
      });
    } else {
      // else load the `to` account
      toAccount = stateManager.cache.get(toAddress);
      done();
    }
  }

  function subTxValue() {
    if (delegatecall) {
      return;
    }
    account.balance = new BN(account.balance).sub(txValue);
    stateManager.cache.put(caller, account);
  }

  function addTxValue() {
    if (delegatecall) {
      return;
    }
    // add the amount sent to the `to` account
    toAccount.balance = new BN(toAccount.balance).add(txValue);
    stateManager.cache.put(toAddress, toAccount);
    stateManager.touched.push(toAddress);
  }

  function loadCode(cb) {
    addTxValue();
    // loads the contract's code if the account is a contract
    if (code || !(toAccount.isContract() || self._precompiled[toAddress.toString('hex')])) {
      cb();
      return;
    }

    if (self._precompiled[toAddress.toString('hex')]) {
      isCompiled = true;
      code = self._precompiled[toAddress.toString('hex')];
      cb();
      return;
    }

    stateManager.getContractCode(toAddress, function (err, c, comp) {
      if (err) return cb(err);
      isCompiled = comp;
      code = c;
      cb();
    });
  }

  function runCode(cb) {
    if (!code) {
      vmResults.exception = 1;
      stateManager.commit(cb);
      return;
    }

    var runCodeOpts = {
      code: code,
      data: txData,
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      address: toAddress,
      origin: origin,
      caller: caller,
      value: txValue.toArrayLike(Buffer),
      block: block,
      depth: depth,
      selfdestruct: selfdestruct,
      populateCache: false,
      static: isStatic

      // run Code through vm
    };var codeRunner = isCompiled ? self.runJIT : self.runCode;
    codeRunner.call(self, runCodeOpts, parseRunResult);

    function parseRunResult(err, results) {
      toAccount = self.stateManager.cache.get(toAddress);
      vmResults = results;

      if (createdAddress) {
        // fee for size of the return value
        var totalGas = results.gasUsed;
        if (!results.runState.vmError) {
          var returnFee = new BN(results.return.length * fees.createDataGas.v);

          totalGas = totalGas.add(returnFee);
        }
        // if not enough gas
        if (totalGas.lte(gasLimit) && (self.allowUnlimitedContractSize || results.return.length <= 24576)) {
          results.gasUsed = totalGas;
        } else {
          results.return = Buffer.alloc(0);
          // since Homestead
          results.exception = 0;
          err = results.exceptionError = ERROR.OUT_OF_GAS;
          results.gasUsed = gasLimit;
        }
      }

      gasUsed = results.gasUsed;
      if (err) {
        results.logs = [];
        stateManager.revert(cb);
      } else {
        stateManager.commit(cb);
      }
    }
  }

  function saveCode(cb) {
    // store code for a new contract
    if (createdAddress && !vmResults.runState.vmError && vmResults.return && vmResults.return.toString() !== '') {
      stateManager.putContractCode(createdAddress, vmResults.return, cb);
    } else {
      cb();
    }
  }

  function parseCallResult(err) {
    if (err) return cb(err);
    var results = {
      gasUsed: gasUsed,
      createdAddress: createdAddress,
      vm: vmResults
    };

    cb(null, results);
  }
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var async = __webpack_require__(2);

/**
 * processes blocks and adds them to the blockchain
 * @method onBlock
 * @param blockchain
 */
module.exports = function (blockchain, cb) {
  var self = this;
  var headBlock, parentState;

  self.blockchain = self.stateManager.blockchain;

  // parse arguments
  if (typeof blockchain === 'function') {
    cb = blockchain;
  } else if (blockchain) {
    self.blockchain = blockchain;
  }

  // setup blockchain iterator
  self.blockchain.iterator('vm', processBlock, cb);
  function processBlock(block, reorg, cb) {
    async.series([getStartingState, runBlock], cb);

    // determine starting state for block run
    function getStartingState(cb) {
      // if we are just starting or if a chain re-org has happened
      if (!headBlock || reorg) {
        self.blockchain.getBlock(block.header.parentHash, function (err, parentBlock) {
          parentState = parentBlock.header.stateRoot;
          // generate genesis state if we are at the genesis block
          // we don't have the genesis state
          if (!headBlock) {
            return self.stateManager.generateCanonicalGenesis(cb);
          } else {
            cb(err);
          }
        });
      } else {
        parentState = headBlock.header.stateRoot;
        cb();
      }
    }

    // run block, update head if valid
    function runBlock(cb) {
      self.runBlock({
        block: block,
        root: parentState
      }, function (err, results) {
        if (err) {
          // remove invalid block
          console.log('Invalid block error:', err);
          self.blockchain.delBlock(block.header.hash(), cb);
        } else {
          // set as new head block
          headBlock = block;
          cb();
        }
      });
    }
  }
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const Transaction = __webpack_require__(129)
const ethUtil = __webpack_require__(0)

/**
 * Creates a new transaction object that doesn't need to be signed
 * @constructor
 * @class {Buffer|Array} data a transaction can be initiailized with either a buffer containing the RLP serialized transaction or an array of buffers relating to each of the tx Properties, listed in order below in the exmple. Or lastly an Object containing the Properties of the transaction like in the Usage example
 *
 * For Object and Arrays each of the elements can either be a Buffer, a hex-prefixed (0x) String , Number, or an object with a toBuffer method such as Bignum
 * @example
 * var rawTx = {
 *   nonce: '00',
 *   gasPrice: '09184e72a000',
 *   gasLimit: '2710',
 *   to: '0000000000000000000000000000000000000000',
 *   value: '00',
 *   data: '7f7465737432000000000000000000000000000000000000000000000000000000600057',
 *   v: '1c',
 *   r: '5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
 *   s '5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
 * };
 * var tx = new Transaction(rawTx);
 * @prop {Buffer} raw The raw rlp decoded transaction
 * @prop {Buffer} nonce
 * @prop {Buffer} to the to address
 * @prop {Buffer} value the amount of ether sent
 * @prop {Buffer} data this will contain the data of the message or the init of a contract
 * @prop {Buffer} v EC signature parameter
 * @prop {Buffer} r EC signature parameter
 * @prop {Buffer} s EC recovery ID
 */
module.exports = class FakeTransaction extends Transaction {
  constructor (data) {
    super(data)

    var self = this

    /**
     * @prop {Buffer} from (read/write) Set from address to bypass transaction signing.
     */
    Object.defineProperty(this, 'from', {
      enumerable: true,
      configurable: true,
      get: this.getSenderAddress.bind(self),
      set: function (val) {
        self._from = ethUtil.toBuffer(val)
      }
    })

    if (data && data.from) {
      this.from = data.from
    }
  }
}


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const ethUtil = __webpack_require__(0)
const fees = __webpack_require__(130)
const BN = ethUtil.BN

// secp256k1n/2
const N_DIV_2 = new BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16)

/**
 * Creates a new transaction object.
 *
 * @example
 * var rawTx = {
 *   nonce: '00',
 *   gasPrice: '09184e72a000',
 *   gasLimit: '2710',
 *   to: '0000000000000000000000000000000000000000',
 *   value: '00',
 *   data: '7f7465737432000000000000000000000000000000000000000000000000000000600057',
 *   v: '1c',
 *   r: '5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
 *   s: '5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
 * };
 * var tx = new Transaction(rawTx);
 *
 * @class
 * @param {Buffer | Array | Object} data a transaction can be initiailized with either a buffer containing the RLP serialized transaction or an array of buffers relating to each of the tx Properties, listed in order below in the exmple.
 *
 * Or lastly an Object containing the Properties of the transaction like in the Usage example.
 *
 * For Object and Arrays each of the elements can either be a Buffer, a hex-prefixed (0x) String , Number, or an object with a toBuffer method such as Bignum
 *
 * @property {Buffer} raw The raw rlp encoded transaction
 * @param {Buffer} data.nonce nonce number
 * @param {Buffer} data.gasLimit transaction gas limit
 * @param {Buffer} data.gasPrice transaction gas price
 * @param {Buffer} data.to to the to address
 * @param {Buffer} data.value the amount of ether sent
 * @param {Buffer} data.data this will contain the data of the message or the init of a contract
 * @param {Buffer} data.v EC signature parameter
 * @param {Buffer} data.r EC signature parameter
 * @param {Buffer} data.s EC recovery ID
 * @param {Number} data.chainId EIP 155 chainId - mainnet: 1, ropsten: 3
 * */

class Transaction {
  constructor (data) {
    data = data || {}
    // Define Properties
    const fields = [{
      name: 'nonce',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'gasPrice',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'gasLimit',
      alias: 'gas',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'to',
      allowZero: true,
      length: 20,
      default: new Buffer([])
    }, {
      name: 'value',
      length: 32,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 'data',
      alias: 'input',
      allowZero: true,
      default: new Buffer([])
    }, {
      name: 'v',
      allowZero: true,
      default: new Buffer([0x1c])
    }, {
      name: 'r',
      length: 32,
      allowZero: true,
      allowLess: true,
      default: new Buffer([])
    }, {
      name: 's',
      length: 32,
      allowZero: true,
      allowLess: true,
      default: new Buffer([])
    }]

    /**
     * Returns the rlp encoding of the transaction
     * @method serialize
     * @return {Buffer}
     * @memberof Transaction
     * @name serialize
     */
    // attached serialize
    ethUtil.defineProperties(this, fields, data)

    /**
     * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
     * @name from
     * @memberof Transaction
     */
    Object.defineProperty(this, 'from', {
      enumerable: true,
      configurable: true,
      get: this.getSenderAddress.bind(this)
    })

    // calculate chainId from signature
    let sigV = ethUtil.bufferToInt(this.v)
    let chainId = Math.floor((sigV - 35) / 2)
    if (chainId < 0) chainId = 0

    // set chainId
    this._chainId = chainId || data.chainId || 0
    this._homestead = true
  }

  /**
   * If the tx's `to` is to the creation address
   * @return {Boolean}
   */
  toCreationAddress () {
    return this.to.toString('hex') === ''
  }

  /**
   * Computes a sha3-256 hash of the serialized tx
   * @param {Boolean} [includeSignature=true] whether or not to inculde the signature
   * @return {Buffer}
   */
  hash (includeSignature) {
    if (includeSignature === undefined) includeSignature = true

    // EIP155 spec:
    // when computing the hash of a transaction for purposes of signing or recovering,
    // instead of hashing only the first six elements (ie. nonce, gasprice, startgas, to, value, data),
    // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0

    let items
    if (includeSignature) {
      items = this.raw
    } else {
      if (this._chainId > 0) {
        const raw = this.raw.slice()
        this.v = this._chainId
        this.r = 0
        this.s = 0
        items = this.raw
        this.raw = raw
      } else {
        items = this.raw.slice(0, 6)
      }
    }

    // create hash
    return ethUtil.rlphash(items)
  }

  /**
   * returns the public key of the sender
   * @return {Buffer}
   */
  getChainId () {
    return this._chainId
  }

  /**
   * returns the sender's address
   * @return {Buffer}
   */
  getSenderAddress () {
    if (this._from) {
      return this._from
    }
    const pubkey = this.getSenderPublicKey()
    this._from = ethUtil.publicToAddress(pubkey)
    return this._from
  }

  /**
   * returns the public key of the sender
   * @return {Buffer}
   */
  getSenderPublicKey () {
    if (!this._senderPubKey || !this._senderPubKey.length) {
      if (!this.verifySignature()) throw new Error('Invalid Signature')
    }
    return this._senderPubKey
  }

  /**
   * Determines if the signature is valid
   * @return {Boolean}
   */
  verifySignature () {
    const msgHash = this.hash(false)
    // All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.
    if (this._homestead && new BN(this.s).cmp(N_DIV_2) === 1) {
      return false
    }

    try {
      let v = ethUtil.bufferToInt(this.v)
      if (this._chainId > 0) {
        v -= this._chainId * 2 + 8
      }
      this._senderPubKey = ethUtil.ecrecover(msgHash, v, this.r, this.s)
    } catch (e) {
      return false
    }

    return !!this._senderPubKey
  }

  /**
   * sign a transaction with a given a private key
   * @param {Buffer} privateKey
   */
  sign (privateKey) {
    const msgHash = this.hash(false)
    const sig = ethUtil.ecsign(msgHash, privateKey)
    if (this._chainId > 0) {
      sig.v += this._chainId * 2 + 8
    }
    Object.assign(this, sig)
  }

  /**
   * The amount of gas paid for the data in this tx
   * @return {BN}
   */
  getDataFee () {
    const data = this.raw[5]
    const cost = new BN(0)
    for (let i = 0; i < data.length; i++) {
      data[i] === 0 ? cost.iaddn(fees.txDataZeroGas.v) : cost.iaddn(fees.txDataNonZeroGas.v)
    }
    return cost
  }

  /**
   * the minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
   * @return {BN}
   */
  getBaseFee () {
    const fee = this.getDataFee().iaddn(fees.txGas.v)
    if (this._homestead && this.toCreationAddress()) {
      fee.iaddn(fees.txCreation.v)
    }
    return fee
  }

  /**
   * the up front amount that an account must have for this transaction to be valid
   * @return {BN}
   */
  getUpfrontCost () {
    return new BN(this.gasLimit)
      .imul(new BN(this.gasPrice))
      .iadd(new BN(this.value))
  }

  /**
   * validates the signature and checks to see if it has enough gas
   * @param {Boolean} [stringError=false] whether to return a string with a dscription of why the validation failed or return a Bloolean
   * @return {Boolean|String}
   */
  validate (stringError) {
    const errors = []
    if (!this.verifySignature()) {
      errors.push('Invalid Signature')
    }

    if (this.getBaseFee().cmp(new BN(this.gasLimit)) > 0) {
      errors.push([`gas limit is too low. Need at least ${this.getBaseFee()}`])
    }

    if (stringError === undefined || stringError === false) {
      return errors.length === 0
    } else {
      return errors.join(' ')
    }
  }
}

module.exports = Transaction


/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = {"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation's data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation's data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn't exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = assert

function assert(condition, message) {
    if (!condition) {
        throw message || "Assertion failed";
    }
}


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parallelLimit;

var _eachOf = __webpack_require__(50);

var _eachOf2 = _interopRequireDefault(_eachOf);

var _parallel = __webpack_require__(155);

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Run the `tasks` collection of functions in parallel, without waiting until
 * the previous function has completed. If any of the functions pass an error to
 * its callback, the main `callback` is immediately called with the value of the
 * error. Once the `tasks` have completed, the results are passed to the final
 * `callback` as an array.
 *
 * **Note:** `parallel` is about kicking-off I/O tasks in parallel, not about
 * parallel execution of code.  If your tasks do not use any timers or perform
 * any I/O, they will actually be executed in series.  Any synchronous setup
 * sections for each task will happen one after the other.  JavaScript remains
 * single-threaded.
 *
 * **Hint:** Use [`reflect`]{@link module:Utils.reflect} to continue the
 * execution of other tasks when a task fails.
 *
 * It is also possible to use an object instead of an array. Each property will
 * be run as a function and the results will be passed to the final `callback`
 * as an object instead of an array. This can be a more readable way of handling
 * results from {@link async.parallel}.
 *
 * @name parallel
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {Array|Iterable|Object} tasks - A collection of
 * [async functions]{@link AsyncFunction} to run.
 * Each async function can complete with any number of optional `result` values.
 * @param {Function} [callback] - An optional callback to run once all the
 * functions have completed successfully. This function gets a results array
 * (or object) containing all the result arguments passed to the task callbacks.
 * Invoked with (err, results).
 *
 * @example
 * async.parallel([
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'one');
 *         }, 200);
 *     },
 *     function(callback) {
 *         setTimeout(function() {
 *             callback(null, 'two');
 *         }, 100);
 *     }
 * ],
 * // optional callback
 * function(err, results) {
 *     // the results array will equal ['one','two'] even though
 *     // the second function had a shorter timeout.
 * });
 *
 * // an example using an object instead of an array
 * async.parallel({
 *     one: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 1);
 *         }, 200);
 *     },
 *     two: function(callback) {
 *         setTimeout(function() {
 *             callback(null, 2);
 *         }, 100);
 *     }
 * }, function(err, results) {
 *     // results is now equals to: {one: 1, two: 2}
 * });
 */
function parallelLimit(tasks, callback) {
  (0, _parallel2.default)(_eachOf2.default, tasks, callback);
}
module.exports = exports['default'];

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(29),
    isObject = __webpack_require__(43);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(51);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 135 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachOfLimit;

var _eachOfLimit2 = __webpack_require__(56);

var _eachOfLimit3 = _interopRequireDefault(_eachOfLimit2);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`eachOf`]{@link module:Collections.eachOf} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name eachOfLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.eachOf]{@link module:Collections.eachOf}
 * @alias forEachOfLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`. The `key` is the item's key, or index in the case of an
 * array.
 * Invoked with (item, key, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachOfLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit3.default)(limit)(coll, (0, _wrapAsync2.default)(iteratee), callback);
}
module.exports = exports['default'];

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iterator;

var _isArrayLike = __webpack_require__(21);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _getIterator = __webpack_require__(138);

var _getIterator2 = _interopRequireDefault(_getIterator);

var _keys = __webpack_require__(139);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? { value: coll[i], key: i } : null;
    };
}

function createES2015Iterator(iterator) {
    var i = -1;
    return function next() {
        var item = iterator.next();
        if (item.done) return null;
        i++;
        return { value: item.value, key: i };
    };
}

function createObjectIterator(obj) {
    var okeys = (0, _keys2.default)(obj);
    var i = -1;
    var len = okeys.length;
    return function next() {
        var key = okeys[++i];
        return i < len ? { value: obj[key], key: key } : null;
    };
}

function iterator(coll) {
    if ((0, _isArrayLike2.default)(coll)) {
        return createArrayIterator(coll);
    }

    var iterator = (0, _getIterator2.default)(coll);
    return iterator ? createES2015Iterator(iterator) : createObjectIterator(coll);
}
module.exports = exports['default'];

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll) {
    return iteratorSymbol && coll[iteratorSymbol] && coll[iteratorSymbol]();
};

var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator;

module.exports = exports['default'];

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(140),
    baseKeys = __webpack_require__(151),
    isArrayLike = __webpack_require__(21);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(141),
    isArguments = __webpack_require__(142),
    isArray = __webpack_require__(49),
    isBuffer = __webpack_require__(144),
    isIndex = __webpack_require__(146),
    isTypedArray = __webpack_require__(147);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(143),
    isObjectLike = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(29),
    isObjectLike = __webpack_require__(30);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(52),
    stubFalse = __webpack_require__(145);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(148),
    baseUnary = __webpack_require__(149),
    nodeUtil = __webpack_require__(150);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(29),
    isLength = __webpack_require__(54),
    isObjectLike = __webpack_require__(30);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(53);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57)(module)))

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(152),
    nativeKeys = __webpack_require__(153);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 152 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(154);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 154 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _parallel;

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _isArrayLike = __webpack_require__(21);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _slice = __webpack_require__(15);

var _slice2 = _interopRequireDefault(_slice);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _parallel(eachfn, tasks, callback) {
    callback = callback || _noop2.default;
    var results = (0, _isArrayLike2.default)(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        (0, _wrapAsync2.default)(task)(function (err, result) {
            if (arguments.length > 2) {
                result = (0, _slice2.default)(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = require("eth-sig-util");

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

const createPayload = __webpack_require__(9)

module.exports = estimateGas

/*

This is a work around for https://github.com/ethereum/go-ethereum/issues/2577

*/


function estimateGas(provider, txParams, cb) {
  provider.sendAsync(createPayload({
    method: 'eth_estimateGas',
    params: [txParams]
  }), function(err, res){
    if (err) {
      // handle simple value transfer case
      if (err.message === 'no contract code at given address') {
        return cb(null, '0xcf08')
      } else {
        return cb(err)
      }
    }
    cb(null, res.result)
  })
}

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = require("ethereumjs-tx");

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

const xhr = process.browser ? __webpack_require__(160) : __webpack_require__(161)
const inherits = __webpack_require__(1).inherits
const createPayload = __webpack_require__(9)
const Subprovider = __webpack_require__(3)
const JsonRpcError = __webpack_require__(31)


module.exports = RpcSource

inherits(RpcSource, Subprovider)

function RpcSource(opts) {
  const self = this
  self.rpcUrl = opts.rpcUrl
}

RpcSource.prototype.handleRequest = function(payload, next, end){
  const self = this
  const targetUrl = self.rpcUrl

  // overwrite id to conflict with other concurrent users
  let newPayload = createPayload(payload)

  xhr({
    uri: targetUrl,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPayload),
    rejectUnauthorized: false,
  }, function(err, res, body) {
    if (err) return end(new JsonRpcError.InternalError(err))

    // check for error code
    switch (res.statusCode) {
      case 405:
        return end(new JsonRpcError.MethodNotFound())
      case 504: // Gateway timeout
        let msg = `Gateway timeout. The request took too long to process. `
        msg += `This can happen when querying logs over too wide a block range.`
        const err = new Error(msg)
        return end(new JsonRpcError.InternalError(err))
      default:
        if (res.statusCode != 200) {
          return end(new JsonRpcError.InternalError(res.body))
        }
    }

    // parse response
    let data
    try {
      data = JSON.parse(body)
    } catch (err) {
      console.error(err.stack)
      return end(new JsonRpcError.InternalError(err))
    }
    if (data.error) return end(data.error)

    end(null, data.result)
  })

}


/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = require("xhr");

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

const ProviderEngine = __webpack_require__(163)
const DefaultFixture = __webpack_require__(171)
const NonceTrackerSubprovider = __webpack_require__(59)
const CacheSubprovider = __webpack_require__(40)
const FilterSubprovider = __webpack_require__(25)
const SubscriptionSubprovider = __webpack_require__(173)
const InflightCacheSubprovider = __webpack_require__(174)
const HookedWalletSubprovider = __webpack_require__(47)
const SanitizingSubprovider = __webpack_require__(175)
const InfuraSubprovider = __webpack_require__(176)
const FetchSubprovider = __webpack_require__(183)
const WebSocketSubprovider = __webpack_require__(186)


module.exports = ZeroClientProvider


function ZeroClientProvider(opts = {}){
  const connectionType = getConnectionType(opts)
  const engine = new ProviderEngine(opts.engineParams)

  // static
  const staticSubprovider = new DefaultFixture(opts.static)
  engine.addProvider(staticSubprovider)

  // nonce tracker
  engine.addProvider(new NonceTrackerSubprovider())

  // sanitization
  const sanitizer = new SanitizingSubprovider()
  engine.addProvider(sanitizer)

  // cache layer
  const cacheSubprovider = new CacheSubprovider()
  engine.addProvider(cacheSubprovider)

  // filters + subscriptions
  // for websockets, only polyfill filters
  if (connectionType === 'ws') {
    const filterSubprovider = new FilterSubprovider()
    engine.addProvider(filterSubprovider)
  // otherwise, polyfill both subscriptions and filters
  } else {
    const filterAndSubsSubprovider = new SubscriptionSubprovider()
    // forward subscription events through provider
    filterAndSubsSubprovider.on('data', (err, notification) => {
      engine.emit('data', err, notification)
    })
    engine.addProvider(filterAndSubsSubprovider)
  }

  // inflight cache
  const inflightCache = new InflightCacheSubprovider()
  engine.addProvider(inflightCache)

  // id mgmt
  const idmgmtSubprovider = new HookedWalletSubprovider({
    // accounts
    getAccounts: opts.getAccounts,
    // transactions
    processTransaction: opts.processTransaction,
    approveTransaction: opts.approveTransaction,
    signTransaction: opts.signTransaction,
    publishTransaction: opts.publishTransaction,
    // messages
    // old eth_sign
    processMessage: opts.processMessage,
    approveMessage: opts.approveMessage,
    signMessage: opts.signMessage,
    // new personal_sign
    processPersonalMessage: opts.processPersonalMessage,
    processTypedMessage: opts.processTypedMessage,
    approvePersonalMessage: opts.approvePersonalMessage,
    approveTypedMessage: opts.approveTypedMessage,
    signPersonalMessage: opts.signPersonalMessage,
    signTypedMessage: opts.signTypedMessage,
    personalRecoverSigner: opts.personalRecoverSigner,
  })
  engine.addProvider(idmgmtSubprovider)

  // data source
  const dataSubprovider = opts.dataSubprovider || createDataSubprovider(connectionType, opts)
  // for websockets, forward subscription events through provider
  if (connectionType === 'ws') {
    dataSubprovider.on('data', (err, notification) => {
      engine.emit('data', err, notification)
    })
  }
  engine.addProvider(dataSubprovider)

  // start polling
  engine.start()

  return engine

}

function createDataSubprovider(connectionType, opts) {
  const { rpcUrl, debug } = opts

  // default to infura
  if (!connectionType) {
    return new InfuraSubprovider()
  }
  if (connectionType === 'http') {
    return new FetchSubprovider({ rpcUrl, debug })
  }
  if (connectionType === 'ws') {
    return new WebSocketSubprovider({ rpcUrl, debug })
  }

  throw new Error(`ProviderEngine - unrecognized connectionType "${connectionType}"`)
}

function getConnectionType({ rpcUrl }) {
  if (!rpcUrl) return undefined

  const protocol = rpcUrl.split(':')[0]
  switch (protocol) {
    case 'http':
    case 'https':
      return 'http'
    case 'ws':
    case 'wss':
      return 'ws'
    default:
      throw new Error(`ProviderEngine - unrecognized protocol in "${rpcUrl}"`)
  }
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(14).EventEmitter
const inherits = __webpack_require__(1).inherits
const ethUtil = __webpack_require__(0)
const EthBlockTracker = __webpack_require__(164)
const map = __webpack_require__(165)
const eachSeries = __webpack_require__(168)
const Stoplight = __webpack_require__(18)
const cacheUtils = __webpack_require__(17)
const createPayload = __webpack_require__(9)
const noop = function(){}

module.exports = Web3ProviderEngine


inherits(Web3ProviderEngine, EventEmitter)

function Web3ProviderEngine(opts) {
  const self = this
  EventEmitter.call(self)
  self.setMaxListeners(30)
  // parse options
  opts = opts || {}

  // block polling
  const directProvider = { sendAsync: self._handleAsync.bind(self) }
  const blockTrackerProvider = opts.blockTrackerProvider || directProvider
  self._blockTracker = opts.blockTracker || new EthBlockTracker({
    provider: blockTrackerProvider,
    pollingInterval: opts.pollingInterval || 4000,
  })

  // handle new block
  self._blockTracker.on('block', (jsonBlock) => {
    const bufferBlock = toBufferBlock(jsonBlock)
    self._setCurrentBlock(bufferBlock)
  })

  // emit block events from the block tracker
  self._blockTracker.on('block', self.emit.bind(self, 'rawBlock'))
  self._blockTracker.on('sync', self.emit.bind(self, 'sync'))
  self._blockTracker.on('latest', self.emit.bind(self, 'latest'))

  // set initialization blocker
  self._ready = new Stoplight()
  // unblock initialization after first block
  self._blockTracker.once('block', () => {
    self._ready.go()
  })
  // local state
  self.currentBlock = null
  self._providers = []
}

// public

Web3ProviderEngine.prototype.start = function(cb = noop){
  const self = this
  // start block polling
  self._blockTracker.start().then(cb).catch(cb)
}

Web3ProviderEngine.prototype.stop = function(){
  const self = this
  // stop block polling
  self._blockTracker.stop()
}

Web3ProviderEngine.prototype.addProvider = function(source){
  const self = this
  self._providers.push(source)
  source.setEngine(this)
}

Web3ProviderEngine.prototype.send = function(payload){
  throw new Error('Web3ProviderEngine does not support synchronous requests.')
}

Web3ProviderEngine.prototype.sendAsync = function(payload, cb){
  const self = this
  self._ready.await(function(){

    if (Array.isArray(payload)) {
      // handle batch
      map(payload, self._handleAsync.bind(self), cb)
    } else {
      // handle single
      self._handleAsync(payload, cb)
    }

  })
}

// private

Web3ProviderEngine.prototype._handleAsync = function(payload, finished) {
  var self = this
  var currentProvider = -1
  var result = null
  var error = null

  var stack = []

  next()

  function next(after) {
    currentProvider += 1
    stack.unshift(after)

    // Bubbled down as far as we could go, and the request wasn't
    // handled. Return an error.
    if (currentProvider >= self._providers.length) {
      end(new Error('Request for method "' + payload.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'))
    } else {
      try {
        var provider = self._providers[currentProvider]
        provider.handleRequest(payload, next, end)
      } catch (e) {
        end(e)
      }
    }
  }

  function end(_error, _result) {
    error = _error
    result = _result

    eachSeries(stack, function(fn, callback) {

      if (fn) {
        fn(error, result, callback)
      } else {
        callback()
      }
    }, function() {
      // console.log('COMPLETED:', payload)
      // console.log('RESULT: ', result)

      var resultObj = {
        id: payload.id,
        jsonrpc: payload.jsonrpc,
        result: result
      }

      if (error != null) {
        resultObj.error = {
          message: error.stack || error.message || error,
          code: -32000
        }
        // respond with both error formats
        finished(error, resultObj)
      } else {
        finished(null, resultObj)
      }
    })
  }
}

//
// from remote-data
//

Web3ProviderEngine.prototype._setCurrentBlock = function(block){
  const self = this
  self.currentBlock = block
  self.emit('block', block)
}

// util

function toBufferBlock (jsonBlock) {
  return {
    number:           ethUtil.toBuffer(jsonBlock.number),
    hash:             ethUtil.toBuffer(jsonBlock.hash),
    parentHash:       ethUtil.toBuffer(jsonBlock.parentHash),
    nonce:            ethUtil.toBuffer(jsonBlock.nonce),
    sha3Uncles:       ethUtil.toBuffer(jsonBlock.sha3Uncles),
    logsBloom:        ethUtil.toBuffer(jsonBlock.logsBloom),
    transactionsRoot: ethUtil.toBuffer(jsonBlock.transactionsRoot),
    stateRoot:        ethUtil.toBuffer(jsonBlock.stateRoot),
    receiptsRoot:     ethUtil.toBuffer(jsonBlock.receiptRoot || jsonBlock.receiptsRoot),
    miner:            ethUtil.toBuffer(jsonBlock.miner),
    difficulty:       ethUtil.toBuffer(jsonBlock.difficulty),
    totalDifficulty:  ethUtil.toBuffer(jsonBlock.totalDifficulty),
    size:             ethUtil.toBuffer(jsonBlock.size),
    extraData:        ethUtil.toBuffer(jsonBlock.extraData),
    gasLimit:         ethUtil.toBuffer(jsonBlock.gasLimit),
    gasUsed:          ethUtil.toBuffer(jsonBlock.gasUsed),
    timestamp:        ethUtil.toBuffer(jsonBlock.timestamp),
    transactions:     jsonBlock.transactions,
  }
}


/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("eth-block-tracker");

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doParallel = __webpack_require__(166);

var _doParallel2 = _interopRequireDefault(_doParallel);

var _map = __webpack_require__(167);

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Produces a new collection of values by mapping each value in `coll` through
 * the `iteratee` function. The `iteratee` is called with an item from `coll`
 * and a callback for when it has finished processing. Each of these callback
 * takes 2 arguments: an `error`, and the transformed item from `coll`. If
 * `iteratee` passes an error to its callback, the main `callback` (for the
 * `map` function) is immediately called with the error.
 *
 * Note, that since this function applies the `iteratee` to each item in
 * parallel, there is no guarantee that the `iteratee` functions will complete
 * in order. However, the results array will be in the same order as the
 * original `coll`.
 *
 * If `map` is passed an Object, the results will be an Array.  The results
 * will roughly be in the order of the original Objects' keys (but this can
 * vary across JavaScript engines).
 *
 * @name map
 * @static
 * @memberOf module:Collections
 * @method
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with the transformed item.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Results is an Array of the
 * transformed items from the `coll`. Invoked with (err, results).
 * @example
 *
 * async.map(['file1','file2','file3'], fs.stat, function(err, results) {
 *     // results is now an array of stats for each file
 * });
 */
exports.default = (0, _doParallel2.default)(_map2.default);
module.exports = exports['default'];

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doParallel;

var _eachOf = __webpack_require__(50);

var _eachOf2 = _interopRequireDefault(_eachOf);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function doParallel(fn) {
    return function (obj, iteratee, callback) {
        return fn(_eachOf2.default, obj, (0, _wrapAsync2.default)(iteratee), callback);
    };
}
module.exports = exports['default'];

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _asyncMap;

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncMap(eachfn, arr, iteratee, callback) {
    callback = callback || _noop2.default;
    arr = arr || [];
    var results = [];
    var counter = 0;
    var _iteratee = (0, _wrapAsync2.default)(iteratee);

    eachfn(arr, function (value, _, callback) {
        var index = counter++;
        _iteratee(value, function (err, v) {
            results[index] = v;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _eachLimit = __webpack_require__(169);

var _eachLimit2 = _interopRequireDefault(_eachLimit);

var _doLimit = __webpack_require__(58);

var _doLimit2 = _interopRequireDefault(_doLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs only a single async operation at a time.
 *
 * @name eachSeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async function to apply to each
 * item in `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfSeries`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
exports.default = (0, _doLimit2.default)(_eachLimit2.default, 1);
module.exports = exports['default'];

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eachLimit;

var _eachOfLimit = __webpack_require__(56);

var _eachOfLimit2 = _interopRequireDefault(_eachOfLimit);

var _withoutIndex = __webpack_require__(170);

var _withoutIndex2 = _interopRequireDefault(_withoutIndex);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`each`]{@link module:Collections.each} but runs a maximum of `limit` async operations at a time.
 *
 * @name eachLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.each]{@link module:Collections.each}
 * @alias forEachLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The array index is not passed to the iteratee.
 * If you need the index, use `eachOfLimit`.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called when all
 * `iteratee` functions have finished, or an error occurs. Invoked with (err).
 */
function eachLimit(coll, limit, iteratee, callback) {
  (0, _eachOfLimit2.default)(limit)(coll, (0, _withoutIndex2.default)((0, _wrapAsync2.default)(iteratee)), callback);
}
module.exports = exports['default'];

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _withoutIndex;
function _withoutIndex(iteratee) {
    return function (value, index, callback) {
        return iteratee(value, callback);
    };
}
module.exports = exports["default"];

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

const inherits = __webpack_require__(1).inherits
const extend = __webpack_require__(19)
const FixtureProvider = __webpack_require__(41)
const version = __webpack_require__(172).version

module.exports = DefaultFixtures

inherits(DefaultFixtures, FixtureProvider)

function DefaultFixtures(opts) {
  const self = this
  opts = opts || {}
  var responses = extend({
    web3_clientVersion: 'ProviderEngine/v'+version+'/javascript',
    net_listening: true,
    eth_hashrate: '0x00',
    eth_mining: false,
  }, opts)
  FixtureProvider.call(self, responses)
}


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = {"_args":[["web3-provider-engine@14.0.4","C:\\cryptocurve\\ethvm-socket-server"]],"_from":"web3-provider-engine@14.0.4","_id":"web3-provider-engine@14.0.4","_inBundle":false,"_integrity":"sha512-EKNWQ8vTBPtxYwHlYWySENy6hUD0xNuFRFlIBJUcR7wHQVzlJN7WD/ynqxy3uRruNUmCRRYrT9gyQnLTQ+lkgg==","_location":"/web3-provider-engine","_phantomChildren":{"async":"2.6.0","async-eventemitter":"0.2.4","async-limiter":"1.0.0","bn.js":"4.11.8","create-hash":"1.1.3","ethereum-common":"0.2.0","ethereumjs-account":"2.0.4","ethereumjs-block":"1.7.0","ethjs-util":"0.1.4","fake-merkle-patricia-tree":"1.0.1","functional-red-black-tree":"1.0.1","keccak":"1.4.0","merkle-patricia-tree":"2.3.0","rlp":"2.0.0","rustbn.js":"0.1.1","safe-buffer":"5.1.1","secp256k1":"3.4.0"},"_requested":{"type":"version","registry":true,"raw":"web3-provider-engine@14.0.4","name":"web3-provider-engine","escapedName":"web3-provider-engine","rawSpec":"14.0.4","saveSpec":null,"fetchSpec":"14.0.4"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/web3-provider-engine/-/web3-provider-engine-14.0.4.tgz","_spec":"14.0.4","_where":"C:\\cryptocurve\\ethvm-socket-server","author":"","browser":{"request":false,"ws":false},"bugs":{"url":"https://github.com/MetaMask/provider-engine/issues"},"dependencies":{"async":"^2.5.0","backoff":"^2.5.0","clone":"^2.0.0","cross-fetch":"^2.1.0","eth-block-tracker":"^2.3.0","eth-json-rpc-infura":"^3.1.0","eth-sig-util":"^1.4.2","ethereumjs-block":"^1.2.2","ethereumjs-tx":"^1.2.0","ethereumjs-util":"^5.1.5","ethereumjs-vm":"^2.3.4","json-rpc-error":"^2.0.0","json-stable-stringify":"^1.0.1","promise-to-callback":"^1.0.0","readable-stream":"^2.2.9","request":"^2.67.0","semaphore":"^1.0.3","tape":"^4.4.0","ws":"^5.1.1","xhr":"^2.2.0","xtend":"^4.0.1"},"description":"[![Greenkeeper badge](https://badges.greenkeeper.io/MetaMask/provider-engine.svg)](https://greenkeeper.io/)","devDependencies":{"babel-cli":"^6.26.0","babel-preset-es2015":"^6.24.1","babel-preset-stage-0":"^6.24.1","browserify":"^16.1.1","ethjs":"^0.3.6"},"homepage":"https://github.com/MetaMask/provider-engine#readme","license":"MIT","main":"index.js","name":"web3-provider-engine","repository":{"type":"git","url":"git+https://github.com/MetaMask/provider-engine.git"},"scripts":{"build":"babel zero.js index.js -d dist/es5 && babel subproviders -d dist/es5/subproviders && babel util -d dist/es5/util","bundle":"mkdir -p ./dist && npm run bundle-engine && npm run bundle-zero","bundle-engine":"browserify -s ProviderEngine -e index.js -t [ babelify --presets [ es2015 ] ] > dist/ProviderEngine.js","bundle-zero":"browserify -s ZeroClientProvider -e zero.js -t [ babelify --presets [ es2015 ] ] > dist/ZeroClientProvider.js","prepublish":"npm run build && npm run bundle","test":"node test/index.js"},"version":"14.0.4"}

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

const EventEmitter = __webpack_require__(14).EventEmitter
const FilterSubprovider = __webpack_require__(25)
const from = __webpack_require__(46)
const inherits = __webpack_require__(1).inherits
const utils = __webpack_require__(0)

function SubscriptionSubprovider(opts) {
  const self = this

  opts = opts || {}

  EventEmitter.apply(this, Array.prototype.slice.call(arguments))
  FilterSubprovider.apply(this, [opts])

  this.subscriptions = {}
}

inherits(SubscriptionSubprovider, FilterSubprovider)

// a cheap crack at multiple inheritance
// I don't really care if `instanceof EventEmitter` passes...
Object.assign(SubscriptionSubprovider.prototype, EventEmitter.prototype)

// preserve our constructor, though
SubscriptionSubprovider.prototype.constructor = SubscriptionSubprovider

SubscriptionSubprovider.prototype.eth_subscribe = function(payload, cb) {
  const self = this
  let createSubscriptionFilter = () => {}
  let subscriptionType = payload.params[0]

  switch (subscriptionType) {
    case 'logs':
      let options = payload.params[1]

      createSubscriptionFilter = self.newLogFilter.bind(self, options)
      break
    case 'newPendingTransactions':
      createSubscriptionFilter = self.newPendingTransactionFilter.bind(self)
      break
    case 'newHeads':
      createSubscriptionFilter = self.newBlockFilter.bind(self)
      break
    case 'syncing':
    default:
      cb(new Error('unsupported subscription type'))
      return
  }

  createSubscriptionFilter(function(err, hexId) {
    if (err) return cb(err)

    const id = Number.parseInt(hexId, 16)
    self.subscriptions[id] = subscriptionType

    self.filters[id].on('data', function(results) {
      if (!Array.isArray(results)) {
        results = [results]
      }

      var notificationHandler = self._notificationHandler.bind(self, hexId, subscriptionType)
      results.forEach(notificationHandler)
      self.filters[id].clearChanges()
    })
    if (subscriptionType === 'newPendingTransactions') {
      self.checkForPendingBlocks()
    }
    cb(null, hexId)
  })
}

SubscriptionSubprovider.prototype.eth_unsubscribe = function(payload, cb) {
  const self = this
  let hexId = payload.params[0]
  const id = Number.parseInt(hexId, 16)
  if (!self.subscriptions[id]) {
    cb(new Error(`Subscription ID ${hexId} not found.`))
  } else {
    let subscriptionType = self.subscriptions[id]
    self.uninstallFilter(hexId, function (err, result) {
      delete self.subscriptions[id]
      cb(err, result)
    })
  }
}


SubscriptionSubprovider.prototype._notificationHandler = function (hexId, subscriptionType, result) {
  const self = this
  if (subscriptionType === 'newHeads') {
    result = self._notificationResultFromBlock(result)
  }

  // it seems that web3 doesn't expect there to be a separate error event
  // so we must emit null along with the result object
  self.emit('data', null, {
    jsonrpc: "2.0",
    method: "eth_subscription",
    params: {
      subscription: hexId,
      result: result,
    },
  })
}

SubscriptionSubprovider.prototype._notificationResultFromBlock = function(block) {
  return {
    hash: utils.bufferToHex(block.hash),
    parentHash: utils.bufferToHex(block.parentHash),
    sha3Uncles: utils.bufferToHex(block.sha3Uncles),
    miner: utils.bufferToHex(block.miner),
    stateRoot: utils.bufferToHex(block.stateRoot),
    transactionsRoot: utils.bufferToHex(block.transactionsRoot),
    receiptsRoot: utils.bufferToHex(block.receiptsRoot),
    logsBloom: utils.bufferToHex(block.logsBloom),
    difficulty: from.intToQuantityHex(utils.bufferToInt(block.difficulty)),
    number: from.intToQuantityHex(utils.bufferToInt(block.number)),
    gasLimit: from.intToQuantityHex(utils.bufferToInt(block.gasLimit)),
    gasUsed: from.intToQuantityHex(utils.bufferToInt(block.gasUsed)),
    nonce: block.nonce ? utils.bufferToHex(block.nonce): null,
    timestamp: from.intToQuantityHex(utils.bufferToInt(block.timestamp)),
    extraData: utils.bufferToHex(block.extraData)
  }
}

SubscriptionSubprovider.prototype.handleRequest = function(payload, next, end) {
  switch(payload.method){
    case 'eth_subscribe':
      this.eth_subscribe(payload, end)
      break
    case 'eth_unsubscribe':
      this.eth_unsubscribe(payload, end)
      break
    default:
      FilterSubprovider.prototype.handleRequest.apply(this, Array.prototype.slice.call(arguments))
  }
}

module.exports = SubscriptionSubprovider


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

const cacheIdentifierForPayload = __webpack_require__(17).cacheIdentifierForPayload
const Subprovider = __webpack_require__(3)


class InflightCacheSubprovider extends Subprovider {

  constructor (opts) {
    super()
    this.inflightRequests = {}
  }

  addEngine (engine) {
    this.engine = engine
  }

  handleRequest (req, next, end) {
    const cacheId = cacheIdentifierForPayload(req, { includeBlockRef: true })

    // if not cacheable, skip
    if (!cacheId) return next()

    // check for matching requests
    let activeRequestHandlers = this.inflightRequests[cacheId]

    if (!activeRequestHandlers) {
      // create inflight cache for cacheId
      activeRequestHandlers = []
      this.inflightRequests[cacheId] = activeRequestHandlers

      next((err, result, cb) => {
        // complete inflight for cacheId
        delete this.inflightRequests[cacheId]
        activeRequestHandlers.forEach((handler) => handler(err, result))
        cb(err, result)
      })

    } else {
      // hit inflight cache for cacheId
      // setup the response listener
      activeRequestHandlers.push(end)
    }

  }
}

module.exports = InflightCacheSubprovider



/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

/* Sanitization Subprovider
 * For Parity compatibility
 * removes irregular keys
 */

const inherits = __webpack_require__(1).inherits
const Subprovider = __webpack_require__(3)
const extend = __webpack_require__(19)
const ethUtil = __webpack_require__(0)

module.exports = SanitizerSubprovider

inherits(SanitizerSubprovider, Subprovider)

function SanitizerSubprovider(opts){
  const self = this
}

SanitizerSubprovider.prototype.handleRequest = function(payload, next, end){
  var txParams = payload.params[0]

  if (typeof txParams === 'object' && !Array.isArray(txParams)) {
    var sanitized = cloneTxParams(txParams)
    payload.params[0] = sanitized
  }

  next()
}

// we use this to clean any custom params from the txParams
var permitted = [
  'from',
  'to',
  'value',
  'data',
  'gas',
  'gasPrice',
  'nonce',
  'fromBlock',
  'toBlock',
  'address',
  'topics',
]

function cloneTxParams(txParams){
  var sanitized  =  permitted.reduce(function(copy, permitted) {
    if (permitted in txParams) {
      if (Array.isArray(txParams[permitted])) {
        copy[permitted] = txParams[permitted]
        .map(function(item) {
          return sanitize(item)
        })
      } else {
        copy[permitted] = sanitize(txParams[permitted])
      }
    }
    return copy
  }, {})

  return sanitized
}

function sanitize(value) {
  switch (value) {
    case 'latest':
      return value
    case 'pending':
      return value
    case 'earliest':
      return value
    default:
      if (typeof value === 'string') {
        return ethUtil.addHexPrefix(value.toLowerCase())
      } else {
        return value
      }
  }
}


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

const createInfuraProvider = __webpack_require__(177)
const ProviderSubprovider = __webpack_require__(182)

class InfuraSubprovider extends ProviderSubprovider {
  constructor(opts = {}) {
    const provider = createInfuraProvider(opts)
    super(provider)
  }
}

module.exports = InfuraSubprovider


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

const RpcEngine = __webpack_require__(178)
const providerFromEngine = __webpack_require__(179)
const createInfuraMiddleware = __webpack_require__(180)


module.exports = createProvider

function createProvider(opts){
  const engine = new RpcEngine()
  engine.push(createInfuraMiddleware(opts))
  return providerFromEngine(engine)
}


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = require("json-rpc-engine");

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = providerFromEngine

function providerFromEngine (engine) {
  const provider = { sendAsync: engine.handle.bind(engine) }
  return provider
}


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

const createAsyncMiddleware = __webpack_require__(181)
const JsonRpcError = __webpack_require__(31)
const fetch = __webpack_require__(61)

const POST_METHODS = ['eth_call', 'eth_estimateGas', 'eth_sendRawTransaction']
const RETRIABLE_ERRORS = [
  // ignore server overload errors
  'Gateway timeout',
  'ETIMEDOUT',
  // ignore server sent html error pages
  // or truncated json responses
  'SyntaxError',
]

module.exports = createInfuraMiddleware
module.exports.fetchConfigFromReq = fetchConfigFromReq

function createInfuraMiddleware({ network = 'mainnet', maxAttempts = 5 }) {
  // validate options
  if (!maxAttempts) throw new Error(`Invalid value for 'maxAttempts': "${maxAttempts}" (${typeof maxAttempts})`)

  return createAsyncMiddleware(async (req, res, next) => {
    // retry MAX_ATTEMPTS times, if error matches filter
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // attempt request
        await performFetch(network, req, res)
        // request was succesful
        break
      } catch (err) {
        // an error was caught while performing the request
        // if not retriable, resolve with the encountered error
        if (!isRetriableError(err)) {
          // abort with error
          throw err
        }
        // if no more attempts remaining, throw an error
        const remainingAttempts = maxAttempts - attempt
        if (!remainingAttempts) {
          const errMsg = `InfuraProvider - cannot complete request. All retries exhausted.\nOriginal Error:\n${err.toString()}\n\n`
          const retriesExhaustedErr = new Error(errMsg)
          throw retriesExhaustedErr
        }
        // otherwise, ignore error and retry again after timeout
        await timeout(1000)
      }
    }
    // request was handled correctly, end
  })
}

function timeout(length) {
  return new Promise((resolve) => {
    setTimeout(resolve, length)
  })
}

function isRetriableError(err) {
  const errMessage = err.toString()
  return RETRIABLE_ERRORS.some(phrase => errMessage.includes(phrase))
}

async function performFetch(network, req, res){
  const { fetchUrl, fetchParams } = fetchConfigFromReq({ network, req })
  const response = await fetch(fetchUrl, fetchParams)
  const rawData = await response.text()
  // handle errors
  if (!response.ok) {
    switch (response.status) {
      case 405:
        throw new JsonRpcError.MethodNotFound()

      case 418:
        throw createRatelimitError()

      case 503:
      case 504:
        throw createTimeoutError()

      default:
        throw createInternalError(rawData)
    }
  }

  // special case for now
  if (req.method === 'eth_getBlockByNumber' && rawData === 'Not Found') {
    res.result = null
    return
  }

  // parse JSON
  const data = JSON.parse(rawData)

  // finally return result
  res.result = data.result
  res.error = data.error
}

function fetchConfigFromReq({ network, req }) {
  const cleanReq = normalizeReq(req)
  const { method, params } = cleanReq

  const fetchParams = {}
  let fetchUrl = `https://api.infura.io/v1/jsonrpc/${network}`
  const isPostMethod = POST_METHODS.includes(method)
  if (isPostMethod) {
    fetchParams.method = 'POST'
    fetchParams.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    fetchParams.body = JSON.stringify(cleanReq)
  } else {
    fetchParams.method = 'GET'
    const paramsString = encodeURIComponent(JSON.stringify(params))
    fetchUrl += `/${method}?params=${paramsString}`
  }

  return { fetchUrl, fetchParams }
}

// strips out extra keys that could be rejected by strict nodes like parity
function normalizeReq(req) {
  return {
    id: req.id,
    jsonrpc: req.jsonrpc,
    method: req.method,
    params: req.params,
  }
}

function createRatelimitError () {
  let msg = `Request is being rate limited.`
  return createInternalError(msg)
}

function createTimeoutError () {
  let msg = `Gateway timeout. The request took too long to process. `
  msg += `This can happen when querying logs over too wide a block range.`
  return createInternalError(msg)
}

function createInternalError (msg) {
  const err = new Error(msg)
  return new JsonRpcError.InternalError(err)
}


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

const promiseToCallback = __webpack_require__(60)

module.exports = createAsyncMiddleware


function createAsyncMiddleware(asyncMiddleware) {
  return (req, res, next, end) => {
    let nextHandlerOnDone = null
    const finishedPromise = asyncMiddleware(req, res, getNextPromise)
    promiseToCallback(finishedPromise)((err) => {
      // async middleware ended
      if (nextHandlerOnDone) {
        // next handler was called - complete nextHandler
        nextHandlerOnDone(err)
      } else {
        // next handler was not called - complete middleware
        end(err)
      }
    })

    function getNextPromise() {
      return new Promise((resolve) => {
        next((cb) => {
          nextHandlerOnDone = cb
          resolve()
        })
      })
    }
  }
}

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

const inherits = __webpack_require__(1).inherits
const Subprovider = __webpack_require__(3)

// wraps a provider in a subprovider interface

module.exports = ProviderSubprovider

inherits(ProviderSubprovider, Subprovider)

function ProviderSubprovider(provider){
  if (!provider) throw new Error('ProviderSubprovider - no provider specified')
  if (!provider.sendAsync) throw new Error('ProviderSubprovider - specified provider does not have a sendAsync method')
  this.provider = provider
}

ProviderSubprovider.prototype.handleRequest = function(payload, next, end){
  this.provider.sendAsync(payload, function(err, response) {
    if (err) return end(err)
    if (response.error) return end(new Error(response.error.message))
    end(null, response.result)
  })
}


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

const fetch = __webpack_require__(61)
const inherits = __webpack_require__(1).inherits
const retry = __webpack_require__(184)
const waterfall = __webpack_require__(48)
const asyncify = __webpack_require__(42)
const JsonRpcError = __webpack_require__(31)
const promiseToCallback = __webpack_require__(60)
const createPayload = __webpack_require__(9)
const Subprovider = __webpack_require__(3)

const RETRIABLE_ERRORS = [
  // ignore server overload errors
  'Gateway timeout',
  'ETIMEDOUT',
  // ignore server sent html error pages
  // or truncated json responses
  'SyntaxError',
]

module.exports = RpcSource

inherits(RpcSource, Subprovider)

function RpcSource (opts) {
  const self = this
  self.rpcUrl = opts.rpcUrl
  self.originHttpHeaderKey = opts.originHttpHeaderKey
}

RpcSource.prototype.handleRequest = function (payload, next, end) {
  const self = this
  const originDomain = payload.origin

  // overwrite id to not conflict with other concurrent users
  const newPayload = createPayload(payload)
  // remove extra parameter from request
  delete newPayload.origin

  const reqParams = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPayload)
  }

  if (self.originHttpHeaderKey && originDomain) {
    reqParams.headers[self.originHttpHeaderKey] = originDomain
  }

  retry({
    times: 5,
    interval: 1000,
    errorFilter: isErrorRetriable,
  },
  (cb) => self._submitRequest(reqParams, cb),
  (err, result) => {
    // ends on retriable error
    if (err && isErrorRetriable(err)) {
      const errMsg = `FetchSubprovider - cannot complete request. All retries exhausted.\nOriginal Error:\n${err.toString()}\n\n`
      const retriesExhaustedErr = new Error(errMsg)
      return end(retriesExhaustedErr)
    }
    // otherwise continue normally
    return end(err, result)
  })
}

RpcSource.prototype._submitRequest = function (reqParams, cb) {
  const self = this
  const targetUrl = self.rpcUrl

  promiseToCallback(fetch(targetUrl, reqParams))((err, res) => {
    if (err) return cb(err)

    // continue parsing result
    waterfall([
      checkForHttpErrors,
      // buffer body
      (cb) => promiseToCallback(res.text())(cb),
      // parse body
      asyncify((rawBody) => JSON.parse(rawBody)),
      parseResponse
    ], cb)

    function checkForHttpErrors (cb) {
      // check for errors
      switch (res.status) {
        case 405:
          return cb(new JsonRpcError.MethodNotFound())

        case 418:
          return cb(createRatelimitError())

        case 503:
        case 504:
          return cb(createTimeoutError())

        default:
          return cb()
      }
    }

    function parseResponse (body, cb) {
      // check for error code
      if (res.status !== 200) {
        return cb(new JsonRpcError.InternalError(body))
      }
      // check for rpc error
      if (body.error) return cb(new JsonRpcError.InternalError(body.error))
      // return successful result
      cb(null, body.result)
    }
  })
}

function isErrorRetriable(err){
  const errMsg = err.toString()
  return RETRIABLE_ERRORS.some(phrase => errMsg.includes(phrase))
}

function createRatelimitError () {
  let msg = `Request is being rate limited.`
  const err = new Error(msg)
  return new JsonRpcError.InternalError(err)
}

function createTimeoutError () {
  let msg = `Gateway timeout. The request took too long to process. `
  msg += `This can happen when querying logs over too wide a block range.`
  const err = new Error(msg)
  return new JsonRpcError.InternalError(err)
}


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = retry;

var _noop = __webpack_require__(10);

var _noop2 = _interopRequireDefault(_noop);

var _constant = __webpack_require__(185);

var _constant2 = _interopRequireDefault(_constant);

var _wrapAsync = __webpack_require__(8);

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Attempts to get a successful response from `task` no more than `times` times
 * before returning an error. If the task is successful, the `callback` will be
 * passed the result of the successful task. If all attempts fail, the callback
 * will be passed the error and result (if any) of the final attempt.
 *
 * @name retry
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @see [async.retryable]{@link module:ControlFlow.retryable}
 * @param {Object|number} [opts = {times: 5, interval: 0}| 5] - Can be either an
 * object with `times` and `interval` or a number.
 * * `times` - The number of attempts to make before giving up.  The default
 *   is `5`.
 * * `interval` - The time to wait between retries, in milliseconds.  The
 *   default is `0`. The interval may also be specified as a function of the
 *   retry count (see example).
 * * `errorFilter` - An optional synchronous function that is invoked on
 *   erroneous result. If it returns `true` the retry attempts will continue;
 *   if the function returns `false` the retry flow is aborted with the current
 *   attempt's error and result being returned to the final callback.
 *   Invoked with (err).
 * * If `opts` is a number, the number specifies the number of times to retry,
 *   with the default interval of `0`.
 * @param {AsyncFunction} task - An async function to retry.
 * Invoked with (callback).
 * @param {Function} [callback] - An optional callback which is called when the
 * task has succeeded, or after the final failed attempt. It receives the `err`
 * and `result` arguments of the last attempt at completing the `task`. Invoked
 * with (err, results).
 *
 * @example
 *
 * // The `retry` function can be used as a stand-alone control flow by passing
 * // a callback, as shown below:
 *
 * // try calling apiMethod 3 times
 * async.retry(3, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 3 times, waiting 200 ms between each retry
 * async.retry({times: 3, interval: 200}, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod 10 times with exponential backoff
 * // (i.e. intervals of 100, 200, 400, 800, 1600, ... milliseconds)
 * async.retry({
 *   times: 10,
 *   interval: function(retryCount) {
 *     return 50 * Math.pow(2, retryCount);
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod the default 5 times no delay between each retry
 * async.retry(apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // try calling apiMethod only when error condition satisfies, all other
 * // errors will abort the retry control flow and return to final callback
 * async.retry({
 *   errorFilter: function(err) {
 *     return err.message === 'Temporary error'; // only retry on a specific error
 *   }
 * }, apiMethod, function(err, result) {
 *     // do something with the result
 * });
 *
 * // to retry individual methods that are not as reliable within other
 * // control flow functions, use the `retryable` wrapper:
 * async.auto({
 *     users: api.getUsers.bind(api),
 *     payments: async.retryable(3, api.getPayments.bind(api))
 * }, function(err, results) {
 *     // do something with the results
 * });
 *
 */
function retry(opts, task, callback) {
    var DEFAULT_TIMES = 5;
    var DEFAULT_INTERVAL = 0;

    var options = {
        times: DEFAULT_TIMES,
        intervalFunc: (0, _constant2.default)(DEFAULT_INTERVAL)
    };

    function parseTimes(acc, t) {
        if (typeof t === 'object') {
            acc.times = +t.times || DEFAULT_TIMES;

            acc.intervalFunc = typeof t.interval === 'function' ? t.interval : (0, _constant2.default)(+t.interval || DEFAULT_INTERVAL);

            acc.errorFilter = t.errorFilter;
        } else if (typeof t === 'number' || typeof t === 'string') {
            acc.times = +t || DEFAULT_TIMES;
        } else {
            throw new Error("Invalid arguments for async.retry");
        }
    }

    if (arguments.length < 3 && typeof opts === 'function') {
        callback = task || _noop2.default;
        task = opts;
    } else {
        parseTimes(options, opts);
        callback = callback || _noop2.default;
    }

    if (typeof task !== 'function') {
        throw new Error("Invalid arguments for async.retry");
    }

    var _task = (0, _wrapAsync2.default)(task);

    var attempt = 1;
    function retryAttempt() {
        _task(function (err) {
            if (err && attempt++ < options.times && (typeof options.errorFilter != 'function' || options.errorFilter(err))) {
                setTimeout(retryAttempt, options.intervalFunc(attempt));
            } else {
                callback.apply(null, arguments);
            }
        });
    }

    retryAttempt();
}
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

const Backoff = __webpack_require__(187)
const EventEmitter = __webpack_require__(14)
const inherits = __webpack_require__(1).inherits
const WebSocket = global.WebSocket || __webpack_require__(188)
const Subprovider = __webpack_require__(3)
const createPayload = __webpack_require__(9)

class WebsocketSubprovider
 extends Subprovider {
  constructor({ rpcUrl, debug }) {
    super()

    // inherit from EventEmitter
    EventEmitter.call(this)

    Object.defineProperties(this, {
      _backoff: {
        value: Backoff.exponential({
          randomisationFactor: 0.2,
          maxDelay: 5000
        })
      },
      _connectTime: {
        value: null,
        writable: true
      },
      _log: {
        value: debug
          ? (...args) => console.info.apply(console, ['[WSProvider]', ...args])
          : () => { }
      },
      _pendingRequests: {
        value: new Map()
      },
      _socket: {
        value: null,
        writable: true
      },
      _unhandledRequests: {
        value: []
      },
      _url: {
        value: rpcUrl
      }
    })

    this._handleSocketClose = this._handleSocketClose.bind(this)
    this._handleSocketMessage = this._handleSocketMessage.bind(this)
    this._handleSocketOpen = this._handleSocketOpen.bind(this)

    // Called when a backoff timeout has finished. Time to try reconnecting.
    this._backoff.on('ready', () => {
      this._openSocket()
    })

    this._openSocket()
  }

  handleRequest(payload, next, end) {
    if (!this._socket || this._socket.readyState !== WebSocket.OPEN) {
      this._unhandledRequests.push(Array.from(arguments))
      this._log('Socket not open. Request queued.')
      return
    }

    this._pendingRequests.set(payload.id, [payload, end])

    const newPayload = createPayload(payload)
    delete newPayload.origin

    this._socket.send(JSON.stringify(newPayload))
    this._log(`Sent: ${newPayload.method} #${newPayload.id}`)
  }

  _handleSocketClose({ reason, code }) {
    this._log(`Socket closed, code ${code} (${reason || 'no reason'})`)
    // If the socket has been open for longer than 5 seconds, reset the backoff
    if (this._connectTime && Date.now() - this._connectTime > 5000) {
      this._backoff.reset()
    }

    this._socket.removeEventListener('close', this._handleSocketClose)
    this._socket.removeEventListener('message', this._handleSocketMessage)
    this._socket.removeEventListener('open', this._handleSocketOpen)

    this._socket = null
    this._backoff.backoff()
  }

  _handleSocketMessage(message) {
    let payload

    try {
      payload = JSON.parse(message.data)
    } catch (e) {
      this._log('Received a message that is not valid JSON:', payload)
      return
    }

    // check if server-sent notification
    if (payload.id === undefined) {
      return this.emit('data', null, payload)
    }

    // ignore if missing
    if (!this._pendingRequests.has(payload.id)) {
      return
    }

    // retrieve payload + arguments
    const [originalReq, end] = this._pendingRequests.get(payload.id)
    this._pendingRequests.delete(payload.id)

    this._log(`Received: ${originalReq.method} #${payload.id}`)

    // forward response
    if (payload.error) {
      return end(new Error(payload.error.message))
    }
    end(null, payload.result)
  }

  _handleSocketOpen() {
    this._log('Socket open.')
    this._connectTime = Date.now()

    // Any pending requests need to be resent because our session was lost
    // and will not get responses for them in our new session.
    this._pendingRequests.forEach(value => this._unhandledRequests.push(value))
    this._pendingRequests.clear()

    const unhandledRequests = this._unhandledRequests.splice(0, this._unhandledRequests.length)
    unhandledRequests.forEach(request => {
      this.handleRequest.apply(this, request)
    })
  }

  _openSocket() {
    this._log('Opening socket...')
    this._socket = new WebSocket(this._url)
    this._socket.addEventListener('close', this._handleSocketClose)
    this._socket.addEventListener('message', this._handleSocketMessage)
    this._socket.addEventListener('open', this._handleSocketOpen)
  }
}

// multiple inheritance
Object.assign(WebsocketSubprovider.prototype, EventEmitter.prototype)

module.exports = WebsocketSubprovider


/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = require("backoff");

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var bn = __webpack_require__(23)
var Web3 = __webpack_require__(190)
var abi = __webpack_require__(62)

var web3 = new Web3()
var sizeHex = (bytes) => {
    return bytes * 2;
}

function trim(str) {
    return str.replace(/\0[\s\S]*$/g, '')
}

function getAscii(hex) {
    hex = hex.substring(0, 2) == '0x' ? hex : '0x' + hex;
    return trim(web3.utils.toAscii(hex))
}
module.exports = {
    decode: (hex) => {
        var tokens = []
         hex = hex.substring(0, 2) == '0x' ? hex.substring(2) : hex;
        hex = hex.substring(0, (hex.lastIndexOf("1")-1)) //starting point
        var offset = hex.length
        offset -= sizeHex(32)
        var countTokens = hex.substr(offset, sizeHex(32))
        offset -= sizeHex(1)
        var isName = parseInt(hex.substr(offset, sizeHex(1)))
        offset -= sizeHex(1)
        var isWebSite = parseInt(hex.substr(offset, sizeHex(1)))
        offset -= sizeHex(1)
        var isEmail = parseInt(hex.substr(offset, sizeHex(1)))
        var numTokens = new bn('0x' + countTokens).toNumber()
        for (var i = 0; i < numTokens; i++) {
            var token = {}
            offset -= sizeHex(16)
            token.symbol = getAscii(hex.substr(offset, sizeHex(16)))
            offset -= sizeHex(20)
            token.addr = '0x' + hex.substr(offset, sizeHex(20))
            offset -= sizeHex(8)
            token.decimals = new bn('0x' + hex.substr(offset, sizeHex(8))).toNumber()
            offset -= sizeHex(32)
            token.balance = new bn('0x' + hex.substr(offset, sizeHex(32))).toFixed()
            if (isName) {
                offset -= sizeHex(16)
                token.name = getAscii(hex.substr(offset, sizeHex(16)))

            }
            if (isWebSite) {
                offset -= sizeHex(32)
                token.website = getAscii(hex.substr(offset, sizeHex(32)))
            }
            if (isEmail) {
                offset -= sizeHex(32)
                token.email = getAscii(hex.substr(offset, sizeHex(32)))

            }
            tokens.push(token)
        }
        return tokens
    },
     encodeCall:(name, argumentss = [], rawValues = []) => {
        const values = rawValues.map(value => value.toString()) // convert BigNumbers to string
        const methodId = abi.methodID(name, argumentss).toString('hex');
        const params = abi.rawEncode(argumentss, values).toString('hex');
        return '0x' + methodId + params;
      }



}

//var hex = "0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000013ed700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000534b52502028506861736520312d452900000000000000000000000000000000000000000000000000000000000000000000000000000012324a48ebcbb46e61993931ef9d35f6697cd2901b534b52502028506861736520312d4529737570706f72744064696d656e73696f6e732e6e6574776f726b00000000000068747470733a2f2f64696d656e73696f6e732e6e6574776f726b000000000000537472696b65436f696e20546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000012629aee55ed49581c33ab27f9403f7992a289ffd553544300000000000000000000000000696e666f40736b726170732e696f00000000000000000000000000000000000068747470733a2f2f736b726170732e696f2f0000000000000000000000000000536b7261707300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126e34d8d84764d40f6d7b39cd569fd017bf53177d534b5250000000000000000000000000737570706f72744062697465746865722e636f0000000000000000000000000068747470733a2f2f6279746f6d2e696f000000000000000000000000000000004269746574686572000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080aa07e2c7185150d7e4da98838a8d2feac3dfc42545400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7665726f732e6f72670000000000000000000000000000005665726f73000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005edbaf3c5100302dcdda53269322f3730b1f0416d5652530000000000000000000000000061646d696e40736d617274696c6c696f6e732e6368000000000000000000000068747470733a2f2f7777772e736d617274696c6c696f6e732e63680000000000504154454e545300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012694404595e3075a942397f466aacd462ff1a7bd0504154454e5453000000000000000000737570706f7274406d69747261762e636f00000000000000000000000000000068747470733a2f2f6d69747261762e636f0000000000000000000000000000004d697472617600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087fc408011165760ee31be2bf20daf450356692af4d545200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f63727970746f67656e652e636f0000000000000000000000584754000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001230f4a3e0ab7a76733d8b60b89dd93c3d0b4c9e2f58475400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73796e617073652e6169000000000000000000000000000053796e617073650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001210b123fddde003243199aad03522065dc05827a053594e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004444460000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012cc4ef9eeaf656ac1a2ab886743e98e97e090ed3844444600000000000000000000000000737570706f727440776f726b636f696e2e6e657400000000000000000000000068747470733a2f2f776f726b636f696e2e6e65742f0000000000000000000000576f726b436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001271e8d74ff1c923e369d0e70dfb09866629c4dd3557524b0000000000000000000000000062746362747140676d61696c2e636f6d0000000000000000000000000000000068747470733a2f2f7468656274636274712e636f6d0000000000000000000000426974636f696e20426f7574697175650000000000000000000000000000000000000000000000000000000000000000000000000000001216b0e62ac13a2faed36d18bce2356d25ab3cfad342545100000000000000000000000000707273706d6540676d61696c2e636f6d00000000000000000000000000000000687474703a2f2f7777772e707273702e6d65000000000000000000000000000050525350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000090c04d4f331da8df75f9e2e271e3f3f1494c66c3650525350000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6368726f6e6f62616e6b2e696f00000000000000000000004368726f6e6f62616e6b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000086531f133e6deebe7f2dce5a0441aa7ef330b4e5354494d45000000000000000000000000737570706f727440657468657265756d2e6c696e6b000000000000000000000068747470733a2f2f657468657265756d2e6c696e6b00000000000000000000004c696e6b20506c6174666f726d00000000000000000000000000000000000000000000000000000000000000000000000000000000000012e2e6d4be086c6938b53b22144855eef6742816394c494e4b20506c6174666f726d000000737570706f7274406f70656e6675747572652e696f00000000000000000000006f70656e6675747572652e696f000000000000000000000000000000000000004f50454e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008e9de1c630753a15d7021cc563429c21d4887506f4f50454e00000000000000000000000073616d75656c2e68724074696971752e636f6d00000000000000000000000000687474703a2f2f74696971752e636f6d0000000000000000000000000000000054696951752773205120546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000122c3c1f05187dba7a5f2dd47dca57281c4d4f183f5154510000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000524c54000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000acced5b8288086be8c38e23567e684c3740be4d48524c5400000000000000000000000000696e666f40736d6172746e6f64652e6f72670000000000000000000000000000687474703a2f2f736d6172746e6f64652e6f7267000000000000000000000000536d617274204e6f6465000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000122dcfaac11c9eebd8c6c42103fe9e2a6ad237af27534d5400000000000000000000000000737570706f7274407069706c636f696e2e636f6d00000000000000000000000068747470733a2f2f7069706c636f696e2e636f6d0000000000000000000000005049504c20436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008e64509f0bf07ce2d29a7ef19a8a9bc065477c1b45049504c000000000000000000000000646f77636f696e40676d61696c2e636f6d00000000000000000000000000000068747470733a2f2f646f77636f696e2e696f2f00000000000000000000000000444f57000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001276974c7b79dc8a6a109fd71fd7ceb9e40eff5382444f57000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000706c61736d612e746f6b656e40676d61696c2e636f6d00000000000000000000504c41534d41000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000659416a25628a76b4730ec51486114c32e0b582a1504c41534d41000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043727970746f4b4545000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000072d32ac1c5e66bfc5b08806271f8eef9155451644b454500000000000000000000000000696e666f4074626974626f742e636f6d0000000000000000000000000000000068747470733a2f2f74626974626f742e636f6d0000000000000000000000000054426974426f7400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008afe60511341a37488de25bef351952562e31fcc154425400000000000000000000000000737570706f7274406d617274636f696e2e696f0000000000000000000000000068747470733a2f2f6d617274636f696e2e696f000000000000000000000000004d617274636f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fdcc07ab60660de533b5ad26e1457b565a9d59bd4d415254000000000000000000000000696e666f40736e69702e746f646179000000000000000000000000000000000068747470733a2f2f7777772e736e69702e6e6574776f726b0000000000000000534e49500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001244f588aeeb8c44471439d1270b3603c66a9262f1534e49500000000000000000000000006865647061796c746440676d61696c2e636f6d00000000000000000000000000687474703a2f2f6865647061792e636f6d000000000000000000000000000000484564704159000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001284543f868ec1b1fac510d49d13c069f64cd2d5f94864702ed18400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004352420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008aef38fbfbf932d1aef3b808bc8fbd8cd8e1f8bc5435242000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f626974636f696e65756d2e636f6d2f6d696e65720000000000425445000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000873dd069c299a5d691e9836243bcaec9c8c1d873442544500000000000000000000000000696e666f406f7866696e612e636f6d000000000000000000000000000000000068747470733a2f2f6f7866696e612e636f6d00000000000000000000000000004f782046696e610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000365a15014964f2102ff58647e16a16a6b9e14bcf64f782046696e61000000000000000000737570706f727440776f726c647065616365636f696e2e696e666f0000000000687474703a2f2f7777772e776f726c647065616365636f696e2e696f00000000576f726c645065616365436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000001262087245087125d3db5b9a3d713d78e7bbc31e54575043000000000000000000000000006b61697a656e636f696e406b61697a656e636f696e2e696f0000000000000000687474703a2f2f6b61697a656e636f696e2e696f0000000000000000000000004b61697a656e436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000089541fd8b9b5fa97381783783cebf2f5fa793c2624b5a4e00000000000000000000000000696e666f4072656e646572746f6b656e2e636f6d00000000000000000000000068747470733a2f2f72656e646572746f6b656e2e636f6d00000000000000000052656e64657220546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000120996bfb5d057faa237640e2506be7b4f9c46de0b524e4452000000000000000000000000756e63682f00000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e647574796f662e636172652f746f6b656e2d6c6144757479206f66204361726520546f6b0000000000000000000000000000000000000000000000000000000000000000000000000000001282bd526bdb718c6d4dd2291ed013a5186cae2dca56444f43000000000000000000000000696e666f40696e74656c6c6967656e7474726164696e672e6f72670000000000687474703a2f2f696e74656c6c6967656e7474726164696e672e6f726700000049545420546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080aef06dcccc531e581f0440059e6ffcc206039ee4954540000000000000000000000000067616d6d614078617572756d2e70726f0000000000000000000000000000000068747470733a2f2f7777772e78617572756d2e6f72672f67616d6d610000000058474d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008533ef0984b2faa227acc620c67cce12aa39cd8cd58474d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000504554524f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ec18f898b4076a3e18f1089d33376cc380bde61d504554524f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f79676764726173682e696f0000000000000000000000000059454544000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126f7a4bac3315b5082f793161a22e26666d22717f59454544000000000000000000000000737570706f72744073696b6f62612e636f6d0000000000000000000000000000687474703a2f2f7777772e73696b6f62612e636f6d000000000000000000000053696b6f626100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124994e81897a920c0fea235eb8cedeed3c6fff697534b4f31000000000000000000000000737570706f72744062756c6c696f6e63727970746f2e696e666f0000000000007777772e62756c6c696f6e63727970746f2e696e666f0000000000000000000042756c6c696f6e2043727970746f000000000000000000000000000000000000000000000000000000000000000000000000000000000012ce59d29b09aae565feeef8e52f47c3cd5368c663424c58202842756c6c696f6e2900000061646d696e40657468506f6b65722e696f00000000000000000000000000000068747470733a2f2f657468506f6b65722e696f00000000000000000000000000657468506f6b65722e696f20455058000000000000000000000000000000000000000000000000000000000000000000000000000000000435baa72038f127f9f8c8f9b491049f64f377914d45505800000000000000000000000000737570706f7274406c69666572756e2e6363000000000000000000000000000068747470733a2f2f7777772e6c69666572756e2e6363000000000000000000004c69666552756e20436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000005c798cd1c49db0e297312e4c682752668ce1db2ad4c46520000000000000000000000000068656c6c6f4070697463686170706c792e636f6d00000000000000000000000068747470733a2f2f7777772e70697463686170706c792e636f6d0000000000005049544348000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fcac7a7515e9a9d7619fa77a1fa738111f66727e50434800000000000000000000000000636f6e74616374407265616c6973746f2e696f0000000000000000000000000068747470733a2f2f7777772e7265616c6973746f2e696f0000000000000000005265616c6973746f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012767ba2915ec344015a7938e3eedfec2785195d05524541000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f736d6172746c616e64732e696f000000000000000000000000536d6172746c616e6473000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037a5ff295dc8239d5c2374e4d894202aaf029cab6534c540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000524f554e440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124993cb95c7443bdc06155c5f5688be9d8f6999a5524f554e440000000000000000000000737570706f7274406e657875732e736f6369616c00000000000000000000000068747470733a2f2f69636f2e6e657875732e736f6369616c0000000000000000536f6369616c436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008d7631787b4dcc87b1254cfd1e5ce48e96823dee853434c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e62797465746865722e636f6d00000000000000004279746574686572000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fad572db566e5234ac9fc3d570c4edc0050eaa9242544800000000000000000000000000737570706f727440636f6e66696465616c2e696f00000000000000000000000068747470733a2f2f636f6e66696465616c2e696f000000000000000000000000436f6e66696465616c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128a95ca448a52c0adf0054bb3402dc5e09cd6b23243444c0000000000000000000000000068656c6c6f40666f72746b6e6f78737465722e636f6d0000000000000000000068747470733a2f2f666f72746b6e6f78737465722e636f6d00000000000000004b6e6f7873746572746f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000012009e864923b49263c7f10d19b7f8ab7a9a5aad33464b5800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f66696c6d73636f696e2e696f00000000000000000000000046696c6d73636f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005976f7dac1525ef3277836043ba474a35e6b4272464c4d430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000047425400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127585f835ae2d522722d2684323a0ba83401f32f5474254000000000000000000000000002e6272000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e636f696e6d61726b657462726173696c2e636f6d434d42546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083edd235c3e840c1f29286b2e39370a255c7b6fdb434d4254000000000000000000000000636f6e74616374406163636f7264746f6b656e2e636f6d00000000000000000068747470733a2f2f6163636f7264746f6b656e2e636f6d0000000000000000004163636f7264000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001275aa7b0d02532f3833b66c7f0ad35376d373ddf841524400000000000000000000000000636f6e74616374406574686572656d6f6e2e636f6d000000000000000000000068747470733a2f2f7777772e6574686572656d6f6e2e636f6d2f0000000000004574686572656d6f6e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008b67b88a25708a35ae7c2d736d398d268ce4f7f83454d4f4e00000000000000000000000069676974616c2d6173736574732d706f7765722d706c6179000000000000000068747470733a2f2f636f666f756e642e69742f656e2f70726f6a656374732f644469676974616c2041737365747320500000000000000000000000000000000000000000000000000000000000000000000000000000001201b3ec4aae1b8729529beb4965f27d008788b0eb44505000000000000000000000000000696e666f407363616e64697765622e636f6d000000000000000000000000000068747470733a2f2f7363616e64697765622e636f6d00000000000000000000005363616e646977656220436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000278fe18e41f436e1981a3a60d1557c8a7a93704615343414e4449000000000000000000007465616d4070726f6a65637477797665726e2e636f6d0000000000000000000068747470733a2f2f70726f6a65637477797665726e2e636f6d0000000000000057797665726e546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012056017c55ae7ae32d12aef7c679df83a85ca75ff57595600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6d6f6e6579726562656c2e696f2f000000000000000000004d6f6e6579526562656c20546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000001221f0f0fd3141ee9e11b3d7f13a1028cd515f459c4d5250000000000000000000000000006e74406578616e74652e6575000000000000000000000000000000000000000068747470733a2f2f6578616e74652e6575000000000000000000000000000000584e540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000572e6f318056ba0c5d47a422653113843d250691584e5400000000000000000000000000696e666f4077686f6861732e696f00000000000000000000000000000000000068747470733a2f2f77686f6861732e696f00000000000000000000000000000057686f4861730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e933c0cd9784414d5f278c114904f5a84b39691957484f000000000000000000000000007465616d4065626974636f696e636173682e696f00000000000000000000000068747470733a2f2f65626974636f696e636173682e696f0000000000000000006542434800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008afc39788c51f0c1ff7b55317f3e70299e521fff665424348000000000000000000000000737570706f7274406675746f75726973742e696f00000000000000000000000068747470733a2f2f6675746f75726973742e696f2f00000000000000000000004675746f757269737420546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000122023dcf7c438c8c8c0b0f28dbae15520b4f3ee20465452000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000047656e657669657665205643000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a22f0af8d78851b72ee799e05f54a77001586b18a4758564300000000000000000000000061646d696e4068757433342e696f00000000000000000000000000000000000068747470733a2f2f68757433342e696f2f000000000000000000000000000000487574333420456e74726f707920546f000000000000000000000000000000000000000000000000000000000000000000000000000000125bc7e5f0ab8b2e10d2d0a3f21739fce62459aef3454e5452500000000000000000000000696e666f40736d617274696c6c696f6e732e636800000000000000000000000068747470733a2f2f7777772e736d617274696c6c696f6e732e63680000000000532d4554480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000123eb91d237e491e0dee8582c402d85cb440fb6b54532d455448000000000000000000000070657465726b6540676d61696c2e636f6d00000000000000000000000000000068747470733a2f2f706f7461746f696e2e666f756e646174696f6e0000000000506f7461746f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043f6a1be992dee408721748490772b15143ce0a7504f494e000000000000000000000000737570706f727440636f616c636f696e2e74656368000000000000000000000068747470733a2f2f636f616c636f696e2e746563682f656e0000000000000000436f616c20436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c166038705ffbab3794185b3a9d925632a1df37d43433300000000000000000000000000696e666f406765656e732e636f6d00000000000000000000000000000000000068747470733a2f2f7777772e6765656e732e636f6d00000000000000000000004765656e73204e504f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084f4f0db4de903b88f2b1a2847971e231d54f8fd3474545000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f7379646574682e636f6d0000000000000000000000000000005345540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e06eda7435ba749b047380ced49121dde93334ae5345540000000000000000000000000063726f776473616c65406d6163726f76657273652e696f00000000000000000068747470733a2f2f6d6163726f76657273652e696f00000000000000000000004d52560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ab6cf87a50f17d7f5e1feaf81b6fe9ffbe8ebf844d525600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e646576636f6e322d746f6b656e2e636f6d000000446576636f6e3220546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000dd94de9cfe063577051a5eb7465d08317d8808b6446576636f6e3220546f6b656e0000007365727669636540736861726465722e6f72670000000000000000000000000068747470733a2f2f736861726465722e6f7267000000000000000000000000005368617264657200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012bbff862d906e348e9946bfb2132ecb157da3d4b453530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f696e646f7273652e696f0000000000000000000000000000496e646f7273650000000000000000000000000000000000000000000000000000000000000000001bc16d674ec800000000000000000012f8e386eda857484f5a12e4b5daa9984e06e73705494e4400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f766962656875622e696f2f69636f2f00000000000000000056494245582045786368616e6765205400000000000000000000000000000000000000000000000000000000000000000000000000000012882448f83d90b2bf477af2ea79327fdea1335d935649424558000000000000000000000068656c6c6f407a617070726f6a6563742e6f726700000000000000000000000068747470733a2f2f7a61702e73746f72650000000000000000000000000000005a415000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126781a0f84c7e9e846dcb84a9a5bd49333067b1045a415000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d49540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e23cd160761f63fc3a1cf78aa034b6cdf97d3e0c4d49540000000000000000000000000066757475726540626c6f636b7371756172652e696f000000000000000000000068747470733a2f2f626c6f636b7371756172652e696f00000000000000000000426c6f636b737175617265546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000012509a38b7a1cc0dcd83aa9d06214663d9ec7c7f4a42535400000000000000000000000000696e666f40636172746178692e696f000000000000000000000000000000000068747470733a2f2f636172746178692e696f00000000000000000000000000004361725461786900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012662abcad0b7f345ab7ffb1b1fbb9df7894f18e66435458000000000000000000000000006b696e672e736572736540676d782e636f6d0000000000000000000000000000687474703a2f2f7065727369616e732e6e6574776f726b0000000000000000005065727369616e73000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012163733bcc28dbf26b41a8cfa83e369b5b3af741b50525300000000000000000000000000737570706f727440636f6d6d6f6469747961646e6574776f726b2e636f6d000068747470733a2f2f636f6d6d6f6469747961646e6574776f726b2e636f6d000043445800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126fff3806bbac52a20e0d79bc538d527f6a22c96b43445800000000000000000000000000696e666f406d6f73746578636c75736976652e636f6d00000000000000000000687474703a2f2f7777772e6d6f73746578636c75736976652e636f6d000000004d2d4554480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000123f4b726668da46f5e0e75aa5d478acec9f38210f4d2d4554480000000000000000000000696e666f4063727970746f7461736b2e6f7267000000000000000000000000007777772e63727970746f7461736b2e6f7267000000000000000000000000000043727970746f5461736b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124545750f39af6be4f237b6869d4ecca928fd5a8543544600000000000000000000000000737570706f727440626f756c652e6f6e6500000000000000000000000000000068747470733a2f2f7777772e626f756c652e6f6e650000000000000000000000426f756c6520436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c2c63f23ec5e97efbd7565df9ec764fdc7d4e91d424f5500000000000000000000000000636f787878636f696e40676d61696c2e636f6d00000000000000000000000000687474703a2f2f636f787878636f696e2e636f6d000000000000000000000000436f787878436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000122134057c0b461f898d375cead652acae62b5954143584300000000000000000000000000696e666f4070657468657265756d2e6f7267000000000000000000000000000068747470733a2f2f70657468657265756d2e6f72672f0000000000000000000050455448455245554d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125884969ec0480556e11d119980136a4c17edded150455400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f626c6f636b6f7074696f6e732e696f000000000000000000426c6f636b4f7074696f706e7320546f000000000000000000000000000000000000000000000000000000000000000000000000000000087f1e2c7d6a69bf34824d72c53b4550e895c0d8c2424f5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e7761636f696e2e696f00000000000000000000005761426900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012286bda1413a2df81731d4930ce2f862a35a609fe57614269000000000000000000000000696e666f40636872697374636f696e732e696f0000000000000000000000000068747470733a2f2f636872697374636f696e732e696f0000000000000000000043687269737420436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008d348e07a2806505b856123045d27aeed90924b5043434c43000000000000000000000000696e666f4063726f776473746172742e6361706974616c000000000000000000687474703a2f2f63726f776473746172742e6361706974616c0000000000000058534300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120f513ffb4926ff82d7f60a05069047aca295c4135853430000000000000000000000000061646d696e407072696d616c626173652e636f6d000000000000000000000000687474703a2f2f7072696d616c626173652e636f6d2f000000000000000000005072696d616c6261736520546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000004f4c07b1865bc326a3c01339492ca7538fd038cc05042540000000000000000000000000073696b68616c65766440646f6265742e696e666f000000000000000000000000687474703a2f2f7777772e646f6265746163636570746265742e636f6d000000446f426574416363657074426574000000000000000000000000000000000000000000000000000000000000000000000000000000000012386faa4703a34a7fdb19bec2e14fd427c963841644434100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061646d696e4065617379686f6d65732e696f000000000000000000000000000045617379486f6d65730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008f9f0fc7167c311dd2f1e21e9204f87eba9012fb245485400000000000000000000000000636f6e74616374406c6f6f6b7265762e636f6d0000000000000000000000000068747470733a2f2f6c6f6f6b7265762e636f6d000000000000000000000000004c4f4b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001221ae23b882a340a22282162086bc98d3e2b730184c4f4b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043727970746f436172626f6e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000006e4c94d45f7aef7018a5d66f44af780ec6023378e43727970746f436172626f6e00000000737570706f727440776562657463727970746f2e696f00000000000000000000687474703a2f2f776562657463727970746f2e696f2f77626300000000000000576542657443727970746f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000774951b677de32d596ee851a233336926e6a2cd0957424100000000000000000000000000626974736964656168656c7040676d61696c2e636f6d00000000000000000000687474703a2f2f62697473696465612e6f7267000000000000000000000000004253444300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f26ef5e0545384b7dcc0f297f2674189586830df4253444300000000000000000000000074616c6b30317461353240676d61696c2e636f6d000000000000000000000000687474703a2f2f7777772e626974636f696e2d62697a2e6e6574000000000000496f54e382b3e382a4e383b30000000000000000000000000000000000000000000000000000000000000000000000000000000000000006c34b21f6f8e51cc965c2393b3ccfa3b82beb2403496f5400000000000000000000000000696e666f40736d6172747265616c74792e696f000000000000000000000000007777772e736d6172747265616c74792e696f0000000000000000000000000000534d4152545265616c7479000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008be99b09709fc753b09bcf557a992f6605d5997b0524c54590000000000000000000000006d7240657468626974732e636f6d00000000000000000000000000000000000068747470733a2f2f7777772e657468626974732e636f6d000000000000000000457468626974730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c1b9743f556d65e757c4c650b4555baf354cb8bd345544253000000000000000000000000737570706f72744069626973636f696e2e636f0000000000000000000000000068747470733a2f2f69626973636f696e2e636f00000000000000000000000000494943000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001216662f73df3e79e54c6c5938b4313f92c524c12049494300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005347540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001d248b0d48e44aaf9c49aea0312be7e13a6dc146853475400000000000000000000000000696e666f407765706f7765722e6e6574776f726b00000000000000000000000068747470733a2f2f7765706f7765722e6e6574776f726b0000000000000000005765506f776572000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126a0a97e47d15aad1d132a1ac79a480e3f207906357435400000000000000000000000000737570706f727440637265616d746f65636f696e2e636f6d0000000000000000687474703a2f2f637265616d746f65636f696e2e636f6d000000000000000000437265616d746f65436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f0da1186a4977226b9135d0613ee72e229ec3f4d435254000000000000000000000000006572633230407072696d652d65782e636f6d000000000000000000000000000068747470733a2f2f7072696d652d65782e636f6d0000000000000000000000005045582d546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000455c2a0c171d920843560594de3d6eecc09efc09850455854000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d59440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010f7e983781609012307f2514f63d526d83d24f4664d594400000000000000000000000000737570706f7274406d616b657264616f2e636f6d00000000000000000000000068747470733a2f2f6d616b657264616f2e636f6d0000000000000000000000004d616b657244414f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c66ea802717bfb9833400264dd12c2bceaa34a6d4f4c445f4d4b52000000000000000000737570706f727440706563756c69756d2e696f0000000000000000000000000068747470733a2f2f706563756c69756d2e696f0000000000000000000000000050434c4f4c44000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000853148bb4551707edf51a1e8d7a93698d1893122550434c4f4c440000000000000000000062696c6c79407465746865722e746f000000000000000000000000000000000068747470733a2f2f7465746865722e746f0000000000000000000000000000005553442054657468657220286572633200000000000000000000000000000000000000000000000000000000000000000000000000000006dac17f958d2ee523a2206206994597c13d831ec755534454000000000000000000000000737570706f727440706f726e746f6b656e2e696f00000000000000000000000068747470733a2f2f7777772e706f726e746f6b656e2e696f0000000000000000506f726e546f6b656e56320000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125512e1d6a7be424b4323126b4f9e86d023f957645054574f000000000000000000000000737570706f727440626c6f636b636861696e6c6561642e636f6d000000000000687474703a2f2f63727970746f6372617368636f757273652e636f6d0000000043727970746f4372617368436f7572730000000000000000000000000000000000000000000000000000000000000000000000000000001228577a6d31559bd265ce3adb62d0458550f7b8a7434343202843727970746f4372617368737570706f727440646162636f2e696e0000000000000000000000000000000068747470733a2f2f646162636f2e696e000000000000000000000000000000004441420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dab0c31bf34c897fb0fe90d12ec9401caf5c36ec44414200000000000000000000000000636f6e74616374406c75636b79746f6b656e2e696e666f000000000000000000687474703a2f2f7777772e6c75636b79746f6b656e2e696e666f0000000000004c55434b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000fb12e3cca983b9f59d90912fd17f8d745a8b29534c55434b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000046414d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c190e569be071f40c704e15825f285481cb74b6cc46414d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f7374616b65706f6f6c2e636f000000000000000000000000005374616b6520506f6f6c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008779b7b713c86e3e6774f5040d9ccc2d43ad375f8504f4f4c000000000000000000000000737570706f727440706f726e746f6b656e2e696f00000000000000000000000068747470733a2f2f7777772e706f726e746f6b656e2e696f0000000000000000506f726e546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001266497a283e0a007ba3974e837784c6ae323447de5054000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000494d54000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022e5f62d0fa19974749faa194e3d3ef6d89c08d7494d5400000000000000000000000000737570706f7274407175616e74756d70726f6a6563742e6f7267000000000000687474703a2f2f7777772e7175616e74756d70726f6a6563742e6f72670000005141550000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008671abbe5ce652491985342e85428eb1b07bc6c6451415500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73617475726e2e6e6574776f726b0000000000000000000053617475726e204e6574776f726b000000000000000000000000000000000000000000000000000000000000000000000000000000000004599346779e90fc3f5f997b5ea715349820f9157153544e000000000000000000000000006953656e7361746f726940676d61696c2e636f6d000000000000000000000000687474703a2f2f746865676c6f62616c626974636f696e2e636f6d000000000053656e5361746f724920546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000124ca74185532dc1789527194e5b9c866dd33f4e8253656e5361746f72490000000000000068656c7040626974636c6176652e636f6d00000000000000000000000000000068747470733a2f2f7777772e626974636c6176652e636f6d0000000000000000434154732028426974436c617665295f0000000000000000000000000000000000000000000000000000000000000000000000000000001268e14bb5a45b9681327e16e528084b9d962c1a39434154732028426974436c617665295f6d757369636f6e6f6d69406d757369636f6e6f6d692e636f6d0000000000000068747470733a2f2f6d757369636f6e6f6d692e636f6d2f0000000000000000004d757369636f6e6f6d6900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012138a8752093f4f9a79aaedf48d4b9248fab93c9c4d4349000000000000000000000000006d61696c746f3a737570706f727440736b72696c6c612e636f6d00000000000068747470733a2f2f746f6b656e73616c652e736b72696c6c612e636f6d000000534b5220546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000064c382f8e09615ac86e08ce58266cc227e7d4d913534b5200000000000000000000000000696e666f40783863757272656e63792e636f6d0000000000000000000000000068747470733a2f2f783863757272656e63792e636f6d000000000000000000005838580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012910dfc18d6ea3d6a7124a6f8b5458f281060fa4c5838580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000535452430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000846492473755e8df960f8034877f61732d718ce965354524300000000000000000000000068656c6c6f4064656e636974792e6c696665000000000000000000000000000068747470733a2f2f64656e636974792e6c69666500000000000000000000000044656e4369747900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e43e2041dc3786e166961ed9484a5539033d10fb444e58000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044414f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010bb9bc244d798123fde783fcc1c72d3bb8c18941344414f00000000000000000000000000737570706f727467656c64657240676d61696c2e636f6d00000000000000000068747470733a2f2f7777772e736f6572656e67656c6465722e636f6d000000005347454c44455200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a1ccc166faf0e998b3e33225a1a0301b1c86119d5347454c00000000000000000000000068656c6c6f4072656c65782e696f0000000000000000000000000000000000007777772e72656c65782e696f000000000000000000000000000000000000000052656c65780000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124a42d2c580f83dce404acad18dab26db11a1750e524c58000000000000000000000000006a616d657340656d6265726d696e652e636f6d00000000000000000000000000687474703a2f2f7777772e69646561746f6b656e2e696f2f00000000000000004944454120546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000814cafd4782d2e728170fda68257983f03321c5849444541000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004152430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ac709fcb44a43c35f0da4e3163b117a17f3770f541524300000000000000000000000000737570706f7274406e6578787573756e69766572736974792e636f6d0000000068747470733a2f2f7777772e6e6578787573636f696e2e636f6d0000000000004e585800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087627de4b93263a6a7570b8dafa64bae812e5c3944e5858000000000000000000000000004d455348404d455348424f582e4e4554574f524b00000000000000000000000068747470733a2f2f6d657368626f782e6e6574776f726b0000000000000000004d657368626f780000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001201f2acf2914860331c1cb1a9acecda7475e06af84d455348000000000000000000000000642f232f6461612f43434300000000000000000000000000000000000000000068747470733a2f2f7777772e69636f6e6f6d692e6e65742f64617368626f6172434343202849434f4e4f4d492900000000000000000000000000000000000000000000000000000000000000000000000000000000000012be11eeb186e624b8f26a5045575a1340e4054552434343202849434f4e4f4d4929000000737570706f72744073696d706c65746f6b656e2e6f726700000000000000000068747470733a2f2f73696d706c65746f6b656e2e6f726700000000000000000053696d706c6520546f6b656e20274f53000000000000000000000000000000000000000000000000000000000000000000000000000000122c4e8f2d746113d0696ce89b35f0d8bf88e0aeca4f53540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007469626f79764073657a6e616d2e637a0000000000000000000000000000000059555049450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120f33bb20a282a7649c7b3aff644f084a9348e93359555049450000000000000000000000737570706f727440676176656c636f696e2e636f6d0000000000000000000000687474703a2f2f676176656c636f696e2e636f6d000000000000000000000000474156454c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012708876f486e448ee89eb332bfbc8e593553058b9474156454c0000000000000000000000796f7372612e68656c616c40726f636b636861696e2e6f72670000000000000068747470733a2f2f726f636b636861696e2e6f72670000000000000000000000526f636b6574636861696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c9de4b7f0c3d991e967158e4d4bfa4b51ec0b114524f4b00000000000000000000000000626f62406e6578787573706172746e6572732e636f6d0000000000000000000068747470733a2f2f7777772e6e6578787573636f696e2e636f6d0000000000004e5858204f4c44000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000085c6183d10a00cd747a6dbb5f658ad514383e94194e5858204f4c44000000000000000000696e666f4068656467652d63727970746f2e636f6d000000000000000000000068747470733a2f2f7777772e68656467652d63727970746f2e636f6d0000000048656467652043727970746f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ffe8196bc259e8dedc544d935786aa4709ec3e6448444700000000000000000000000000636f6e746163744062656572636861696e2e746563686e6f6c6f67790000000068747470733a2f2f7777772e62656572636861696e2e746563686e6f6c6f677942656572636f696e000000000000000000000000000000000000000000000000000000000000000d8d726b7177a8000000000000000000127367a68039d4704f30bfbf6d948020c3b07dfc5942434243000000000000000000000000696e666f406569646f6f2e696f0000000000000000000000000000000000000068747470733a2f2f6569646f6f2e696f000000000000000000000000000000004569646f6f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ced4e93198734ddaff8492d525bd258d49eb388e45444f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000737570706f727440667463636f696e732e6f72670000000000000000000000004654430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002e6f74dcfa0e20883008d8c16b6d9a329189d0c3046544300000000000000000000000000737570706f7274406a626f78636f696e2e6f726700000000000000000000000068747470733a2f2f7777772e6a626f78636f696e2e6f726700000000000000004a425800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aaf561eff5bd9c8f911616933f84166a17cfe0c4a425800000000000000000000000000696e666f406b70726d732e636f6d00000000000000000000000000000000000068747470733a2f2f7777772e6b70726d732e636f6d2f000000000000000000004b5052436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b5c33f965c8899d255c34cdd2a3efa8abcbb3dea4b505200000000000000000000000000636f6e74616374406d6f6e61636f6573746174652e696f00000000000000000068747470733a2f2f6d6f6e61636f6573746174652e696f2f00000000000000004d6f6e61636f20457374617465000000000000000000000000000000000000000000000000000000000000000000000000000000000000125b8d43ffde4a2982b9a5387cdf21d54ead64ac8d4d45535400000000000000000000000068656c6c6f40637237636f696e2e6f726700000000000000000000000000000068747470733a2f2f637237636f696e2e6f726700000000000000000000000000435237436f696e00000000000000000000000000000000000000000000000000000000000000001158e460913d00000000000000000000127f585b9130c64e9e9f470b618a7badd03d79ca7e43523700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f333030746f6b656e7370617274612e636f6d00000000000033303020546f6b656e2053706172746100000000000000000000000000000000000000000000000000000000000000000000000000000012aec98a708810414878c3bcdf46aad31ded4a4557333030000000000000000000000000007465616d40616c617269636f696e2e6f7267000000000000000000000000000068747470733a2f2f616c617269636f696e2e6f72670000000000000000000000414c434f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008181a63746d3adcf356cbc73ace22832ffbb1ee5a414c434f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043544c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002bf4cfd7d1edeeea5f6600827411b41a21eb08abd43544c00000000000000000000000000737570706f727440626d636861696e2e696f000000000000000000000000000068747470733a2f2f626d636861696e2e696f0000000000000000000000000000424d540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f028adee51533b1b47beaa890feb54a457f51e89424d540000000000000000000000000068656c6c6f406176616c6f6e2e6e75000000000000000000000000000000000068747470733a2f2f6176616c6f6e2e6e750000000000000000000000000000004156410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004ed247980396b10169bb1d36f6e278ed16700a60f41564100000000000000000000000000636f6e746163744078656e6f6e2e6e6574776f726b000000000000000000000068747470733a2f2f78656e6f6e2e6e6574776f726b000000000000000000000058454e4f4e000000000000000000000000000000000000000000000000000000000000000000004e87d4b2f8048386f70000000000000012ab95e915c123fded5bdfb6325e35ef5515f1ea69584e4e0000000000000000000000000069636f62694069636f62692e636f6d0000000000000000000000000000000000687474703a2f2f69636f636f696e2e6f7267000000000000000000000000000049434f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aa33e729bf4fdeb868b534e1f20523463d9c46bee49434f000000000000000000000000006572757065654070726f746f6e6d61696c2e636f6d000000000000000000000068747470733a2f2f6572757065652e776f726470726573732e636f6d000000006552757065650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002b67734521eabbe9c773729db73e16cc2dfb20a5845e282b9000000000000000000000000737570706f72744067617a65636f696e2e696f0000000000000000000000000068747470733a2f2f67617a65636f696e2e696f0000000000000000000000000047617a65436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128c65e992297d5f092a756def24f4781a280198ff475a4500000000000000000000000000657468636f32403136332e636f6d000000000000000000000000000000000000687474703a2f2f7777772e657468636f322e636f6d00000000000000000000004574686572434f3200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000217f93475d2a978f527c3f7c44abf44adfba60d5c45434f320000000000000000000000006163636f756e7440626c61636b6d6f6f6e63727970746f2e636f6d000000000068747470733a2f2f626c61636b6d6f6f6e63727970746f2e636f6d0000000000426c61636b6d6f6f6e2043727970746f00000000000000000000000000000000000000000000000000000000000000000000000000000008df6ef343350780bf8c3410bf062e0c015b1dd671424d4300000000000000000000000000737570706f72744076656e7573636f696e2e6e65740000000000000000000000687474703a2f2f76656e7573636f696e2e6e657400000000000000000000000056454e5553000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003ebed4ff9fe34413db8fc8294556bbd1528a4daca56454e55530000000000000000000000737570706f7274407769636b6e6f74652e636f6d00000000000000000000000068747470733a2f2f7769636b6e6f74652e636f6d0000000000000000000000005769636b4e6f746500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062cd07d414ec50b68c7ecaa863a23d344f2d062f57494300000000000000000000000000696e666f4063657772642e636f6d0000000000000000000000000000000000007777772e63657772642e636f6d0000000000000000000000000000000000000045434e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002a578acc0cb7875781b7880903f4594d13cfa8b9845434e00000000000000000000000000737570706f72744073657879746f6b656e2e636f000000000000000000000000687474703a2f2f73657879746f6b656e2e636f000000000000000000000000005365787920546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001298f5e9b7f0e33956c0443e81bf7deb8b5b1ed54553455859000000000000000000000000737570706f72744064616c65636f696e2e6f7267000000000000000000000000687474703a2f2f7777772e64616c65636f696e2e6f726700000000000000000044616c65436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000807d9e49ea402194bf48a8276dafb16e4ed63331744414c43000000000000000000000000636f6e7461637440706f73746f6b656e2e6f726700000000000000000000000068747470733a2f2f706f73746f6b656e2e6f7267000000000000000000000000506f53546f6b656e0000000000000000000000000000000000000000000000000000000000000001158e460913d000000000000000000012ee609fe292128cad03b786dbb9bc2634ccdbe7fc504f5300000000000000000000000000616563656e61730000000000000000000000000000000000000000000000000068747470733a2f2f636f666f756e642e69742f656e2f70726f6a656374732f6d4152540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fec0cf7fe078a500abf15f1284958f22049c2c7e41525400000000000000000000000000737570706f72744064726f706c65782e6f72670000000000000000000000000068747470733a2f2f64726f706c65782e6f72670000000000000000000000000044726f706c6578000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003c75226555fc496168d48b88df83b95f16771f3744524f50202864726f706c6578290000737570706f727440706f6c796d6174682e7a656e6465736b2e636f6d0000000068747470733a2f2f706f6c796d6174682e6e6574776f726b0000000000000000506f6c796d617468204e6574776f726b00000000000000000000000000000000000000000000000d8d726b7177a8000000000000000000129992ec3cf6a55b00978cddf2b27bc6882d88d1ec504f4c59000000000000000000000000737570706f727440756e696b6f696e676f6c642e636f6d00000000000000000068747470733a2f2f756e696b6f696e676f6c642e636f6d000000000000000000556e696b6f696e476f6c6400000000000000000000000000000000000000000000000000000000000000000000000000000000000000001224692791bc444c5cd0b81e3cbcaba4b04acd1f3b554b4700000000000000000000000000696e666f404469734c65646765722e636f6d000000000000000000000000000068747470733a2f2f7777772e4469734c65646765722e636f6d0000000000000044434c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003399a0e6fbeb3d74c85357439f4c8aed9678a5cbf44434c00000000000000000000000000636f6e746163744061706f6c6c6f31382e636f2e696e0000000000000000000068747470733a2f2f61706f6c6c6f31382e636f2e696e0000000000000000000041706f6c6c6f3138000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000bde8f7820b5544a49d34f9ddeacabedc7c0b5adc41313800000000000000000000000000737570706f727440636f62696e686f6f642e636f6d000000000000000000000068747470733a2f2f636f62696e686f6f642e636f6d0000000000000000000000436f62696e686f6f6420546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000012b2f7eb1f2c37645be61d73953035360e768d81e6434f420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006b686f767261746f7669636840676d61696c2e636f6d0000000000000000000049434f5300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006014b50466590340d41307cc54dcee990c8d58aa849434f53000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e6467782e696f0000000000000000000000000000444758000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000955b9a11c2e8351b4ffc7b11561148bfac99778554447580000000000000000000000000069636f40736d6172746966742e636f6d0000000000000000000000000000000068747470733a2f2f736d6172746966742e636f6d00000000000000000000000053494654000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a187d5285d316bcbc9adafc08b51d70a0d8e00053494654000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004e45552046756e64000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a823e6722006afe99e91c30ff5295052fe6b8e324e455500000000000000000000000000737570706f72744061727465782e676c6f62616c00000000000000000000000068747470733a2f2f61727465782e676c6f62616c00000000000000000000000041525800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087705faa34b16eb6d77dfc7812be2367ba6b0248e415258000000000000000000000000007465616d40737065637472652e616900000000000000000000000000000000007777772e737065637472652e6169000000000000000000000000000000000000537065637472652e616920552d546f6b000000000000000000000000000000000000000000000000000000000000000000000000000000122c82c73d5b34aa015989462b2948cd616a37641f5358555400000000000000000000000064657640616c74636f696e7374616c6b732e636f6d0000000000000000000000687474703a2f2f7777772e616c74636f696e7374616c6b732e636f6d00000000414c545320546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012638ac149ea8ef9a1286c41b977017aa7359e6cfa414c5453000000000000000000000000737570706f72744077696e64696e67747265652e636f6d00000000000000000068747470733a2f2f77696e64696e67747265652e636f6d2f00000000000000004c49460000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012eb9951021698b42e4399f9cbb6267aa35f82d59d4c4946000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000047544b5400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025abad9e518516fdaafbdcdb9701b37fb7ef0fa47544b54000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f66756e666169722e696f000000000000000000000000000046756e6661697200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008419d0d8bdd9af5e606ae2232ed285aff190e711b46554e000000000000000000000000006572633230636c756240676d61696c2e636f6d0000000000000000000000000068747470733a2f2f7777772e7462632e65726332302e636c75620000000000005442433200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008faccd5fc83c3e4c3c1ac1ef35d15adf06bcf209c54424332000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f617468656e69616e77617272696f72746f6b656e2e636f6d417468656e69616e2057617272696f720000000000000000000000000000000000000000000000000000000000000000000000000000001217052d51e954592c1046320c2371abab6c73ef1041544800000000000000000000000000636f72706f7261746540616972666f782e696f0000000000000000000000000068747470733a2f2f616972746f6b656e2e636f6d000000000000000000000000416972546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000827dce1ec4d3f72c3e457cc50354f1f975ddef48841495200000000000000000000000000696e666f40636f696e6a6f6b65722e636f6d000000000000000000000000000068747470733a2f2f636f696e6a6f6b65722e636f6d00000000000000000000004d65646961204e6574776f726b20546f00000000000000000000000000000000000000000000000000000000000000000000000000000012a9877b1e05d035899131dbd1e403825166d09f924d4e540000000000000000000000000069636f4031636163616f7368617265732e636f6d000000000000000000000000687474703a2f2f7777772e636163616f7368617265732e636f6d000000000000436163616f536861726573000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012315ce59fafd3a8d562b7ec1c8542382d2710b06c434353000000000000000000000000006b696e672e736572736540676d782e636f6d0000000000000000000000000000687474703a2f2f7065727369616e732e6e6574776f726b00000000000000000042544c2028426174746c652900000000000000000000000000000000000000000000000000000000000000000000000000000000000000122accab9cb7a48c3e82286f0b2f8798d201f4ec3f42544c2028426174746c6529000000007269646572636f696e6f6666696369616c40676d61696c2e636f6d0000000000687474703a2f2f7269646572746f6b656e2e636f6d00000000000000000000005269646572546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001254b293226000ccbfc04df902eec567cb4c35a90352544e00000000000000000000000000636f696e0000000000000000000000000000000000000000000000000000000068747470733a2f2f6769746875622e636f6d2f61726163686e69642f686f646c484f444c436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b45d7bc4cebcab98ad09babdf8c818b2292b672c484f444c00000000000000000000000068656c6c6f406461746162726f6b657264616f2e636f6d00000000000000000068747470733a2f2f6461746162726f6b657264616f2e636f6d00000000000000446154612065586368616e676520546f00000000000000000000000000000000000000000000000000000000000000000000000000000012765f0c16d1ddc279295c1a7c24b0883f62d33f754454580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000556e69636f726e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000089205a3a3b2a69de6dbf7f01ed13b2108b2c43e7556e69636f726e000000000000000000737570706f72744073746172626173652e636f00000000000000000000000000687474703a2f2f73746172626173652e636f00000000000000000000000000005374617220546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f70a642bd387f94380ffb90451c2c81d4eb82cbc53544152000000000000000000000000737570706f727440626565756e6974792e6f726700000000000000000000000068747470733a2f2f626565756e6974792e6f7267000000000000000000000000426565556e69747920436861696e000000000000000000000000000000000000000000000000000000000000000000000000000000000012ca3c18a65b802ec267f8f4802545e7f53d24c75e4255430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000424e43000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000cdd6bf56ca2ada24c683fac50e37783e55b57af9f424e43000000000000000000000000006865647061796c746440676d61696c2e636f6d00000000000000000000000000687474703a2f2f6865647061792e636f6d0000000000000000000000000000004845647041590000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e9ff07809ccff05dae74990e25831d0bc5cbe5754864700000000000000000000000000061646d696e407571756964636f696e2e636f6d0000000000000000000000000068747470733a2f2f7571756964636f696e2e636f6d0000000000000000000000557175696420436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012d01db73e047855efb414e6202098c4be4cd2423b5551430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006d69746368656c6c666368616e40676d61696c2e636f6d000000000000000000494b42000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000088ae96845e157558ef59e9ff90e766e22e480390494b4200000000000000000000000000636f6e7461637440636861696e74726164652e6e65740000000000000000000068747470733a2f2f636861696e74726164652e6e657400000000000000000000436861696e547261646520546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000012e3fa177acecfb86721cf6f9f4206bd3bd672d7d54354540000000000000000000000000067656e6572616c406e6974726f2e6c697665000000000000000000000000000068747470733a2f2f6e6974726f2e6c69766500000000000000000000000000004e4f580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ec46f8207d766012454c408de210bcbc2243e71c4e4f58000000000000000000000000006465767465616d40657468657265756d686967682e6f7267000000000000000068747470733a2f2f7777772e657468657265756d686967682e6f72672f000000657468657265756d686967682000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a9240fbcac1f0b9a6adfb04a53c8e3b0cc1d1444484947000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f7777772e65746865722e63616d700000000000000000000000484b47000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000314f37b574242d366558db61f3335289a5035c506484b47000000000000000000000000006a616d6573406f686e692e757300000000000000000000000000000000000000687474703a2f2f6f686e692e75730000000000000000000000000000000000004f686e69000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126f539a9456a5bcb6334a1a41207c3788f58252074f484e49000000000000000000000000737570706f727467656c64657240676d61696c2e636f6d00000000000000000068747470733a2f2f7777772e736f6572656e67656c6465722e636f6d0000000047454c440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001224083bb30072643c3bb90b44b7285860a755e68747454c4400000000000000000000000000000000000000000000000000000000000000000000000000000000000000007777772e6c616d7069782e636f0000000000000000000000000000000000000050495800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008effd494eb698cc399af6231fccd39e08fd20b1550495800000000000000000000000000696d63746f6b656e3230313740676d61696c2e636f6d00000000000000000000687474703a2f2f696d6d756e65636f696e2e696e666f00000000000000000000496d6d756e6520436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006e3831c5a982b279a198456d577cfb90424cb6340494d430000000000000000000000000072616974686540676d61696c2e636f6d00000000000000000000000000000000687474703a2f2f67616d62697463727970746f2e636f6d00000000000000000047616d6269740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008f67451dc8421f0e0afeb52faa8101034ed081ed947414d0000000000000000000000000062696c6c79407465746865722e746f000000000000000000000000000000000068747470733a2f2f7465746865722e746f0000000000000000000000000000004555522054657468657220286572633200000000000000000000000000000000000000000000000000000000000000000000000000000006abdf147870235fcfc34153828c769a70b3fae01f45555254000000000000000000000000696e666f4077696c6463727970746f2e636f6d00000000000000000000000000687474703a2f2f7777772e77696c6463727970746f2e636f6d0000000000000057494c4420546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012d3c00772b24d997a812249ca637a921e8135770157494c44000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73746b746f6b656e2e636f6d00000000000000000000000053544b20546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ae73b38d1c9a8b274127ec30160a4927c4d7182453544b0000000000000000000000000068656c7040626974636c6176652e636f6d00000000000000000000000000000068747470733a2f2f7777772e626974636c6176652e636f6d000000000000000042434c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012bc1234552ebea32b5121190356bba6d3bb225bb542434c00000000000000000000000000737570706f727440706f6c79626975732e696f0000000000000000000000000068747470733a2f2f706f6c79626975732e696f00000000000000000000000000506f6c79626975730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060affa06e7fbe5bc9a764c979aa66e8256a631f02504c4254000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f746161732e66756e64000000000000000000000000000000546f6b656e2d61732d612d536572766900000000000000000000000000000000000000000000000000000000000000000000000000000006e7775a6e9bcf904eb39da2b68c5efb4f9360e08c54616153000000000000000000000000736572766963657340776f6c6b2e636f6d00000000000000000000000000000068747470733a2f2f7777772e776f6c6b2e636f6d000000000000000000000000576f6c6b20546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f6b55acbbc49f4524aa48d19281a9a77c54de10f574f4c4b00000000000000000000000067726964706c757340636f6e73656e7379732e6e65740000000000000000000068747470733a2f2f67726964706c75732e696f2f746f6b656e2d73616c650000475249440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c12b19d3e2ccc14da04fae33e63652ce469b3f2fd47524944000000000000000000000000666f756e646174696f6e406c656d6f636861696e2e636f6d00000000000000007777772e6c656d6f636861696e2e636f6d0000000000000000000000000000004c656d6f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d6e354f07319e2474491d8c7c712137bee6862a24c454d4f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004a6574436f696e73000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012773450335ed4ec3db45af74f34f2c85348645d394a6574436f696e7300000000000000006f6e656b746f6b656e40676d61696c2e636f6d00000000000000000000000000687474703a2f2f6f6e656b2e6f6e6500000000000000000000000000000000004f6e65204b20546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b23be73573bc7e03db6e5dfc62405368716d28a84f4e454b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004847540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008ba2184520a1cc49a6159c57e61e1844e085615b648475400000000000000000000000000436f6e74616374407468657265616c636f696e7a2e636f6d0000000000000000687474703a2f2f7777772e7468657265616c636f696e7a2e636f6d0000000000546865205265616c20436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000012566fd7999b1fc3988022bd38507a48f0bcf22c775452434e000000000000000000000000737570706f727440736d617274636f6e74726163742e636f6d0000000000000068747470733a2f2f6c696e6b2e736d617274636f6e74726163742e636f6d00004c494e4b20436861696e6c696e6b000000000000000000000000000000000000000000000000000000000000000000000000000000000012514910771af9ca656af840dff83e8264ecf986ca4c494e4b2028436861696e6c696e6b2972657140726571756573742e6e6574776f726b0000000000000000000000000068747470733a2f2f726571756573742e6e6574776f726b00000000000000000052657175657374204e6574776f726b00000000000000000000000000000000000000000000000003cb71f51fc558000000000000000000128f8221afbb33998d8584a2b05749ba73c37a938a524551000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000051524c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008697beac28b09e122c4332d163985e8a73121b97f51524c00000000000000000000000000696e666f407a6575732e65786368616e67650000000000000000000000000000687474703a2f2f7a6575732e65786368616e67650000000000000000000000005a6575732045786368616e676500000000000000000000000000000000000000000000000000000000000000000000000000000000000008e386b139ed3715ca4b18fd52671bdcea1cdfe4b15a535400000000000000000000000000696e666f40696e732e776f726c6400000000000000000000000000000000000068747470733a2f2f696e732e776f726c64000000000000000000000000000000494e53000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a5b2e4a700dfbc560061e957edec8f6eeeb74a320494e5300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f676e6f7369732e706d000000000000000000000000000000476e6f73697300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126810e776880c02933d47db1b9fc05908e5386b96474e4f00000000000000000000000000737570706f7274407072657365617263682e696f00000000000000000000000068747470733a2f2f7072657365617263682e696f000000000000000000000000507265736561726368000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001288a3e4f35d64aad41a6d4030ac9afe4356cb84fa50524500000000000000000000000000696e666f40656e6a696e2e636f6d00000000000000000000000000000000000068747470733a2f2f656e6a696e636f696e2e696f000000000000000000000000454e4a494e000000000000000000000000000000000000000000000000000000000000000000000000000000001a00000000000000000012f629cbd94d3791c9250152bd8dfbdf380e2a3b9c454e4a000000000000000000000000006a65737369636140626c6f636b762e696f00000000000000000000000000000068747470733a2f2f626c6f636b762e696f000000000000000000000000000000424c4f434b760000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012340d2bde5eb28c1eed91b2f790723e3b160613b756454500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f706c757475732e6974000000000000000000000000000000506c757475730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012d8912c10681d8b21fd3742244f44658dba12264e504c5500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005348495400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ef2e9966eb61bb494e5375d5df8d67b7db8a780d53484954000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f74727565666c69702e696f0000000000000000000000000054727565466c6970000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a7f976c360ebbed4465c2855684d1aae5271efa954464c000000000000000000000000007465616d40616967616e672e6e6574776f726b0000000000000000000000000068747470733a2f2f616967616e672e6e6574776f726b00000000000000000000414947616e67000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001223ae3c5b39b12f0693e05435eeaa1e51d8c615304150540000000000000000000000000068656c6c6f406d6f74686572736869702e63780000000000000000000000000068747470733a2f2f6d6f74686572736869702e637800000000000000000000004d6f74686572736869700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001268aa3f232da9bdc2343465545794ef3eea5209bd4d53500000000000000000000000000068656c7040647270636f696e2e636f6d00000000000000000000000000000000687474703a2f2f647270636f696e2e636f6d000000000000000000000000000044726970636f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002799d90c6d44cb9aa5fbc377177f16c33e056b8244525000000000000000000000000000737570706f7274406e696d66616d6f6e65792e696f000000000000000000000068747470733a2f2f6e696d66616d6f6e65792e696f00000000000000000000004e696e6661204d6f6e6579000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e26517a9967299453d3f1b48aa005e6127e672104e494d46410000000000000000000000737570706f727440756e6976657273612e696f0000000000000000000000000068747470733a2f2f7777772e756e6976657273612e696f2f0000000000000000556e6976657273610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000129e3319636e2126e3c0bc9e3134aec5e1508a46c755544e2d500000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f65746865726f6c6c2e636f6d00000000000000000000000045746865726f6c6c00000000000000000000000000000000000000000000000000000000000000000214ee2ba55cd58e00000000000000102e071d2966aa7d8decb1005885ba1977d6038a6544494345000000000000000000000000696e666f406865726f636f696e2e696f000000000000000000000000000000007777772e6865726f636f696e2e696f00000000000000000000000000000000004865726f436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e477292f1b3268687a29376116b0ed27a9c76170504c4159000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f61746d61747269782e6f72672f3f6c6f63616c653d656e0041746d617472697820546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000012887834d3b8d450b6bab109c252df3da286d73ce441545400000000000000000000000000696e666f40686177616c612e746f64617900000000000000000000000000000068747470733a2f2f7777772e686177616c612e746f6461792f00000000000000486177616c6120546f646179000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c9002d4485b7594e3e850f0a206713b305113f69e4841540000000000000000000000000068656c6c6f406c616c61776f726c642e696f000000000000000000000000000068747470733a2f2f6c616c61776f726c642e696f2f00000000000000000000004c414c4120576f726c6420546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000012fd107b473ab90e8fbd89872144a3dc92c40fa8c94c414c41000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7175616e747374616d702e636f6d2f0000000000000000005175616e747374616d7020546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000001299ea4db9ee77acd40b119bd1dc4e33e1c070b80d515350000000000000000000000000007465616d406c6f636b636861696e2e636f00000000000000000000000000000068747470733a2f2f4c6f636b436861696e2e636f0000000000000000000000004c6f636b436861696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125e3346444010135322268a4630d2ed5f8d09446c4c4f430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000534e4d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012983f6d60db79ea8ca4eb9968c6aff8cfa04b3c63534e4d00000000000000000000000000696e666f406269746c6c652e636f6d000000000000000000000000000000000068747470733a2f2f6269746c6c652e636f6d00000000000000000000000000004269746c6c6520546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000492685e93956537c25bb75d5d47fca4266dd628b842544c20284269746c6c652900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d4341500000000000000000000000000000000000000000000000000000000000000000000000000000000ad44bcb50000000000000000893e682107d1e9defb0b5ee701c71707a4b2e46bc4d434150000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e76646963652e696f00000000000000000000000056646963650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125c543e7ae0a1104f78406c340e9c64fd9fce517056534c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e6f70656e616e782e6f72672f656e0000000000004f41580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012701c244b988a513c945973defa05de933b23fe1d4f41580000000000000000000000000069636f406469676974616c73616665636f696e2e636f6d00000000000000000068747470733a2f2f6469676974616c73616665636f696e2e636f6d2f000000004469676974616c205361666520436f69000000000000000000000000000000000000000000000000000000000000000000000000000000011e09bd8cadb441632e441db3e1d79909ee0a225644534300000000000000000000000000737461666640636f696e63726f77642e6974000000000000000000000000000068747470733a2f2f7777772e636f696e63726f77642e69740000000000000000436f696e43726f776400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124d829f8c92a6691c56300d020c9e0db984cfe2ba5843430000000000000000000000000063726f776473616c6540736972696e6c6162732e636f6d00000000000000000068747470733a2f2f736972696e6c6162732e636f6d0000000000000000000000536972696e204c6162730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001268d57c9a1c35f63e2c83ee8e49a64e9d70528d2553524e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7377697373626f72672e636f6d000000000000000000000043485342000000000000000000000000000000000000000000000000000000000000000000000000000002e13c71fb400000000000000008ba9d4199fab4f26efe3551d490e3821486f135ba43485342000000000000000000000000696e666f40636172766572746963616c2e636f6d00000000000000000000000068747470733a2f2f7777772e636172766572746963616c2e636f6d0000000000636172566572746963616c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012da6cb58a0d0c01610a29c5a65c303e13e885887c63560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6c65676f6c61732e65786368616e67652f000000000000004c474f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008123ab195dd38b1b40510d467a6a359b201af056f4c474f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000737570706f7274406b69636b69636f2e636f6d000000000000000000000000004b49434b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000827695e09149adc738a978e9a678f99e4c39e9eb94b49434b0000000000000000000000006f6d2f000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e4f726967696e616c43727970746f436f696e2e634f726967696e616c2043727970746f20000000000000000000000000000000000000000000000000000000000000000000000000000000120235fe624e044a05eed7a43e16e3083bc8a4287a4f43430000000000000000000000000068656e72794063727970746f6c656e64696e672e6f726700000000000000000068747470733a2f2f63727970746f6c656e64696e672e6f72670000000000000043727970746f4c656e64696e67000000000000000000000000000000000000000000000000000000000000000000000000000000000000097fce2856899a6806eeef70807985fc7554c66340434c5000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e63727970746f6d6172742e6d650000000000000043727970746f4d617274000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127e667525521cf61352e2e01b50faaae7df39749a434d4300000000000000000000000000737570706f727440636f696e737461727465722e636f6d00000000000000000068747470733a2f2f636f696e737461727465722e636f6d0000000000000000005374617274657220436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000129a005c9a89bd72a4bd27721e7a09a3c11d2b03c45354414300000000000000000000000073746577617274407465616d2e626974626f756e63652e696f0000000000000068747470733a2f2f626974626f756e63652e696f000000000000000000000000437265646f202f20426974626f756e63000000000000000000000000000000000000000000000000000000000000000000000000000000124e0603e2a27a30480e5e3a4fe548e29ef12f64be435245444f0000000000000000000000696e666f406d65726375727970726f746f636f6c2e636f6d0000000000000000687474703a2f2f7777772e6d65726375727970726f746f636f6c2e636f6d0000474d540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b3bd49e28f8f832b8d1e246106991e546c323502474d5400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7370616e6b636861696e2e636f6d000000000000000000005370616e6b436861696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001242d6622dece394b54999fbd73d108123806f6a185350414e4b0000000000000000000000737570706f72744067656e657369732e766973696f6e0000000000000000000068747470733a2f2f67656e657369732e766973696f6e0000000000000000000047656e6573697320566973696f6e000000000000000000000000000000000000000000000000000000000000000000000000000000000012103c3a209da59d3e7c4a89307e66521e081cfdf047565400000000000000000000000000737570706f727440646174756d2e6f726700000000000000000000000000000068747470733a2f2f646174756d2e6f7267000000000000000000000000000000446174756d20546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000001281c9151de0c8bafcd325a57e3db5a5df1cebf79c444154000000000000000000000000007075634070726963652d732e696e666f00000000000000000000000000000000687474703a2f2f70726963652d732e696e666f00000000000000000000000000506f757220436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ef6b4ce8c9bc83744fbcde2657b32ec18790458a50554300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73616c746c656e64696e672e636f6d00000000000000000053616c74204c656e64696e6720546f6b000000000000000000000000000000000000000000000000000000000000000000000000000000084156d3342d5c385a87d264f9065373359200058153414c5400000000000000000000000062746365746f6b656e40676d61696c2e636f6d0000000000000000000000000068747470733a2f2f62746365746f6b656e2e636f6d0000000000000000000000457468657265756d426974636f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000080886949c1b8c412860c4264ceb8083d1365e86cf42544345000000000000000000000000696e666f407075626c6963612e696f000000000000000000000000000000000068747470733a2f2f7075626c6963612e696f000000000000000000000000000050424c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001255648de19836338549130b1af587f16bea46f66b50424c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e70696c6c617270726f6a6563742e696f0000000050696c6c61722050726f6a656374000000000000000000000000000000000000000000000000000098cb60aaa10cf82a0000000000000012e3818504c1b32bf1557b16c238b2e01fd3149c17504c5200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004c554e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fa05a73ffe78ef8f1a739473e462c54bae6567d94c554e00000000000000000000000000737570706f727440656173796d696e652e696f0000000000000000000000000068747470733a2f2f656173796d696e652e696f00000000000000000000000000656173794d494e4520546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000129501bfc48897dceeadf73113ef635d2ff7ee4b97454d5400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e726562656c6c696f75732e696f00000000000000526562656c6c696f75730000000000000000000000000000000000000000000000000000000000a2a15d09519be0000000000000000000125f53f7a8075614b699baad0bc2c899f4bad8fbbf5245424c00000000000000000000000072656163686f75744073706172746169636f2e636f6d0000000000000000000068747470733a2f2f7777772e73706172746169636f2e636f6d00000000000000535041525441000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000424aef3bf1a47561500f9430d74ed4097c47f51f253504152544100000000000000000000636f6e74616374406661726d6174727573742e636f6d0000000000000000000068747470733a2f2f7777772e6661726d6174727573742e696f000000000000004661726d61547275737420546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000122aec18c5500f21359ce1bea5dc1777344df4c0dc46545400000000000000000000000000696e666f40706f6c79737761726d2e696f00000000000000000000000000000068747470733a2f2f706f6c79737761726d2e696f0000000000000000000000004e656374617200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000129e46a38f5daabe8683e10793b06749eef7d733d14e435400000000000000000000000000696e666f4073746f726d746f6b656e2e636f6d0000000000000000000000000068747470733a2f2f7777772e73746f726d746f6b656e2e636f6d00000000000053746f726d20546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012d0a4b8946cb52f0661273bfbc6fd0e0c75fc643353544f524d00000000000000000000006c756d696e6f636f696e4070726f746f6e6d61696c2e636f6d0000000000000068747470733a2f2f7777772e6c756d696e6f636f696e2e636f6d0000000000004c756d696e6f20436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a89b5934863447f6e4fc53b315a93e873bda69a34c554d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007468657265616c636f696e3230313740676d61696c2e636f6d00000000000000546865205265616c20436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000012cb3f902bf97626391bf8ba87264bbc3dc13469be54524300000000000000000000000000696e666f406f7075732d666f756e646174696f6e2e636f6d000000000000000068747470733a2f2f6f7075732d666f756e646174696f6e2e6f726700000000004f70757320466f756e646174696f6e00000000000000000000000000000000000000000000000000000000000000000000000000000000124355fc160f74328f9b383df2ec589bb3dfd82ba04f505400000000000000000000000000737570706f72744073746173687061792e696f0000000000000000000000000068747470733a2f2f73746173687061792e696f000000000000000000000000005374617368506179000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008ecd570bbf74761b960fa04cc10fe2c4e86ffda36535450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042415400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120d8775f648430679a709e98d2b0cb6250d2887ef42415400000000000000000000000000636f6e746163744072616964656e2e6e6574776f726b0000000000000000000068747470733a2f2f72616964656e2e6e6574776f726b0000000000000000000052616469656e204e6574776f726b000000000000000000000000000000000000000000000000000000000000000000000000000000000012255aa6df07540cb5d3d297f0d0d4d84cb52bc8e652444e00000000000000000000000000737570706f72744075726c2e616900000000000000000000000000000000000068747470733a2f2f77696e67732e61690000000000000000000000000000000057494e4753000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012667088b212ce3d06a1b553a7221e1fd19000d9af57494e47530000000000000000000000737570706f7274407761782e696f00000000000000000000000000000000000068747470733a2f2f7761782e696f000000000000000000000000000000000000574158000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000839bb259f66e1c59d5abef88375979b4d20d9802257415800000000000000000000000000737570706f7274406d79636172636f696e2e636f6d000000000000000000000068747470733a2f2f6d79636172636f696e2e636f6d00000000000000000000004361722053686172696e6720436f6d6d00000000000000000000000000000000000000000000000000000000000000000000000000000009423e4322cdda29156b49a17dfbd2acc4b280600d4341520000000000000000000000000069636f40736e6f762e696f00000000000000000000000000000000000000000068747470733a2f2f746f6b656e73616c652e736e6f762e696f00000000000000534e4f5600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012bdc5bac39dbe132b1e030e898ae3830017d7d969534e4f56000000000000000000000000696e666f40706f70756c6f75732e636f0000000000000000000000000000000068747470733a2f2f706f70756c6f75732e636f00000000000000000000000000506f70756c6f75730000000000000000000000000000000000000000000000000000000000000000000000004597c8a00000000000000008d4fa1460f537bb9085d22c7bccb5dd450ef28e3a505054000000000000000000000000006d61696c746f3a696e666f40737761726d2e66756e640000000000000000000068747470733a2f2f737761726d2e66756e640000000000000000000000000000537761726d2046756e6420546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000129e88613418cf03dca54d6a2cf6ad934a78c7a17a53574d00000000000000000000000000496e666f4067656e657669657665636f2e636f6d00000000000000000000000068747470733a2f2f67656e657669657665636f2e636f6d000000000000000000475843000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a58ca3065c0f24c7c96aee8d6056b5b5decf9c2f8475843000000000000000000000000007465616d40737065637472652e616900000000000000000000000000000000007777772e737065637472652e6169000000000000000000000000000000000000537065637472652e616920442d546f6b0000000000000000000000000000000000000000000000000000000000000000000000000000001212b306fa98f4cbb8d4457fdff3a0a0a56f07ccdf5358445400000000000000000000000073756363657373406f6e672e736f6369616c000000000000000000000000000068747470733a2f2f6f6e67636f696e2e696f00000000000000000000000000006f6e470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012d341d1680eeee3255b8c4c75bcce7eb57f144dae6f6e470000000000000000000000000061646d696e4063727970746f77692e636f6d000000000000000000000000000068747470733a2f2f7777772e63727970746f77692e636f6d2f00000000000000576920436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125e4abe6419650ca839ce5bb7db422b881a6064bb57694300000000000000000000000000436172640000000000000000000000000000000000000000000000000000000068747470733a2f2f65746865727363616e2e696f2f746f6b656e2f546f6b656e546f6b656e436172640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008aaaf91d9b90df800df4f55c205fd6989c977e73a544b4e00000000000000000000000000746f6d63617440736d6172746d6573682e696f00000000000000000000000000687474703a2f2f736d6172746d6573682e696f00000000000000000000000000536d6172744d657368000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001255f93985431fc9304077687a35a1ba103dc1e081534d5400000000000000000000000000636f6e7461637440736d61727462696c6c696f6e732e636f6d00000000000000687474703a2f2f736d61727462696c6c696f6e732e636f6d0000000000000000536d6172742042696c6c696f6e730000000000000000000000000000000000000000000000000000000000000000000000000000000000006f6deb5db0c4994a8283a01d6cfeeb27fc3bbe9c534d415254000000000000000000000061646d696e40736d617274696c6c696f6e732e6368000000000000000000000068747470733a2f2f7777772e736d617274696c6c696f6e732e63680000000000532d412d504154000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000121ec8fe51a9b6a3a6c427d17d9ecc3060fbc4a45c532d412d504154000000000000000000696e666f40736b726170732e696f00000000000000000000000000000000000068747470733a2f2f736b726170732e696f000000000000000000000000000000536b726170730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fdfe8b7ab6cf1bd1e3d14538ef40686296c42052534b5250000000000000000000000000737570706f7274407665636861696e2e636f6d0000000000000000000000000068747470733a2f2f746f6b656e73616c652e7665636861696e2e636f6d2f656e5665636861696e0000000000000000000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000012d850942ef8811f2a866692a623011bde52a462c156454e00000000000000000000000000696e666f40696e7369676874732e6e6574776f726b000000000000000000000068747470733a2f2f696e7369676874732e6e6574776f726b0000000000000000496e736967687473204e6574776f726b00000000000000000000000000000000000000000000000000000000000000000000000000000012c72fe8e3dd5bef0f9f31f259399f301272ef2a2d494e5354415200000000000000000000636f6e74616374757340626c6f636b636861696e63657274696669656464617468747470733a2f2f7777772e62636469706c6f6d612e636f6d00000000000000426c6f636b636861696e20436572746900000000000000000000000000000000000000000000000000000000000000000000000000000012acfa209fb73bf3dd5bbfb1101b9bc999c49062a5424344540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049434500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125a84969bb663fb64f6d015dcf9f622aedc79675049434500000000000000000000000000636c6e40636f6c752e636f6d000000000000000000000000000000000000000068747470733a2f2f636c6e2e6e6574776f726b00000000000000000000000000436f6c754c6f63616c4e6574776f726b000000000000000000000000000000000000000000000000000000000000000000000000000000124162178b78d6985480a308b2190ee5517460406d434c4e0000000000000000000000000065676173406574686761732e73747265616d0000000000000000000000000000687474703a2f2f7777772e6574686761732e73747265616d00000000000000004554482047415300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008b53a96bcbdd9cf78dff20bab6c2be7baec8f00f8654741530000000000000000000000007465616d40626c6f636b6361742e696f0000000000000000000000000000000068747470733a2f2f626c6f636b6361742e696f000000000000000000000000004341542028426c6f636b6361742900000000000000000000000000000000000000000000000000000000000000000000000000000000001256ba2ee7890461f463f7be02aac3099f6d5811a84341542028426c6f636b636174290000636f6e746163744069702e73780000000000000000000000000000000000000068747470733a2f2f69702e7378000000000000000000000000000000000000004950535800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012001f0aa5da15585e5b2305dbab2bac425ea7100749505358000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6c69717569642e706c7573000000000000000000000000005141534800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006618e75ac90b12c6049ba3b27f5d5f8651b0037f6514153480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000656f7340626c6f636b2e6f6e6500000000000000000000000000000000000000454f530000000000000000000000000000000000000000000000000000000000000000000000000000000298215db358000000000000001286fa049857e0209aa7d9e616f7eb3b3b78ecfdb0454f5300000000000000000000000000737570706f72744072657075626c696370726f746f636f6c2e636f6d0000000068747470733a2f2f72657075626c696370726f746f636f6c2e636f6d0000000052657075626c69632050726f746f636f00000000000000000000000000000000000000000000000000000000000000000000000000000012408e41876cccdc0f92210600ef50372656052a3852454e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73656e7361792e697400000000000000000000000000000053656e73617900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000086745fab6801e376cd24f03572b9c9b0d4edddccf53454e53450000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6d65646963616c636861696e2e636f6d00000000000000004d6564546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001241dbecc1cdc5517c6f76f6a6e836adbee2754de34d544e00000000000000000000000000737570706f727440666c757870726f6a6563742e78797a000000000000000000666c757870726f6a6563742e78797a0000000000000000000000000000000000426974466c75780000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001270b147e01e9285e7ce68b9ba437fe3a9190e756a464c5800000000000000000000000000737570706f7274406c6966656c6162732e696f000000000000000000000000007777772e6c6966656c6162732e696f00000000000000000000000000000000004c49464500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ff18dbc487b4c2e3222d115952babfda8ba52f5f4c494645000000000000000000000000737570706f72744072697074696465636f696e2e636f6d00000000000000000068747470733a2f2f72697074696465636f696e2e636f6d00000000000000000052697074696465436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008dd007278b667f6bef52fd0a4c23604aa1f96039a524950540000000000000000000000007400000000000000000000000000000000000000000000000000000000000000687474703a2f2f65726332302d616d69732e616d69736f6c7574696f6e2e6e65414d495300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009949bed886c739f1a3273629b3320db0c5024c719414d49530000000000000000000000007175657374696f6e7340686f72697a6f6e73746174652e636f6d00000000000068747470733a2f2f686f72697a6f6e73746174652e636f6d00000000000000004853540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012554c20b7c486beee439277b4540a434566dc4c02485354000000000000000000000000007465616d4074696572696f6e2e636f6d0000000000000000000000000000000068747470733a2f2f74696572696f6e2e636f6d0000000000000000000000000054696572696f6e204e6574776f726b200000000000000000000000000000000000000000000000000000000000000000000000000000000808f5a9235b08173b7569f83645d2c7fb55e8ccd8544e5400000000000000000000000000737570706f7274406e61676169636f2e636f6d0000000000000000000000000068747470733a2f2f7777772e6e61676169636f2e636f6d0000000000000000004e41474120436f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001272dd4b6bd852a3aa172be4d6c5a6dbec588cf1314e474300000000000000000000000000696e666f4070617261676f6e636f696e2e636f6d00000000000000000000000068747470733a2f2f70617261676f6e636f696e2e636f6d00000000000000000050524700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000067728dfef5abd468669eb7f9b48a7f70a501ed29d505247000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044454e540000000000000000000000000000000000000000000000000000000000000000000000000000012c3c307f0000000000000000083597bfd533a99c9aa083587b074434e61eb0a25844454e54000000000000000000000000636f6e74616374406265796f6e642d7468652d766f69642e6e6574000000000068747470733a2f2f6265796f6e642d7468652d766f69642e6e657400000000004e657869756d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000345e42d659d9f9466cd5df622506033145a9b89bc4e7843000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f7777772e78617572756d2e6f7267000000000000000000000058617572756d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084df812f6064def1e5e029f1ca858777cc98d2d8158415552000000000000000000000000737570706f72744067616d696e67666f72676f6f642e6e65740000000000000068747470733a2f2f707270732e696f0000000000000000000000000000000000507572706f7365000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127641b2ca9ddd58addf6e3381c1f994aac5f1a32f505250530000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050544f59000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000088ae4bf2c33a8e667de34b54938b0ccd03eb8cc0650544f59000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6e696d69712e636f6d0000000000000000000000000000004e494d4951000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012cfb98637bcae43c13323eaa1731ced2b716962fd4e4554000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053544f524a000000000000000000000000000000000000000000000000000000000000000000000000000000248643890000000000000008b64ef51c888972c908cfacf59b47c1afbc0ab8ac53544f524a0000000000000000000000696e666f406c69766573746172732e696f00000000000000000000000000000068747470733a2f2f6c69766573746172732e696f0000000000000000000000004c49564520546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001224a77c1f17c547105e14813e517be06b0040aa764c495645000000000000000000000000656e7175697279407a696c6c6971612e636f6d0000000000000000000000000068747470733a2f2f7777772e7a696c6c6971612e636f6d2f00000000000000005a696c6c6971610000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c05f4a42e251f2d52b8ed15e9fedaacfcef1fad275a494c00000000000000000000000000737570706f727440646d61726b65742e696f000000000000000000000000000068747470733a2f2f646d61726b65742e636f6d00000000000000000000000000444d61726b657420546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000082ccbff3a042c68716ed2a2cb0c544a9f1d1935e1444d5400000000000000000000000000696e7665737440676f6c646d696e742e696f000000000000000000000000000068747470733a2f2f676f6c646d696e742e696f00000000000000000000000000476f6c646d696e74204d4e54205072650000000000000000000000000000000000000000000000000000000000000000000000000000001283cee9e086a77e492ee0bb93c2b0437ad6fdeccc4d4e545000000000000000000000000061646d696e406265746b696e672e696f0000000000000000000000000000000068747470733a2f2f6265746b696e672e696f00000000000000000000000000004265744b696e672042616e6b726f6c6c00000000000000000000000000000000000000000000000000000000000000000000000000000008b2bfeb70b903f1baac7f2ba2c62934c7e5b974c4424b4200000000000000000000000000636f6e74616374407574727573742e696f00000000000000000000000000000068747470733a2f2f7574727573742e696f00000000000000000000000000000055544b000000000000000000000000000000000000000000000000000000000000000000000000056bc75e2d63100000000000000000001270a72833d6bf7f508c8224ce59ea1ef3d0ea3a3855544b00000000000000000000000000736572766963654074726f6e6c61622e636f6d0000000000000000000000000068747470733a2f2f74726f6e6c61622e636f6d2f656e2e68746d6c000000000054726f6e204c616220546f6b656e0000000000000000000000000000000000000000000000000000000000003be715400000000000000006f230b790e05390fc8295f4d3f60332c93bed42e254525800000000000000000000000000737570706f72744074726164652e696f0000000000000000000000000000000068747470733a2f2f74726164652e696f0000000000000000000000000000000054494f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001280bc5512561c7f85a3a9508c7df7901b370fa1df54494f0000000000000000000000000073616c65734072657374617274656e657267792e696f0000000000000000000068747470733a2f2f7777772e72657374617274656e657267792e696f00000000524544204d5741540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126425c6be902d692ae2db752b3c268afadb099d3b4d574154000000000000000000000000746f6b656e737570706f72744074656c636f2e696e000000000000000000000068747470733a2f2f7777772e74656c636f2e696e00000000000000000000000054656c636f696e0000000000000000000000000000000000000000000000000000000000000000000000000000006f2a000000000000000285e076361cc813a908ff672f9bad1541474402b254454c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005849440000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008b110ec7b1dcb8fab8dedbf28f53bc63ea5bedd84584944000000000000000000000000006465782e70687000000000000000000000000000000000000000000000000000687474703a2f2f766572697461732e7665726974617365756d2e636f6d2f696e56657269746173000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128f3470a7388c05ee4e7af3d01d8c722b0ff5237456455249000000000000000000000000737570706f7274406d61696c2e726f636b6574706f6f6c2e6e6574000000000068747470733a2f2f7777772e726f636b6574706f6f6c2e6e6574000000000000526f636b657420506f6f6c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b4efd85c19999d84251304bda99e90b92300bd9352504c0000000000000000000000000068656c6c6f40696e7465726e78742e696f00000000000000000000000000000068747470733a2f2f696e7465726e78742e696f00000000000000000000000000496e7465726e7874000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a8006c4ca56f24d6836727d106349320db7fef82494e5854000000000000000000000000737570706f72744061726269747261676563742e636f6d00000000000000000068747470733a2f2f7777772e61726269747261676563742e636f6d000000000041726269747261676543540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000081245ef80f4d9e02ed9425375e8f649b9221b31d841524354000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f696e76657374666565642e636f6d00000000000000000000496e7665737446656564000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127654915a1b82d6d2d0afc37c52af556ea8983c7e494654000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030782050726f6a65637400000000000000000000000000000000000000000000000000000000000000045edc4200b0000000000000000012e41d2489571d322189246dafa5ebde1f4699f4985a525800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6d797374657269756d2e6e6574776f726b000000000000004d797374657269756d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008a645264c5603e96c3b0b078cdab68733794b0a714d595354000000000000000000000000737570706f72744073616e64636f696e2e696f0000000000000000000000000068747470733a2f2f7777772e73616e64636f696e2e696f00000000000000000053616e64636f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f333b2ace992ac2bbd8798bf57bc65a06184afba534e4400000000000000000000000000696e666f40706c6179326c6976652c696f00000000000000000000000000000068747470733a2f2f706c6179326c6976652e696f0000000000000000000000004c5543546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125dbe296f97b23c4a6aa6183d73e574d02ba5c7194c554300000000000000000000000000737570706f72744073706f72747966692e696f0000000000000000000000000068747470733a2f2f73706f72747966692e696f0000000000000000000000000053706f727469667900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001285089389c14bd9c77fc2b8f0c3d1dc3363bf06ef535046000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000054656e5800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b97048628db6b661d4c2aa833e95dbe1a905b28050415900000000000000000000000000737570706f7274406469766970726f6a6563742e6f726700000000000000000068747470733a2f2f7777772e6469766970726f6a6563742e6f72670000000000444956580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001213f11c9905a08ca76e3e853be63d4f0944326c72444956580000000000000000000000007465616d407765706f7765722e6e6574776f726b00000000000000000000000068747470733a2f2f7765706f7765722e6e6574776f726b0000000000000000005765506f77657220546f6b656e0000000000000000000000000000000000000000000000000000056bc75e2d6310000000000000000000124cf488387f035ff08c371515562cba712f9015d4575052000000000000000000000000007465616d4062657468657265756d2e636f6d000000000000000000000000000068747470733a2f2f7777772e62657468657265756d2e636f6d2f00000000000042657468657265756d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a02e3bb9cebc03952601b3724b4940e0845bebcf42544852000000000000000000000000696e666f407370656374697676722e636f6d000000000000000000000000000068747470733a2f2f7370656374697676722e636f6d00000000000000000000005369676e616c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126888a16ea9792c15a4dcf2f6c623d055c8ede7925349470000000000000000000000000073746166664061726f6e6c696e652e696f00000000000000000000000000000068747470733a2f2f61726f6e6c696e652e696f00000000000000000000000000417373697374697665205265616c697400000000000000000000000000000000000000000000000000000000000000000000000000000012b0d926c1bc3d78064f3e1075d5bd9a24f35ae6c5415258540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000058524c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009b24754be79281553dc1adc160ddf5cd9b74361a458524c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f63616e79612e696f0000000000000000000000000000000043414e000000000000000000000000000000000000000000000000000000000000000000000000000000000000a7d8c000000000000000061d462414fe14cf489c7a21cac78509f4bf8cd7c043414e0000000000000000000000000068656c70407061797069652e636f6d000000000000000000000000000000000068747470733a2f2f7777772e7061797069652e636f6d000000000000000000005061795069650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c42209accc14029c1012fb5680d95fbd6036e2a050505000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f61696f6e2e6e6574776f726b2f000000000000000000000041696f6e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084ceda7906a5ed2179785cd3a40a69ee8bc99c46641494f4e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e73746f782e636f6d00000000000000000000000053746f78546f6b656e00000000000000000000000000000000000000000000000000000000000000136dcc951d8c00000000000000000012006bea43baa3f7a6f765f14f10a1a1b08334ef45535458000000000000000000000000007465616d406561676c657061792e696f0000000000000000000000000000000068747470733a2f2f6561676c657061792e696f000000000000000000000000004561676c65436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012994f0dffdbae0bbf09b652d6f11a493fd33f42b94541474c450000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e776574727573742e696f000000000000000000005452535400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006cb94be6f13a1182e4a4b6140cb7bf2025d28e41b54525354000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f61656c662e696f2f00000000000000000000000000000000454c4620546f6b656e000000000000000000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000012bf2179859fc6d5bee9bf9158632dc51678a4100e454c4600000000000000000000000000737570706f7274407261696e626f7763757272656e63792e636f6d000000000068747470733a2f2f7777772e7261696e626f7763757272656e63792e636f6d2f5477696e6b6c6500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003fbd0d1c77b501796a35d86cf91d65d9778eee69554574e4b4c0000000000000000000000696e666f40766962656875622e696f0000000000000000000000000000000000687474703a2f2f766962656875622e696f0000000000000000000000000000005649424520436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e8ff5c9c75deb346acac493c463c8950be03dfba56494245000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f656467656c6573732e696f00000000000000000000000000456467656c65737300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008711d3b02c8758f2fb3ab4e80228418a7f8e39c45444700000000000000000000000000696e666f4073616e74696d656e742e6e6574000000000000000000000000000068747470733a2f2f73616e74696d656e742e6e6574000000000000000000000053616e74696d656e7400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127c5a0ce9267ed19b22f8cae653f198e3e8daf09853414e00000000000000000000000000737570706f7274407669756c792e636f6d00000000000000000000000000000068747470733a2f2f7669756c792e696f0000000000000000000000000000000056495500000000000000000000000000000000000000000000000000000000000000000000000002a9d7430e1b90c9240000000000000012519475b31653e46d20cd09f9fdcf3b12bdacb4f55649550000000000000000000000000068656c6c6f406469676970756c73652e696f000000000000000000000000000068747470733a2f2f7777772e6469676970756c73652e696f00000000000000004469676950756c73650000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f6cfe53d6febaeea051f400ff5fc14f0cbbdaca144475054000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004755500000000000000000000000000000000000000000000000000000000000000000000000000000000000000059d80000000000000003f7b098298f7c69fc14610bf71d5e02c60792894c4755500000000000000000000000000064616e406c6f63692e696f00000000000000000000000000000000000000000068747470733a2f2f6c6f636970726f2e636f6d000000000000000000000000004c4f4349636f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000129c23d67aea7b95d80942e3836bcdf7e708a747c24c4f43490000000000000000000000006e6465782d656e2e68746d6c000000000000000000000000000000000000000068747470733a2f2f73696e6572676961626c6f636b636861696e2e6f72672f6953494e4552474941000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008cfd6ae8bf13f42de14867351eaff7a8a3b9fbbe7534e4700000000000000000000000000636f6e7461637440626c6f636b6c616e6365722e6e657400000000000000000068747470733a2f2f626c6f636b6c616e6365722e6e65740000000000000000004c616e63657220546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000001263e634330a20150dbb61b15648bc73855d6ccf074c4e430000000000000000000000000068656c6c6f4070617265746f2e6e6574776f726b00000000000000000000000068747470733a2f2f70617265746f2e6e6574776f726b0000000000000000000050415245544f000000000000000000000000000000000000000000000000000000000000000000015af1d78b58c400000000000000000012ea5f88e54d982cbb0c441cde4e79bc305e5b43bc50415245544f00000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7374617475732e696d000000000000000000000000000000537461747573204e6574776f726b20540000000000000000000000000000000000000000000000000003370805d1acda0000000000000012744d70fdbe2ba4cf95131626614a1763df805b9e534e5400000000000000000000000000696e666f40626c6f636b7469782e696f0000000000000000000000000000000068747470733a2f2f7777772e626c6f636b7469782e696f000000000000000000426c6f636b746978000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012ea1f346faf023f974eb5adaf088bbcdf02d761f45449580000000000000000000000000061646d696e4070617977697468696e6b2e636f6d00000000000000000000000068747470733a2f2f70617977697468696e6b2e636f6d00000000000000000000496e6b2050726f746f636f6c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000012bc86727e770de68b1060c91f6bb6945c73e10388584e4b00000000000000000000000000737570706f727440646164692e636f000000000000000000000000000000000068747470733a2f2f646164692e636c6f756400000000000000000000000000004441444900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012fb2f26f266fb2805a387230f2aa0a331b4d96fba444144490000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042656572436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000074c1e4b8cae59269ec1d85d3d4f324396048f4ac42656572436f696e000000000000000061646d696e406b696e677364732e6e6574776f726b000000000000000000000068747470733a2f2f6b696e677364732e6e6574776f726b000000000000000000535041524300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001258bf7df57d9da7113c4ccb49d8463d4908c735cb53504152430000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73756e636f6e74726163742e6f7267000000000000000000534e430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f4134146af2d511dd5ea8cdb1c4ac88c57d60404534e4300000000000000000000000000696e666f4066756e64726571756573742e696f0000000000000000000000000068747470733a2f2f66756e64726571756573742e696f0000000000000000000046756e64526571756573740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124df47b4969b2911c966506e3592c41389493953b464e4400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d4e4500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000081a95b271b0535d15fa49932daba31ba612b529464d4e4500000000000000000000000000737570706f727440766f6973652e69740000000000000000000000000000000068747470733a2f2f766f6973652e697400000000000000000000000000000000566f69736500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000883eea00d838f92dec4d1475697b9f4d3537b56e3564f4953450000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f696e7375726570616c2e696f2f0000000000000000000000496e7375726550616c20746f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000001264cdf819d3e75ac8ec217b3496d7ce167be42e8049504c00000000000000000000000000636f6e746163744065626974636f696e2e6f726700000000000000000000000068747470733a2f2f65626974636f696e2e6f72670000000000000000000000006542544300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008eb7c20027172e5d143fb030d50f91cece2d1485d654254430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f737761726d2e63697479000000000000000000000000000000537761726d204369747920546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000012b9e7f8568e08d5659f5d29c4997173d84cdf260753575400000000000000000000000000696e666f40706f70756c6f75732e636f0000000000000000000000000000000068747470733a2f2f706f70756c6f75732e636f00000000000000000000000000506f70756c6f7573205842524c20546f00000000000000000000000000000000000000000000000000000000000000000000000000000008c14830e53aa344e8c14603a91229a0b925b0b262505854000000000000000000000000006869406e756c732e696f0000000000000000000000000000000000000000000068747470733a2f2f6e756c732e696f00000000000000000000000000000000004e554c5300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b91318f35bdb262e9423bc7c7c2a3a93dd93c92c4e554c53000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f73696e67756c61726474762e636f6d00000000000000000053696e67756c6172445456000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000aec2e87e0a235266d9c5adc9deb4b2e29b54d009534e474c530000000000000000000000737570706f72744065786d722e696f000000000000000000000000000000000068747470733a2f2f65786d722e696f2f0000000000000000000000000000000065584d52636f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008c98e0639c6d2ec037a615341c369666b110e80e545584d52000000000000000000000000676f6c64784068656c6c6f676f6c642e6f72670000000000000000000000000068747470733a2f2f7777772e68656c6c6f676f6c642e6f72672f000000000000474f4c4458000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012eab43193cf0623073ca89db9b712796356fa7414474f4c44580000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f616d62726f7375732e636f6d2f696e6465782e68746d6c00416d62657220546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124dc3643dbc642b72c158e7f3d2ff232df61cb6ce414d4200000000000000000000000000696e666f40656d6265726d696e652e636f6d000000000000000000000000000068747470733a2f2f656d6265726d696e652e636f6d2f00000000000000000000456d626572730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000386467f1f3ddbe832448650418311a479eecfc574d425253000000000000000000000000746f6b656e73616c65406d6f64756c74726164652e696f00000000000000000068747470733a2f2f6d6f64756c74726164652e696f00000000000000000000004d545243546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000121e49ff77c355a3e38d6651ce8404af0e48c5395f4d545263000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6d656c6f6e706f72742e636f6d00000000000000000000004d656c6f6e706f72740000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012beb9ef514a379b997e0798fdcc901ee474b6d9a14d4c4e00000000000000000000000000746f6b656e406d6f64756d2e696f00000000000000000000000000000000000068747470733a2f2f6d6f64756d2e696f000000000000000000000000000000004d6f64756d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000957c30ab0426e0c93cd8241e2c60392d08c6ac8e4d4f44000000000000000000000000007465616d406c616d64656e2e696f00000000000000000000000000000000000068747470733a2f2f7777772e6c616d64656e2e696f00000000000000000000004c616d64656e2054617500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c27a2f05fa577a83ba0fdb4c38443c071835650154415500000000000000000000000000737570706f72744073656c666b65792e6f72670000000000000000000000000068747470733a2f2f73656c666b65792e6f72670000000000000000000000000053656c664b6579000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124cc19356f2d37338b9802aa8e8fc58b0373296e74b4559000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f7777772e656c74636f696e2e746563682f0000000000000000454c54434f494e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000844197a4c44d6a059297caf6be4f7e172bd56caaf454c54434f494e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004a455400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128727c112c712c4a03371ac87a74dd6ab104af7684a4554000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f7777772e6d6f6e657468612e696f00000000000000000000004d6f6e6574686100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005af4dce16da2877f8c9e00544c93b62ac40631f164d544800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005245580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f05a9382a4c3f29e2784502754293d88b835109c524558000000000000000000000000006d6340706f7765726c65646765722e696f00000000000000000000000000000068747470733a2f2f706f7765726c65646765722e696f00000000000000000000506f7765724c6564676572000000000000000000000000000000000000000000000000000000000000000000074fbc100000000000000006595832f8fc6bf59c85c527fec3740a1b7a361269504f575200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000534b494e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000062bdc0d42996017fce214b21607a515da41a9e0c5534b494e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049434e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012888666ca69e0f178ded6d75b5726cee99a87d69849434e00000000000000000000000000636f6e74616374406465766572792e696f00000000000000000000000000000068747470733a2f2f6465766572792e696f0000000000000000000000000000004556450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012923108a439c4e8c2315c4f6521e5ce95b44e9b4c45564500000000000000000000000000737570706f7274406465626974756d2e6e6574776f726b00000000000000000068747470733a2f2f6465626974756d2e6e6574776f726b2f00000000000000004445424954554d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012151202c9c18e495656f372281f493eb7698961d544454200000000000000000000000000686940736f6c612e666f756e646174696f6e000000000000000000000000000068747470733a2f2f736f6c612e666f756e646174696f6e000000000000000000536f6c6120546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000061f54638b7737193ffd86c19ec51907a7c41755d8534f4c00000000000000000000000000737570706f7274406d6574616c7061792e636f0000000000000000000000000068747470733a2f2f7777772e6d6574616c7061792e636f6d00000000000000004d6574616c506179000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008f433089366899d83a9f26a773d59ec7ecf30355e4d544c00000000000000000000000000737570706f7274406c656e64696e67626c6f636b2e636f6d000000000000000068747470733a2f2f6c656e64696e67626c6f636b2e636f6d00000000000000004c656e64696e67626c6f636b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000120947b0e6d821378805c9598291385ce7c791a6b24c4e4400000000000000000000000000696e666f407669727475652e66696e616e63650000000000000000000000000068747470733a2f2f66617261642e656e6572677900000000000000000000000046415241442043727970746f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000120abefb7611cb3a01ea3fad85f33c3c934f8e2cf446524400000000000000000000000000696e666f406c656164636f696e2e6e6574776f726b000000000000000000000068747470733a2f2f7777772e6c656164636f696e2e6e6574776f726b2f0000004c454144434f494e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125102791ca02fc3595398400bfe0e33d7b6c822674c444300000000000000000000000000737570706f7274406574686f7273652e636f6d0000000000000000000000000068747470733a2f2f6574686f7273652e636f6d00000000000000000000000000484f5253450000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000125b0751713b2527d7f002c0c4e2a37e1219610a6b484f5253450000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f646563656e7472616c616e642e6f72670000000000000000446563656e7472616c616e64204d414e000000000000000000000000000000000000000000000000000000000000000000000000000000120f5d2fb29fb7d3cfee444a200298f468908cc9424d414e41000000000000000000000000737570706f727440706563756c69756d2e696f0000000000000000000000000068747470733a2f2f706563756c69756d2e696f0000000000000000000000000050434c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083618516f45cd3c913f81f9987af41077932bc40d50434c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f61756775722e6e65740000000000000000000000000000004175677572000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e94327d07fc17907b4db788e5adf2ed424addff652455000000000000000000000000000696e666f40636f73732e696f000000000000000000000000000000000000000068747470733a2f2f636f73732e696f0000000000000000000000000000000000436f737320546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000129e96604445ec19ffed9a5e8dd7b50a29c899a10c434f5353000000000000000000000000636f6e74616374406574686572656d6f6e2e636f6d000000000000000000000068747470733a2f2f7777772e6574686572656d6f6e2e636f6d000000000000004574686572656d6f6e20546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000895daaab98046846bf4b2853e23cba236fa394a31454d4f4e540000000000000000000000737570706f7274406d616b657264616f2e636f6d00000000000000000000000068747470733a2f2f6d616b657264616f2e636f6d0000000000000000000000004d616b657244414f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000129f8f72aa9304c8b593d555f12ef6589cc3a579a24d4b5200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d474f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000840395044ac3c0c57051906da938b54bd6557f2124d474f00000000000000000000000000737570706f72744067616d65666c69702e636f6d00000000000000000000000068747470733a2f2f67616d65666c69702e636f6d000000000000000000000000464c495020546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000123a1bda28adb5b0a812a7cf10a1950c920f79bcd3464c5000000000000000000000000000696e666f40746865776f726c646e6577732e6e6574000000000000000000000068747470733a2f2f69636f2e746865776f726c646e6577732e6e65740000000054686520576f726c64204e6577730000000000000000000000000000000000000000000000000000000000000000000000000000000000122ef1ab8a26187c58bb8aaeb11b2fc6d25c5c071654574e0000000000000000000000000069636f40666c757a666c757a2e636f6d0000000000000000000000000000000068747470733a2f2f69636f2e666c757a666c757a2e636f6d0000000000000000466c757a20466c757a20476c6f62616c00000000000000000000000000000000000000000000000000000000000000000000000000000012954b5de09a55e59755acbda29e1eb74a45d30175464c555a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000666c6978786f2e636f6d00000000000000000000000000000000000000000000464c495858000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f04a8ac553fcedb5ba99a64799155826c136b0be464c4958580000000000000000000000666f756e646174696f6e406c6f6f7072696e672e6f726700000000000000000068747470733a2f2f6c6f6f7072696e672e6f72670000000000000000000000004c5243000000000000000000000000000000000000000000000000000000000000000000000000004563ec75556e40000000000000000012ef68e7c694f40c8202821edf525de3782458639f4c524300000000000000000000000000636f6e74616374406279746f6d2e696f0000000000000000000000000000000068747470733a2f2f6279746f6d2e696f000000000000000000000000000000004279746f6d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008cb97e65f07da24d46bcdd078ebebd7c6e6e3d75042544d00000000000000000000000000696e666f4068756d616e69712e636f6d0000000000000000000000000000000068747470733a2f2f68756d616e69712e636f0000000000000000000000000000484d510000000000000000000000000000000000000000000000000000000000000000000000000000000000832156000000000000000008cbcc0f036ed4788f63fc0fee32873d6a7487b908484d5100000000000000000000000000696e666f406164697475732e6e6574000000000000000000000000000000000068747470733a2f2f6164697475732e6e6574000000000000000000000000000041646974757300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128810c63470d38639954c6b41aac545848c46484a414449000000000000000000000000006f6e65406765746c6f6761726974686d2e636f6d00000000000000000000000068747470733a2f2f6765746c6f6761726974686d2e636f6d00000000000000004c6f6761726974686d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082eb86e8fc520e0f6bb5d9af08f924fe70558ab894c475200000000000000000000000000737570706f727440656d6f76696576656e747572652e636f6d00000000000000687474703a2f2f656d6f76696576656e747572652e636f6d0000000000000000454d6f76696556656e7475726500000000000000000000000000000000000000000000000000000000000000000000000000000000000002b802b24e0637c2b87d2e8b7784c055bbe921011a454d5600000000000000000000000000636f6e74616374406f79737465722e777300000000000000000000000000000068747470733a2f2f6f79737465722e77730000000000000000000000000000004f797374657220506561726c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000121844b21593262668b7248d0f57a220caaba46ab950524c000000000000000000000000007061796d656e74734065746865726274632e696f00000000000000000000000068747470733a2f2f65746865726274632e696f2f66617100000000000000000045746865724254430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083a26746ddb79b1b8e4450e3f4ffe3285a307387e45544842000000000000000000000000737570706f7274406c6976656564752e7476000000000000000000000000000068747470733a2f2f746f6b656e73616c652e6c6976656564752e7476000000004c454455000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000085b26c5d0772e5bbac8b3182ae9a13f9bb2d037654c45445500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000434649000000000000000000000000000000000000000000000000000000000000000000000000000001b1b970ff538e000000000000001212fef5e57bf45873cd9b62e9dbd7bfb99e32d73e43464900000000000000000000000000636f6e7461637440706f2e65740000000000000000000000000000000000000068747470733a2f2f706f2e657400000000000000000000000000000000000000506f2e657420546f6b656e7300000000000000000000000000000000000000000000000000000000000000000000000000000000000000080e0989b1f9b8a38983c2ba8053269ca62ec9b195504f450000000000000000000000000069636f4070726f70792e636f6d0000000000000000000000000000000000000068747470733a2f2f70726f70792e636f6d00000000000000000000000000000050726f707900000000000000000000000000000000000000000000000000000000000000000000000000000005f5ffda0000000000000008226bb599a12c826476e3a771454697ea52e9e22050524f00000000000000000000000000666f756e646174696f6e407174756d2e6f72670000000000000000000000000068747470733a2f2f7174756d2e6f72672f0000000000000000000000000000005174756d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000129a642d6b3368ddc662ca244badf32cda716005bc5154554d000000000000000000000000737570706f72744076696265726174652e636f6d00000000000000000000000068747470733a2f2f7777772e76696265726174652e696f00000000000000000056494200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000122c974b2d0ba1716e644c1fc59982a89ddd2ff7245649420000000000000000000000000073616c65734072697665747a696e746c2e636f6d00000000000000000000000068747470733a2f2f72697665747a696e746c2e636f6d0000000000000000000052697665747a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000123d1ba9be9f66b8ee101911bc36d3fb562eac2244525654000000000000000000000000007175657374696f6e40656e76696f6e2e6f72670000000000000000000000000068747470733a2f2f656e76696f6e2e6f72670000000000000000000000000000456e76696f6e2041470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012d780ae2bf04cd96e577d3d014762f831d97129d045564e00000000000000000000000000737570706f727440657468657270617274792e696f000000000000000000000068747470733a2f2f657468657270617274792e696f000000000000000000000045746865727061727479204655454c0000000000000000000000000000000000000000000000000000000000000000000000000000000012ea38eaa3c86c8f9b751533ba2e562deb9acded404655454c0000000000000000000000006c6962756b616e6740646465782e696f0000000000000000000000000000000068747470733a2f2f746865687964726f666f756e646174696f6e2e636f6d2f00487964726f2050726f746f636f6c000000000000000000000000000000000000000000000000000053444835ec58000000000000000000129af839687f6c94542ac5ece2e317daae355493a1484f54000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000687474703a2f2f63726f776473616c652e6965782e65630000000000000000004945782e65630000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009607f4c5bb672230e8672085532f7e901544a7375524c4300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e636f696e646173682e696f000000000000000000436f696e446173680000000000000000000000000000000000000000000000000000000000000008f42e2a65aa7e80000000000000000012177d39ac676ed1c67a2b268ad7f1e58826e5b0af434454000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042455400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000128aa33a7899fcc8ea5fbe6a608a109c3893a1b8b242455400000000000000000000000000746f6b656e406a6574382e696f0000000000000000000000000000000000000068747470733a2f2f6a6574382e696f00000000000000000000000000000000004a385420546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080d262e5dc4a06a0f1c90ce79c7a60c09dfc884e44a385400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f676f6c656d2e6e6574776f726b0000000000000000000000476f6c656d00000000000000000000000000000000000000000000000000000000000000000000066aff9099e5e0d0000000000000000012a74476443119a942de498590fe1f2454d7d4ac0d474e5400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004e4d5200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000121776e1f26f98b1a5df9cd347953a26dd3cb466714e4d5200000000000000000000000000737570706f7274406372797074657269756d2e696f000000000000000000000068747470733a2f2f6372797074657269756d2e696f00000000000000000000004372797074657269756d546f6b656e00000000000000000000000000000000000000000000000015a214896f94350300000000000000001280a7e048f37a50500351c204cb407766fa3bae7f435250540000000000000000000000007374616666406c696e6b6572636f696e2e636f6d00000000000000000000000068747470733a2f2f7777772e6c696e6b6572636f696e2e636f6d2f656e0000004c696e6b657220436f696e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000126beb418fc6e1958204ac8baddcf109b8e96949664c4e432d4c696e6b657220436f696e0061646d696e4064656e7461636f696e2e636f6d0000000000000000000000000068747470733a2f2f64656e7461636f696e2e636f6d000000000000000000000044656e7461636f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008d32b0da63e2c3bcf8019c9c5d849d7a9d791e644434e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7375627374726174756d2e6e6574000000000000000000005375627374726174756d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000212480e24eb5bec1a9d4369cab6a80cad3c0a377a53554200000000000000000000000000737570706f7274406d616b657264616f2e636f6d00000000000000000000000068747470733a2f2f776574682e696f00000000000000000000000000000000005745544800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c02aaa39b223fe8d0a0e5c4f27ead9083c756cc257455448000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004f4d47000000000000000000000000000000000000000000000000000000000000000000000000000020e22e00da4dbd0000000000000012d26114cd6ee289accf82350c8d8487fedb8a0c074f4d4700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f6e657665726469652e636f6d0000000000000000000000004e65766572646965000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a54ddc7b3cce7fc8b1e3fa0256d0db80d2c109704e444300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e6d61747279782e616900000000000000000000004d545800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120af44e2784637218dd1d32a322d44e603a8f0c6a4d545800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d4441000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001251db5ad35c671a87207d88fc11d593ac0c8415bd4d444100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d434f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008b63b606ac810a52cca15e44bb630fd42d8d1d83d4d434f00000000000000000000000000696e666f406c61746f6b656e2e636f6d0000000000000000000000000000000068747470733a2f2f6c61746f6b656e2e636f6d2f0000000000000000000000004c41544f4b454e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e50365f5d679cb98a1dd62d6f6e58e59321bcddf4c41000000000000000000000000000068656c6c6f406b796265722e6e6574776f726b0000000000000000000000000068747470733a2f2f6b796265722e6e6574776f726b00000000000000000000004b79626572204e6574776f726b00000000000000000000000000000000000000000000000000000000000000000000000000000000000012dd974d5c2e2928dea5f71b9825b8b646686bd2004b4e43000000000000000000000000006b696e406b696b2e636f6d00000000000000000000000000000000000000000068747470733a2f2f6b696e2e6b696b2e636f6d000000000000000000000000004b696e20466f756e646174696f6e0000000000000000000000000000000000000000000000007f0e10af47c1c70000000000000000000012818fc6c2ec5986bc6e2cbf00939d90556ab12ce54b494e00000000000000000000000000737570706f7274406a696272656c2e6e6574776f726b0000000000000000000068747470733a2f2f6a696272656c2e6e6574776f726b000000000000000000004a4e540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012a5fd1a791c4dfcaacc963d4f73c6ae5824149ea74a4e5400000000000000000000000000696e666f40696e73757265782e636f000000000000000000000000000000000068747470733a2f2f7777772e696e73757265782e636f00000000000000000000496e737572655800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008fca47962d45adfdfd1ab2d972315db4ce7ccf09449585400000000000000000000000000737570706f727440696f74636861696e2e696f0000000000000000000000000068747470733a2f2f696f74636861696e2e696f2f000000000000000000000000496f5420436861696e000000000000000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000125e6b6d9abad9093fdc861ea1600eba1b355cd9404954430000000000000000000000000068656c6c6f4069636f6e2e666f756e646174696f6e000000000000000000000068747470733a2f2f7777772e69636f6e2e666f756e646174696f6e000000000049434f4e00000000000000000000000000000000000000000000000000000000000000000000000698e175aef06280000000000000000012b5a5f22694352c15b00323844ad545abb2b1102849435800000000000000000000000000737570706f727440686976652d70726f6a6563742e6e6574000000000000000068747470733a2f2f686976652d70726f6a6563742e6e65740000000000000000486976652050726f6a6563740000000000000000000000000000000000000000000000000000000000000000000000000000000000000008c0eb85285d83217cd7c891702bcbc0fc401e2d9d48564e0000000000000000000000000067726f75704067616d652e636f6d00000000000000000000000000000000000068747470733a2f2f67616d652e636f6d0000000000000000000000000000000047544320546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b70835d7822ebb9426b56543e391846c107bd32c47544300000000000000000000000000636f6e746163744067696d6c692e696f0000000000000000000000000000000068747470733a2f2f67696d6c692e696f0000000000000000000000000000000047696d6c69000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008ae4f56f072c34c0a65b3ae3e4db797d831439d9347494d00000000000000000000000000636f6e746163744066756e64796f757273656c666e6f772e636f6d00000000007777772e66756e64796f757273656c666e6f772e636f6d00000000000000000046756e6420596f757273656c66204e6f0000000000000000000000000000000000000000000000000000000000000000000000000000001288fcfbc22c6d3dbaa25af478c578978339bde77a46594e00000000000000000000000000636f6e74616374406675636b746f6b656e2e636f6d000000000000000000000068747470733a2f2f6675636b746f6b656e2e636f6d000000000000000000000046696e616c6c7920557361626c6520430000000000000000000000000000000000000000000000000000000000000176000000000000000465be44c747988fbf606207698c944df4442efe194655434b000000000000000000000000636f6e74616374406576657265782e696f00000000000000000000000000000068747470733a2f2f6576657265782e696f20000000000000000000000000000045565820546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004f3db5fa2c66b7af3eb0c0b782510816cbe4813b845565800000000000000000000000000696e666f40657468657273706f72747a2e636f6d00000000000000000000000068747470733a2f2f657468657273706f72747a2e636f6d00000000000000000045535a436f696e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e8a1df958be379045e2b46a31a98b93a2ecdfded45535a00000000000000000000000000696e666f40656c69786972746f6b656e2e696f0000000000000000000000000068747470733a2f2f656c69786972746f6b656e2e696f00000000000000000000456c6978697220546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000012c8c6a31a4a806d3710a7b38b7b296d2fabccdba8454c4958000000000000000000000000737570706f72744067616d696e67666f72676f6f642e6e65740000000000000068747470733a2f2f707270732e696f0000000000000000000000000000000000446563656e7472616c697a656420556e00000000000000000000000000000000000000000000000000000000000000000000000000000012d4cffeef10f60eca581b5e1146b5aca4194a4c3b44554249000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e746f6b656e732e6e6574000000000000000000004454520000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008d234bf2410a0009df9c3c63b610c09738f18ccd744545200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e64636f72702e697400000000000000000000000044436f7270000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002621d78f2ef2fd937bfca696cabaf9a779f59b3ed44525000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f64726f70696c2e636f6d000000000000000000000000000044726f70696c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124672bad527107471cb5067a887f4656d585a8a3144524f50202864726f70696c29000000737570706f727440647261676f6e636861696e2e636f6d00000000000000000068747470733a2f2f647261676f6e636861696e2e636f6d000000000000000000447261676f6e0000000000000000000000000000000000000000000000000000000000000000000083d6c7aab63600000000000000000012419c4db4b9e25d6db2ad9691ccb832c8d9fda05e4452474e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f646973747269637430782e696f000000000000000000000044697374726963744f78000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120abdace70d3790235af448c88547603b945604ea444e5400000000000000000000000000737570706f727440616772656c6c6f2e6f72670000000000000000000000000068747470733a2f2f7777772e616772656c6c6f2e6f7267000000000000000000416772656c6c6f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001207e3c70653548b04f0a75970c1f81b4cbbfb606f444c5400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e6467782e696f000000000000000000000000000044696769782044414f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009e0b7927c4af23765cb51314a0e0521a9645f0e2a44474400000000000000000000000000636f6e746163744073747265616d722e636f6d0000000000000000000000000068747470733a2f2f7777772e73747265616d722e636f6d00000000000000000044415441436f696e00000000000000000000000000000000000000000000000000000000000000000947b7a7e327371800000000000000120cf0ee63788a0849fe5297f3407f701e122cc02344415441436f696e0000000000000000696e666f726d6174696f6e4064616e65656c2e696f000000000000000000000068747470733a2f2f64616e65656c2e696f00000000000000000000000000000044616e65656c546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a9b70740e708a083c6ff38df52297020f5dfaa5ee44414e00000000000000000000000000737570706f7274406d616b657264616f2e636f6d00000000000000000000000068747470733a2f2f6d616b657264616f2e636f6d00000000000000000000000044616920537461626c65636f696e20760000000000000000000000000000000000000000000000000000000000000000000000000000001289d24a6b4ccb1b6faa2625fe562bdd9a2326035944414900000000000000000000000000696e666f40636172676f782e696f00000000000000000000000000000000000068747470733a2f2f636172676f782e696f000000000000000000000000000000436172676f580000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b6ee9668771a79be7967ee29a63d4184f809714343584f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000043564300000000000000000000000000000000000000000000000000000000000000000000000000000000003b9aca00000000000000000841e5560054824ea6b0732e656e3ad64e20e94e45435643000000000000000000000000007465616d407665726966792e617300000000000000000000000000000000000068747470733a2f2f7665726966792e61730000000000000000000000000000004352454400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012672a1ad4f667fb18a333af13667aa0af1f5b5bdd43524544000000000000000000000000737570706f727440636f7079747261636b2e696f00000000000000000000000068747470733a2f2f636f7079747261636b2e696f000000000000000000000000434f5059545241434b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f44745fbd41f6a1ba151df190db0564c5fcc441043505900000000000000000000000000636f6e7461637440636f696e66692e636f6d000000000000000000000000000068747470733a2f2f7777772e636f696e66692e636f6d00000000000000000000436f696e466920546f6b656e0000000000000000000000000000000000000000000000000000001b1ae4d6e2ef50000000000000000000123136ef851592acf49ca4c825131e364170fa32b3434f4649000000000000000000000000696e666f40636c696d617465636f696e2e636f6d00000000000000000000000068747470733a2f2f636c696d617465636f696e2e696f00000000000000000000436c696d617465636f696e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b4b1d2c217ec0776584ce08d3dd98f90ededa44b434f3200000000000000000000000000737570706f72744063696e64696361746f722e636f6d0000000000000000000068747470733a2f2f63696e64696361746f722e636f6d0000000000000000000043696e64696361746f7200000000000000000000000000000000000000000000000000000000001f231893d09f5100000000000000000012d4c435f5b09f855c3317c8524cb1f586e42795fa434e4400000000000000000000000000636f6e7461637440356d696c65732e636f6d000000000000000000000000000068747470733a2f2f636d2e356d696c65732e636f6d000000000000000000000043796265724d696c657320546f6b656e000000000000000000000000000000000000000000000003cb7c9d9bb3ab80000000000000000012f85feea2fdd81d51177f6b8f35f0e6734ce45f5f434d5400000000000000000000000000636f6e7461637475734063727970746f6c6976656c65616b2e636f6d0000000068747470733a2f2f7777772e63727970746f6c6976656c65616b2e636f6d2f0043727970746f4c6976654c65616b0000000000000000000000000000000000000000000000000000000000000000000000000000000000123dc9a42fa7afe57be03c58fd7f4411b1e466c508434c4c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f63727970746f6b6974746965732e636f0000000000000000434b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006012c8cf97bead5deae237070f9587f8e7a266d434b000000000000000000000000000068656c7040626974636c6176652e636f6d00000000000000000000000000000068747470733a2f2f7777772e626974636c6176652e636f6d00000000000000004341542028426974436c6176652900000000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000121234567461d3f8db7496581774bd869c83d51c934341542028426974436c617665290000737570706f7274406368616e67652d62616e6b2e636f6d00000000000000000068747470733a2f2f6368616e67652d62616e6b2e636f6d0000000000000000004368616e67652042616e6b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127d4b8cce0591c9044a22ee543533b72e976e36c34341470000000000000000000000000068656c6c6f406361736861612e636f6d0000000000000000000000000000000068747470733a2f2f6361736861612e636f6d00000000000000000000000000004361736861610000000000000000000000000000000000000000000000000000000000000000004eac274771526b80000000000000000012e8780b48bdb05f928697a5e8155f672ed91462f7434153000000000000000000000000007465616d4063727970746f32302e636f6d00000000000000000000000000000068747470733a2f2f63727970746f32302e636f6d00000000000000000000000043727970746f3230277320546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000001226e75307fc0c021472feb8f727839531f112f3174332300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000426974636f696e20546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000012db8646f5b487b5dd979fac618350e85018f557d442544b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000696e666f40627261742e7265640000000000000000000000000000000000000042524154000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000089e77d5a1251b6f7d456722a6eac6d2d5980bd89142524154000000000000000000000000696e666f406269747175656e63652e636f6d000000000000000000000000000068747470733a2f2f7777772e6269747175656e63652e636f6d000000000000004269747175656e636500000000000000000000000000000000000000000000000000000000000000000000005f5e100000000000000000085af2be193a6abca9c8817001f45744777db3075642515800000000000000000000000000737570706f727440626c6f636b706f72742e696f00000000000000000000000068747470733a2f2f626c6f636b706f72742e696f000000000000000000000000426c6f636b706f727420546f6b656e0000000000000000000000000000000000000000000000000098a7d9b8314c00000000000000000012327682779bab2bf4d1337e8974ab9de8275a7ca842505400000000000000000000000000737570706f727440626f6e7061792e636f6d000000000000000000000000000068747470733a2f2f626f6e7061792e636f6d0000000000000000000000000000426f6e7061790000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012cc34366e3842ca1bd36c1f324d15257960fcc801424f4e00000000000000000000000000636f6e7461637440626f756e747930782e696f0000000000000000000000000068747470733a2f2f626f756e747930782e696f00000000000000000000000000426f756e7479307820546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000012d2d6158683aee4cc838067727209a0aaf4359de3424e54590000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000042616e636f7200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000121f573d6fb3f13d689ff844b4ce37794d79a7ff1c424e5400000000000000000000000000737570706f72744062696e616e63652e7a656e6465736b2e636f6d000000000068747470733a2f2f7777772e62696e616e63652e636f6d000000000000000000424e420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012b8c77482e45f1f44de1745f52c74426c631bdd52424e4200000000000000000000000000737570706f7274406269746d6172742e636f6d0000000000000000000000000068747470733a2f2f6269746d6172742e636f6d000000000000000000000000004269744d617274546f6b656e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000012986ee2b944c42d017f52af21c4c69b84dbea35d8424d58000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000049636f6e6f6d6900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012e5a7c12972f3bbfe70ed29521c8949b8af6a0970424c58202849636f6e6f6d69290000007465616d4068656c6c6f626c6f6f6d2e696f000000000000000000000000000068747470733a2f2f68656c6c6f626c6f6f6d2e696f0000000000000000000000426c6f6f6d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012107c4504cd79c5d2696ea0030a8dd4e92601b82e424c540000000000000000000000000062616e6b65784062616e6b65782e636f6d00000000000000000000000000000068747470733a2f2f62616e6b65782e636f6d2f0000000000000000000000000042414e4b4558000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001245245bc59219eeaaf6cd3f382e078a461ff9de7b424b5800000000000000000000000000696e666f4062657474657262657474696e672e6f72670000000000000000000068747470733a2f2f7777772e62657474657262657474696e672e6f72670000004245545200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012763186eb8d4856d536ed4478302971214febc6a94245545200000000000000000000000068656c6c6f406269746465677265652e6f72670000000000000000000000000068747470733a2f2f6269746465677265652e6f7267000000000000000000000042697444656772656520546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000121961b3331969ed52770751fc718ef530838b6dee42444700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f7777772e626565746f6b656e2e636f6d000000000000000042656520546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000124d8fc1453a0f359e99c9675954e656d80d996fbf42454500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068747470733a2f2f62697463762e6f6e652f00000000000000000000000000004269744361706974616c56656e646f72000000000000000000000000000000000000000000000000000000000000000000000000000000081014613e2b3cbc4d575054d4982e580d9b99d7b142435600000000000000000000000000737570706f727440626c6f636b6d61736f6e2e696f000000000000000000000068747470733a2f2f626c6f636b6d61736f6e2e696f0000000000000000000000424350540000000000000000000000000000000000000000000000000000000000000000000000003782dace9d90000000000000000000121c4481750daa5ff521a2a7490d9981ed46465dbd42435054000000000000000000000000737570706f7274407562616e782e696f0000000000000000000000000000000068747470733a2f2f7072652e7562616e782e696f00000000000000000000000042414e5800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012f87f0d9153fea549c728ad61cb801595a68b73de42414e58000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004243444e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f1e797ce986c3cff4472f7d38d5c4aba55dfefe404243444e000000000000000000000000696e666f406176656e7475732e696f000000000000000000000000000000000068747470733a2f2f6176656e7475732e696f000000000000000000000000000041565400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000120d88ed6e74bbfd96b831231638b66c05571e824f41565400000000000000000000000000696e666f406178706972652e636f6d000000000000000000000000000000000068747470733a2f2f7777772e6178706972652e696f2f0000000000000000000041585000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000089af2c6b1a28d3d6bc084bd267f70e90d49741d5b41585000000000000000000000000000636f6e7461637440617474656e74696f6e6e6574776f726b2e696f000000000068747470733a2f2f617474656e74696f6e6e6574776f726b2e696f0000000000417474656e74696f6e20546f6b656e00000000000000000000000000000000000000000000000000000000000000000000000000000000126339784d9478da43106a429196772a029c2f177d4154544e00000000000000000000000068656c704061746c616e742e696f00000000000000000000000000000000000068747470733a2f2f61746c616e742e696f00000000000000000000000000000041544c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001278b7fada55a64dd895d8c8c35779dd8b67fa8a0541544c00000000000000000000000000696e666f40617070636f696e732e696f0000000000000000000000000000000068747470733a2f2f617070636f696e732e696f00000000000000000000000000417070436f696e730000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000121a7a8bd9106f2b8d977e08582dc7d24c723ab0db415050430000000000000000000000007465616d40616972737761702e696f000000000000000000000000000000000068747470733a2f2f616972737761702e696f0000000000000000000000000000416972737761700000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000427054b13b1b798b345b591a4d22e6562d47ea75a41535400000000000000000000000000696e666f406165726f6e2e6165726f000000000000000000000000000000000068747470733a2f2f6165726f6e2e6165726f00000000000000000000000000004165726f6e20546f6b656e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008ba5f11b16b155792cf3b2e6880e8706859a8aeb641524e0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000414e540000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012960b236a07cf122663c4303350609a66a7b288c0414e5400000000000000000000000000010101000000000000000000000000000000000000000000000000000000000000020b010000000000000000"
//console.log(abc.decode(hex))


/*
737570706f72744064746f6b656e322e65746800000000000000000000000000
687474703a2f2f7777772e64746f6b656e322e65746800000000000000000000
44756d6d7920546f6b656e2032000000
0000000000000000000000000000000000000000000000000000000000000000
0000000000000006
27aa52389b5f55012870441670705c6e24efa6b1
44543200000000000000000000000000


737570706f72744064746f6b656e312e65746800000000000000000000000000
687474703a2f2f7777772e64746f6b656e312e65746800000000000000000000
44756d6d7920546f6b656e203100000000000000000000000000000000000000
00000000000000000001c6bf52634000
0000000000000005
31284dd9b04450ac07d44f3d4f93c71a536a6971
44543100000000000000000000000000
010101
0000000000000000000000000000000000000000000000000000000000000002
*/

//var hex = "737570706f72744064746f6b656e322e65746800000000000000000000000000687474703a2f2f7777772e64746f6b656e322e6574680000000000000000000044756d6d7920546f6b656e20320000000000000000000000000000000000000000000000000000000000000000000000000000000000000627aa52389b5f55012870441670705c6e24efa6b144543200000000000000000000000000737570706f72744064746f6b656e312e65746800000000000000000000000000687474703a2f2f7777772e64746f6b656e312e6574680000000000000000000044756d6d7920546f6b656e20310000000000000000000000000000000000000000000000000000000001c6bf52634000000000000000000531284dd9b04450ac07d44f3d4f93c71a536a6971445431000000000000000000000000000101010000000000000000000000000000000000000000000000000000000000000002"

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = require("bn.js");

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })
/******/ ]);
