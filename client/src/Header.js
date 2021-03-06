import React from "react";
import {Link} from "react-router-dom";
import axios from 'axios';







class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user: ""
        }

        this.openSideDrawer = this.openSideDrawer.bind(this)
        this.closeSideDrawer = this.closeSideDrawer.bind(this)
        this.logoutHandler = this.logoutHandler.bind(this)

}





openSideDrawer() {
    document.getElementById("side-drawer").style.left = "0";
    document.getElementById("side-drawer-void").classList.add("d-block");
    document.getElementById("side-drawer-void").classList.remove("d-none");
}
closeSideDrawer() {
    document.getElementById("side-drawer").style.left = "-336px";
    document.getElementById("side-drawer-void").classList.add("d-none");
    document.getElementById("side-drawer-void").classList.remove("d-block");
}
componentDidMount(){
   if(this.state.user === ""){
       (async () =>{

        try{
            const user = await this.getUser();
            this.setState({user: user})

        } catch(e){
            console.log(e)
        }
       })()
   }
     }

async getUser(){
    const res = await axios('/api/user',{method: 'get', withCredentials: true});
    return res.data;

}


logoutHandler(e){
    var data = this.state.user
   if (data === "") {
       alert("You are not logged in")
       e.target.classList.add("text-muted");

   } else {

    axios.post('/api/logout', data).then(res => {
        if(res.data === "Thank you for visiting illeagle"){
            alert("Sad to c u leave, see you soon")
            this.setState({user: ""})
            window.location.href = '/'
        } else{
            alert("Error try again")
        
        }
    })}
}



render(){
    return(
        <div className="row heads"> 
            <div className="col-sm-3"> 
                <button className="menu"  type="button" onClick={this.openSideDrawer}> 
                    <i className="fas fa-bars"></i>
                </button>

            </div>
            <div className="col-sm-6 pl-4">
                <ul className="topmenu ">




                    <li>
                        
                        <Link to="/"><span className="border-left p-2 border-dark border-dark ">Start</span></Link> 
                        
                        
                    </li> 

                    <li><Link to="/faqs"><span className="border-left  p-2 border-dark">About us</span></Link>  
                        
                    </li>

                    <li>
                        <div className="dropdown ">  
                            <span className="dropbtn border-left p-2 border-dark">dropdown</span>
                            <div className="dropdown-content">
                                <Link to="/faqs">faq</Link>
                                <Link to="/faqs" >faq</Link>
                            </div>
                        </div>
                        
                    </li>



                    <li><Link to="/faqs"><span className="border-left p-2 border-dark">Faq</span></Link>
                        
                    </li>

                    <li><Link to="/blog" ><span className="border-left p-2 border-dark">Blog</span></Link> 
                        
                    </li>

                    <li> <Link to="/faqs" ><span className="border-left p-2 border-dark">Contact us</span></Link> 
                        
                    </li>

                    <li> <Link to="/faqs" > <span className="border-left p-2 border-dark">End your Baldness</span></Link> 
                        
                    </li>

                </ul>

            </div>
            <div className="col-sm-3 drp"> 
                <div className="dropdown"> 
                    <button className="dropbtn " aria-labelledby="navbarDropdown"> {this.state.user !== "" ? <span> {this.state.user.userName}</span> : <Link to="/signin"><span> Login</span></Link>}</button> 
                    <div className="dropdown-content drp2"> 
                    {this.state.user !== "" ? <span> already loggedin</span> : <Link to="/signin"><span> Login</span></Link>}
                    {this.state.user !== "" ? <span> account active</span> : <Link to="/signup"><span> Create Account</span></Link>}
                        <span className="text" type="button" onClick={this.logoutHandler}> Log out</span>
                    </div>
                </div>
            </div> 
                
           
            <div id="side-drawer" className="position-fixed">
                <div className="h-100 bg-white">
                   
                    <div className="p-4 modalhome">
                        <Link to="/faqs" >
                            <h1 className="text-white">Home</h1>
                        </Link>
                    </div>
                 
                    <ul id="links" className="list-group" onClick={this.closeSideDrawer}>
                    <Link to='/faqs' id="link-structure" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Start</Link>
                        <Link to='/faqs' id="link-css" 
                            className="list-group-item list-group-item-action border-0 rounded-0">News</Link>
                       <Link to='/faqs' id="link-javascript" 
                            className="list-group-item list-group-item-action border-0 rounded-0">.Net</Link>
                        <Link to='/faqs' id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page</Link>
                      <Link to='/faqs' id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page2</Link>
                      <Link to='/faqs' id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0">Demo Page3</Link>
                        <Link to='/faqs' id="link-customization" 
                            className="list-group-item list-group-item-action border-0 rounded-0 active">Close Sidebar</Link>


                    </ul>
                </div> 
            </div> 
          
        </div> 
    )
}
}


export default Header