(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.testBabel = mod.exports;
  }
})(this, function () {
  "use strict";

  var path = require('path');

  var babel = require('@babel/core');

  babel.transformFile('./test.js', {
    presets: [["@babel/env", {
      modules: false
    }]],
    plugins: [[path.resolve('index.js'), {
      library: 'test',
      lib: 'dist' // style: {
      //   type: 'css',
      //   path: 'ui'
      // }

    }]]
  }, function (err, res) {
    console.log(err);

    if (res) {
      console.log(res.code);
    }
  });
});