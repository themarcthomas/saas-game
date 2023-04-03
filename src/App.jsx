import React, { useState } from 'react';
import Timer from './components/Timer';
import DebugTimer from './components/DebugTimer';
import SaaSHealthOverview from './components/SaaSHealthOverview';
import GrowthMetrics from './components/GrowthMetrics';
import PitchButton from './components/PitchButton';

const App = () => {
  const [mrr, setMrr] = useState(0);
  const [pitchesMade, setPitchesMade] = useState(0);
  const [customersWon, setCustomersWon] = useState(0);
  const conversionRate = 10;
  const arpu = 100;

  const handlePitchProspect = () => {
    setPitchesMade(pitchesMade + 1);
    const won = Math.random() * 100 < conversionRate;
    if (won) {
      setCustomersWon(customersWon + 1);
      setMrr(mrr + arpu);
    }
  };

  return (
    <div className="App">
      <h1>SaaSHolez</h1>
      <Timer />
      <PitchButton onPitchProspect={handlePitchProspect} />
      <SaaSHealthOverview mrr={mrr} />
      <GrowthMetrics conversionRate={conversionRate} arpu={arpu} pitchesMade={pitchesMade} customersWon={customersWon} />
      <DebugTimer />
    </div>
  );
};

export default App;
