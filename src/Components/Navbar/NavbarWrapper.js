import React from 'react';
import UserNavbar from './UserNavbar/UserNavbar';


const NavbarWrapper = ({
  component: Component,
...appProps}) =>{

  return(
    <React.Fragment>
      <UserNavbar/>
      <Component {...appProps}></Component>
    </React.Fragment>
  )
}

export default NavbarWrapper;