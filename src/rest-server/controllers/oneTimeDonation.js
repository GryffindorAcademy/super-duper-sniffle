///////////////////////////////////////
// Controller for one time donations //
///////////////////////////////////////
const { stripe } = require("../config/stripe");
const { Joi, schema } = require("../lib/middleware/request-validation.js");

const oneTimeDonation = {
  post: async (req, res) => {
    const { name, lastname, email, token, amount } = JSON.parse(req.body);
    ///////////////////////////////////////////////////////
    // Joi validates to ensure all data has been entered //
    ///////////////////////////////////////////////////////
    const validation = Joi.validate(
      { name: `${name}`, lastname: `${lastname}`, email: `${email}` },
      schema,
      (err, value) => {
        if (err === null) {
          return true;
        } else {
          return false;
        }
      }
    );
    try {
      if (validation) {
        let { status } = await stripe.charges.create({
          receipt_email: email,
          amount: amount,
          currency: "usd",
          description: "Jijenge Donation",
          source: token
        });
        console.log("Successfully processed data from payment controller");
        res.json({ status });
      } else {
        res.status(409).end();
      }
    } catch (err) {
      console.log("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = oneTimeDonation;
