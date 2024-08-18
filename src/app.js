require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes');
const dotenv = require('dotenv').config();
const winston = require('winston');
const expressWinston = require('express-winston');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.json());

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
  )
}));

app.use('/api', jobRoutes);

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json(),
  )
}));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});