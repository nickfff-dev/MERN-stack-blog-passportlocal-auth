require('dotenv').config();
const User = require("./models/user");

const LocalStrategy = require('passport-local').Strategy

const bcrypt = require('bcrypt');


module.exports = function(passport) {
passport.use(new LocalStrategy((userName, password, done) =>{
  console.log(userName, password)
  User.findOne({userName: userName}, (err, user) => {
    if(err)throw err
    if(!user){return done(null, false)}
    bcrypt.compare(password, user.password, (err, result) => {
      if (err)throw err
      if(result === true){
        return done(null, user)
      }else{
        return done(null, false)
      }
    })

  })


})

)

passport.serializeUser((user, cb) => {
  cb(null, user.id)

})

passport.deserializeUser((id, cb) => {
  User.findOne({_id: id}, (err, user) => {
   
    cb(err, user)
  })
})





}

