import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';



export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register/:id">
            <Register></Register>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
