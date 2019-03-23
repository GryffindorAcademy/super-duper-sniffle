//////////////////////////////////////
// Controller for monthly donations //
//////////////////////////////////////
const { stripe } = require("../config/stripe");
const { Joi, schema } = require("../lib/middleware/request-validation.js");
// const { addMonthlyDonor } = require("../config/postgres/config");

const monthlyDonation = {
  post: async (req, res) => {
    const { name, lastname, email, token, amount } = JSON.parse(req.body);
    const productAmount = amount / 100;
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
        let customer = null;
        if (amount === 2500) {
          ////////////////////////////////////
          // If donation is for $25 monthly //
          ////////////////////////////////////
          customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6HYG3GMu3nnm" }]
          });
        } else if (amount === 5000) {
          ////////////////////////////////////
          // If donation is for $50 monthly //
          ////////////////////////////////////
          customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6H6Pe1gGY8c4" }]
          });
        } else if (amount === 7500) {
          ////////////////////////////////////
          // If donation is for $75 monthly //
          ////////////////////////////////////
          customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6IG08ocs7tyW" }]
          });
        } else if (amount === 10000) {
          /////////////////////////////////////
          // If donation is for $100 monthly //
          /////////////////////////////////////
          customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ plan: "plan_Ds6I9oT7FcfiOv" }]
          });
        } else {
          ///////////////////////////////////////////////
          // If donation is for a custom value monthly //
          ///////////////////////////////////////////////
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
          customer = await stripe.customers.create({
            email: email,
            source: token
          });
          const subscription = await testStripeKey.subscriptions.create({
            customer: customer.id,
            items: [{ plan: varPlan.id }]
          });
        }
        ///////////////////////////////////////////////////////////
        // Call upon the query to insert customer info into PSQL //
        ///////////////////////////////////////////////////////////
        // await addMonthlyDonor([name, lastname, customer.id, email]);
        res.status(200).end();
      } else {
        res.status(409).end();
      }
    } catch (err) {
      console.log("Error from payment controller: ", err);
      res.status(500).end();
    }
  }
};

module.exports = monthlyDonation;
