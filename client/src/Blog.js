import React from 'react';
import Posts from './Posts';
import carddata from './cardsdata';
import Header from './Header';
import Footer from './Footer';
import './Posts.css'

// this is the blog page that renders cards for all the avilable posts in the file
class Blog extends React.Component{
    constructor(props){
        super(props)
        // read the imported data file carddata and assign it to state making it available to our component
        this.state = {
            posts: carddata
        }
    }
    render(){
       return(
        <div className='container-fluid'>
            <Header/>
            {/* render the header in this standalone page */}

        <div className='container'>
        <div className='row'>
            {/* loop through the data file and render each post with its relevant props */}
            {this.state.posts.map(post => (
                
                    <Posts key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>


                
            ))}
        </div>
        </div>
        <Footer/>
        {/* render the footer in this stand alone page */}

    </div>
       )
    }



}

export default Blog;