import React from 'react'



class Footer extends React.Component{
   
    render(){
        return(
            <div className="row chini">
                    <div className="col-sm-3">
                        
                    </div>
                    <div className="col-sm-8 footer">
                        
                            <div className="row footertxt"> 
                
                                <a  href="https://www.w3schools.com"
                                    id="fineprint">PRQ, Box 1092, S-172 22 Sundbyberg / info@prq.se </a>   
                
                                <a  href="https://www.w3schools.com"
                                    id="fineprint">TinyHats, Cube 1092, S-172 22 Sweden / money@tinyhats.se</a>
                
                                
                                <button id="back-to-top"  className="btn btn-light btn-lg back-to-top" ><i className="fas fa-chevron-up"></i></button> 
                            </div>
                
             
                            
                          
                        
                    </div>
                    
                </div>
        )
    }
}

export default Footer