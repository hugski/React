import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';
import open from 'open';

const port = 3000;
const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: './src',
    hot: true,
});

server.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`, 'google chrome');
    }
});