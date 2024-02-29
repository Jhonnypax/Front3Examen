import React from 'react';

const Card = ({ input1, input2 }) => {
  return (
    <div>
      <h2>Información ingresada:</h2>
      <div className={cardStyle.card-info}>
        <p>Primer Input: {input1}</p>
        <p>Segundo Input: {input2}</p>
      </div>
    </div>
  );
};

export default Card;