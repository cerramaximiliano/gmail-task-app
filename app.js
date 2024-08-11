const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskScheduler = require('./tasks/taskScheduler');
const routes = require('./routes/indexRoutes');


dotenv.config();
connectDB();
const app = express();

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
