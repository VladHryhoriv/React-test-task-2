import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Component/Users/userSlice';
import Preloader from './Component/Common/Preloader';
import './i18next'

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={(<Preloader/>)}>
          <App />
        </Suspense>
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

