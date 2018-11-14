require("core-js/modules/es6.object.define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./App", "./Add", "test/ui", "test/utils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./App"), require("./Add"), require("test/ui"), require("test/utils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.App, global.Add, global.ui, global.utils);
    global.test = mod.exports;
  }
})(this, function (_App, _Add, _ui, _utils) {
  "use strict";

  _App = _interopRequireWildcard(_App);
  _Add = _interopRequireDefault(_Add);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
});