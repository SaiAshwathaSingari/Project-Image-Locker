require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./model/UserModel"); // your Mongoose model
const { findOrCreateUser } = require("./controllers/UserController");

passport.serializeUser((user, done) => {
  // Save MongoDB user _id to session
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    // Load user from DB using the id stored in session
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Use controller to store user in DB if not exists
        const user = await findOrCreateUser(profile);
        done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

module.exports = passport;
