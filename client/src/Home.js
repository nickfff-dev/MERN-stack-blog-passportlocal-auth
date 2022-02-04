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
   axios({
     method: 'get',
     withCredentials: true,
     url:"http://localhost:5000/user"
  })
  .then(res => {
    console.log(res.data);
    this.setState({user: res.data});
  })
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