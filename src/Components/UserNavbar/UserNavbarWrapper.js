import React from 'react';
import UserNavbar from './UserNavbar';
import Home from '../../Pages/Home/Home';
const UserNavbarWrapper = ({component: Component}) =>{
  return(
    <React.Fragment>
      <UserNavbar/>
      <Component></Component>
    </React.Fragment>
  )
}

export default UserNavbarWrapper;
