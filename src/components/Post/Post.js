import React from 'react';
// import {withRouter} from 'react-router-dom';
import './Post.css';

const post = (props) => {
    
    return(
        <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info" key={props.id}>
            <div className="Author">{props.Author}</div>
        </div>
       </article>
    );
 
};

export default  post;