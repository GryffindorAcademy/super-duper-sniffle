const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    lastname: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email()
});

module.exports = {
  Joi, 
  schema
} 