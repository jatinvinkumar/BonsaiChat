
import React, {useEffect  } from 'react';
import './App.css';
import Chat from './Chat';
import Home from './Home';
import firebase from 'firebase'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyDzr-TJy0u9P-4ptFo98D0CiPmKh6F_JNc",
      authDomain: "bonsai-650c6.firebaseapp.com",
      databaseURL: "https://bonsai-650c6.firebaseio.com",
      projectId: "bonsai-650c6",
      storageBucket: "bonsai-650c6.appspot.com",
      messagingSenderId: "612219669058",
      appId: "1:612219669058:web:375f6e15ccb6dac2f7bbdb",
      measurementId: "G-MT2F6H7FSC"
    };
    firebase.initializeApp(firebaseConfig)
  }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


  return(
    <Router >
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
