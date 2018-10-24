const client = require("./index");

const database = "d1vq8h32m1bkqd";

// export const createDatabase = () => {
//   client.query(`CREATE DATABASE ${database}`);
// };

// export const dropDatabase = () => {
//   client.query(`DROP DATABASE IF EXISTS ${database}`);
// };

export const useDatabase = () => {
  client.query(`\c ${database};`);
};

// user table - creation and deletion (0 is a user, 1 is a business, 2 is a delivery user)

export const createContactUs = () => {
  client.query(
    `
      CREATE TABLE IF NOT EXISTS contactUs
      (
        id SERIAL,
        fullname varchar (50), 
        email varchar (50),
        message varchar (255)
      )
      ;`
  );
};

export const dropContactUs = () => {
  client.query(`DROP TABLE IF EXISTS contactUs;`);
};

export const createVisitAfrica = () => {
  client.query(
    `
      CREATE TABLE IF NOT EXISTS visitAfrica
      (
        id SERIAL,
        email varchar (50) UNIQUE 
      )
      ;`
  );
};

export const dropVisitAfrica = () => {
  client.query(`DROP TABLE IF EXISTS visitAfrica;`);
};

// VALID - Creates table in PSQL
export const createMonthlyDonors = () => {
  client.query(
    `
      CREATE TABLE IF NOT EXISTS monthlydonors
      (
        id SERIAL PRIMARY KEY,
        name varchar (50),
        lastname varchar (50),
        customerid varchar (50),
        email varchar (50) UNIQUE 
      )
      ;`
  );
};

export const addNewSubscriber = () => {
  client.query(`
    INSERT INTO monthlydonors
    (
      name, 
      lastname, 
      customerid, 
      email
    ) 
      VALUES 
    (
      'Cole', 
      'Michaels', 
      '1234567890', 
      'test@gmail.com'
    )
  ;`);
};

export const dropMonthlyDonors = () => {
  client.query(`DROP TABLE IF EXISTS monthlyDonors;`);
};
