const Joi = require('joi');

exports.retrieve = {

    query: Joi.object({
        shipmentId: Joi.number(),
    })
}

exports.create = {    

    body: Joi.object({
        shipmentId: Joi.number(),
        price: Joi.number(),
        message: Joi.string(),
        driver: Joi.object({
            number: Joi.string(),
            name: Joi.string()
        })
    })
}

exports.update = {    

    body: Joi.object({
        id: Joi.number(),
        price: Joi.number(),
        message: Joi.string(),
    })
}

exports.delete = {    

    params: Joi.object({
        id: Joi.number(),
    })
}