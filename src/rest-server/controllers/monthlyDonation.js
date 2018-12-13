const { stripe } = require("../config/stripe");
const { success, error } = require("../lib/log");
const { Joi, schema } = require("../lib/middleware/request-validation.js");
// const client = require("../config/postgres/index.js");

const monthlyDonation = {
  post: async (req, res) => {
    const { name, lastname, email, token, amount } = JSON.parse(req.body);
    const productAmount = amount / 100;
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
      // Define a Product or add to an existing one
      if (validation) {
        if (amount === 2500) {
          const customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6HYG3GMu3nnm" }]
          });
        } else if (amount === 5000) {
          const customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6H6Pe1gGY8c4" }]
          });
        } else if (amount === 7500) {
          const customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6IG08ocs7tyW" }]
          });
        } else if (amount === 10000) {
          const customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6I9oT7FcfiOv" }]
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
        res.status(200).end();
      } else {
        res.status(409).end();
      }
    } catch (err) {
      error("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = monthlyDonation;
