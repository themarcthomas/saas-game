import React from 'react';
import MRR from './metrics/MRR';
import Runway from './metrics/Runway';
import BurnRate from './metrics/BurnRate';
import './css/SaaSHealthOverview.css';

const SaaSHealthOverview = ({ mrr, runway, burnRate }) => {
  return (
    <div className="saas-health-overview">
      <h2>SaaS Health Overview</h2>
      <div className="metrics">
        <MRR mrr={mrr} />
        <Runway runway={runway} />
        <BurnRate burnRate={burnRate} />
      </div>
    </div>
  );
};

export default SaaSHealthOverview;
