import {
  __commonJS
} from "./chunk-WKYGNSYM.js";

// node_modules/ts-case-convert/lib/caseConvert.js
var require_caseConvert = __commonJS({
  "node_modules/ts-case-convert/lib/caseConvert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectToPascal = exports.toPascal = exports.objectToSnake = exports.toSnake = exports.objectToCamel = exports.toCamel = void 0;
    function convertObject(obj, keyConverter) {
      if (obj === null || typeof obj === "undefined" || typeof obj !== "object") {
        return obj;
      }
      const out = Array.isArray(obj) ? [] : {};
      for (const [k, v] of Object.entries(obj)) {
        out[keyConverter(k)] = Array.isArray(v) ? v.map((item) => typeof item === "object" && !(item instanceof Uint8Array) && !(item instanceof Date) ? convertObject(item, keyConverter) : item) : v instanceof Uint8Array || v instanceof Date ? v : typeof v === "object" ? convertObject(v, keyConverter) : v;
      }
      return out;
    }
    function toCamel(term) {
      return term.length === 1 ? term.toLowerCase() : term.replace(/^([A-Z])/, (m) => m[0].toLowerCase()).replace(/[_-]([a-z0-9])/g, (m) => m[1].toUpperCase());
    }
    exports.toCamel = toCamel;
    function objectToCamel(obj) {
      return convertObject(obj, toCamel);
    }
    exports.objectToCamel = objectToCamel;
    function toSnake(term) {
      var _a, _b;
      let result = term;
      let circuitBreaker = 0;
      while ((((_a = /([a-z])([0-9])/.exec(result)) === null || _a === void 0 ? void 0 : _a.length) || 0) > 2 && circuitBreaker < 10) {
        result = result.replace(/([a-z])([0-9])/, (_all, $1, $2) => `${$1.toLowerCase()}_${$2.toLowerCase()}`);
        circuitBreaker += 1;
      }
      while ((((_b = /(.+?)([A-Z])/.exec(result)) === null || _b === void 0 ? void 0 : _b.length) || 0) > 2 && circuitBreaker < 10) {
        result = result.replace(/(.+?)([A-Z])/, (_all, $1, $2) => `${$1.toLowerCase()}_${$2.toLowerCase()}`);
        circuitBreaker += 1;
      }
      return result.toLowerCase();
    }
    exports.toSnake = toSnake;
    function objectToSnake(obj) {
      return convertObject(obj, toSnake);
    }
    exports.objectToSnake = objectToSnake;
    function toPascal(term) {
      return toCamel(term).replace(/^([a-z])/, (m) => m[0].toUpperCase());
    }
    exports.toPascal = toPascal;
    function objectToPascal(obj) {
      return convertObject(obj, toPascal);
    }
    exports.objectToPascal = objectToPascal;
  }
});

// node_modules/ts-case-convert/lib/index.js
var require_lib = __commonJS({
  "node_modules/ts-case-convert/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectToPascal = exports.toPascal = exports.toCamel = exports.toSnake = exports.objectToSnake = exports.objectToCamel = void 0;
    var caseConvert_1 = require_caseConvert();
    Object.defineProperty(exports, "objectToCamel", { enumerable: true, get: function() {
      return caseConvert_1.objectToCamel;
    } });
    Object.defineProperty(exports, "objectToSnake", { enumerable: true, get: function() {
      return caseConvert_1.objectToSnake;
    } });
    Object.defineProperty(exports, "toSnake", { enumerable: true, get: function() {
      return caseConvert_1.toSnake;
    } });
    Object.defineProperty(exports, "toCamel", { enumerable: true, get: function() {
      return caseConvert_1.toCamel;
    } });
    Object.defineProperty(exports, "toPascal", { enumerable: true, get: function() {
      return caseConvert_1.toPascal;
    } });
    Object.defineProperty(exports, "objectToPascal", { enumerable: true, get: function() {
      return caseConvert_1.objectToPascal;
    } });
  }
});
export default require_lib();
//# sourceMappingURL=ts-case-convert.js.map
