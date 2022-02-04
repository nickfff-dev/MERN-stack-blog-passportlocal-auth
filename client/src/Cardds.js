import React  from 'react'
 
import './card.css'
import {Link} from 'react-router-dom'



class Cardds extends React.Component{

constructor(props){
  super(props)


  this.tuja = this.tuja.bind(this)
}

// define function tuja that takes a string and converts  to link
tuja(smtxt){
  var moto = encodeURIComponent(smtxt)
  // use this to get the link


  var uri  = `/${moto}` 
  // append / to the link
  console.log(uri)
  return uri


}




render()
{
return(

<div className='row yan'> 
<div className="cards">

<div className="card content">
    <div className="card-content">
      <div className="card-img">
        <img src="https://source.unsplash.com/900x300/?cryptocurrency" alt="Gamer"/>
      </div>
      <div className="card-label">Crypto News</div>
     <Link to={this.tuja("initaly i wasnt aware?")}> <div className="card-title">
        stay ahead with latest news in cryptocurrency
      </div> </Link>
      {/* add link to title,, link is generated with function tuja */}
    </div> 
  </div>

  <div className="card content">
    <div className="card-content">
      <div className="card-img">
        <img src="https://source.unsplash.com/900x300/?bitcoin" alt="bitcoin"/>
      </div>
      <div className="card-label">
        Bitcoin
      </div>
      <Link to={this.tuja("first of all")}>  <div className="card-title">
        Bitcoin Mining: the future
      </div></Link>
      {/* add link to article from the function tuja */}
    </div>
  </div>
  <div className="card content">
    <div className="card-content">
      <div className="card-img">
        <img src="https://source.unsplash.com/900x300/?ethereum" alt="ethereum"/>
      </div>
      <div className="card-label">
        Ethereum
      </div>
      <Link to={this.tuja("finalwork")}> <div className="card-title">
        Ethereum what lies ahead
      </div> </Link>
      {/* link card title to the corresponding article using the generated url  */}
    </div>
  </div>
  <div className="card form">
    <Link to="/signup"><div className="form-title">Sign Up</div></Link> 
    {/* add signup link to signupcard in front page */}
  </div>
</div>


</div>






)}
}


export default Cardds
