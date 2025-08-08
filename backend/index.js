require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

require("./passport"); // Passport config
const authRoute = require("./routes/auth"); // Routes

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection (optional if you use DB)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors({
  origin: process.env.CLIENT_URL,   // frontend URL e.g. http://localhost:5173
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: "your_secret_key_here", // use env variable in production
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
