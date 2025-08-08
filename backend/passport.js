require("dotenv").config();

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Simple in-memory user store (for demo)
const users = new Map();

passport.serializeUser((user, done) => {
  done(null, user.id); // Save only user id to session
});

passport.deserializeUser((id, done) => {
  const user = users.get(id) || null;
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
},
(accessToken, refreshToken, profile, done) => {
  // Save user profile into memory by id
  users.set(profile.id, profile);
  done(null, profile);
}));
