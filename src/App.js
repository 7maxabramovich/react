import './App.css';
import Route1 from './Route1';
import React, { useState } from 'react';
import Moment from 'react-moment';


function App(props) {

  let [, setDate] = useState(new Date());

  setInterval(() => {
      setDate(new Date(), 250);
  });

  return (
    <div className="App">
      <header className="App-header">
        <button className="custom-btn"><Moment format="hh:mm:ss">{ props.date }</Moment></button>
        <Route1 />
      </header>
    </div>
  );
}

export default App;
