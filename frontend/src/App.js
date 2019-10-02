import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';
import history from './services/history';
import './config/ReactotronConfig';
import { store, persistor } from './store';

import Header from '~/components/Header';

import GlobalStyles from './Styles/Global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyles />
          <ToastContainer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
