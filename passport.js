require('dotenv').config();
const User = require("./models/user");
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy
const passport = require("passport");

const MONGO_URL = process.env.MONGO_URL
const conn  = mongoose.createConnection(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})


passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  conn.collection('users').findOne(
      {_id: new ObjectID(id)},
      (err, user) => {
        if(err){
          console.log(err)
        }
        done(null, user);
      }
  );
});


passport.use(new LocalStrategy({ usernameField: 'email'},function verify(name, email, password, done) {
conn.collection("users").findOne({ name: name, email: email, password:password   }, function (err, user) {
  if (err) { return done(err); }
  if (!user) { return done(null, false); }
  if (!user.verifyPassword(password)) { return done(null, false); }
  return done(null, user);
});
}
));

