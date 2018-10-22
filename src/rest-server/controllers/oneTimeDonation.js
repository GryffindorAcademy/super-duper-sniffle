const SECRET = process.env.SECRET; 
const stripe = require("stripe")(SECRET);
const  {
  success, 
  error
} = require('../lib/log/index.js'); 
// const {
//   saveCustomer
// } = require('./paymentQueries.js'); 

const oneTimeDonation = async(req, res) => {
  try {
    let data = await stripe.charges.create({
      amount: req.body.amount, 
      currency: "usd", 
      description: "One time donation",
      source: req.body.token 
    }); 
    res.status(200).send('Successfully process donation'); 
    success('Successfully process data from paymentController'); 
  } catch (err) {
    error('Error from one time donation => ', err);
  }
}

// const monthlyDonation = async(req, res) => {
//   try {
//     let { id } = await stripe.customers.create({
//       description: `Customer for ${req.body.email}`,
//       source: req.body.token,
//       email: req.body.email
//     });
//     let body = {
//       customerid: id,
//       name: req.body.name,
//       lastname: req.body.lastname,
//       email: req.body.email,
//     };
//     const data = await saveCustomer(body); 
//     const product = await stripe.products.create({
//       name: 'Monthly donation',
//       type: 'service',
//     });
//     const plan = await stripe.plans.create({
//       amount: req.body.amount,
//       interval: "month",
//       product: {
//         name: product.id
//       },
//       currency: "usd",
//     });
//     const subscription = await stripe.subscriptions.create({
//       customer: id,
//       items: [
//         {
//           plan: plan.id,
//         },
//       ]
//     }); 
//     if (subscription.id) {
//       res.status(200).send('Success'); 
//     } else {
//       res.status(400).send('Not able to create subscription'); 
//     }
//   } catch (err) {
//     error('Error from monthly donation => ', err);
//   }
// }

module.exports = {
  oneTimeDonation, 
  // monthlyDonation
}