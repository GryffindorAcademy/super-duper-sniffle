// const { Pool } = require("pg");

// const config = {
//   user: "iyzbkupaqsyujg",
//   host: "ec2-54-225-97-112.compute-1.amazonaws.com",
//   database: "ddshp0nd9oge9",
//   password: "5bf92cbd15c3c6a496147ed383e391d91e402a2fb4093c7809052d6a70348583",
//   port: 5432,
//   max: 20
// };

// try {
//   const db = await new Pool(config);

//   await db.on("connect", () => {
//     success("successfully connected to postgress", config.database);
//   });

//   await db.on("remove", client => {
//     success("successfully removed client", client);
//   });

//   await db.on("error", err => {
//     error("error in postgress ", err);
//   });

//   await db.connect();
// } catch (err) {
//   console.log("Error at PSQL Entry");
// }

// module.exports = db;
const { Client } = require("pg");
const client = new Client({
  connectionString:
    "postgres://kbkchjmxideqop:93abf238d2249d7d7cb1f80fefeaed51c6a16f5375f0cf9e2cf023ba2fc80ba6@ec2-23-23-245-89.compute-1.amazonaws.com:5432/d1vq8h32m1bkqd",
  ssl: true
});
client.connect();

module.exports = client;
