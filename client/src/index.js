import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {thunk} from 'redux-thunk';

/*ReactDOM consists of two parameters:
    1st argument - root component
    2nd argument - where that component will be rendered to.

ReactDOM.render = (<App />, document.querySelector('#root'));
This ReactDOM function isn't working for me - probably because it is deprecated. 

react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 

*/

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
const store = createStore(reducers, {}, applyMiddleware(thunk));
/*
first argument - no. of different reducers. 
*/
root.render(<Provider store = {store}><App /></Provider>); 