import React  from 'react';
import Signup from './Signup';
import Signin from './Signin';
import Home from './Home';
import Mainfaqss from "./Mainfaqss";
import Blog from "./Blog";
import BlogArticle from "./BlogArticle";
import cardsdata from "./cardsdata";
import newart from "./newart";
import Newarticle from "./Newarticle";
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';






class App extends React.Component {
  constructor(props){
    super(props)
    // add the two files for blog articles and about articles to state
    this.state = {
      posts: cardsdata,
      cards: newart,

  }
    this.tuja = this.tuja.bind(this)

  }


  
  
// define the function to convert the title to a path
  tuja(smtxt){
      var moto = encodeURIComponent(smtxt)


      var uri  = `/${moto}`
      console.log(uri)
      return uri


  }
  
  render(){
   
    return ( 
    
      
       
        
         <Router>
           
        
           <Routes>
          {/* iterate through the cardsdata file in state posts and assign route to every blog article */}
           {this.state.posts.map(post => (
                         
                        
                         <Route key={post.id} exact path={this.tuja(post.title)} element={<BlogArticle key={post.id} title={post.title} body={post.body} author={post.author} date={post.date} src={post.src}/>} />
                     

                     
                 ))}

            

       
      <Route exact path="/blog" element={<Blog/>} />
       <Route exact path="/faqs"  element={<Mainfaqss/>} /> 
        <Route exact path="/"   element={<Home /> } />
        <Route exact path="/signup"  element={< Signup />} />
        
        <Route exact path="/signin"  element={<Signin />} />
        {/* iterate through the cards data in state cards  and assign route to every card article*/}
        {this.state.cards.map(card => ( <Route key={card.id} exact path={this.tuja(card.title)} element={<Newarticle key={card.id} title={card.title} body={card.body}  src={card.src}/>} />))}
       </Routes>
        </Router>
      
    
    )
  }
}

export default App;
