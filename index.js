import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'

// main app
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStoreWithMiddleware(reducers)}><App /></Provider >,
    document.getElementById('app'));