import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App path='/' render={App}/>
  </Router>,
  document.getElementById('root'));
