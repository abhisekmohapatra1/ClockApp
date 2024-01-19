import React, { useState } from 'react'
const App2 = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(newTime);

  const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  return (
    <>
      <h1>{newTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </>
  )
}

export default App2