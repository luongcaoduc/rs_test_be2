const mongoose = require('mongoose');

module.exports = async () => {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    });
    console.log('connect to db');
  } catch (error) {
    console.log(error);
  }
};
