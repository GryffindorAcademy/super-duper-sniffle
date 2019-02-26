//////////////////////////////
// Config file for postgres //
//////////////////////////////
const { Client } = require("pg");

////////////////////////////////////////////////////
// process.env.DATABASE_URL is supplied by Heroku //
// Heroku changed database url often so this is   //
// a static variable                              //
////////////////////////////////////////////////////
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
client.connect();

module.exports = client;
