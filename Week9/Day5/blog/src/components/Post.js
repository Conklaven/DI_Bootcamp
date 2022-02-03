import {connect} from 'react-redux'
import {deletePost} from '../actions/Actions'



const Post = (props) => {
    function handleClick (e){
        let filtered = props.posts.filter(function(ele){ 
             return ele.id != e; 
            });
        

       deletePost(filtered)
       console.log(props.posts)
    }
    return(
        <>

            <div><h1>{props.post.title}</h1></div>
            <h3>{props.post.body}</h3>
            <button onClick={()=>handleClick(props.id)}></button>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state.selected)
    // const { visibilityFilter } = state
    // const { id } = ownProps
    // console.log(ownProps)
    // console.log()
    return {
        posts: state.posts,
        post: state.selected,
        id: state.selected.id
    }
    }
    const mapDispatchToProps =(dispatch)=>{
        console.log("test")
        return{
          deletePost: (e) => dispatch(deletePost(e)),
        }
        }


export default connect(mapStateToProps, mapDispatchToProps)(Post)