(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Moddle"] = factory();
	else
		root["Moddle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = isArray;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrayEach = __webpack_require__(24);

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _baseEach = __webpack_require__(25);

var _baseEach2 = _interopRequireDefault(_baseEach);

var _castFunction = __webpack_require__(30);

var _castFunction2 = _interopRequireDefault(_castFunction);

var _isArray = __webpack_require__(0);

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = (0, _isArray2.default)(collection) ? _arrayEach2.default : _baseEach2.default;
  return func(collection, (0, _castFunction2.default)(iteratee));
}

exports.default = forEach;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = __webpack_require__(0);

var _isArray2 = _interopRequireDefault(_isArray);

var _isKey = __webpack_require__(53);

var _isKey2 = _interopRequireDefault(_isKey);

var _stringToPath = __webpack_require__(55);

var _stringToPath2 = _interopRequireDefault(_stringToPath);

var _toString = __webpack_require__(57);

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0, _isArray2.default)(value)) {
    return value;
  }
  return (0, _isKey2.default)(value, object) ? [value] : (0, _stringToPath2.default)((0, _toString2.default)(value));
}

exports.default = castPath;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isFunction = __webpack_require__(19);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isLength = __webpack_require__(11);

var _isLength2 = _interopRequireDefault(_isLength);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return value != null && (0, _isLength2.default)(value.length) && !(0, _isFunction2.default)(value);
}

exports.default = isArrayLike;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

exports.default = isObject;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(20);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0, _overArg2.default)(Object.keys, Object);

exports.default = nativeKeys;
module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseAssignValue = __webpack_require__(13);

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

var _eq = __webpack_require__(38);

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0, _eq2.default)(objValue, value)) || value === undefined && !(key in object)) {
    (0, _baseAssignValue2.default)(object, key, value);
  }
}

exports.default = assignValue;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseName = parseName;
/**
 * Parses a namespaced attribute name of the form (ns:)localName to an object,
 * given a default prefix to assume in case no explicit namespace is given.
 *
 * @param {String} name
 * @param {String} [defaultPrefix] the default prefix to take, if none is present.
 *
 * @return {Object} the parsed name
 */
function parseName(name, defaultPrefix) {
  var parts = name.split(/:/),
      localName,
      prefix;

  // no prefix (i.e. only local name)
  if (parts.length === 1) {
    localName = name;
    prefix = defaultPrefix;
  } else
    // prefix + local name
    if (parts.length === 2) {
      localName = parts[1];
      prefix = parts[0];
    } else {
      throw new Error('expected <prefix:localName> or <localName>, got ' + name);
    }

  name = (prefix ? prefix + ':' : '') + localName;

  return {
    name: name,
    prefix: prefix,
    localName: localName
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = objectToString;
module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

exports.default = isLength;
module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(6);

var _assignValue2 = _interopRequireDefault(_assignValue);

var _copyObject = __webpack_require__(39);

var _copyObject2 = _interopRequireDefault(_copyObject);

var _createAssigner = __webpack_require__(40);

var _createAssigner2 = _interopRequireDefault(_createAssigner);

var _isArrayLike = __webpack_require__(3);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isPrototype = __webpack_require__(47);

var _isPrototype2 = _interopRequireDefault(_isPrototype);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = (0, _createAssigner2.default)(function (object, source) {
  if ((0, _isPrototype2.default)(source) || (0, _isArrayLike2.default)(source)) {
    (0, _copyObject2.default)(source, (0, _keys2.default)(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      (0, _assignValue2.default)(object, key, source[key]);
    }
  }
});

exports.default = assign;
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = __webpack_require__(36);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty2.default) {
    (0, _defineProperty2.default)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

exports.default = baseAssignValue;
module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

exports.default = isIndex;
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moddle = __webpack_require__(16);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_moddle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _find2 = __webpack_require__(17);

var _find3 = _interopRequireDefault(_find2);

var _forEach2 = __webpack_require__(1);

var _forEach3 = _interopRequireDefault(_forEach2);

var _isObject2 = __webpack_require__(4);

var _isObject3 = _interopRequireDefault(_isObject2);

var _isString2 = __webpack_require__(31);

var _isString3 = _interopRequireDefault(_isString2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = __webpack_require__(33);

var _factory2 = _interopRequireDefault(_factory);

var _registry = __webpack_require__(35);

var _registry2 = _interopRequireDefault(_registry);

var _properties = __webpack_require__(65);

var _properties2 = _interopRequireDefault(_properties);

var _ns = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Moddle
 *
 * A model that can be used to create elements of a specific type.
 *
 * @example
 *
 * var Moddle = require('moddle');
 *
 * var pkg = {
 *   name: 'mypackage',
 *   prefix: 'my',
 *   types: [
 *     { name: 'Root' }
 *   ]
 * };
 *
 * var moddle = new Moddle([pkg]);
 *
 * @param {Array<Package>} packages the packages to contain
 */
var Moddle = function () {
  function Moddle(packages) {
    _classCallCheck(this, Moddle);

    this.properties = new _properties2.default(this);

    this.factory = new _factory2.default(this, this.properties);
    this.registry = new _registry2.default(packages, this.properties);

    this.typeCache = {};
  }

  /**
   * Create an instance of the specified type.
   *
   * @method Moddle#create
   *
   * @example
   *
   * var foo = moddle.create('my:Foo');
   * var bar = moddle.create('my:Bar', { id: 'BAR_1' });
   *
   * @param  {String|Object} descriptor the type descriptor or name know to the model
   * @param  {Object} attrs   a number of attributes to initialize the model instance with
   * @return {Object}         model instance
   */


  _createClass(Moddle, [{
    key: 'create',
    value: function create(descriptor, attrs) {
      var Type = this.getType(descriptor);

      if (!Type) {
        throw new Error('unknown type <' + descriptor + '>');
      }

      return new Type(attrs);
    }

    /**
     * Returns the type representing a given descriptor
     *
     * @method Moddle#getType
     *
     * @example
     *
     * var Foo = moddle.getType('my:Foo');
     * var foo = new Foo({ 'id' : 'FOO_1' });
     *
     * @param  {String|Object} descriptor the type descriptor or name know to the model
     * @return {Object}         the type representing the descriptor
     */

  }, {
    key: 'getType',
    value: function getType(descriptor) {

      var cache = this.typeCache;

      var name = (0, _isString3.default)(descriptor) ? descriptor : descriptor.ns.name;

      var type = cache[name];

      if (!type) {
        descriptor = this.registry.getEffectiveDescriptor(name);
        type = cache[name] = this.factory.createType(descriptor);
      }

      return type;
    }

    /**
     * Creates an any-element type to be used within model instances.
     *
     * This can be used to create custom elements that lie outside the meta-model.
     * The created element contains all the meta-data required to serialize it
     * as part of meta-model elements.
     *
     * @method Moddle#createAny
     *
     * @example
     *
     * var foo = moddle.createAny('vendor:Foo', 'http://vendor', {
     *   value: 'bar'
     * });
     *
     * var container = moddle.create('my:Container', 'http://my', {
     *   any: [ foo ]
     * });
     *
     * // go ahead and serialize the stuff
     *
     *
     * @param  {String} name  the name of the element
     * @param  {String} nsUri the namespace uri of the element
     * @param  {Object} [properties] a map of properties to initialize the instance with
     * @return {Object} the any type instance
     */

  }, {
    key: 'createAny',
    value: function createAny(name, nsUri, properties) {

      var nameNs = (0, _ns.parseName)(name);

      var element = {
        $type: name
      };

      var descriptor = {
        name: name,
        isGeneric: true,
        ns: {
          prefix: nameNs.prefix,
          localName: nameNs.localName,
          uri: nsUri
        }
      };

      this.properties.defineDescriptor(element, descriptor);
      this.properties.defineModel(element, this);
      this.properties.define(element, '$parent', { enumerable: false, writable: true });

      (0, _forEach3.default)(properties, function (a, key) {
        if ((0, _isObject3.default)(a) && a.value !== undefined) {
          element[a.name] = a.value;
        } else {
          element[key] = a;
        }
      });

      return element;
    }

    /**
     * Returns a registered package by uri or prefix
     *
     * @return {Object} the package
     */

  }, {
    key: 'getPackage',
    value: function getPackage(uriOrPrefix) {
      return this.registry.getPackage(uriOrPrefix);
    }

    /**
     * Returns a snapshot of all known packages
     *
     * @return {Object} the package
     */

  }, {
    key: 'getPackages',
    value: function getPackages() {
      return this.registry.getPackages();
    }

    /**
     * Returns the descriptor for an element
     */

  }, {
    key: 'getElementDescriptor',
    value: function getElementDescriptor(element) {
      return element.$descriptor;
    }

    /**
     * Returns true if the given descriptor or instance
     * represents the given type.
     *
     * May be applied to this, if element is omitted.
     */

  }, {
    key: 'hasType',
    value: function hasType(element, type) {
      if (type === undefined) {
        type = element;
        element = this;
      }

      var descriptor = element.$model.getElementDescriptor(element);

      return !!(0, _find3.default)(descriptor.allTypes, function (t) {
        return t.name === type;
      });
    }

    /**
     * Returns the descriptor of an elements named property
     */

  }, {
    key: 'getPropertyDescriptor',
    value: function getPropertyDescriptor(element, property) {
      return this.getElementDescriptor(element).propertiesByName[property];
    }

    /**
     * Returns a mapped type's descriptor
     */

  }, {
    key: 'getTypeDescriptor',
    value: function getTypeDescriptor(type) {
      return this.registry.typeMap[type];
    }
  }]);

  return Moddle;
}();

exports.default = Moddle;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createFind = __webpack_require__(18);

var _createFind2 = _interopRequireDefault(_createFind);

var _findIndex = __webpack_require__(21);

var _findIndex2 = _interopRequireDefault(_findIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = (0, _createFind2.default)(_findIndex2.default);

exports.default = find;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseIteratee = __webpack_require__(9);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _isArrayLike = __webpack_require__(3);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function (collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!(0, _isArrayLike2.default)(collection)) {
      var iteratee = (0, _baseIteratee2.default)(predicate, 3);
      collection = (0, _keys2.default)(collection);
      predicate = function predicate(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

exports.default = createFind;
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(10);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isObject = __webpack_require__(4);

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  if (!(0, _isObject2.default)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0, _baseGetTag2.default)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

exports.default = isFunction;
module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;
module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFindIndex = __webpack_require__(22);

var _baseFindIndex2 = _interopRequireDefault(_baseFindIndex);

var _baseIteratee = __webpack_require__(9);

var _baseIteratee2 = _interopRequireDefault(_baseIteratee);

var _toInteger = __webpack_require__(23);

var _toInteger2 = _interopRequireDefault(_toInteger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : (0, _toInteger2.default)(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return (0, _baseFindIndex2.default)(array, (0, _baseIteratee2.default)(predicate, 3), index);
}

exports.default = findIndex;
module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

exports.default = baseFindIndex;
module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

exports.default = arrayEach;
module.exports = exports["default"];

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseForOwn = __webpack_require__(26);

var _baseForOwn2 = _interopRequireDefault(_baseForOwn);

var _createBaseEach = __webpack_require__(29);

var _createBaseEach2 = _interopRequireDefault(_createBaseEach);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = (0, _createBaseEach2.default)(_baseForOwn2.default);

exports.default = baseEach;
module.exports = exports['default'];

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseFor = __webpack_require__(27);

var _baseFor2 = _interopRequireDefault(_baseFor);

var _keys = __webpack_require__(5);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && (0, _baseFor2.default)(object, iteratee, _keys2.default);
}

exports.default = baseForOwn;
module.exports = exports['default'];

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBaseFor = __webpack_require__(28);

var _createBaseFor2 = _interopRequireDefault(_createBaseFor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = (0, _createBaseFor2.default)();

exports.default = baseFor;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

exports.default = createBaseFor;
module.exports = exports["default"];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLike = __webpack_require__(3);

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!(0, _isArrayLike2.default)(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

exports.default = createBaseEach;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(10);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _isArray = __webpack_require__(0);

var _isArray2 = _interopRequireDefault(_isArray);

var _isObjectLike = __webpack_require__(32);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' || !(0, _isArray2.default)(value) && (0, _isObjectLike2.default)(value) && (0, _baseGetTag2.default)(value) == stringTag;
}

exports.default = isString;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach2 = __webpack_require__(1);

var _forEach3 = _interopRequireDefault(_forEach2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(34);

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Factory = function () {
  function Factory(model, properties) {
    _classCallCheck(this, Factory);

    this.model = model;
    this.properties = properties;
  }

  /**
   * Create a given type for the specified element descriptor.
   *
   * @param  {Object} descriptor
   *
   * @return {Function} the type constructor
   */


  _createClass(Factory, [{
    key: 'createType',
    value: function createType(descriptor) {

      var model = this.model,
          props = this.properties;

      var name = descriptor.ns.name;

      /**
       * The new type constructor
       */

      var ModdleElement = function (_Base) {
        _inherits(ModdleElement, _Base);

        function ModdleElement(attrs) {
          _classCallCheck(this, ModdleElement);

          var _this = _possibleConstructorReturn(this, (ModdleElement.__proto__ || Object.getPrototypeOf(ModdleElement)).call(this));

          props.define(_this, '$type', { value: name, enumerable: true });
          props.define(_this, '$attrs', { value: {} });
          props.define(_this, '$parent', { writable: true });

          (0, _forEach3.default)(attrs, function (val, key) {
            _this.set(key, val);
          });
          return _this;
        }

        return ModdleElement;
      }(_base2.default);

      var proto = ModdleElement.prototype;

      // initialize default values
      (0, _forEach3.default)(descriptor.properties, function (p) {
        if (!p.isMany && p.default !== undefined) {
          proto[p.name] = p.default;
        }
      });

      props.defineModel(proto, model);
      props.defineDescriptor(proto, descriptor);

      ModdleElement.hasType = proto.$instanceOf = this.model.hasType;

      // static links
      props.defineModel(ModdleElement, model);
      props.defineDescriptor(ModdleElement, descriptor);

      return ModdleElement;
    }
  }]);

  return Factory;
}();

exports.default = Factory;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, [{
    key: "get",
    value: function get(name) {
      return this.$model.properties.get(this, name);
    }
  }, {
    key: "set",
    value: function set(name, value) {
      this.$model.properties.set(this, name, value);
    }
  }]);

  return Base;
}();

exports.default = Base;
module.exports = exports["default"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach2 = __webpack_require__(1);

var _forEach3 = _interopRequireDefault(_forEach2);

var _assign2 = __webpack_require__(12);

var _assign3 = _interopRequireDefault(_assign2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _descriptorBuilder = __webpack_require__(48);

var _descriptorBuilder2 = _interopRequireDefault(_descriptorBuilder);

var _ns = __webpack_require__(8);

var _types = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Registry = function () {
  function Registry(packages, properties) {
    _classCallCheck(this, Registry);

    this.packageMap = {};
    this.typeMap = {};

    this.packages = [];

    this.properties = properties;

    (0, _forEach3.default)(packages, this.registerPackage.bind(this));
  }

  _createClass(Registry, [{
    key: 'getPackage',
    value: function getPackage(uriOrPrefix) {
      return this.packageMap[uriOrPrefix];
    }
  }, {
    key: 'getPackages',
    value: function getPackages() {
      return this.packages;
    }
  }, {
    key: 'registerPackage',
    value: function registerPackage(pkg) {
      var _this = this;

      // copy package
      pkg = (0, _assign3.default)({}, pkg);

      // register types
      (0, _forEach3.default)(pkg.types, function (descriptor) {
        _this.registerType(descriptor, pkg);
      });

      this.packageMap[pkg.uri] = this.packageMap[pkg.prefix] = pkg;
      this.packages.push(pkg);
    }

    /**
     * Register a type from a specific package with us
     */

  }, {
    key: 'registerType',
    value: function registerType(type, pkg) {
      var _this2 = this;

      type = (0, _assign3.default)({}, type, {
        superClass: (type.superClass || []).slice(),
        extends: (type.extends || []).slice(),
        properties: (type.properties || []).slice(),
        meta: (0, _assign3.default)(({}, type.meta || {}))
      });

      var ns = (0, _ns.parseName)(type.name, pkg.prefix),
          name = ns.name,
          propertiesByName = {};

      // parse properties
      (0, _forEach3.default)(type.properties, function (p) {

        // namespace property names
        var propertyNs = (0, _ns.parseName)(p.name, ns.prefix),
            propertyName = propertyNs.name;

        // namespace property types
        if (!(0, _types.isBuiltIn)(p.type)) {
          p.type = (0, _ns.parseName)(p.type, propertyNs.prefix).name;
        }

        (0, _assign3.default)(p, {
          ns: propertyNs,
          name: propertyName
        });

        propertiesByName[propertyName] = p;
      });

      // update ns + name
      (0, _assign3.default)(type, {
        ns: ns,
        name: name,
        propertiesByName: propertiesByName
      });

      (0, _forEach3.default)(type.extends, function (extendsName) {
        var extended = _this2.typeMap[extendsName];

        extended.traits = extended.traits || [];
        extended.traits.push(name);
      });

      // link to package
      this.definePackage(type, pkg);

      // register
      this.typeMap[name] = type;
    }

    /**
     * Traverse the type hierarchy from bottom to top,
     * calling iterator with (type, inherited) for all elements in
     * the inheritance chain.
     *
     * @param {Object} nsName
     * @param {Function} iterator
     * @param {Boolean} [trait=false]
     */

  }, {
    key: 'mapTypes',
    value: function mapTypes(nsName, iterator, trait) {
      var _this3 = this;

      var type = (0, _types.isBuiltIn)(nsName.name) ? { name: nsName.name } : this.typeMap[nsName.name];

      /**
       * Traverse the selected trait.
       *
       * @param {String} cls
       */
      var traverseTrait = function traverseTrait(cls) {
        return traverseSuper(cls, true);
      };

      /**
       * Traverse the selected super type or trait
       *
       * @param {String} cls
       * @param {Boolean} [trait=false]
       */
      var traverseSuper = function traverseSuper(cls, trait) {
        var parentNs = (0, _ns.parseName)(cls, (0, _types.isBuiltIn)(cls) ? '' : nsName.prefix);

        _this3.mapTypes(parentNs, iterator, trait);
      };

      if (!type) {
        throw new Error('unknown type <' + nsName.name + '>');
      }

      (0, _forEach3.default)(type.superClass, trait ? traverseTrait : traverseSuper);

      // call iterator with (type, inherited=!trait)
      iterator(type, !trait);

      (0, _forEach3.default)(type.traits, traverseTrait);
    }

    /**
     * Returns the effective descriptor for a type.
     *
     * @param  {String} type the namespaced name (ns:localName) of the type
     *
     * @return {Descriptor} the resulting effective descriptor
     */

  }, {
    key: 'getEffectiveDescriptor',
    value: function getEffectiveDescriptor(name) {

      var nsName = (0, _ns.parseName)(name);

      var builder = new _descriptorBuilder2.default(nsName);

      this.mapTypes(nsName, builder.addTrait.bind(builder));

      var descriptor = builder.build();

      // define package link
      this.definePackage(descriptor, descriptor.allTypes[descriptor.allTypes.length - 1].$pkg);

      return descriptor;
    }
  }, {
    key: 'definePackage',
    value: function definePackage(target, pkg) {
      this.properties.define(target, '$pkg', { value: pkg });
    }
  }]);

  return Registry;
}();

exports.default = Registry;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getNative = __webpack_require__(37);

var _getNative2 = _interopRequireDefault(_getNative);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defineProperty = function () {
  try {
    var func = (0, _getNative2.default)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

exports.default = defineProperty;
module.exports = exports['default'];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

exports.default = getValue;
module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

exports.default = eq;
module.exports = exports["default"];

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(6);

var _assignValue2 = _interopRequireDefault(_assignValue);

var _baseAssignValue = __webpack_require__(13);

var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0, _baseAssignValue2.default)(object, key, newValue);
    } else {
      (0, _assignValue2.default)(object, key, newValue);
    }
  }
  return object;
}

exports.default = copyObject;
module.exports = exports['default'];

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseRest = __webpack_require__(41);

var _baseRest2 = _interopRequireDefault(_baseRest);

var _isIterateeCall = __webpack_require__(46);

var _isIterateeCall2 = _interopRequireDefault(_isIterateeCall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0, _baseRest2.default)(function (object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

    if (guard && (0, _isIterateeCall2.default)(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

exports.default = createAssigner;
module.exports = exports['default'];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identity = __webpack_require__(42);

var _identity2 = _interopRequireDefault(_identity);

var _overRest = __webpack_require__(43);

var _overRest2 = _interopRequireDefault(_overRest);

var _setToString = __webpack_require__(45);

var _setToString2 = _interopRequireDefault(_setToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return (0, _setToString2.default)((0, _overRest2.default)(func, start, _identity2.default), func + '');
}

exports.default = baseRest;
module.exports = exports['default'];

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _apply = __webpack_require__(44);

var _apply2 = _interopRequireDefault(_apply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? func.length - 1 : start, 0);
  return function () {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return (0, _apply2.default)(func, this, otherArgs);
  };
}

exports.default = overRest;
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

exports.default = apply;
module.exports = exports["default"];

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = stubFalse;
module.exports = exports["default"];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = stubFalse;
module.exports = exports["default"];

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _forEach2 = __webpack_require__(1);

var _forEach3 = _interopRequireDefault(_forEach2);

var _assign2 = __webpack_require__(12);

var _assign3 = _interopRequireDefault(_assign2);

var _pick2 = __webpack_require__(49);

var _pick3 = _interopRequireDefault(_pick2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ns = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DescriptorBuilder = function () {
  function DescriptorBuilder(nameNs) {
    _classCallCheck(this, DescriptorBuilder);

    this.ns = nameNs;
    this.name = nameNs.name;
    this.allTypes = [];
    this.properties = [];
    this.propertiesByName = {};
  }

  _createClass(DescriptorBuilder, [{
    key: 'build',
    value: function build() {
      return (0, _pick3.default)(this, ['ns', 'name', 'allTypes', 'properties', 'propertiesByName', 'bodyProperty', 'idProperty']);
    }

    /**
     * Add property at given index.
     *
     * @param {Object} p
     * @param {Number} [idx]
     * @param {Boolean} [validate=true]
     */

  }, {
    key: 'addProperty',
    value: function addProperty(p, idx, validate) {

      if (typeof idx === 'boolean') {
        validate = idx;
        idx = undefined;
      }

      this.addNamedProperty(p, validate !== false);

      var properties = this.properties;

      if (idx !== undefined) {
        properties.splice(idx, 0, p);
      } else {
        properties.push(p);
      }
    }
  }, {
    key: 'replaceProperty',
    value: function replaceProperty(oldProperty, newProperty, replace) {
      var oldNameNs = oldProperty.ns;

      var props = this.properties,
          propertiesByName = this.propertiesByName,
          rename = oldProperty.name !== newProperty.name;

      if (oldProperty.isId) {
        if (!newProperty.isId) {
          throw new Error('property <' + newProperty.ns.name + '> must be id property ' + 'to refine <' + oldProperty.ns.name + '>');
        }

        this.setIdProperty(newProperty, false);
      }

      if (oldProperty.isBody) {

        if (!newProperty.isBody) {
          throw new Error('property <' + newProperty.ns.name + '> must be body property ' + 'to refine <' + oldProperty.ns.name + '>');
        }

        // TODO: Check compatibility
        this.setBodyProperty(newProperty, false);
      }

      // validate existence and get location of old property
      var idx = props.indexOf(oldProperty);
      if (idx === -1) {
        throw new Error('property <' + oldNameNs.name + '> not found in property list');
      }

      // remove old property
      props.splice(idx, 1);

      // replacing the named property is intentional
      //
      //  * validate only if this is a "rename" operation
      //  * add at specific index unless we "replace"
      //
      this.addProperty(newProperty, replace ? undefined : idx, rename);

      // make new property available under old name
      propertiesByName[oldNameNs.name] = propertiesByName[oldNameNs.localName] = newProperty;
    }
  }, {
    key: 'redefineProperty',
    value: function redefineProperty(p, targetPropertyName, replace) {

      var nsPrefix = p.ns.prefix;
      var parts = targetPropertyName.split('#');

      var name = (0, _ns.parseName)(parts[0], nsPrefix);
      var attrName = (0, _ns.parseName)(parts[1], name.prefix).name;

      var redefinedProperty = this.propertiesByName[attrName];
      if (!redefinedProperty) {
        throw new Error('refined property <' + attrName + '> not found');
      } else {
        this.replaceProperty(redefinedProperty, p, replace);
      }

      delete p.redefines;
    }
  }, {
    key: 'addNamedProperty',
    value: function addNamedProperty(p, validate) {
      var ns = p.ns,
          propsByName = this.propertiesByName;

      if (validate) {
        this.assertNotDefined(p, ns.name);
        this.assertNotDefined(p, ns.localName);
      }

      propsByName[ns.name] = propsByName[ns.localName] = p;
    }
  }, {
    key: 'removeNamedProperty',
    value: function removeNamedProperty(p) {
      var ns = p.ns,
          propsByName = this.propertiesByName;

      delete propsByName[ns.name];
      delete propsByName[ns.localName];
    }
  }, {
    key: 'setBodyProperty',
    value: function setBodyProperty(p, validate) {

      if (validate && this.bodyProperty) {
        throw new Error('body property defined multiple times ' + '(<' + this.bodyProperty.ns.name + '>, <' + p.ns.name + '>)');
      }

      this.bodyProperty = p;
    }
  }, {
    key: 'setIdProperty',
    value: function setIdProperty(p, validate) {

      if (validate && this.idProperty) {
        throw new Error('id property defined multiple times ' + '(<' + this.idProperty.ns.name + '>, <' + p.ns.name + '>)');
      }

      this.idProperty = p;
    }
  }, {
    key: 'assertNotDefined',
    value: function assertNotDefined(p, name) {
      var propertyName = p.name,
          definedProperty = this.propertiesByName[propertyName];

      if (definedProperty) {
        throw new Error('property <' + propertyName + '> already defined; ' + 'override of <' + definedProperty.definedBy.ns.name + '#' + definedProperty.ns.name + '> by ' + '<' + p.definedBy.ns.name + '#' + p.ns.name + '> not allowed without redefines');
      }
    }
  }, {
    key: 'hasProperty',
    value: function hasProperty(name) {
      return this.propertiesByName[name];
    }
  }, {
    key: 'addTrait',
    value: function addTrait(t, inherited) {
      var _this = this;

      var allTypes = this.allTypes;

      if (allTypes.indexOf(t) !== -1) {
        return;
      }

      (0, _forEach3.default)(t.properties, function (p) {

        // clone property to allow extensions
        p = (0, _assign3.default)({}, p, {
          name: p.ns.localName,
          inherited: inherited
        });

        Object.defineProperty(p, 'definedBy', {
          value: t
        });

        var replaces = p.replaces,
            redefines = p.redefines;

        // add replace/redefine support
        if (replaces || redefines) {
          _this.redefineProperty(p, replaces || redefines, replaces);
        } else {
          if (p.isBody) {
            _this.setBodyProperty(p);
          }
          if (p.isId) {
            _this.setIdProperty(p);
          }
          _this.addProperty(p);
        }
      });

      allTypes.push(t);
    }
  }]);

  return DescriptorBuilder;
}();

exports.default = DescriptorBuilder;
module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePick = __webpack_require__(50);

var _basePick2 = _interopRequireDefault(_basePick);

var _flatRest = __webpack_require__(63);

var _flatRest2 = _interopRequireDefault(_flatRest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = (0, _flatRest2.default)(function (object, paths) {
  return object == null ? {} : (0, _basePick2.default)(object, paths);
});

exports.default = pick;
module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basePickBy = __webpack_require__(51);

var _basePickBy2 = _interopRequireDefault(_basePickBy);

var _hasIn = __webpack_require__(59);

var _hasIn2 = _interopRequireDefault(_hasIn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return (0, _basePickBy2.default)(object, paths, function (value, path) {
    return (0, _hasIn2.default)(object, path);
  });
}

exports.default = basePick;
module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGet = __webpack_require__(52);

var _baseGet2 = _interopRequireDefault(_baseGet);

var _baseSet = __webpack_require__(58);

var _baseSet2 = _interopRequireDefault(_baseSet);

var _castPath = __webpack_require__(2);

var _castPath2 = _interopRequireDefault(_castPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = (0, _baseGet2.default)(object, path);

    if (predicate(value, path)) {
      (0, _baseSet2.default)(result, (0, _castPath2.default)(path, object), value);
    }
  }
  return result;
}

exports.default = basePickBy;
module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = __webpack_require__(2);

var _castPath2 = _interopRequireDefault(_castPath);

var _toKey = __webpack_require__(7);

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0, _castPath2.default)(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0, _toKey2.default)(path[index++])];
  }
  return index && index == length ? object : undefined;
}

exports.default = baseGet;
module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isArray = __webpack_require__(0);

var _isArray2 = _interopRequireDefault(_isArray);

var _isSymbol = __webpack_require__(54);

var _isSymbol2 = _interopRequireDefault(_isSymbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0, _isArray2.default)(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || (0, _isSymbol2.default)(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

exports.default = isKey;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = stubFalse;
module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _memoizeCapped = __webpack_require__(56);

var _memoizeCapped2 = _interopRequireDefault(_memoizeCapped);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = (0, _memoizeCapped2.default)(function (string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

exports.default = stringToPath;
module.exports = exports['default'];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assignValue = __webpack_require__(6);

var _assignValue2 = _interopRequireDefault(_assignValue);

var _castPath = __webpack_require__(2);

var _castPath2 = _interopRequireDefault(_castPath);

var _isIndex = __webpack_require__(14);

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isObject = __webpack_require__(4);

var _isObject2 = _interopRequireDefault(_isObject);

var _toKey = __webpack_require__(7);

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!(0, _isObject2.default)(object)) {
    return object;
  }
  path = (0, _castPath2.default)(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = (0, _toKey2.default)(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = (0, _isObject2.default)(objValue) ? objValue : (0, _isIndex2.default)(path[index + 1]) ? [] : {};
      }
    }
    (0, _assignValue2.default)(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

exports.default = baseSet;
module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseHasIn = __webpack_require__(60);

var _baseHasIn2 = _interopRequireDefault(_baseHasIn);

var _hasPath = __webpack_require__(61);

var _hasPath2 = _interopRequireDefault(_hasPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && (0, _hasPath2.default)(object, path, _baseHasIn2.default);
}

exports.default = hasIn;
module.exports = exports['default'];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

exports.default = baseHasIn;
module.exports = exports["default"];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _castPath = __webpack_require__(2);

var _castPath2 = _interopRequireDefault(_castPath);

var _isArguments = __webpack_require__(62);

var _isArguments2 = _interopRequireDefault(_isArguments);

var _isArray = __webpack_require__(0);

var _isArray2 = _interopRequireDefault(_isArray);

var _isIndex = __webpack_require__(14);

var _isIndex2 = _interopRequireDefault(_isIndex);

var _isLength = __webpack_require__(11);

var _isLength2 = _interopRequireDefault(_isLength);

var _toKey = __webpack_require__(7);

var _toKey2 = _interopRequireDefault(_toKey);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = (0, _castPath2.default)(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = (0, _toKey2.default)(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && (0, _isLength2.default)(length) && (0, _isIndex2.default)(key, length) && ((0, _isArray2.default)(object) || (0, _isArguments2.default)(object));
}

exports.default = hasPath;
module.exports = exports['default'];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = stubFalse;
module.exports = exports["default"];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

exports.default = identity;
module.exports = exports["default"];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coerceType = coerceType;
exports.isBuiltIn = isBuiltIn;
exports.isSimple = isSimple;
/**
 * Built-in moddle types
 */
var BUILTINS = {
  String: true,
  Boolean: true,
  Integer: true,
  Real: true,
  Element: true
};

/**
 * Converters for built in types from string representations
 */
var TYPE_CONVERTERS = {
  String: function String(s) {
    return s;
  },
  Boolean: function Boolean(s) {
    return s === 'true';
  },
  Integer: function Integer(s) {
    return parseInt(s, 10);
  },
  Real: function Real(s) {
    return parseFloat(s, 10);
  }
};

/**
 * Convert a type to its real representation
 */
function coerceType(type, value) {

  var converter = TYPE_CONVERTERS[type];

  if (converter) {
    return converter(value);
  } else {
    return value;
  }
}

/**
 * Return whether the given type is built-in
 */
function isBuiltIn(type) {
  return !!BUILTINS[type];
}

/**
 * Return whether the given type is simple
 */
function isSimple(type) {
  return !!TYPE_CONVERTERS[type];
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A utility that gets and sets properties of model elements.
 *
 * @param {Model} model
 */
var Properties = function () {
  function Properties(model) {
    _classCallCheck(this, Properties);

    this.model = model;
  }

  /**
   * Sets a named property on the target element.
   * If the value is undefined, the property gets deleted.
   *
   * @param {Object} target
   * @param {String} name
   * @param {Object} value
   */


  _createClass(Properties, [{
    key: 'set',
    value: function set(target, name, value) {

      var property = this.model.getPropertyDescriptor(target, name);

      var propertyName = property && property.name;

      if (isUndefined(value)) {
        // unset the property, if the specified value is undefined;
        // delete from $attrs (for extensions) or the target itself
        if (property) {
          delete target[propertyName];
        } else {
          delete target.$attrs[name];
        }
      } else {
        // set the property, defining well defined properties on the fly
        // or simply updating them in target.$attrs (for extensions)
        if (property) {
          if (propertyName in target) {
            target[propertyName] = value;
          } else {
            defineProperty(target, property, value);
          }
        } else {
          target.$attrs[name] = value;
        }
      }
    }

    /**
     * Returns the named property of the given element
     *
     * @param  {Object} target
     * @param  {String} name
     *
     * @return {Object}
     */

  }, {
    key: 'get',
    value: function get(target, name) {

      var property = this.model.getPropertyDescriptor(target, name);

      if (!property) {
        return target.$attrs[name];
      }

      var propertyName = property.name;

      // check if access to collection property and lazily initialize it
      if (!target[propertyName] && property.isMany) {
        defineProperty(target, property, []);
      }

      return target[propertyName];
    }

    /**
     * Define a property on the target element
     *
     * @param  {Object} target
     * @param  {String} name
     * @param  {Object} options
     */

  }, {
    key: 'define',
    value: function define(target, name, options) {
      Object.defineProperty(target, name, options);
    }

    /**
     * Define the descriptor for an element
     */

  }, {
    key: 'defineDescriptor',
    value: function defineDescriptor(target, descriptor) {
      this.define(target, '$descriptor', { value: descriptor });
    }

    /**
     * Define the model for an element
     */

  }, {
    key: 'defineModel',
    value: function defineModel(target, model) {
      this.define(target, '$model', { value: model });
    }
  }]);

  return Properties;
}();

///////// helpers //////////////////////////////////////

exports.default = Properties;
function isUndefined(val) {
  return typeof val === 'undefined';
}

function defineProperty(target, property, value) {
  Object.defineProperty(target, property.name, {
    enumerable: !property.isReference,
    writable: true,
    value: value,
    configurable: true
  });
}
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=bundle.js.map