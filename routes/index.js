const express = require('express');

const router = express.Router();

const productRoute = require('./productRoute');
const sellRoute = require('./sell');

router.use('/product', productRoute);
router.use('/sell', sellRoute);

module.exports = router;
