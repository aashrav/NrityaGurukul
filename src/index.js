import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './Routing';

function App(props) {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: [
  //       '-apple-system',
  //     ].join(','),
  //   },
  // });

  return (
    <div className = 'app'>
      <Routing />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));