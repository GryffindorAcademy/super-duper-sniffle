const { stripe } = require("../config/stripe");
const { success, error } = require("../lib/log");

const monthlyDonation = {
  post: async (req, res) => {
    const { name, lastname, email, token, amount } = JSON.parse(req.body);
    const productAmount = amount/100; 
    // Check if customer is on the database first?
    try {
      // Define a Product or add to an existing one 
      if (amount === 2500) {
        const customer = await stripe.customers.create({
          email: email,
          source: token
        });
        const subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ plan: "plan_Ds3ZmQIVpmhJl4" }]
        });
      } else if (amount === 5000) {
        const customer = await stripe.customers.create({
          email: email,
          source: token
        });
        const subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ plan: "plan_Ds3b7Ezd5LMyKp" }]
        });
      } else if (amount === 7500) {
        const customer = await stripe.customers.create({
          email: email,
          source: token
        });
        const subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ plan: "plan_Ds3bktD4GN1HH8" }]
        });
      } else if (amount === 10000) {
        const customer = await stripe.customers.create({
          email: email,
          source: token
        });
        const subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ plan: "plan_Ds3cBMYpzSryqS" }]
        });
      } else {
        const product = await stripe.products.create({
          name: `Your $${productAmount} donation to Jijenge Academy`,
          type: "service"
        });
        const varPlan = await stripe.plans.create({
          product: product.id,
          nickname: `Your $${productAmount} donation to Jijenge Academy`,
          currency: "usd",
          interval: "month",
          amount: amount
        });
        const customer = await stripe.customers.create({
          email: email,
          source: token
        });
        const subscription = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ plan: varPlan.id }]
        });
      }
      success("Successfully processed data from payment controller");
      res.status(200).end();
    } catch (err) {
      error("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = monthlyDonation;
