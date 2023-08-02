import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Gallery from '../src/Pages/Gallery/Gallery';

const Routing = ({appProps}) => {
  var routes = [
    {
      Component: Home,
      path: '/',
    },
    {
      Component: Contact,
      path: '/contact'
    },
    {
      Component: Gallery,
      path: '/gallery'
    }
  ]
  return(

    <Router>
      <Switch>
      {routes.map(({path, Component},index) => {
        return <Route
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