import webpack from 'webpack';
import path from 'path';

export default {
    devtool: 'eval',
    debug: true,
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src' // use for CLI
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
            // { test: /(\.css)$/, loaders: ['style', 'css'] } ,
            { test: /\.scss$/, include: path.join(__dirname, 'src'), loaders: ['style', 'css', 'sass'] }
        ]
    }
};