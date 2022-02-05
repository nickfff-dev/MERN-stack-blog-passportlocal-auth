import React from 'react';
import './auth.css'
import axios from 'axios'


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
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
            username: this.state.username,
            password: this.state.password

        }
        
        axios.post('/login', data)
        .then((res)=>{
            if (res.data === "Signin successfull") {
                _this.changeLoggedIn()
                alert("Signin successfull")
                window.location.href = '/'
               } else if(res.data === "No User Exists") {
                alert("user doesnt exist please signup")
                window.location.href = '/signup'
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
            username: event.target.value
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
            username: '',
           
            password: ''
        })
    }


render(){
     
    return(
     
      
                <form id="login-form" onSubmit={this.handleSubmit} method='POST'>
        <h3>Sign In</h3>

        <div className="form-group">
            <label>user name</label>
            <input type="text" name="username" className="form-control" placeholder="Enter username" onChange={this.usernameChange} value={this.state.username} />
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
            Forgot <a href="/signup">password?</a>
        </p>
    </form>
     
     
               
           

       
    )
}

}

export default Signin