import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import {checkIfUserIsSignedIn} from './ApiFunctions/User';

function App(props) {
  const [authenticated, setAuthenticated] = useState(0)
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState();

  async function getAuthStatus() {
    setIsAuthenticating(true);
    const authStatus = await checkIfUserIsSignedIn();
    if(authStatus && authStatus.data){
      setAuthenticated(authStatus.data.accessLevel);
    }
    if(authStatus) setUser({ token: authStatus.config.data, ...authStatus.data });
    setIsAuthenticating(false);
  }

  useEffect(() => {
    getAuthStatus();
  }, [])

  return (
    !isAuthenticating && (
      <div>
        <Routing appProps = {{authenticated, setAuthenticated, user}}/>
      </div>
    ))
  ;
}

ReactDOM.render(<App />, document.getElementById('root'));