const express = require('express');
require('dotenv').config();
const cors = require('cors');

const connectDB = require('./config/db.js');
const reviewRouter = require('./routes/ReviewRouter.js');
const logger = require('./middlewares/loggers.js');

const app = express();
const PORT = process.env.MONGO_URI|5000;

app.use(express.json());
app.use(cors());
app.use(logger);


connectDB();
app.use('/api/review',reviewRouter);

app.listen(PORT, ()=>{
  console.log(`server running on http://localhost:${PORT}`)
});

