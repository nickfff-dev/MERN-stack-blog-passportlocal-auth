const express = require('express')
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const cookieParser = require('cookie-parser')
const passport = require("passport");
const LocalStrategy = require('passport-local').Strategy;
const router = require("express").Router();





require('dotenv').config();
require('./passport')






const PORT = process.env.PORT;
const MY_GMAIL = process.env.MY_GMAIL;
const MY_GMAIL_PASSWORD = process.env.MY_GMAIL_PASSWORD;

const MONGO_URL = process.env.MONGO_URL


const app = express()
const port =  PORT || 5000;

const conn  = mongoose.createConnection(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})
require('./passport')(passport)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());






app.use(session({ secret: process.env.COOKIE_KEY, resave: true,  saveUninitialized: false, store: conn,cookie: {httpOnly: false, maxAge: 1000 * 60 * 60 * 24 * 90 },}));


// You need this so when you send a request from frontend with a different url like https://tranminhtri.com it won't throw CORS errors



app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(cors({origin: "http://localhost:3000",methods: "GET,HEAD,PUT,PATCH,POST,DELETE",credentials: true, }));





app.get("/", (req, res) => {
  
  
  res.status(200).send(req.user );
});









app.post('/api/login',
passport.authenticate("local", {failureRedirect: '/'}),
 (req,res)=>{
   

 
        
          res.status(200).send({message: 'Login successfull', user: req.user});
         

 }
)



app.post('/api/signup', (req,res)=>{

    const {name, email, password} = req.body;
    // check if user already exists
    conn.collection('users').findOne({name : name, email: email}, (err, user)=>{
        if(err)  {res.status(404).send(err)}
        else if(user){
            res.status(200).send("User already exists")

        }else{
            conn.collection('users').insertOne({name: name, email: email, password: password}, (err, result)=>{
                if(err) {res.status(404).send(err)};
                console.log(result)
                res.status(200).send('Signup successfull')
            })
        }
    })
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