
import React, { useState } from 'react';
import './App.css';

function App() {
  let date = new Date().toLocaleTimeString();

  const [currTime, setCurrTime] = useState(date);

  const UpdateTime = () => {
    date = new Date().toLocaleTimeString();
    setCurrTime(date)
  }

  setInterval(UpdateTime, 1000)

  return (
    <>
<div className="box">

      <h1>{currTime}</h1>
</div>

    </>
  );
}

export default App;
