require("core-js/modules/es6.object.define-property");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./isEqual"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./isEqual"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isEqual);
    global.index = mod.exports;
  }
})(this, function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _isEqual = _interopRequireDefault(_isEqual);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var _default = function _default(_ref) {
    var props = _ref.props,
        nextProps = _ref.nextProps,
        state = _ref.state,
        nextState = _ref.nextState,
        ignoreProps = _ref.ignoreProps,
        ignoreState = _ref.ignoreState;
    return !(0, _isEqual.default)(props, nextProps, ignoreProps) || !(0, _isEqual.default)(state, nextState, ignoreState);
  };

  _exports.default = _default;
});