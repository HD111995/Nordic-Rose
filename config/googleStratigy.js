const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require("dotenv").config()



passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)

  }
));