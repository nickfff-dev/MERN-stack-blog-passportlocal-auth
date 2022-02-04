import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// this component is the layout for the one full blog article
class BlogArticle extends React.Component{
    constructor(props){
        super(props)
        // asign the article props to state
        this.state = {
            title: this.props.title,
            body: this.props.body,
            author: this.props.author,
            date: this.props.date,
            src: this.props.src,
            meta: this.props.meta

        }
    }

   render(){
       return (
           <div className="container-fluid ">
               <Header />
                {/* render the header in this standalone page */} 
                <div id="intro" className="p-3 text-center">
    <h1 className="mb-0 h4 artti">{this.props.title}</h1>
    {/* add the title from the state */}
</div>
<div className="mt-4 mb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8  mb-4">
                <section className="border-bottom mb-4">
                    <img src={this.props.src} className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />
                    {/* add the image link from the state */}

                    <div className="row align-items-center mb-4">
                        <div className="col-lg-6 meta text-center text-lg-start mb-3 m-lg-0">

                            <span className="p-3"> Published <u className="p-3">{this.props.date}</u> by</span>
                            {/* add the date from the state */}
                            <span >{this.props.author}</span>
                            {/* add the author from the state */}
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <button type="button" className="btn btn-primary px-3 me-1"
                                style={{backgroundColor: "#3b5998" }}>
                                <i className="fab fa-facebook-f"></i>
                            </button>
                            <button type="button" className="btn btn-primary px-3 me-1"
                                style={{backgroundColor: "#55acee" }}>
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button type="button" className="btn btn-primary px-3 me-1"
                                style={{backgroundColor: "#0082ca" }}>
                                <i className="fab fa-linkedin"></i>
                            </button>
                            <button type="button" className="btn btn-primary px-3 me-1">
                                <i className="fas fa-comments"></i>
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    {this.state.body.paragraphs.map(para => (
                    <p>{para}</p>


                    ))}

                    {/* loop through body and display each paragraph */}

                </section>
                <section className="text-center border-top border-bottom py-4 mb-4">
                    <p><strong>Share with your friends:</strong></p>

                    <button type="button" className="btn btn-primary me-1" style={{backgroundColor: "#3b5998" }}>
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button type="button" className="btn btn-primary me-1" style={{backgroundColor: "#55acee" }}>
                        <i className="fab fa-twitter"></i>
                    </button>
                    <button type="button" className="btn btn-primary me-1" style={{backgroundColor: "#0082ca" }}>
                        <i className="fab fa-linkedin"></i>
                    </button>
                    <button type="button" className="btn btn-primary me-1">
                        <i className="fas fa-comments me-2"></i>Add comment
                    </button>
                </section>

               
            </div>
        </div>
    </div>
</div>
 <Footer/>

           </div>
       )
   }





}

export default BlogArticle;