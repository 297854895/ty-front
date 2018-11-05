require("core-js/modules/es6.object.define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.date.to-string"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.date.to-string"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es6Regexp, global.es6Date);
    global.index = mod.exports;
  }
})(this, function (_exports, _es6Regexp, _es6Date) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var S4 = function S4() {
    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
  };

  var guid = function guid() {
    return "".concat(S4() + S4(), "-").concat(S4(), "-").concat(S4(), "-").concat(S4(), "-").concat(S4() + S4() + S4());
  };

  var _default = guid;
  _exports.default = _default;
});