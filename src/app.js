require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', jobRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});