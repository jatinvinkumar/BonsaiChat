import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import FirebaseProvider from './firebase/firebase'
import rootReducer from './reducers/rootReducer'

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <>
    <header>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
    </header>
    <Provider store={store}>
      <FirebaseProvider>
        <App />
      </FirebaseProvider>
  </Provider>
    
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
