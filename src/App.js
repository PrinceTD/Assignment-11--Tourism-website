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

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/service">
              <Services></Services>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/contact">
              <Contacts></Contacts>
            </Route>
            <Route path="/addNewService">
              <AddNewPlace></AddNewPlace>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
