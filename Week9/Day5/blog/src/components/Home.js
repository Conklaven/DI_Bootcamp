import React, {Component} from 'react';
import {connect} from 'react-redux'
import blog from '../blog.png'
import "tachyons"
import {insert} from '../actions/Actions'

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Home extends Component {
    constructor() {
        super();
        this.state = {
           
        }
    }

    
    render(props){
        console.log(this.props.posts.length)
        let posts = (this.props.posts.length > 0) ? this.props.posts: [];
        
        return(
           
            <>
            <div className="blogPosts">
            {this.props.posts.map((item, i)=>{
                let url = `/${item.id}`
                let id = item.id
                console.log(id)

            return( 
                <Link to={url} onClick={()=>this.props.insert(item)}>
            <article className="bg-white center mw5 ba b--black-10 mv4">
                <div className="pv2 ph3">
                    <h1 className="f6 ttu tracked">{item.title}</h1>
                </div>
                <img src={blog} className="w-100 db" alt="Closeup photo of a tabby cat yawning."/>
                <div className="pa3">
                    <small className="gray db pv2">AMP - <time>6 hours ago</time></small>
                </div>
            </article>
            </Link>
            )})}
            </div>
            </>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        posts: state.posts,
        id : state.selected
    }
    }
    const mapDispatchToProps =(dispatch)=>{
    return{
      insert: (data) => dispatch(insert(data)),
    }
    }

  export default connect(mapStateToProps, mapDispatchToProps)(Home);
