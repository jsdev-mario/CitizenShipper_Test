const Joi = require('joi');

exports.read = {

    params: Joi.object({
        id: Joi.number(),
    })
}

exports.retrieve = {    

    query: Joi.object({})
}