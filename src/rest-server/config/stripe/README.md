# This file is to inform devs about how to maintain the secret Stripe key

## Structure

A file named "index.js" must exist within

> /src/rest-server/config/stripe

## Format

Within this "index.js" file must exist the following code

```
const stripe = require("stripe")("STRIPE SECRET KEY");
module.exports = { stripe };
```
