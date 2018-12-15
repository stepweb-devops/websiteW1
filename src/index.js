import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import ScrollToTop from './components/ScrollToTop';

import './utilities/env';

import store from './store';

import * as serviceWorker from './serviceWorker';

import './index.scss';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <Provider store={store}>
                <App />
            </Provider>
        </ScrollToTop>
    </Router>,

    document.getElementById('root')
);

serviceWorker.unregister();
