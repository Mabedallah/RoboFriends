import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import './index.css';
import App from './containers/App';
import 'tachyons';
import {searchRobots} from './reducers'
import registerServiceWorker from './registerServiceWorker';


const logger = createLogger();
const store = createStore(searchRobots ,applyMiddleware(thunkMiddleWare, logger) +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
	<Provider store = {store}>
	<App  />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
