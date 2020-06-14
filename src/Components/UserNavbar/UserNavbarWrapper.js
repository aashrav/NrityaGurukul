import React from 'react';
import UserNavbar from './UserNavbar';
const UserNavbarWrapper = ({component: Component}) =>{
  return(
    <React.Fragment>
      <UserNavbar/>
      <Component></Component>
    </React.Fragment>
  )
}

export default UserNavbarWrapper;
