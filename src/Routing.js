import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';

import LogIn from  './Pages/LogIn/LogIn';
import Home from './Pages/Home/Home';


const Routing = ({appProps}) => {
  var routes = [
    {
      Component: LogIn,
      path: '/login',
      redirect:'/'
    },
    {
      Component: Home,
      path: '/',
      redirect:'/'
    },
    // {
    //   Component: UserNavBar,
    //   path: '/',
    //   redirect:'/'
    // },
  ]
  console.log(appProps)

  return(
    <Router>
      <Switch>
      {routes.map((ele,index) => {
        return <Route
          key = {index}
          path = {ele.path}
          render = {(props) =>{
            return <NavbarWrapper hi = {LogIn} component = {ele.Component} {...appProps}><Home></Home></NavbarWrapper>
          }}       
       />
      })
      }
      </Switch>
    </Router>
  )
 }

 export default Routing;