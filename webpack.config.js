const path = require('path');

module.exports = {
  mode:'production',
  entry: './src/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts|\.tsx$/,
        use: 'ts-loader',
        include: path.resolve(__dirname,'src'),
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  optimization: {
    namedModules: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    symlinks: false
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
};