import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from "react-redux"
import store from "./store/Store"




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
