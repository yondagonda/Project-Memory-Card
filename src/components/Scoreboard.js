import React from 'react';

const Scoreboard = (props) => {
  return (
    <>
      <div>Current Score: {props.score}</div>
      <div>Best Score: {props.bestScore}</div>
    </>
  );
};

export default Scoreboard;
