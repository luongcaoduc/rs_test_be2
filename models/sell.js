const mongoose = require('mongoose');

const { Schema } = mongoose;

const sellSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  date: {
    type: Date,
    required: true,
  },
  revenue: {
    type: Number,
  },
});

const Sell = mongoose.model('Sell', sellSchema);

module.exports = Sell;
