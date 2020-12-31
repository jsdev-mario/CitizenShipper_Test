const express = require('express');
const bidsCtr = require('../../controllers/bids')
const expressValidation = require('express-joi-validation');
const validateSchema = require('./validateSchema');
const validator = expressValidation.createValidator({ passError: true });
const router = express.Router();

router.get('/', validator.query(validateSchema.retrieve.query), bidsCtr.retrieve)
router.post('/', validator.body(validateSchema.create.body), bidsCtr.create)
router.put('/', validator.body(validateSchema.update.body), bidsCtr.update)
router.delete('/:id', validator.params(validateSchema.delete.params), bidsCtr.update)

module.exports = router