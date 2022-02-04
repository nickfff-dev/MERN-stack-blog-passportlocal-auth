require('dotenv').config();
const express = require('express')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('./models/user');





const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},
  ()=>{
    console.log("connected to mongo")
  }
  )



const PORT = process.env.PORT;
const MY_GMAIL = process.env.MY_GMAIL;
const MY_GMAIL_PASSWORD = process.env.MY_GMAIL_PASSWORD;




const app = express()
const port =  PORT || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({origin: "http://127.0.0.1:3000",methods: "GET,HEAD,PUT,PATCH,POST,DELETE",credentials: true, }));
app.use(session({ secret: "cookienomare", resave: true,  saveUninitialized: true}));
app.use(cookieParser("cookienomare"));



app.use(passport.initialize());
app.use(passport.session());
require('./passport')(passport);






























app.post('/login', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err)throw err;
    if(!user){res.send("No User Exists")}
    else if(user){
          req.logIn(user, err =>{
            if(err) throw err;
            res.send('Signin successfull')
            console.log(req.user)
          })

    }
  })

  (req, res, next);
  
})



app.post('/signup', (req,res)=>{

    const {userName,  password} = req.body;
    // check if user already exists
    User.findOne({userName : userName}, async (err, user)=>{
        if(err)  throw err
        else if(user){
            res.send("User already exists")

        }else if(!user){
          const hashedPassword = await bcrypt.hash(password, 10);
          const newUser = new User({
            userName: userName,
            password: hashedPassword
          });
          await newUser.save();
          res.send("Signup successfull")
        }
    })
})


app.get("/api/user", (req, res, next) => {
  
  res.send(req.user);
  next()
});

app.post("/api/logout", (req,res)=>{

  req.logout();
  res.send("Thank you for visiting illeagle")

})




app.post('/api/sendMessage', (req, res) => {
   
    const { name, email, message } = req.body
   
    const data = req.body
  
    console.log(req.body)
   
    
  

    const transporter = nodemailer.createTransport(smtpTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: MY_GMAIL,
          pass: MY_GMAIL_PASSWORD
        }
    }));

    const mailOptions = {
        from: data.email,
        to: MY_GMAIL,
        subject: `A Message from ${data.email}`,
        text: `
        Email: ${data.email}

        Name: ${data.name}

        Message: ${data.message}
        `
    };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.status(200).send('Send email successfully');
    console.log(res) 
});




app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})