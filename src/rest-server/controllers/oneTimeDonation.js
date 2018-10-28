const { stripe } = require("../config/stripe");
const { success, error } = require("../lib/log");

const oneTimeDonation = {
  post: async (req, res) => {
    const { name, lastname, email, token, amount } = JSON.parse(req.body);
    try {
      let { status } = await stripe.charges.create({
        receipt_email: email,
        amount: amount,
        currency: "usd",
        description: "Jijenge Donation",
        source: token
      });
      success("Successfully processed data from payment controller");
      res.json({ status });
    } catch (err) {
      error("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = oneTimeDonation;
