import express from 'express'; 
import path from 'path';
const server = express(); 
const { Pool } = require('pg'); 

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, 
  ssl: true
});

server.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM monthlydonors');
    const results = { 'results': (result) ? result.rows : null};
    res.render('pages/db', results );
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
})

const isProd = process.env.NODE_ENV === 
"production"
if (!isProd) {
const webpack = require('webpack'); 
const config = require('../../config/webpack.dev');
const compiler = webpack(config); 
const webpackDevMiddleware = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
server.use(webpackDevMiddleware); 
server.use(webpackHotMiddleware);

}

const compression = require('compression');
server.use(compression()); 

const staticMiddleware = express.static('dist'); 
server.use(staticMiddleware);

// const expressStaticGzip = require("express-static-gzip");
// server.use(expressStaticGzip("dist", {
//   enableBrotli: true
// }));

server.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));

const PORT = process.env.PORT || 6060; 

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`); 
}); 