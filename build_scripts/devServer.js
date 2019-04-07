import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import chromePaths from 'chrome-paths';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware'
import config from '../webpack.config.dev.js';

/*eslint-disable no-console */
console.log(chalk.green('Starting app in dev mode...'));

const port = 3000;
const server = express();

const DIST_DIR = path.join(__dirname, "../src");
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const compiler = webpack(config);

const middleware = new webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath});
server.use(middleware);

const hotReplacement = new webpackHotMiddleware(compiler);
server.use(hotReplacement);

server.use(express.static(DIST_DIR));

server.get('/', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set('content-type', 'text/html')
        res.send(result)
        res.end()
    });
});

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green('Running dev server on http://localhost:' + port + ' Press Ctrl+C to stop'));

        const chromePath = chromePaths['chrome'];
        console.log("Opening "+chromePath);                  
        open('http://localhost:' + port, { app: [chromePath, '--auto-open-devtools-for-tabs']});
    }
});