import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './Routes';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<App>
				<Routes />
			</App>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
