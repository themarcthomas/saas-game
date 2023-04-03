import React from 'react';

const BurnRate = ({ burnRate }) => {
  return (
    <div>
      <p>
        <strong>Burn rate ($/month):</strong> ${burnRate}
      </p>
    </div>
  );
};

export default BurnRate;
