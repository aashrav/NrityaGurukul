import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavbarWrapper from './Components/Navbar/NavbarWrapper';

import LogIn from  './Pages/LogIn/LogIn';
import Home from './Pages/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Upload from './Pages/Upload/Upload';
import Contact from './Pages/Contact/Contact';
import PrivateRoute from './Components/Routing/PrivateRoute';   
import Overview from '../src/Pages/Overview/Overview';
import {ACCESS_LEVEL} from './Enums';

const Routing = ({appProps}) => {
  const userIsAdmin = appProps.user && appProps.user.accessLevel == ACCESS_LEVEL.ADMIN;
  const userIsStudent = appProps.user && appProps.user.accessLevel === ACCESS_LEVEL.STUDENT;
  const signedInRoutes = [
    {
      Component:Overview,
      path: '/overview',
      allowedIf: userIsAdmin ,
      redirect: '/login',
    },
    {
      Component:Upload,
      path: '/upload',
      allowedIf: userIsAdmin ,
      redirect: '/login',
    },
      {
      Component: Dashboard,
      path: '/dashboard',
      allowedIf: userIsStudent,
      redirect: '/login'
    },
    {
      Component: LogIn,
      path: '/login',
      allowedIf: !userIsAdmin && !userIsStudent,
      redirect: '/',
    },
  ];
  var signedOutRoutes = [
    {
      Component: LogIn,
      path: '/login',
      redirect: '/',
    },
    {
      Component: Home,
      path: '/',
    },
    // {
    //   Component: Files,
    //   path: '/files',
    // },
    // {
    //   Component:Upload,
    //   path: '/upload'
    // },
    {
      Component: Contact,
      path: '/contact'
    }
  ]
  return(

    <Router>
      <Switch>
      {signedInRoutes.map(
          ({ path, Component, allowedIf, redirect, inAdminNavbar }, index) => {
            return (
              <PrivateRoute
                key={index}
                exact
                path={path}
                appProps={{
                  allowed: allowedIf,
                  user: appProps.user,
                  redirect,
                  ...appProps
                }}
                component={props => (
                  <NavbarWrapper
                    component={Component}
                    {...props}
                    {...appProps}
                  />
                )}
              />
            );
          }
        )}      {signedOutRoutes.map(({path, Component},index) => {
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