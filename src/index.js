import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';

const firebaseConfig = {
  apiKey: "AIzaSyAZ1Nle1Xr__i52_UGfJqzSZpDJPhERETY",
  authDomain: "web-messenger-686fe.firebaseapp.com",
  databaseURL: "https://web-messenger-686fe.firebaseio.com",
  projectId: "web-messenger-686fe",
  storageBucket: "web-messenger-686fe.appspot.com",
  messagingSenderId: "355471261353",
  appId: "1:355471261353:web:2a1ab405d09a7eddee73b8",
  measurementId: "G-9VNVL0GZ80"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);
