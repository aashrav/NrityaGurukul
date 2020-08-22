import React from 'react';
import UserNavbar from './UserNavbar/UserNavbar';
import StudentNavbar from './StudentNavbar/StudentNavbar';
import AdminNavbar from './AdminNavbar/AdminNavbar';



const NavbarWrapper = ({
  component: Component,
...appProps}) =>{
  const handleLogout = () => {
    appProps.setAuthenticated(-1);
    window.localStorage.removeItem('jwtToken');
    window.location.reload();
  }
  const getNavBar = (accessLevel) =>{
    if(accessLevel === 2){
      return <AdminNavbar user = {appProps.user} handleLogout={handleLogout}/>;
    }else if(accessLevel === 1){
      return <StudentNavbar user = {appProps.user} handleLogout={handleLogout}/>;
    }else{
      return <UserNavbar/>
    }
  }
  return(
    <React.Fragment>
      {(getNavBar(appProps.authenticated))}
      <Component {...appProps}></Component>
    </React.Fragment>
  )
}

export default NavbarWrapper;