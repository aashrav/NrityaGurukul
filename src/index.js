import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';

function App(props) {
  const [authenticated, setAuthenticated] = useState(0)
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [user, setUser] = useState();

  async function getAuthStatus() {
    // setIsAuthenticating(true);
    // const authStatus = await checkIfUserIsSignedIn();
    // setAuthenticated(!authStatus.error);
    // setUser({ token: authStatus.token, ...authStatus.responseData });
    setIsAuthenticating(false);
  }

  useEffect(() => {
    getAuthStatus();
    // eslint-disable-next-line
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