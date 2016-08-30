import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './components/App';
import routes from './routes';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';

const store = createStore(
	(state = {}) => state,
	applyMiddleware(thunk)
);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, document.getElementById('app'));