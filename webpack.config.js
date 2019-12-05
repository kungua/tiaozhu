const path = require('path')

module.exports = {
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
      },
      {
        test: /icons.+\.svg$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.s([ac])ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
