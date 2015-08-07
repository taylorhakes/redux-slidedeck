import React from 'react';
import App from './containers/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';

const reducer = combineReducers(reducers),
	store = createStore(reducer);

React.render(
	<Provider store={store}>
		{() => <App />}
	</Provider>
	, document.getElementById('root'));
