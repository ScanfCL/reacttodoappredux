import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/todolist';
import Headers from './components/Header';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom'
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={configureStore()}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
