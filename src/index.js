import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App/App';
//  import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers/index';
import thunk from './middleware/thunk';
import initState from './initState';

const store = createStore(reducers, initState,
  applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  reportWebVitals();
