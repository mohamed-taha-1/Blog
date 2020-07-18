import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request=>{
    console.log(request);
    // edit the request confid
    return request;
},error=>{
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(response=>{
    console.log(response);
    // edit the request confid
    return response;
},error=>{
    console.log(error);
    return Promise.reject(error);
}
);


axios.defaults.baseURL='https://jsonplaceholder.typicode.com';


axios.defaults.headers.post['Content-Type']='application/json';

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
