
import React, { useState } from 'react';
import './App.css';

function App() {
  //Created date object to initialize the date first..
  let date = new Date().toLocaleTimeString();

  //Created the useState hook to take date variable as a base value and then by using setCurrTime to update it..
  const [currTime, setCurrTime] = useState(date);

  //Created a function to update the time by using setCurrTime...
  const UpdateTime = () => {
    date = new Date().toLocaleTimeString();
    setCurrTime(date)
  }

  //Updating the time by every 1s inside the setInterval..
  setInterval(UpdateTime, 1000)

  return (
    <>
      <h1>{currTime}</h1>
    </>
  );
}

export default App;
