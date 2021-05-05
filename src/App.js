import './App.css';
import Moment from 'react-moment';
import React, { useState } from 'react';

function App(props) {

  let [date, setDate] = useState(new Date());

  setInterval(() => {
      setDate(new Date(), 250);
  });

  return (
    <div className="App">
      <header className="App-header">
        <button className="custom-btn"><Moment format="DD/MM/YYYY hh:mm:ss">{ props.date }</Moment></button>
      </header>
    </div>
  );
}

export default App;
