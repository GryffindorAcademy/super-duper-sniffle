//////////////////////////////////////
// Config file for database queries //
//////////////////////////////////////
const db = require("./index");

/////////////////////////////////////
// Create the monthly donars table //
/////////////////////////////////////
const createMonthlyDonors = async () => {
  try {
    await db.query(
      "CREATE TABLE IF NOT EXISTS monthlydonors(id SERIAL PRIMARY KEY, name varchar (50),last_name varchar (50),customerid varchar (50),email varchar (50) UNIQUE)",
      (err, res) => {
        if (err) {
          console.log("Error inside createMonthlyDonors query", err);
        } else {
          console.log("createMonthlyDonors successful!");
        }
      }
    );
  } catch (err) {
    console.log(console.log("createMonthlyDonors query failed.", err));
  }
};

/////////////////////////////////////
// Drop the monthly donars table //
/////////////////////////////////////
const dropMonthlyDonors = async () => {
  try {
    await db.query("DROP TABLE IF EXISTS monthlydonors", (err, res) => {
      if (err) {
        console.log("Error inside dropMonthlyDonors query", err);
      } else {
        console.log("dropMonthlyDonors successful!");
      }
    });
  } catch (err) {
    console.log(console.log("dropMonthlyDonors query failed.", err));
  }
};

///////////////////////////////////////////////
// Insert data into the monthly donars table //
///////////////////////////////////////////////
const addMonthlyDonor = async valuesArray => {
  try {
    await db.query(
      "INSERT INTO monthlyDonors(name, last_name, customerid, email) VALUES($1, $2, $3, $4)",
      valuesArray,
      (err, res) => {
        if (err) {
          console.log("Error inside addMonthlyDonor query", err);
        } else {
          console.log("addMonthlyDonor successful!", res.rows[0]);
        }
      }
    );
  } catch (err) {
    console.log(console.log("addMonthlyDonor query failed.", err));
  }
};

module.exports = { createMonthlyDonors, dropMonthlyDonors, addMonthlyDonor };
