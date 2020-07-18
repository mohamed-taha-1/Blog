import React, { Component } from 'react';
import  {Route,NavLink,Switch,Redirect} from 'react-router-dom';
import './Blog.css';
import Posts from '../Blog/posts/posts';
// import NewPost  from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost=asyncComponent(()=>{
    return import('./NewPost/NewPost');
});


class Blog extends Component {

    render () {
        
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts/" exact
                                activeClassName="my-active" 
                                activeStyle={{
                                    color:'#fa923f',
                                    textDecoration:'underline ',
                                   
                                }}>Posts</NavLink>
                                
                            </li>
                            <li>
                                 <NavLink to="/new-post" >New Post</NavLink>

                            </li>
                        </ul>
                    </nav>
                </header>
                
                
                <Switch>

                    
                    <Route   path="/new-post"   component={AsyncNewPost} />
                    <Route   path="/posts"  component={Posts} />
                    <Route  render={()=><h1  style={{textAlign:'center'}}>Page NOT  Found</h1>} />
                    <Redirect from="/" to="/posts" />
                    
                    
                </Switch>
             
             
            </div>
        );
    }
}

export default Blog;