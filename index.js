const express = require('express');

const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const router = require('./routes/index');

dotenv.config();

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`connect to ${PORT}`));
