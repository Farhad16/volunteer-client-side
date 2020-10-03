import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/Landing/Landing';



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
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
