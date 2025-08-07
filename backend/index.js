require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const passportStrategy = require('./passport'); // Your local passport setup
const authRoute = require('./routes/auth');     // Your /auth route

const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Middlewares
app.use(express.json());

app.use(cookieSession({
  name: 'session',
  keys: ['cyberwolve'],
  maxAge: 24 * 60 * 60 * 1000, // 1 day
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

// Routes
app.use('/auth', authRoute);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
