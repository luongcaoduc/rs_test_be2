const router = require('express').Router();
const Product = require('../models/product');

router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(200).send(product);
  } catch (error) {
    res.status(409).send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).send(products);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
