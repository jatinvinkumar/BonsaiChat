
import React, {useEffect, useContext, useSelector  } from 'react';
import './App.css';
import Chat from './Chat';
import Home from './Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StartMessages from './StartMessages';
import { Provider } from 'react-redux'
import { FirebaseContext } from './firebase/firebase';
import Loader from './Loader';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },});

function App(props) {

  const { app, api } = useContext(FirebaseContext);
    // you can access todos from the Redux store

    useEffect(( ) => {
        }, [])

  return(
        <ThemeProvider theme={theme}>
          <Router >
            <div>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/initiate">
                  <StartMessages />
                </Route>
                <Route path="/chat/:id" render={(props) => (
                  <Chat key={props.match.params.id} {...props} />)
                } />
                
                <Route path="/loader/:id" component={Loader}/> 
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
  )
}

export default App;
