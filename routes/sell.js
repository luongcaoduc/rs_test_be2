const router = require('express').Router();

const Sell = require('../models/sell');

router.post('/', async (req, res) => {
  try {
    const sell = new Sell(req.body);

    await sell.save();

    res.status(200).send(sell);
  } catch (error) {
    res.status(409).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const { name, startDate, endDate } = req.query;
    const findObject = {};

    if (startDate && endDate) {
      Object.assign(findObject, { date: { $gte: startDate, $lte: endDate } });
    }

    let sells = await Sell.find(findObject).populate('product').sort({ date: 1 });

    if (name) {
      sells = sells.filter((r) => r.product.name === name);
    }

    res.status(200).send(sells);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
