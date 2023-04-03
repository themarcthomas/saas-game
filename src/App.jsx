import React from 'react';
import Timer from './components/Timer';
import DebugTimer from './components/DebugTimer';
import SaaSHealthOverview from './components/SaaSHealthOverview';

const App = () => {
  return (
    <div className="App">
      <h1>SaaSHolez</h1>
      <Timer />
      <SaaSHealthOverview />
      <DebugTimer />
    </div>
  );
};

export default App;
