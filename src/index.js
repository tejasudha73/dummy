import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Route,IndexRoute,  browserHistory } from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import store from './store';
import Home from './containers/home/home';
import Summary from './containers/summary/summary';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
   	
    	<Router history = {history}>
	   	  <Route path = "/" component = {App}>
	   	   	<Route path = "/summary" component = {Summary} />
	   	   	<IndexRoute component = {Home} />
	   	  </Route>
	   	 </Router>
    </Provider>, 
document.getElementById('root'));

registerServiceWorker();
