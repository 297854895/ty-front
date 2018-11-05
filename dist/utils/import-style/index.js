(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["core-js/modules/es6.array.filter", "core-js/modules/es6.array.iterator", "core-js/modules/es6.object.keys", "core-js/modules/es6.object.define-property", "core-js/modules/es6.function.name", "core-js/modules/web.dom.iterable", "core-js/modules/es6.array.for-each", "core-js/modules/es6.regexp.split"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("core-js/modules/es6.array.filter"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.object.keys"), require("core-js/modules/es6.object.define-property"), require("core-js/modules/es6.function.name"), require("core-js/modules/web.dom.iterable"), require("core-js/modules/es6.array.for-each"), require("core-js/modules/es6.regexp.split"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.es6Array, global.es6Array, global.es6Object, global.es6Object, global.es6Function, global.webDom, global.es6Array, global.es6Regexp);
    global.index = mod.exports;
  }
})(this, function (_es6Array, _es6Array2, _es6Object, _es6Object2, _es6Function, _webDom, _es6Array3, _es6Regexp) {
  "use strict";

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var import_theme = false;

  module.exports = function (babel, config) {
    config.style = _objectSpread({
      type: 'css',
      path: 'ui'
    }, config.style);
    return {
      visitor: {
        ImportDeclaration: function ImportDeclaration(path, _ref) {
          var node = path.node,
              library_name = config.library,
              lib = config.lib,
              init_path = node.source.value.split('/');
          if (init_path.length !== 2) return;
          var module_path = init_path[1],
              style_arr = config.style.path || ['ui'],
              t = babel.types;
          if (!node) return;
          var full_path = library_name + '/' + lib + '/' + module_path,
              dist_path = t.stringLiteral(full_path),
              push_value = null;
          path.node.specifiers.forEach(function (specifier) {
            var diy_name = specifier.local.name,
                module_name = [t.ImportDefaultSpecifier(t.identifier(diy_name || specifier.imported.name))],
                source = node.source.value;

            if (!specifier.imported || source.substr(0, library_name.length) !== library_name) {
              if (node.specifiers.length > 1) {
                if (push_value === node.source.value) return;
                path.insertBefore(node);
                push_value = node.source.value;
                return;
              }

              push_value = null;
              path.insertBefore(node);
              return;
            }

            var insert_module = t.ImportDeclaration(module_name, t.stringLiteral(full_path + '/' + specifier.imported.name));
            path.insertBefore(insert_module);
            if (module_path !== config.style.path) return;

            if (!import_theme) {
              path.insertBefore(t.importDeclaration([], t.stringLiteral(full_path + '/style/index.' + config.style.type)));
              import_theme = true;
            }

            var w_path = t.stringLiteral(full_path + '/' + specifier.imported.name + '/style/index.' + config.style.type);
            path.insertBefore(t.importDeclaration([], w_path));
          });
          path.remove();
        }
      }
    };
  };
});