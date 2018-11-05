require("core-js/modules/es6.object.define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ui/Helloworld", "./utils/guid", "./utils/shouldUpdate"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ui/Helloworld"), require("./utils/guid"), require("./utils/shouldUpdate"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Helloworld, global.guid, global.shouldUpdate);
    global.index = mod.exports;
  }
})(this, function (_exports, _Helloworld2, _guid2, _shouldUpdate2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Helloworld", {
    enumerable: true,
    get: function get() {
      return _Helloworld2.default;
    }
  });
  Object.defineProperty(_exports, "guid", {
    enumerable: true,
    get: function get() {
      return _guid2.default;
    }
  });
  Object.defineProperty(_exports, "shouldUpdate", {
    enumerable: true,
    get: function get() {
      return _shouldUpdate2.default;
    }
  });
  _Helloworld2 = _interopRequireDefault(_Helloworld2);
  _guid2 = _interopRequireDefault(_guid2);
  _shouldUpdate2 = _interopRequireDefault(_shouldUpdate2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});