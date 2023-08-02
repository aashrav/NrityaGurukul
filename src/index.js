import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';
import BrowserRouter from 'react-router-dom/BrowserRouter'

function App(props) {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: [
  //       '-apple-system',
  //     ].join(','),
  //   },
  // });

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      <div className = 'app'>
        <Routing />
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));