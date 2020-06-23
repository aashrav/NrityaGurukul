import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';

import LogIn from  './Pages/LogIn/LogIn';
import Home from './Pages/Home/Home';
import Files from './Pages/Files/Files';

const Routing = ({appProps}) => {
  var routes = [
    {
      Component: LogIn,
      path: '/login',
    },
    {
      Component: Home,
      path: '/',
    },
    {
      Component: Files,
      path: '/files',
    },
  ]
  return(

    <Router>
      <Switch>
      {routes.map(({path, Component},index) => {
        return <Route
        {...console.log("Routing:",Component)}
          key = {index}
          exact
          path = {path}
          render = {(props) =>{
            return <NavbarWrapper component = {Component} {...props} {...appProps}></NavbarWrapper>
          }}       
       />
      })
      }
      </Switch>
    </Router>
  )
 }

 export default Routing;