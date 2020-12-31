const express = require('express');
const shipmentsCtr = require('../../controllers/shipments')
const expressValidation = require('express-joi-validation');
const validateSchema = require('./validateSchema');
const validator = expressValidation.createValidator({ passError: true });
const router = express.Router();

router.get('/:id', validator.params(validateSchema.read.params), shipmentsCtr.read)
router.get('/', validator.query(validateSchema.retrieve.query), shipmentsCtr.retrieve)

module.exports = router