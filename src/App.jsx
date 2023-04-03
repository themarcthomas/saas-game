import React from 'react';
import Timer from './components/Timer';
import DebugTimer from './components/DebugTimer';

const App = () => {
  return (
    <div className="App">
      <h1>SaaSholez</h1>
      <Timer />
      <DebugTimer />
    </div>
  );
};

export default App;
