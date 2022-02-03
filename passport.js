require('dotenv').config();
const User = require("./models/user");
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy
const passport = require("passport");

const MONGO_URL = process.env.MONGO_URL
const conn  = mongoose.createConnection(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})



passport.serializeUser((user, done) => {
    console.log("serializeUser")
    done(null, user._id);
  });
  
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then((user) => {
        done(null, user); // attach user object to the request as req.user
      })
      .catch((e) => {
        done(new Error("Failed to deserialize a user"));
      });
  });

passport.use(new LocalStrategy(function verify(name, password, done) {
conn.collection("users").findOne({name: name, password:password}, function(err,user){
if(err){return done(err); }
if(!user) {return done(null, false, {message: 'incorrect username or password.'})};
if(user.name==name && user.email==email && user.password==password){
    console.log(user)
    return done(null, user);
}


});
}))


