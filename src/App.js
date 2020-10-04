import React, { createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Landing from './components/Landing/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import VolunteerDashboard from './components/VolunteerDashboard/VolunteerDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';



export const UserContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path={["/home", "/"]}>
            <Landing></Landing>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home">
            <Landing></Landing>
          </Route>
          <PrivateRoute path={["/register/:eventId", "/register"]}>
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/events">
            <VolunteerDashboard></VolunteerDashboard>
          </PrivateRoute>
          <Route path="/admin">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
