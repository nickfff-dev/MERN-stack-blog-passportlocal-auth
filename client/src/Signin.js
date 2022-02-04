import React from 'react';
import './auth.css'
import { Fragment } from 'react';
import axios from 'axios'
import App from './App';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: '',
    //   email: '',
      password: '',
      loggedin: false,
        user: null
     
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameChange = this.usernameChange.bind(this);
    // this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.changeLoggedIn = this.changeLoggedIn.bind(this);
}   
   changeLoggedIn(){
         this.setState({
              loggedin: true
         })

         console.log(this.state.loggedin)

   }

 
    handleSubmit(event) {
        event.preventDefault();
        const _this = this
        
        
        const data ={
            userName: this.state.userName,
            password: this.state.password

        }
        
        axios.post('/login', data)
        .then((res, error)=>{
            if (res.data === "Signin successfull") {
                _this.changeLoggedIn()
                alert("Signin successfull")
               } else if(res.data === "No User Exists") {
                alert("user doesnt exist please signup")
            }
            else{
                console.log(res.data)
            }
        
        
        
        }).catch((err)=>{
            console.log(err)
        }).catch(function (error){
            console.log(error)
        })
        this.resetForm()

        
    }

    usernameChange(event){
        this.setState({
            userName: event.target.value
        })
    }

    // emailChange(event){
    //     this.setState({
    //         email: event.target.value
    //     })
    // }

    passwordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    resetForm(){
        return this.setState({
            userName: '',
           
            password: ''
        })
    }


render(){
     
    return(
     
      
                <form id="login-form" onSubmit={this.handleSubmit} method='POST'>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>user name</label>
            <input type="text" name="userName" className="form-control" placeholder="Enter username" onChange={this.usernameChange} value={this.state.userName} />
        </div>
{/* 
        <div className="form-group">
            <label>Email address</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.emailChange} value={this.state.email} />
        </div> */}

        <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.passwordChange} value={this.state.password} />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
    </form>
     
     
               
           

       
    )
}

}

export default Signin