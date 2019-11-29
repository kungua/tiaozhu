const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    tiaozhu: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'tiaozhu',
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "跳珠 React UI Toolkit",
      template: "index.html"
    })
  ],
  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React' // script tag window.React
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM'
    }
  }
}
