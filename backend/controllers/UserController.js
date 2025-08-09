const User = require("../model/UserModel");

/**
 * Find or create user from Google OAuth profile
 */
const findOrCreateUser = async (profile) => {
  try {
    // Check if user already exists
    let user = await User.findOne({ googleId: profile.id });

    if (user) {
      // Update last login timestamp
      user.lastLogin = Date.now();
      await user.save();
      return user;
    } else {
      // If not found, create a new user
      const newUser = new User({
        googleId: profile.id,
        email: profile.emails && profile.emails[0].value,
        displayName: profile.displayName,
        firstName: profile.name?.givenName,
        lastName: profile.name?.familyName,
        image: profile.photos && profile.photos[0].value,
        createdAt: Date.now(),
        lastLogin: Date.now()
      });

      user = await newUser.save();
      return user;
    }
  } catch (err) {
    console.error("Error in findOrCreateUser:", err);
    throw err;
  }
};

module.exports = {
  findOrCreateUser
};


