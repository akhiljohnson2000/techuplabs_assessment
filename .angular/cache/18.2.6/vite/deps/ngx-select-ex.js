import {
  NG_VALUE_ACCESSOR
} from "./chunk-JYOXV4ZG.js";
import {
  DomSanitizer
} from "./chunk-GEG2VAE5.js";
import "./chunk-GIVMQZEA.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-IJQEN57T.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  __commonJS,
  __toESM,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  forwardRef,
  from,
  map,
  merge,
  mergeMap,
  of,
  setClassMetadata,
  share,
  takeUntil,
  tap,
  toArray,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-YQ5U2F2Z.js";

// node_modules/lodash.isequal/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.isequal/index.js"(exports, module) {
    var LARGE_ARRAY_SIZE = 200;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var asyncTag = "[object AsyncFunction]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var nullTag = "[object Null]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var proxyTag = "[object Proxy]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var undefinedTag = "[object Undefined]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    function mapToArray(map2) {
      var index = -1, result = Array(map2.size);
      map2.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var arrayProto = Array.prototype;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var coreJsData = root["__core-js_shared__"];
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    var nativeObjectToString = objectProto.toString;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    var Buffer = moduleExports ? root.Buffer : void 0;
    var Symbol = root.Symbol;
    var Uint8Array = root.Uint8Array;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var splice = arrayProto.splice;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var nativeKeys = overArg(Object.keys, Object);
    var DataView = getNative(root, "DataView");
    var Map = getNative(root, "Map");
    var Promise2 = getNative(root, "Promise");
    var Set = getNative(root, "Set");
    var WeakMap = getNative(root, "WeakMap");
    var nativeCreate = getNative(Object, "create");
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    function stackGet(key) {
      return this.__data__.get(key);
    }
    function stackHas(key) {
      return this.__data__.has(key);
    }
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var stacked = stack.get(array);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var stacked = stack.get(object);
      if (stacked && stack.get(other)) {
        return stacked == other;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
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
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    function isIndex(value, length) {
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (typeof value == "number" || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArray = Array.isArray;
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    var isBuffer = nativeIsBuffer || stubFalse;
    function isEqual2(value, other) {
      return baseIsEqual(value, other);
    }
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    function stubArray() {
      return [];
    }
    function stubFalse() {
      return false;
    }
    module.exports = isEqual2;
  }
});

// node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  "node_modules/escape-string-regexp/index.js"(exports, module) {
    "use strict";
    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module.exports = function(str) {
      if (typeof str !== "string") {
        throw new TypeError("Expected a string");
      }
      return str.replace(matchOperatorsRe, "\\$&");
    };
  }
});

// node_modules/ngx-select-ex/fesm2020/ngx-select-ex.mjs
var import_lodash = __toESM(require_lodash(), 1);
var import_escape_string_regexp = __toESM(require_escape_string_regexp(), 1);
var _c0 = ["*"];
var _c1 = ["main"];
var _c2 = ["input"];
var _c3 = ["choiceMenu"];
var _c4 = (a0, a1) => ({
  "ngx-select_multiple form-control": a0,
  "open show": a1
});
var _c5 = (a0) => ({
  "ngx-select__disabled": a0
});
var _c6 = (a0) => ({
  "ngx-select__allow-clear": a0
});
var _c7 = (a0, a1) => ({
  $implicit: a0,
  index: 0,
  text: a1
});
var _c8 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  text: a2
});
var _c9 = (a0) => [a0];
var _c10 = (a0, a1) => ({
  "ngx-select__item_active active": a0,
  "ngx-select__item_disabled disabled": a1
});
var _c11 = (a0, a1, a2, a3) => ({
  $implicit: a0,
  text: a1,
  index: a2,
  subIndex: a3
});
var _c12 = (a0) => ({
  $implicit: a0
});
function NgxSelectComponent_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵelement(1, "span", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("innerHtml", ctx_r2.placeholder, ɵɵsanitizeHtml);
  }
}
function NgxSelectComponent_div_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵelementContainer(1, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const defaultTemplateOption_r4 = ɵɵreference(8);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c6, ctx_r2.allowClear));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.templateSelectedOption || defaultTemplateOption_r4)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c7, ctx_r2.optionsSelected[0], ctx_r2.sanitize(ctx_r2.optionsSelected[0].text)));
  }
}
function NgxSelectComponent_div_3_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 24);
    ɵɵlistener("click", function NgxSelectComponent_div_3_a_5_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.optionRemove(ctx_r2.optionsSelected[0], $event));
    });
    ɵɵelement(1, "i", 25);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r2.setBtnSize());
  }
}
function NgxSelectComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12)(1, "div", 13);
    ɵɵlistener("click", function NgxSelectComponent_div_3_Template_div_click_1_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.optionsOpen());
    });
    ɵɵtemplate(2, NgxSelectComponent_div_3_span_2_Template, 2, 1, "span", 14)(3, NgxSelectComponent_div_3_span_3_Template, 2, 8, "span", 15);
    ɵɵelementStart(4, "span", 16);
    ɵɵtemplate(5, NgxSelectComponent_div_3_a_5_Template, 2, 1, "a", 17);
    ɵɵelement(6, "i", 18)(7, "i", 19);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r2.setFormControlSize(ctx_r2.setBtnSize()));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.optionsSelected.length);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.optionsSelected.length);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r2.canClearNotMultiple());
  }
}
function NgxSelectComponent_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span")(1, "span", 28);
    ɵɵlistener("click", function NgxSelectComponent_div_4_span_1_Template_span_click_1_listener($event) {
      ɵɵrestoreView(_r7);
      return ɵɵresetView($event.stopPropagation());
    });
    ɵɵelementContainer(2, 23);
    ɵɵelementStart(3, "a", 29);
    ɵɵlistener("click", function NgxSelectComponent_div_4_span_1_Template_a_click_3_listener($event) {
      const option_r8 = ɵɵrestoreView(_r7).$implicit;
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.optionRemove(option_r8, $event));
    });
    ɵɵelement(4, "i", 25);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const idx_r9 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    const defaultTemplateOption_r4 = ɵɵreference(8);
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r2.setBtnSize());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.templateSelectedOption || defaultTemplateOption_r4)("ngTemplateOutletContext", ɵɵpureFunction3(4, _c8, option_r8, idx_r9, ctx_r2.sanitize(option_r8.text)));
    ɵɵadvance();
    ɵɵproperty("ngClass", ctx_r2.setBtnSize());
  }
}
function NgxSelectComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 26);
    ɵɵlistener("click", function NgxSelectComponent_div_4_Template_div_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.inputClick(ctx_r2.inputElRef && ctx_r2.inputElRef["value"]));
    });
    ɵɵtemplate(1, NgxSelectComponent_div_4_span_1_Template, 5, 8, "span", 27);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.optionsSelected)("ngForTrackBy", ctx_r2.trackByOption);
  }
}
function NgxSelectComponent_input_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 30, 3);
    ɵɵlistener("keyup", function NgxSelectComponent_input_5_Template_input_keyup_0_listener($event) {
      ɵɵrestoreView(_r10);
      const input_r11 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.inputKeyUp(input_r11.value, $event));
    })("click", function NgxSelectComponent_input_5_Template_input_click_0_listener() {
      ɵɵrestoreView(_r10);
      const input_r11 = ɵɵreference(1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.inputClick(input_r11.value));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.setFormControlSize())("tabindex", ctx_r2.multiple === false ? -1 : 0)("disabled", ctx_r2.disabled)("placeholder", ctx_r2.optionsSelected.length ? "" : ctx_r2.placeholder)("autocomplete", ctx_r2.autocomplete);
  }
}
function NgxSelectComponent_ngx_select_choices_6_li_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 39);
  }
}
function NgxSelectComponent_ngx_select_choices_6_li_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 40);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.asGroup(opt_r13).label);
  }
}
function NgxSelectComponent_ngx_select_choices_6_li_3_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 41, 5);
    ɵɵlistener("mouseenter", function NgxSelectComponent_ngx_select_choices_6_li_3_a_3_Template_a_mouseenter_0_listener() {
      const option_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.onMouseEnter({
        activeOption: ctx_r2.asOpt(option_r15),
        filteredOptionList: ctx_r2.optionsFiltered,
        index: ctx_r2.optionsFiltered.indexOf(option_r15)
      }));
    })("click", function NgxSelectComponent_ngx_select_choices_6_li_3_a_3_Template_a_click_0_listener($event) {
      const option_r15 = ɵɵrestoreView(_r14).$implicit;
      const ctx_r2 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r2.optionSelect(ctx_r2.asOpt(option_r15), $event));
    });
    ɵɵelementContainer(2, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    const idxOption_r16 = ctx.index;
    const idxGroup_r17 = ɵɵnextContext().index;
    const ctx_r2 = ɵɵnextContext(2);
    const defaultTemplateOption_r4 = ɵɵreference(8);
    ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c10, ctx_r2.asOpt(option_r15).active, ctx_r2.asOpt(option_r15).disabled));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.templateOption || defaultTemplateOption_r4)("ngTemplateOutletContext", ɵɵpureFunction4(6, _c11, option_r15, ctx_r2.asOpt(option_r15).highlightedText, idxGroup_r17, idxOption_r16));
  }
}
function NgxSelectComponent_ngx_select_choices_6_li_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 35);
    ɵɵtemplate(1, NgxSelectComponent_ngx_select_choices_6_li_3_div_1_Template, 1, 0, "div", 36)(2, NgxSelectComponent_ngx_select_choices_6_li_3_div_2_Template, 2, 1, "div", 37)(3, NgxSelectComponent_ngx_select_choices_6_li_3_a_3_Template, 3, 11, "a", 38);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const opt_r13 = ctx.$implicit;
    const idxGroup_r17 = ctx.index;
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", opt_r13.type === "optgroup" && idxGroup_r17 > 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", opt_r13.type === "optgroup");
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.asGroup(opt_r13).optionsFiltered || ɵɵpureFunction1(4, _c9, opt_r13))("ngForTrackBy", ctx_r2.trackByOption);
  }
}
function NgxSelectComponent_ngx_select_choices_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 42);
    ɵɵelementContainer(1, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    const defaultTemplateOptionNotFound_r18 = ɵɵreference(10);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.templateOptionNotFound || defaultTemplateOptionNotFound_r18)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c12, ctx_r2.inputText));
  }
}
function NgxSelectComponent_ngx_select_choices_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ngx-select-choices", 31);
    ɵɵlistener("focusin", function NgxSelectComponent_ngx_select_choices_6_Template_ngx_select_choices_focusin_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.choiceMenuFocus($event));
    });
    ɵɵelementStart(1, "ul", 32, 4);
    ɵɵtemplate(3, NgxSelectComponent_ngx_select_choices_6_li_3_Template, 4, 6, "li", 33)(4, NgxSelectComponent_ngx_select_choices_6_li_4_Template, 2, 4, "li", 34);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("appendTo", ctx_r2.appendTo)("show", ctx_r2.showChoiceMenu())("selectionChanges", ctx_r2.selectionChanges);
    ɵɵadvance();
    ɵɵclassProp("show", ctx_r2.showChoiceMenu());
    ɵɵproperty("ngClass", ctx_r2.dropDownMenuOtherClasses);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r2.optionsFiltered)("ngForTrackBy", ctx_r2.trackByOption);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.optionsFiltered.length);
  }
}
function NgxSelectComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const text_r19 = ctx.text;
    ɵɵproperty("innerHtml", text_r19, ɵɵsanitizeHtml);
  }
}
function NgxSelectComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵtextInterpolate1(" ", ctx_r2.noResultsFound, " ");
  }
}
var NgxSelectOption = class {
  constructor(value, text, disabled, data, _parent = null) {
    this.value = value;
    this.text = text;
    this.disabled = disabled;
    this.data = data;
    this._parent = _parent;
    this.type = "option";
    this.cacheRenderedText = null;
  }
  get parent() {
    return this._parent;
  }
  renderText(sanitizer, highlightText) {
    if (this.cacheHighlightText !== highlightText || this.cacheRenderedText === null) {
      this.cacheHighlightText = highlightText;
      if (this.cacheHighlightText) {
        this.cacheRenderedText = sanitizer.bypassSecurityTrustHtml((this.text + "").replace(new RegExp((0, import_escape_string_regexp.default)(this.cacheHighlightText), "gi"), "<strong>$&</strong>"));
      } else {
        this.cacheRenderedText = sanitizer.bypassSecurityTrustHtml(this.text);
      }
    }
    return this.cacheRenderedText;
  }
};
var NgxSelectOptGroup = class {
  constructor(label, options = []) {
    this.label = label;
    this.options = options;
    this.type = "optgroup";
    this.filter(() => true);
  }
  filter(callbackFn) {
    this.optionsFiltered = this.options.filter((option) => callbackFn(option));
  }
};
var NgxSelectOptionDirective = class {
  constructor(template) {
    this.template = template;
  }
};
NgxSelectOptionDirective.ɵfac = function NgxSelectOptionDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxSelectOptionDirective)(ɵɵdirectiveInject(TemplateRef));
};
NgxSelectOptionDirective.ɵdir = ɵɵdefineDirective({
  type: NgxSelectOptionDirective,
  selectors: [["", "ngx-select-option", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSelectOptionDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-select-option]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var NgxSelectOptionSelectedDirective = class {
  constructor(template) {
    this.template = template;
  }
};
NgxSelectOptionSelectedDirective.ɵfac = function NgxSelectOptionSelectedDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxSelectOptionSelectedDirective)(ɵɵdirectiveInject(TemplateRef));
};
NgxSelectOptionSelectedDirective.ɵdir = ɵɵdefineDirective({
  type: NgxSelectOptionSelectedDirective,
  selectors: [["", "ngx-select-option-selected", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSelectOptionSelectedDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-select-option-selected]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var NgxSelectOptionNotFoundDirective = class {
  constructor(template) {
    this.template = template;
  }
};
NgxSelectOptionNotFoundDirective.ɵfac = function NgxSelectOptionNotFoundDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxSelectOptionNotFoundDirective)(ɵɵdirectiveInject(TemplateRef));
};
NgxSelectOptionNotFoundDirective.ɵdir = ɵɵdefineDirective({
  type: NgxSelectOptionNotFoundDirective,
  selectors: [["", "ngx-select-option-not-found", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSelectOptionNotFoundDirective, [{
    type: Directive,
    args: [{
      selector: "[ngx-select-option-not-found]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var NgxSelectChoicesComponent = class {
  constructor(renderer, ngZone, elementRef) {
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.destroy$ = new Subject();
    this.choiceMenuEl = elementRef.nativeElement;
  }
  get position() {
    return this.appendTo ? "absolute" : "";
  }
  ngOnInit() {
    this.selectionChanges.pipe(takeUntil(this.destroy$)).subscribe(() => this.delayedPositionUpdate());
    this.selectEl = this.choiceMenuEl.parentElement;
  }
  ngOnChanges(changes) {
    if (changes.show?.currentValue) {
      this.delayedPositionUpdate();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    if (this.appendTo) {
      this.renderer.removeChild(this.choiceMenuEl.parentNode, this.choiceMenuEl);
      if (this.disposeResizeListener) {
        this.disposeResizeListener();
      }
    }
  }
  ngAfterContentInit() {
    if (this.appendTo) {
      this.appendChoiceMenu();
      this.handleDocumentResize();
      this.delayedPositionUpdate();
    }
  }
  appendChoiceMenu() {
    const target = this.getAppendToElement();
    if (!target) {
      throw new Error(`appendTo selector ${this.appendTo} did not found any element`);
    }
    this.renderer.appendChild(target, this.choiceMenuEl);
  }
  getAppendToElement() {
    return document.querySelector(this.appendTo);
  }
  handleDocumentResize() {
    this.disposeResizeListener = this.renderer.listen("window", "resize", () => {
      this.updatePosition();
    });
  }
  delayedPositionUpdate() {
    if (this.appendTo) {
      this.ngZone.runOutsideAngular(() => {
        window.requestAnimationFrame(() => {
          this.updatePosition();
        });
      });
    }
  }
  updatePosition() {
    if (this.show) {
      const selectOffset = this.getViewportOffset(this.selectEl);
      const relativeParentOffset = this.getParentOffset(this.choiceMenuEl);
      const appendToOffset = this.getAppendToElement();
      const offsetTop = selectOffset.top + appendToOffset.scrollTop - relativeParentOffset.top;
      const offsetLeft = selectOffset.left + appendToOffset.scrollLeft - relativeParentOffset.left;
      this.choiceMenuEl.style.top = `${offsetTop + selectOffset.height}px`;
      this.choiceMenuEl.style.bottom = "auto";
      this.choiceMenuEl.style.left = `${offsetLeft}px`;
      this.choiceMenuEl.style.width = `${selectOffset.width}px`;
      this.choiceMenuEl.style.minWidth = `${selectOffset.width}px`;
    }
  }
  getStyles(element) {
    return window.getComputedStyle(element);
  }
  getStyleProp(element, prop) {
    return this.getStyles(element)[prop];
  }
  isStatic(element) {
    return (this.getStyleProp(element, "position") || "static") === "static";
  }
  getOffsetParent(element) {
    let offsetParentEl = element.offsetParent;
    while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStatic(offsetParentEl)) {
      offsetParentEl = offsetParentEl.offsetParent;
    }
    return offsetParentEl || document.documentElement;
  }
  getViewportOffset(element) {
    const rect = element.getBoundingClientRect();
    const offsetTop = window.scrollY - document.documentElement.clientTop;
    const offsetLeft = window.scrollX - document.documentElement.clientLeft;
    const elOffset = {
      height: rect.height || element.offsetHeight,
      width: rect.width || element.offsetWidth,
      top: rect.top + offsetTop,
      bottom: rect.bottom + offsetTop,
      left: rect.left + offsetLeft,
      right: rect.right + offsetLeft
    };
    return elOffset;
  }
  getParentOffset(element) {
    let parentOffset = {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
    if (this.getStyleProp(element, "position") === "fixed") {
      return parentOffset;
    }
    const offsetParentEl = this.getOffsetParent(element);
    if (offsetParentEl !== document.documentElement) {
      parentOffset = this.getViewportOffset(offsetParentEl);
    }
    parentOffset.top += offsetParentEl.clientTop;
    parentOffset.left += offsetParentEl.clientLeft;
    return parentOffset;
  }
};
NgxSelectChoicesComponent.ɵfac = function NgxSelectChoicesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxSelectChoicesComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ElementRef));
};
NgxSelectChoicesComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxSelectChoicesComponent,
  selectors: [["ngx-select-choices"]],
  hostVars: 2,
  hostBindings: function NgxSelectChoicesComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("position", ctx.position);
    }
  },
  inputs: {
    appendTo: "appendTo",
    show: "show",
    selectionChanges: "selectionChanges"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NgxSelectChoicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSelectChoicesComponent, [{
    type: Component,
    args: [{
      selector: "ngx-select-choices",
      template: "<ng-content></ng-content>"
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: ElementRef
    }];
  }, {
    appendTo: [{
      type: Input
    }],
    show: [{
      type: Input
    }],
    selectionChanges: [{
      type: Input
    }],
    position: [{
      type: HostBinding,
      args: ["style.position"]
    }]
  });
})();
var NGX_SELECT_OPTIONS = new InjectionToken("NGX_SELECT_OPTIONS");
var ENavigation;
(function(ENavigation2) {
  ENavigation2[ENavigation2["first"] = 0] = "first";
  ENavigation2[ENavigation2["previous"] = 1] = "previous";
  ENavigation2[ENavigation2["next"] = 2] = "next";
  ENavigation2[ENavigation2["last"] = 3] = "last";
  ENavigation2[ENavigation2["firstSelected"] = 4] = "firstSelected";
  ENavigation2[ENavigation2["firstIfOptionActiveInvisible"] = 5] = "firstIfOptionActiveInvisible";
})(ENavigation || (ENavigation = {}));
function propertyExists(obj, propertyName) {
  return propertyName in obj;
}
var NgxSelectComponent = class {
  constructor(iterableDiffers, sanitizer, cd, defaultOptions) {
    this.sanitizer = sanitizer;
    this.cd = cd;
    this.optionValueField = "id";
    this.optionTextField = "text";
    this.optGroupLabelField = "label";
    this.optGroupOptionsField = "options";
    this.multiple = false;
    this.allowClear = false;
    this.placeholder = "";
    this.noAutoComplete = false;
    this.disabled = false;
    this.defaultValue = [];
    this.autoSelectSingleOption = false;
    this.autoClearSearch = false;
    this.noResultsFound = "No results found";
    this.keepSelectedItems = false;
    this.size = "default";
    this.autoActiveOnMouseEnter = true;
    this.showOptionNotFoundForEmptyItems = false;
    this.isFocused = false;
    this.keepSelectMenuOpened = false;
    this.autocomplete = "off";
    this.dropDownMenuOtherClasses = "";
    this.noSanitize = false;
    this.keyCodeToRemoveSelected = "Delete";
    this.keyCodeToOptionsOpen = ["Enter", "NumpadEnter"];
    this.keyCodeToOptionsClose = "Escape";
    this.keyCodeToOptionsSelect = ["Enter", "NumpadEnter"];
    this.keyCodeToNavigateFirst = "ArrowLeft";
    this.keyCodeToNavigatePrevious = "ArrowUp";
    this.keyCodeToNavigateNext = "ArrowDown";
    this.keyCodeToNavigateLast = "ArrowRight";
    this.typed = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.select = new EventEmitter();
    this.remove = new EventEmitter();
    this.navigated = new EventEmitter();
    this.selectionChanges = new EventEmitter();
    this.optionsOpened = false;
    this.actualValue = [];
    this.subjOptions = new BehaviorSubject([]);
    this.subjSearchText = new BehaviorSubject("");
    this.subjOptionsSelected = new BehaviorSubject([]);
    this.subjExternalValue = new BehaviorSubject([]);
    this.subjDefaultValue = new BehaviorSubject([]);
    this.subjRegisterOnChange = new Subject();
    this._focusToInput = false;
    this.asGroup = (item) => item;
    this.asOpt = (item) => item;
    this.onChange = (v) => v;
    this.onTouched = () => null;
    Object.assign(this, defaultOptions);
    this.itemsDiffer = iterableDiffers.find([]).create(null);
    this.defaultValueDiffer = iterableDiffers.find([]).create(null);
    this.typed.subscribe((text) => this.subjSearchText.next(text));
    this.subjOptionsSelected.subscribe((options) => this.selectionChanges.emit(options));
    let cacheExternalValue;
    const subjActualValue = combineLatest([merge(this.subjExternalValue.pipe(map((v) => cacheExternalValue = v === null ? [] : [].concat(v))), this.subjOptionsSelected.pipe(map((options) => options.map((o) => o.value)))), this.subjDefaultValue]).pipe(map(([eVal, dVal]) => {
      const newVal = (0, import_lodash.default)(eVal, dVal) ? [] : eVal;
      return newVal.length ? newVal : dVal;
    }), distinctUntilChanged((x, y) => (0, import_lodash.default)(x, y)), share());
    combineLatest([subjActualValue, this.subjRegisterOnChange]).pipe(map(([actualValue]) => actualValue)).subscribe((actualValue) => {
      this.actualValue = actualValue;
      if (!(0, import_lodash.default)(actualValue, cacheExternalValue)) {
        cacheExternalValue = actualValue;
        if (this.multiple) {
          this.onChange(actualValue);
        } else {
          this.onChange(actualValue.length ? actualValue[0] : null);
        }
      }
    });
    combineLatest([this.subjOptions.pipe(mergeMap((options) => from(options).pipe(mergeMap((option) => option instanceof NgxSelectOption ? of(option) : option instanceof NgxSelectOptGroup ? from(option.options) : EMPTY), toArray()))), subjActualValue]).pipe(
      debounceTime(0)
      // For a case when optionsFlat, actualValue came at the same time
    ).subscribe(([optionsFlat, actualValue]) => {
      const optionsSelected = [];
      actualValue.forEach((value) => {
        const selectedOption = optionsFlat.find((option) => option.value === value);
        if (selectedOption) {
          optionsSelected.push(selectedOption);
        }
      });
      if (this.keepSelectedItems) {
        const optionValues = optionsSelected.map((option) => option.value);
        const keptSelectedOptions = this.subjOptionsSelected.value.filter((selOption) => optionValues.indexOf(selOption.value) === -1);
        optionsSelected.push(...keptSelectedOptions);
      }
      if (!(0, import_lodash.default)(optionsSelected, this.subjOptionsSelected.value)) {
        this.subjOptionsSelected.next(optionsSelected);
        this.cd.markForCheck();
      }
    });
    combineLatest([this.subjOptions, this.subjOptionsSelected, this.subjSearchText]).pipe(map(([options, selectedOptions, search]) => {
      this.optionsFiltered = this.filterOptions(search, options, selectedOptions).map((option) => {
        if (option instanceof NgxSelectOption) {
          option.highlightedText = this.highlightOption(option);
        } else if (option instanceof NgxSelectOptGroup) {
          option.options.map((subOption) => {
            subOption.highlightedText = this.highlightOption(subOption);
            return subOption;
          });
        }
        return option;
      });
      this.cacheOptionsFilteredFlat = null;
      this.navigateOption(ENavigation.firstIfOptionActiveInvisible);
      this.cd.markForCheck();
      return selectedOptions;
    }), mergeMap((selectedOptions) => this.optionsFilteredFlat().pipe(filter((flatOptions) => this.autoSelectSingleOption && flatOptions.length === 1 && !selectedOptions.length)))).subscribe((flatOptions) => {
      this.subjOptionsSelected.next(flatOptions);
      this.cd.markForCheck();
    });
  }
  /** @internal */
  get inputText() {
    if (this.inputElRef && this.inputElRef.nativeElement) {
      return this.inputElRef.nativeElement.value;
    }
    return "";
  }
  setFormControlSize(otherClassNames = {}, useFormControl = true) {
    const formControlExtraClasses = useFormControl ? {
      "form-control-sm input-sm": this.size === "small",
      "form-control-lg input-lg": this.size === "large"
    } : {};
    return Object.assign(formControlExtraClasses, otherClassNames);
  }
  setBtnSize() {
    return {
      "btn-sm": this.size === "small",
      "btn-lg": this.size === "large"
    };
  }
  get optionsSelected() {
    return this.subjOptionsSelected.value;
  }
  mainClicked(event) {
    event.clickedSelectComponent = this;
    if (!this.isFocused) {
      this.isFocused = true;
      this.focus.emit();
    }
  }
  choiceMenuFocus(event) {
    if (this.appendTo) {
      event.clickedSelectComponent = this;
    }
  }
  documentClick(event) {
    if (event.clickedSelectComponent !== this) {
      if (this.optionsOpened) {
        this.optionsClose();
        this.cd.detectChanges();
      }
      if (this.isFocused) {
        this.isFocused = false;
        this.blur.emit();
      }
    }
  }
  optionsFilteredFlat() {
    if (this.cacheOptionsFilteredFlat) {
      return of(this.cacheOptionsFilteredFlat);
    }
    return from(this.optionsFiltered).pipe(mergeMap((option) => option instanceof NgxSelectOption ? of(option) : option instanceof NgxSelectOptGroup ? from(option.optionsFiltered) : EMPTY), filter((optionsFilteredFlat) => !optionsFilteredFlat.disabled), toArray(), tap((optionsFilteredFlat) => this.cacheOptionsFilteredFlat = optionsFilteredFlat));
  }
  navigateOption(navigation) {
    this.optionsFilteredFlat().pipe(map((options) => {
      const navigated = {
        index: -1,
        activeOption: null,
        filteredOptionList: options
      };
      let newActiveIdx;
      switch (navigation) {
        case ENavigation.first:
          navigated.index = 0;
          break;
        case ENavigation.previous:
          newActiveIdx = options.indexOf(this.optionActive) - 1;
          navigated.index = newActiveIdx >= 0 ? newActiveIdx : options.length - 1;
          break;
        case ENavigation.next:
          newActiveIdx = options.indexOf(this.optionActive) + 1;
          navigated.index = newActiveIdx < options.length ? newActiveIdx : 0;
          break;
        case ENavigation.last:
          navigated.index = options.length - 1;
          break;
        case ENavigation.firstSelected:
          if (this.subjOptionsSelected.value.length) {
            navigated.index = options.indexOf(this.subjOptionsSelected.value[0]);
          }
          break;
        case ENavigation.firstIfOptionActiveInvisible:
          let idxOfOptionActive = -1;
          if (this.optionActive) {
            idxOfOptionActive = options.indexOf(options.find((x) => x.value === this.optionActive.value));
          }
          navigated.index = idxOfOptionActive > 0 ? idxOfOptionActive : 0;
          break;
      }
      navigated.activeOption = options[navigated.index];
      return navigated;
    })).subscribe((newNavigated) => this.optionActivate(newNavigated));
  }
  ngDoCheck() {
    if (this.itemsDiffer.diff(this.items)) {
      this.subjOptions.next(this.buildOptions(this.items));
    }
    const defVal = this.defaultValue ? [].concat(this.defaultValue) : [];
    if (this.defaultValueDiffer.diff(defVal)) {
      this.subjDefaultValue.next(defVal);
    }
  }
  ngAfterContentChecked() {
    if (this._focusToInput && this.checkInputVisibility() && this.inputElRef && this.inputElRef.nativeElement !== document.activeElement) {
      this._focusToInput = false;
      this.inputElRef.nativeElement.focus();
    }
    if (this.choiceMenuElRef) {
      const ulElement = this.choiceMenuElRef.nativeElement;
      const element = ulElement.querySelector("a.ngx-select__item_active.active");
      if (element && element.offsetHeight > 0) {
        this.ensureVisibleElement(element);
      }
    }
  }
  ngOnDestroy() {
    this.cd.detach();
  }
  canClearNotMultiple() {
    return this.allowClear && !!this.subjOptionsSelected.value.length && (!this.subjDefaultValue.value.length || this.subjDefaultValue.value[0] !== this.actualValue[0]);
  }
  focusToInput() {
    this._focusToInput = true;
  }
  inputKeyDown(event) {
    const keysForOpenedState = [].concat(this.keyCodeToOptionsSelect, this.keyCodeToNavigateFirst, this.keyCodeToNavigatePrevious, this.keyCodeToNavigateNext, this.keyCodeToNavigateLast);
    const keysForClosedState = [].concat(this.keyCodeToOptionsOpen, this.keyCodeToRemoveSelected);
    if (this.optionsOpened && keysForOpenedState.indexOf(event.code) !== -1) {
      event.preventDefault();
      event.stopPropagation();
      switch (event.code) {
        case ([].concat(this.keyCodeToOptionsSelect).indexOf(event.code) + 1 && event.code):
          this.optionSelect(this.optionActive);
          this.navigateOption(ENavigation.next);
          break;
        case this.keyCodeToNavigateFirst:
          this.navigateOption(ENavigation.first);
          break;
        case this.keyCodeToNavigatePrevious:
          this.navigateOption(ENavigation.previous);
          break;
        case this.keyCodeToNavigateLast:
          this.navigateOption(ENavigation.last);
          break;
        case this.keyCodeToNavigateNext:
          this.navigateOption(ENavigation.next);
          break;
      }
    } else if (!this.optionsOpened && keysForClosedState.indexOf(event.code) !== -1) {
      event.preventDefault();
      event.stopPropagation();
      switch (event.code) {
        case ([].concat(this.keyCodeToOptionsOpen).indexOf(event.code) + 1 && event.code):
          this.optionsOpen();
          break;
        case this.keyCodeToRemoveSelected:
          if (this.multiple || this.canClearNotMultiple()) {
            this.optionRemove(this.subjOptionsSelected.value[this.subjOptionsSelected.value.length - 1], event);
          }
          break;
      }
    }
  }
  trackByOption(index, option) {
    return option instanceof NgxSelectOption ? option.value : option instanceof NgxSelectOptGroup ? option.label : option;
  }
  checkInputVisibility() {
    return this.multiple === true || this.optionsOpened && !this.noAutoComplete;
  }
  /** @internal */
  inputKeyUp(value = "", event) {
    if (event.code === this.keyCodeToOptionsClose) {
      this.optionsClose(
        /*true*/
      );
    } else if (this.optionsOpened && ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowDown"].indexOf(event.code) === -1) {
      this.typed.emit(value);
    } else if (!this.optionsOpened && value) {
      this.optionsOpen(value);
    }
  }
  /** @internal */
  inputClick(value = "") {
    if (!this.optionsOpened) {
      this.optionsOpen(value);
    }
  }
  /** @internal */
  sanitize(html) {
    if (this.noSanitize) {
      return html || null;
    }
    return html ? this.sanitizer.bypassSecurityTrustHtml(html) : null;
  }
  /** @internal */
  highlightOption(option) {
    if (this.inputElRef) {
      return option.renderText(this.sanitizer, this.inputElRef.nativeElement.value);
    }
    return option.renderText(this.sanitizer, "");
  }
  /** @internal */
  optionSelect(option, event = null) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (option && !option.disabled) {
      this.subjOptionsSelected.next((this.multiple ? this.subjOptionsSelected.value : []).concat([option]));
      this.select.emit(option.value);
      if (!this.keepSelectMenuOpened) {
        this.optionsClose(
          /*true*/
        );
      }
      this.onTouched();
    }
  }
  /** @internal */
  optionRemove(option, event) {
    if (!this.disabled && option) {
      event.stopPropagation();
      this.subjOptionsSelected.next((this.multiple ? this.subjOptionsSelected.value : []).filter((o) => o !== option));
      this.remove.emit(option.value);
    }
  }
  /** @internal */
  optionActivate(navigated) {
    if (this.optionActive !== navigated.activeOption && (!navigated.activeOption || !navigated.activeOption.disabled)) {
      if (this.optionActive) {
        this.optionActive.active = false;
      }
      this.optionActive = navigated.activeOption;
      if (this.optionActive) {
        this.optionActive.active = true;
      }
      this.navigated.emit(navigated);
      this.cd.detectChanges();
    }
  }
  /** @internal */
  onMouseEnter(navigated) {
    if (this.autoActiveOnMouseEnter) {
      this.optionActivate(navigated);
    }
  }
  filterOptions(search, options, selectedOptions) {
    const regExp = new RegExp((0, import_escape_string_regexp.default)(search), "i");
    const filterOption = (option) => {
      if (this.searchCallback) {
        return this.searchCallback(search, option);
      }
      return (!search || regExp.test(option.text)) && (!this.multiple || selectedOptions.indexOf(option) === -1);
    };
    return options.filter((option) => {
      if (option instanceof NgxSelectOption) {
        return filterOption(option);
      } else if (option instanceof NgxSelectOptGroup) {
        const subOp = option;
        subOp.filter((subOption) => filterOption(subOption));
        return subOp.optionsFiltered.length;
      }
    });
  }
  ensureVisibleElement(element) {
    if (this.choiceMenuElRef && this.cacheElementOffsetTop !== element.offsetTop) {
      this.cacheElementOffsetTop = element.offsetTop;
      const container = this.choiceMenuElRef.nativeElement;
      if (this.cacheElementOffsetTop < container.scrollTop) {
        container.scrollTop = this.cacheElementOffsetTop;
      } else if (this.cacheElementOffsetTop + element.offsetHeight > container.scrollTop + container.clientHeight) {
        container.scrollTop = this.cacheElementOffsetTop + element.offsetHeight - container.clientHeight;
      }
    }
  }
  showChoiceMenu() {
    return this.optionsOpened && (!!this.subjOptions.value.length || this.showOptionNotFoundForEmptyItems);
  }
  optionsOpen(search = "") {
    if (!this.disabled) {
      this.optionsOpened = true;
      this.subjSearchText.next(search);
      if (!this.multiple && this.subjOptionsSelected.value.length) {
        this.navigateOption(ENavigation.firstSelected);
      } else {
        this.navigateOption(ENavigation.first);
      }
      this.focusToInput();
      this.open.emit();
      this.cd.markForCheck();
    }
  }
  optionsClose() {
    this.optionsOpened = false;
    this.close.emit();
    if (this.autoClearSearch && this.multiple && this.inputElRef) {
      this.inputElRef.nativeElement.value = null;
    }
  }
  buildOptions(data) {
    const result = [];
    if (Array.isArray(data)) {
      data.forEach((item) => {
        const isOptGroup = typeof item === "object" && item !== null && propertyExists(item, this.optGroupLabelField) && propertyExists(item, this.optGroupOptionsField) && Array.isArray(item[this.optGroupOptionsField]);
        if (isOptGroup) {
          const optGroup = new NgxSelectOptGroup(item[this.optGroupLabelField]);
          item[this.optGroupOptionsField].forEach((subOption) => {
            const opt = this.buildOption(subOption, optGroup);
            if (opt) {
              optGroup.options.push(opt);
            }
          });
          result.push(optGroup);
        } else {
          const option = this.buildOption(item, null);
          if (option) {
            result.push(option);
          }
        }
      });
    }
    return result;
  }
  buildOption(data, parent) {
    let value;
    let text;
    let disabled;
    if (typeof data === "string" || typeof data === "number") {
      value = text = data;
      disabled = false;
    } else if (typeof data === "object" && data !== null && (propertyExists(data, this.optionValueField) || propertyExists(data, this.optionTextField))) {
      value = propertyExists(data, this.optionValueField) ? data[this.optionValueField] : data[this.optionTextField];
      text = propertyExists(data, this.optionTextField) ? data[this.optionTextField] : data[this.optionValueField];
      disabled = propertyExists(data, "disabled") ? data.disabled : false;
    } else {
      return null;
    }
    return new NgxSelectOption(value, text, disabled, data, parent);
  }
  writeValue(obj) {
    this.subjExternalValue.next(obj);
  }
  registerOnChange(fn) {
    this.onChange = fn;
    this.subjRegisterOnChange.next();
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this.cd.markForCheck();
  }
};
NgxSelectComponent.ɵfac = function NgxSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxSelectComponent)(ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NGX_SELECT_OPTIONS, 8));
};
NgxSelectComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxSelectComponent,
  selectors: [["ngx-select"]],
  contentQueries: function NgxSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, NgxSelectOptionDirective, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, NgxSelectOptionSelectedDirective, 7, TemplateRef);
      ɵɵcontentQuery(dirIndex, NgxSelectOptionNotFoundDirective, 7, TemplateRef);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateOption = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateSelectedOption = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateOptionNotFound = _t.first);
    }
  },
  viewQuery: function NgxSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 7);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mainElRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputElRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.choiceMenuElRef = _t.first);
    }
  },
  hostBindings: function NgxSelectComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("focusin", function NgxSelectComponent_focusin_HostBindingHandler($event) {
        return ctx.documentClick($event);
      }, false, ɵɵresolveDocument)("click", function NgxSelectComponent_click_HostBindingHandler($event) {
        return ctx.documentClick($event);
      }, false, ɵɵresolveDocument);
    }
  },
  inputs: {
    items: "items",
    optionValueField: "optionValueField",
    optionTextField: "optionTextField",
    optGroupLabelField: "optGroupLabelField",
    optGroupOptionsField: "optGroupOptionsField",
    multiple: "multiple",
    allowClear: "allowClear",
    placeholder: "placeholder",
    noAutoComplete: "noAutoComplete",
    disabled: "disabled",
    defaultValue: "defaultValue",
    autoSelectSingleOption: "autoSelectSingleOption",
    autoClearSearch: "autoClearSearch",
    noResultsFound: "noResultsFound",
    keepSelectedItems: "keepSelectedItems",
    size: "size",
    searchCallback: "searchCallback",
    autoActiveOnMouseEnter: "autoActiveOnMouseEnter",
    showOptionNotFoundForEmptyItems: "showOptionNotFoundForEmptyItems",
    isFocused: "isFocused",
    keepSelectMenuOpened: "keepSelectMenuOpened",
    autocomplete: "autocomplete",
    dropDownMenuOtherClasses: "dropDownMenuOtherClasses",
    noSanitize: "noSanitize",
    appendTo: "appendTo"
  },
  outputs: {
    typed: "typed",
    focus: "focus",
    blur: "blur",
    open: "open",
    close: "close",
    select: "select",
    remove: "remove",
    navigated: "navigated",
    selectionChanges: "selectionChanges"
  },
  features: [ɵɵProvidersFeature([{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgxSelectComponent),
    multi: true
  }])],
  decls: 11,
  vars: 12,
  consts: [["main", ""], ["defaultTemplateOption", ""], ["defaultTemplateOptionNotFound", ""], ["input", ""], ["choiceMenu", ""], ["choiceItem", ""], [1, "ngx-select", "dropdown", 3, "click", "focusin", "focus", "keydown", "tabindex", "ngClass"], [3, "ngClass"], ["class", "ngx-select__selected", 4, "ngIf"], ["class", "ngx-select__selected", 3, "click", 4, "ngIf"], ["type", "text", "class", "ngx-select__search form-control", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", "role", "combobox", 3, "ngClass", "tabindex", "disabled", "placeholder", "autocomplete", "keyup", "click", 4, "ngIf"], [3, "appendTo", "show", "selectionChanges", "focusin", 4, "ngIf"], [1, "ngx-select__selected"], [1, "ngx-select__toggle", "btn", "form-control", 3, "click", "ngClass"], ["class", "ngx-select__placeholder text-muted", 4, "ngIf"], ["class", "ngx-select__selected-single pull-left float-left", 3, "ngClass", 4, "ngIf"], [1, "ngx-select__toggle-buttons"], ["class", "ngx-select__clear btn btn-sm btn-link", 3, "ngClass", "click", 4, "ngIf"], [1, "dropdown-toggle"], [1, "ngx-select__toggle-caret", "caret"], [1, "ngx-select__placeholder", "text-muted"], [3, "innerHtml"], [1, "ngx-select__selected-single", "pull-left", "float-left", 3, "ngClass"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-select__clear", "btn", "btn-sm", "btn-link", 3, "click", "ngClass"], [1, "ngx-select__clear-icon"], [1, "ngx-select__selected", 3, "click"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 1, "ngx-select__selected-plural", "btn", "btn-default", "btn-secondary", "btn-sm", "btn-xs", 3, "click", "ngClass"], [1, "ngx-select__clear", "btn", "btn-sm", "btn-link", "pull-right", "float-right", 3, "click", "ngClass"], ["type", "text", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", "role", "combobox", 1, "ngx-select__search", "form-control", 3, "keyup", "click", "ngClass", "tabindex", "disabled", "placeholder", "autocomplete"], [3, "focusin", "appendTo", "show", "selectionChanges"], ["role", "menu", 1, "ngx-select__choices", "dropdown-menu", 3, "ngClass"], ["class", "ngx-select__item-group", "role", "menuitem", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ngx-select__item ngx-select__item_no-found dropdown-header", 4, "ngIf"], ["role", "menuitem", 1, "ngx-select__item-group"], ["class", "divider dropdown-divider", 4, "ngIf"], ["class", "dropdown-header", 4, "ngIf"], ["href", "#", "class", "ngx-select__item dropdown-item", 3, "ngClass", "mouseenter", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "divider", "dropdown-divider"], [1, "dropdown-header"], ["href", "#", 1, "ngx-select__item", "dropdown-item", 3, "mouseenter", "click", "ngClass"], [1, "ngx-select__item", "ngx-select__item_no-found", "dropdown-header"]],
  template: function NgxSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 6, 0);
      ɵɵlistener("click", function NgxSelectComponent_Template_div_click_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mainClicked($event));
      })("focusin", function NgxSelectComponent_Template_div_focusin_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.mainClicked($event));
      })("focus", function NgxSelectComponent_Template_div_focus_0_listener() {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.focusToInput());
      })("keydown", function NgxSelectComponent_Template_div_keydown_0_listener($event) {
        ɵɵrestoreView(_r1);
        return ɵɵresetView(ctx.inputKeyDown($event));
      });
      ɵɵelement(2, "div", 7);
      ɵɵtemplate(3, NgxSelectComponent_div_3_Template, 8, 4, "div", 8)(4, NgxSelectComponent_div_4_Template, 2, 2, "div", 9)(5, NgxSelectComponent_input_5_Template, 2, 5, "input", 10)(6, NgxSelectComponent_ngx_select_choices_6_Template, 5, 9, "ngx-select-choices", 11)(7, NgxSelectComponent_ng_template_7_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor)(9, NgxSelectComponent_ng_template_9_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("tabindex", ctx.disabled ? -1 : 0)("ngClass", ctx.setFormControlSize(ɵɵpureFunction2(7, _c4, ctx.multiple === true, ctx.optionsOpened && ctx.optionsFiltered.length), ctx.multiple === true));
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c5, ctx.disabled));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.multiple === false && (!ctx.optionsOpened || ctx.noAutoComplete));
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.multiple === true);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.checkInputVisibility());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isFocused);
    }
  },
  dependencies: [NgxSelectChoicesComponent, NgClass, NgIf, NgTemplateOutlet, NgForOf],
  styles: ['.ngx-select_multiple[_ngcontent-%COMP%]{height:auto;padding:3px 3px 0}.ngx-select_multiple[_ngcontent-%COMP%]   .ngx-select__search[_ngcontent-%COMP%]{background-color:transparent!important;border:none;outline:none;box-shadow:none;height:1.6666em;padding:0;margin-bottom:3px}.ngx-select__disabled[_ngcontent-%COMP%]{background-color:#eceeef;border-radius:4px;position:absolute;width:100%;height:100%;z-index:5;opacity:.6;top:0;left:0;cursor:not-allowed}.ngx-select__toggle[_ngcontent-%COMP%]{outline:0;position:relative;text-align:left!important;color:#333;background-color:#fff;border-color:#ccc;display:inline-flex;align-items:stretch;justify-content:space-between}.ngx-select__toggle[_ngcontent-%COMP%]:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.ngx-select__toggle-buttons[_ngcontent-%COMP%]{flex-shrink:0;display:flex;align-items:center}.ngx-select__toggle-caret[_ngcontent-%COMP%]{position:absolute;height:10px;top:50%;right:10px;margin-top:-2px}.ngx-select__placeholder[_ngcontent-%COMP%]{float:left;max-width:100%;text-overflow:ellipsis;overflow:hidden}.ngx-select__clear[_ngcontent-%COMP%]{margin-right:10px;padding:0;border:none}.ngx-select_multiple[_ngcontent-%COMP%]   .ngx-select__clear[_ngcontent-%COMP%]{line-height:normal;line-height:initial;margin-left:5px;margin-right:0;color:#000;opacity:.5}.ngx-select__clear-icon[_ngcontent-%COMP%]{display:inline-block;font-size:inherit;cursor:pointer;position:relative;width:1em;height:.75em;padding:0}.ngx-select__clear-icon[_ngcontent-%COMP%]:before, .ngx-select__clear-icon[_ngcontent-%COMP%]:after{content:"";position:absolute;border-top:3px solid;width:100%;top:50%;left:0;margin-top:-1px}.ngx-select__clear-icon[_ngcontent-%COMP%]:before{transform:rotate(45deg)}.ngx-select__clear-icon[_ngcontent-%COMP%]:after{transform:rotate(-45deg)}.ngx-select__choices[_ngcontent-%COMP%]{width:100%;height:auto;max-height:200px;overflow-x:hidden;margin-top:0;position:absolute}.ngx-select_multiple[_ngcontent-%COMP%]   .ngx-select__choices[_ngcontent-%COMP%]{margin-top:1px}.ngx-select__item[_ngcontent-%COMP%]{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;text-decoration:none}.ngx-select__item_disabled[_ngcontent-%COMP%], .ngx-select__item_no-found[_ngcontent-%COMP%]{cursor:default}.ngx-select__item_active[_ngcontent-%COMP%]{color:#fff;outline:0;background-color:#428bca}.ngx-select__selected-single[_ngcontent-%COMP%], .ngx-select__selected-plural[_ngcontent-%COMP%]{display:inline-flex;align-items:center;overflow:hidden}.ngx-select__selected-single[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .ngx-select__selected-plural[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ngx-select__selected-plural[_ngcontent-%COMP%]{outline:0;margin:0 3px 3px 0}.input-group[_ngcontent-%COMP%] > .dropdown[_ngcontent-%COMP%]{position:static}'],
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSelectComponent, [{
    type: Component,
    args: [{
      selector: "ngx-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NgxSelectComponent),
        multi: true
      }],
      template: `<div #main [tabindex]="disabled? -1: 0" class="ngx-select dropdown"
     [ngClass]="setFormControlSize({
        'ngx-select_multiple form-control': multiple === true,
        'open show': optionsOpened && optionsFiltered.length
     }, multiple === true)"
     (click)="mainClicked($event)" (focusin)="mainClicked($event)"
     (focus)="focusToInput()" (keydown)="inputKeyDown($event)">
    <div [ngClass]="{ 'ngx-select__disabled': disabled}"></div>

    <!-- single selected item -->
    <div class="ngx-select__selected"
         *ngIf="(multiple === false) && (!optionsOpened || noAutoComplete)">
        <div class="ngx-select__toggle btn form-control" [ngClass]="setFormControlSize(setBtnSize())"
             (click)="optionsOpen()">

            <span *ngIf="!optionsSelected.length" class="ngx-select__placeholder text-muted">
                <span [innerHtml]="placeholder"></span>
            </span>
            <span *ngIf="optionsSelected.length"
                  class="ngx-select__selected-single pull-left float-left"
                  [ngClass]="{'ngx-select__allow-clear': allowClear}">
                <ng-container [ngTemplateOutlet]="templateSelectedOption || defaultTemplateOption"
                              [ngTemplateOutletContext]="{$implicit: optionsSelected[0], index: 0,
                                                          text: sanitize(optionsSelected[0].text)}">
                </ng-container>
            </span>
            <span class="ngx-select__toggle-buttons">
                <a class="ngx-select__clear btn btn-sm btn-link" *ngIf="canClearNotMultiple()"
                   [ngClass]="setBtnSize()"
                   (click)="optionRemove(optionsSelected[0], $event)">
                    <i class="ngx-select__clear-icon"></i>
                </a>
                <i class="dropdown-toggle"></i>
                <i class="ngx-select__toggle-caret caret"></i>
            </span>
        </div>
    </div>

    <!-- multiple selected items -->
    <div class="ngx-select__selected" *ngIf="multiple === true" (click)="inputClick(inputElRef && inputElRef['value'])">
        <span *ngFor="let option of optionsSelected; trackBy: trackByOption; let idx = index">
            <span tabindex="-1" [ngClass]="setBtnSize()" (click)="$event.stopPropagation()"
                  class="ngx-select__selected-plural btn btn-default btn-secondary btn-sm btn-xs">

                <ng-container [ngTemplateOutlet]="templateSelectedOption || defaultTemplateOption"
                              [ngTemplateOutletContext]="{$implicit: option, index: idx, text: sanitize(option.text)}">
                </ng-container>

                <a class="ngx-select__clear btn btn-sm btn-link pull-right float-right" [ngClass]="setBtnSize()"
                   (click)="optionRemove(option, $event)">
                    <i class="ngx-select__clear-icon"></i>
                </a>
            </span>
        </span>
    </div>

    <!-- live search an item from the list -->
    <input #input type="text" class="ngx-select__search form-control" [ngClass]="setFormControlSize()"
           *ngIf="checkInputVisibility()"
           [tabindex]="multiple === false? -1: 0"
           (keyup)="inputKeyUp(input.value, $event)"
           [disabled]="disabled"
           [placeholder]="optionsSelected.length? '': placeholder"
           (click)="inputClick(input.value)"
           [autocomplete]="autocomplete"
           autocorrect="off"
           autocapitalize="off"
           spellcheck="false"
           role="combobox">

    <!-- options template -->
    <ngx-select-choices *ngIf="isFocused" [appendTo]="appendTo" [show]="showChoiceMenu()" (focusin)="choiceMenuFocus($event)"
                        [selectionChanges]="selectionChanges">
        <ul #choiceMenu role="menu" class="ngx-select__choices dropdown-menu"
            [ngClass]="dropDownMenuOtherClasses"
            [class.show]="showChoiceMenu()">
            <li class="ngx-select__item-group" role="menuitem"
                *ngFor="let opt of optionsFiltered; trackBy: trackByOption; let idxGroup=index">
                <div class="divider dropdown-divider" *ngIf="opt.type === 'optgroup' && (idxGroup > 0)"></div>
                <div class="dropdown-header" *ngIf="opt.type === 'optgroup'">{{ asGroup(opt).label }}</div>

                <a href="#" #choiceItem class="ngx-select__item dropdown-item"
                   *ngFor="let option of (asGroup(opt).optionsFiltered || [opt]); trackBy: trackByOption; let idxOption = index"
                   [ngClass]="{
                        'ngx-select__item_active active': asOpt(option).active,
                        'ngx-select__item_disabled disabled': asOpt(option).disabled
                    }"
                   (mouseenter)="onMouseEnter({
                        activeOption: asOpt(option),
                        filteredOptionList: optionsFiltered,
                        index: optionsFiltered.indexOf(option)
                    })"
                   (click)="optionSelect(asOpt(option), $event)">
                    <ng-container [ngTemplateOutlet]="templateOption || defaultTemplateOption"
                                  [ngTemplateOutletContext]="{$implicit: option, text: asOpt(option).highlightedText,
                                                              index: idxGroup, subIndex: idxOption}"></ng-container>
                </a>
            </li>
            <li class="ngx-select__item ngx-select__item_no-found dropdown-header" *ngIf="!optionsFiltered.length">
                <ng-container [ngTemplateOutlet]="templateOptionNotFound || defaultTemplateOptionNotFound"
                              [ngTemplateOutletContext]="{$implicit: inputText}"></ng-container>
            </li>
        </ul>
    </ngx-select-choices>

    <!--Default templates-->
    <ng-template #defaultTemplateOption let-text="text">
        <span [innerHtml]="text"></span>
    </ng-template>

    <ng-template #defaultTemplateOptionNotFound>
        {{noResultsFound}}
    </ng-template>

</div>
`,
      styles: ['.ngx-select_multiple{height:auto;padding:3px 3px 0}.ngx-select_multiple .ngx-select__search{background-color:transparent!important;border:none;outline:none;box-shadow:none;height:1.6666em;padding:0;margin-bottom:3px}.ngx-select__disabled{background-color:#eceeef;border-radius:4px;position:absolute;width:100%;height:100%;z-index:5;opacity:.6;top:0;left:0;cursor:not-allowed}.ngx-select__toggle{outline:0;position:relative;text-align:left!important;color:#333;background-color:#fff;border-color:#ccc;display:inline-flex;align-items:stretch;justify-content:space-between}.ngx-select__toggle:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.ngx-select__toggle-buttons{flex-shrink:0;display:flex;align-items:center}.ngx-select__toggle-caret{position:absolute;height:10px;top:50%;right:10px;margin-top:-2px}.ngx-select__placeholder{float:left;max-width:100%;text-overflow:ellipsis;overflow:hidden}.ngx-select__clear{margin-right:10px;padding:0;border:none}.ngx-select_multiple .ngx-select__clear{line-height:normal;line-height:initial;margin-left:5px;margin-right:0;color:#000;opacity:.5}.ngx-select__clear-icon{display:inline-block;font-size:inherit;cursor:pointer;position:relative;width:1em;height:.75em;padding:0}.ngx-select__clear-icon:before,.ngx-select__clear-icon:after{content:"";position:absolute;border-top:3px solid;width:100%;top:50%;left:0;margin-top:-1px}.ngx-select__clear-icon:before{transform:rotate(45deg)}.ngx-select__clear-icon:after{transform:rotate(-45deg)}.ngx-select__choices{width:100%;height:auto;max-height:200px;overflow-x:hidden;margin-top:0;position:absolute}.ngx-select_multiple .ngx-select__choices{margin-top:1px}.ngx-select__item{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;white-space:nowrap;cursor:pointer;text-decoration:none}.ngx-select__item_disabled,.ngx-select__item_no-found{cursor:default}.ngx-select__item_active{color:#fff;outline:0;background-color:#428bca}.ngx-select__selected-single,.ngx-select__selected-plural{display:inline-flex;align-items:center;overflow:hidden}.ngx-select__selected-single span,.ngx-select__selected-plural span{overflow:hidden;text-overflow:ellipsis}.ngx-select__selected-plural{outline:0;margin:0 3px 3px 0}.input-group>.dropdown{position:static}\n']
    }]
  }], function() {
    return [{
      type: IterableDiffers
    }, {
      type: DomSanitizer
    }, {
      type: ChangeDetectorRef
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NGX_SELECT_OPTIONS]
      }, {
        type: Optional
      }]
    }];
  }, {
    items: [{
      type: Input
    }],
    optionValueField: [{
      type: Input
    }],
    optionTextField: [{
      type: Input
    }],
    optGroupLabelField: [{
      type: Input
    }],
    optGroupOptionsField: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    allowClear: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    noAutoComplete: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }],
    autoSelectSingleOption: [{
      type: Input
    }],
    autoClearSearch: [{
      type: Input
    }],
    noResultsFound: [{
      type: Input
    }],
    keepSelectedItems: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    searchCallback: [{
      type: Input
    }],
    autoActiveOnMouseEnter: [{
      type: Input
    }],
    showOptionNotFoundForEmptyItems: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    keepSelectMenuOpened: [{
      type: Input
    }],
    autocomplete: [{
      type: Input
    }],
    dropDownMenuOtherClasses: [{
      type: Input
    }],
    noSanitize: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    typed: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    navigated: [{
      type: Output
    }],
    selectionChanges: [{
      type: Output
    }],
    mainElRef: [{
      type: ViewChild,
      args: ["main", {
        static: true
      }]
    }],
    inputElRef: [{
      type: ViewChild,
      args: ["input"]
    }],
    choiceMenuElRef: [{
      type: ViewChild,
      args: ["choiceMenu"]
    }],
    templateOption: [{
      type: ContentChild,
      args: [NgxSelectOptionDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    templateSelectedOption: [{
      type: ContentChild,
      args: [NgxSelectOptionSelectedDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    templateOptionNotFound: [{
      type: ContentChild,
      args: [NgxSelectOptionNotFoundDirective, {
        read: TemplateRef,
        static: true
      }]
    }],
    documentClick: [{
      type: HostListener,
      args: ["document:focusin", ["$event"]]
    }, {
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
var NgxSelectModule = class _NgxSelectModule {
  static forRoot(options) {
    return {
      ngModule: _NgxSelectModule,
      providers: [{
        provide: NGX_SELECT_OPTIONS,
        useValue: options
      }]
    };
  }
};
NgxSelectModule.ɵfac = function NgxSelectModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxSelectModule)();
};
NgxSelectModule.ɵmod = ɵɵdefineNgModule({
  type: NgxSelectModule,
  declarations: [NgxSelectComponent, NgxSelectOptionDirective, NgxSelectOptionSelectedDirective, NgxSelectOptionNotFoundDirective, NgxSelectChoicesComponent],
  imports: [CommonModule],
  exports: [NgxSelectComponent, NgxSelectOptionDirective, NgxSelectOptionSelectedDirective, NgxSelectOptionNotFoundDirective]
});
NgxSelectModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSelectModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxSelectComponent, NgxSelectOptionDirective, NgxSelectOptionSelectedDirective, NgxSelectOptionNotFoundDirective, NgxSelectChoicesComponent],
      exports: [NgxSelectComponent, NgxSelectOptionDirective, NgxSelectOptionSelectedDirective, NgxSelectOptionNotFoundDirective]
    }]
  }], null, null);
})();
export {
  NGX_SELECT_OPTIONS,
  NgxSelectComponent,
  NgxSelectModule,
  NgxSelectOptGroup,
  NgxSelectOption,
  NgxSelectOptionDirective,
  NgxSelectOptionNotFoundDirective,
  NgxSelectOptionSelectedDirective
};
//# sourceMappingURL=ngx-select-ex.js.map
