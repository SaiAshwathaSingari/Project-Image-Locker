const express = require('express');





const port = 5000;
const app = express();
const mongoose = require('mongoose');
app.use(express.json());




require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


app.listen(port, () => {  console.log(`Server is running on http://localhost:${port}`); });
