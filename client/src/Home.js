import React from "react";
import Header from './Header';
import Bodytxt from './Bodytxt';

import Footer from './Footer';
import Contact from './Contact';
import Cardds from "./Cardds";
import './cardsdata'
import Mainfaqss from "./Mainfaqss";
import Featured from "./Featured";
import axios from "axios";



class Home extends React.Component{
 constructor(props){
     super(props)
     this.state={
         user: null
     }
 }



    componentDidMount(){
   axios("http://localhost:5000/", {    method: "GET",
   credentials: "include", // Fetch does not send cookies. So we need this line
   headers: {
     Accept: "application/json",
     "Content-Type": "application/json",
     "Access-Control-Allow-Credentials": true,
   },}).then((response) => {
    if (response.status === 200) console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });




    }
    render(){
        return(
            <div className="container-fluid">
                <Header/>

                <Featured/>
                <Bodytxt/>
                <Cardds />
                <Contact/>
                <Footer/>
                
               
                </div>

        )
    }
}

export default Home;