require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});