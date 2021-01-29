import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import plLocale from 'date-fns/locale/pl';

import theme from './theme/theme';

import { exampleReducer } from './store/reducers/example';

import DateFnsUtils from '@date-io/date-fns';

import App from './App';
import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({ exampleReducer });

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <MuiThemeProvider theme={theme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>
                        <App />
                    </MuiPickersUtilsProvider>
                </MuiThemeProvider>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
