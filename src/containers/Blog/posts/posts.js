import React, { Component } from 'react';
 import {Route} from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
import './Posts.css';
class Posts extends Component
{
    state={
        posts:[],
       
    }

    postSelectHandeler=(id)=>{
        this.props.history.push('/posts/'+id);
    }

    componentDidMount(){

        axios.get('/posts')
        .then(response=>{
            const posts=response.data.slice(0,4);
            const updatePosts = posts.map(post=>{
                return{
                    ...post,
                    author:'mohamed taha'
                }
            })
            this.setState({posts:updatePosts})
            // console.log(response);
        })
        .catch((error)=>{
             console.log(error);
            // this.setState({error:true});

        });
    }

    render()
    {
        let posts=<p style={{textAlign:'center'}}>some thing caused error </p>;
        if(!this.state.error){

            posts=this.state.posts.map(post=>{
                return(
                // <Link to={'/'+post.id}   key={post.id}  >
                    <Post 
                    Author={post.author} 
                    title={post.title}
                    clicked={()=>this.postSelectHandeler(post.id)}/>
                //   </Link>
                  );
            })
    
        }
       
        return(
            <div>
                  <section className="Posts" >
                    {posts}
                </section>
                <Route  path={this.props.match.url+'/:id'}  exact component={FullPost}/>
              
            </div>
           
        );
    }
}

export default Posts;