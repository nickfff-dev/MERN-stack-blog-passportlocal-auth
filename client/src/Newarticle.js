import React from 'react'
import './newart.css'


// this is the layout for each about article 

class Newarticle extends React.Component{
    constructor(props){
        super(props)
        // add the props of this component to be accesible from state
        this.state={
            title: this.props.title,
            body: this.props.body,
            image: this.props.image,
            src: this.props.src
        }
    }

    render(){
        return(
            <div className='container text-center'>
                <div className="row">
                    <h1>{this.state.title}</h1>
                    {/* title is read from state and displayed here */}
                </div>
                <div className='square'>
                    <div><img className='img-fluid' src={this.state.src} alt="abt image"/>
                    {/* image link is read from state and display here */}
                    </div>
                    {/* read the body from state body and loup through all parapgraphs in the body array and display them here */}
                    {this.state.body.paragraphs.map(para => (
                    <p>{para}</p>


                    ))}


                </div>

            </div>
        )
    }
}


export default Newarticle