import React from 'react';
import UserNavbar from './UserNavbar/UserNavbar';
import StudentNavbar from './StudentNavbar/StudentNavbar';
import AdminNavbar from './AdminNavbar/AdminNavbar';

const getNavBar = (accessLevel) =>{
  console.log("access level ", accessLevel)
  if(accessLevel === 2){
    return <AdminNavbar/>;
  }else if(accessLevel === 1){
    return <StudentNavbar/>;
  }else{
    return <UserNavbar/>
  }
}

const NavbarWrapper = ({
  component: Component,
...appProps}) =>{
  return(
    <React.Fragment>
      {(getNavBar(appProps.authenticated))}
      <Component {...appProps}></Component>
    </React.Fragment>
  )
}

export default NavbarWrapper;