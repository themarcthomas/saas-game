import React from 'react';

const GrowthMetrics = ({ conversionRate, arpu, pitchesMade, customersWon }) => {
  return (
    <div className="growth-metrics">
      <h2>Growth Metrics</h2>
      <div>
        <strong>Conversion Rate:</strong> {conversionRate}%
      </div>
      <div>
        <strong>ARPU:</strong> ${arpu}
      </div>
      <div>
        <strong>Pitches Made / Customers Won:</strong> {pitchesMade} / {customersWon}
      </div>
    </div>
  );
};

export default GrowthMetrics;
