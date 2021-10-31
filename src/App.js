import './App.css';
import Home from './Componets/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Services from './Page/Service/Services';
import About from './Page/About/About';
import Login from './Page/Login/Login';
import Contacts from './Page/contacts/Contacts';
import AddNewPlace from './Page/Service/AddNewPlace';
import AuthProvider from './Context/AuthProvider';
import PrivetRout from './PrivetRoute/PrivetRout';
import Notfound from './NotFound/Notfound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivetRout path="/service">
              <Services></Services>
            </PrivetRout>
            <Route path="/about">
              <About></About>
            </Route>

            <PrivetRout path="/contact">
              <Contacts></Contacts>
            </PrivetRout>
            <PrivetRout path="/addNewService">
              <AddNewPlace></AddNewPlace>
            </PrivetRout>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
