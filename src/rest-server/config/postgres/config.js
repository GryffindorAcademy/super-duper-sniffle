const db = require("./index");

const database = "ddshp0nd9oge9";

export const createDatabase = async () => {
  try {
    await db.query(`CREATE DATABASE ${database}`);
    console.log("successfully created database ", database);
  } catch (err) {
    console.log("error creating database ", err);
  }
};

export const dropDatabase = async () => {
  try {
    await db.query(`DROP DATABASE IF EXISTS ${database}`);
    console.log("successfully dropped database ", database);
  } catch (err) {
    console.log("error dropping database ", err);
  }
};

export const useDatabase = async () => {
  try {
    await db.query(`USE IF EXISTS ${database}`);
    console.log("successfully using database ", database);
  } catch (err) {
    console.log("error using database ", err);
  }
};

export const createMonthlyDonors = async () => {
  try {
    await db.query(
      `
      CREATE TABLE IF NOT EXISTS monthlyDonors
      (
        id SERIAL PRIMARY KEY,
        name varchar (50),
        lastname varchar (50),
        customerid varchar (50),
        email varchar (50) UNIQUE 
      )
      `
    );
    console.log("successfully created monthlyDonors table");
  } catch (err) {
    console.log("error creating monthlyDonors table ", err);
  }
};

export const dropMonthlyDonors = async () => {
  try {
    await db.query(`DROP TABLE IF EXISTS monthlyDonors`);
    console.log("successfully dropped monthlyDonors table");
  } catch (err) {
    console.log("error dropping monthlyDonors table ", err);
  }
};
