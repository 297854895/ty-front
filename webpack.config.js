const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    Hello: path.resolve(__dirname, 'src/ui/Hello'),
    World: path.resolve(__dirname, 'src/ui/World')
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    // publicPath: path.resolve(__dirname, 'lib'),
    filename: '[name]/index.js'
  },
  externals: {
    react: 'react'
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|mjs|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        loader: require.resolve('babel-loader'),
        options: {
          "presets": [
            [
              "@babel/preset-env",
              {
                "useBuiltIns": 'entry',
                // "modules": "umd"
              }
            ],
            [
              "@babel/preset-react"
            ]
          ],
          "plugins": [
            "@babel/plugin-syntax-dynamic-import",
            "@babel/plugin-proposal-export-default-from",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      }
    ]
  }
}
