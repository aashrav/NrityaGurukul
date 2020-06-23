import React from 'react';
import UserNavbar from './UserNavbar/UserNavbar';
import StudentNavbar from './StudentNavbar/StudentNavbar';

const getNavBar = (accessLevel) =>{
  console.log("access level ", accessLevel)
  if(accessLevel === 0){
    return <UserNavbar/>;
  }else{
    return <StudentNavbar/>;
  }
}

const NavbarWrapper = ({
  component: Component,
...appProps}) =>{
  console.log("NavbarWrapper:",Component)
  return(
    <React.Fragment>
      {(getNavBar(appProps.authenticated))}
      <Component {...appProps}></Component>
    </React.Fragment>
  )
}

export default NavbarWrapper;