import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals'

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { createPromise } from 'redux-promise-middleware'

import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(
	rootReducer,
	applyMiddleware(createPromise(), thunk, createLogger())
);

// + Provider: 
// - Tüm Redux ın projemizde dahil olabilmesi için oluşturmuş olduğumuz Provider özelliğini App Componenti dışına ekliyoruz. 
// - Ayrıca oluşturmuş olduğumuz store un her yere ulaşabilmesi için Provider yapısına store ekliyoruz.

// + Router yapısı: Tüm projenin router'ı görebilmesi için bu kısımda provider üzerinde sarmaladık.
ReactDOM.render(
    <BrowserRouter> 
      <Provider store={store}> 
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
