require("core-js/modules/es6.object.define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es7.array.includes", "core-js/modules/es6.string.includes", "core-js/modules/es6.array.is-array", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es7.array.includes"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.array.is-array"), require("lodash"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es7Array, global.es6String, global.es6Array, global.lodash);
    global.isEqual = mod.exports;
  }
})(this, function (_exports, _es7Array, _es6String, _es6Array, _lodash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _lodash = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var euqal = function euqal(source, target, ignore) {
    var equalFlag = true;

    for (var key in source) {
      // ignore key
      if (ignore && Array.isArray(ignore) && ignore.includes && ignore.includes(key)) continue;
      var source_item = source[key];
      var target_item = target[key]; // string simple shallow equal

      if (!source_item || typeof source_item === 'string' || !target_item || typeof target_item === 'string') {
        equalFlag = source_item === target_item;
        break;
      } // immuatble or edpth equal


      equalFlag = _lodash.default.isEqual(source_item.toJS ? source_item.toJS() : source_item, target_item.toJS ? target_item.toJS() : target_item);
    }

    return equalFlag;
  };

  var _default = euqal;
  _exports.default = _default;
});