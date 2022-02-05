import React from "react";
import Header from './Header';
import Bodytxt from './Bodytxt';

import Footer from './Footer';
import Contact from './Contact';
import Cardds from "./Cardds";
import './cardsdata'

import Featured from "./Featured";




class Home extends React.Component{
 constructor(props){
     super(props)
     this.state={
         user: null
     }
 }

  


   
    render(){
        return(
            <div className="container-fluid">
                <Header />

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