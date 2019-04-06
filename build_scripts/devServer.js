import chalk from 'chalk';
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

const port = 3000;
const app = express();
const compiler = webpack(config);

const DIST_DIR = path.join(__dirname, "../src");
const HTML_FILE = path.join(DIST_DIR, 'index.html');

/*eslint-disable no-console */
console.log(chalk.green('Starting app in dev mode...'));


app.use(express.static(DIST_DIR));

app.get('/', (req, res) => { res.sendFile(HTML_FILE) });

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green('Running dev server on http://localhost:'+port+' Press Ctrl+C to stop'));
        open('http://localhost:' + port);
    }
});