const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.DATABASE_URL || "dbname=dd517r39ek4sj2 host=ec2-54-204-14-96.compute-1.amazonaws.com port=5432 user=ldrtobnklpvque password=9ec051ec7c7a5628de657b6cd5b607bf17ce782e28f4f8bfb1d4ce741e862870 sslmode=require",
  ssl: true
});
client.connect();

module.exports = client;
