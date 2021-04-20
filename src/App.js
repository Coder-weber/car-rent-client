import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddDoctor from './components/AddDriver/AddDriver';
import AddDriver from './components/AddDriver/AddDriver';
import NotFound from './components/NotFound/NotFound';
import AllCustomers from './components/AllCustomers/AllCustomers/AllCustomers';
import Review from './components/Review/Review';
import Services from './components/Home/Services/Services';
import AddSerices from './components/Services/AddSerives/AddSerices';
import BookingCard from './components/Appointment/BookingCard/BookingCard';
import Manage from './components/Dashboard/Manage/Manage';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/allCustomers">
        <AllCustomers></AllCustomers>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage></Manage>
          </PrivateRoute>
          <PrivateRoute path="/services/:id">
            <BookingCard></BookingCard>

          </PrivateRoute>
          <Route path="/addDriver">
            <AddDriver></AddDriver>
          </Route>
          <Route path="/addService">
            <AddSerices></AddSerices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/customer">
            <Review></Review>
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
