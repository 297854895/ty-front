(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/es7.symbol.async-iterator", "core-js/modules/es6.symbol", "core-js/modules/es6.object.define-property", "core-js/modules/es6.object.create", "core-js/modules/es6.object.set-prototype-of", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/es7.symbol.async-iterator"), require("core-js/modules/es6.symbol"), require("core-js/modules/es6.object.define-property"), require("core-js/modules/es6.object.create"), require("core-js/modules/es6.object.set-prototype-of"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.es7Symbol, global.es6, global.es6Object, global.es6Object, global.es6Object, global.react);
    global.index = mod.exports;
  }
})(this, function (_exports, _es7Symbol, _es, _es6Object, _es6Object2, _es6Object3, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var Helloworld =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Helloworld, _React$Component);

    function Helloworld() {
      _classCallCheck(this, Helloworld);

      return _possibleConstructorReturn(this, _getPrototypeOf(Helloworld).apply(this, arguments));
    }

    _createClass(Helloworld, [{
      key: "render",
      value: function render() {
        return _react.default.createElement("h1", {
          className: "index"
        }, "Hello React Library !");
      }
    }]);

    return Helloworld;
  }(_react.default.Component);

  _exports.default = Helloworld;
});