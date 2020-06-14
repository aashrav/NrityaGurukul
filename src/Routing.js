import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserNavbarWrapper from './Components/UserNavbar/UserNavbarWrapper';

import LogIn from  './Pages/LogIn/LogIn';
import Home from './Pages/Home/Home';


const Routing = () => {
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
  return(

    <Router>
      <Switch>
      {routes.map((ele,index) => {
        return <Route
          key = {index}
          path = {ele.path}
          render = {(props) =>{
            return <UserNavbarWrapper hi = {LogIn} component = {ele.Component} {...props}><Home></Home></UserNavbarWrapper>
          }}       
       />
      })
      }
      </Switch>
    </Router>
  )
 }

 export default Routing;