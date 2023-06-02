/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [score, setScore] = useState(0);
  const [whoseBeenClickedOn, setWhoseBeenClickedOn] = useState([]);
  const [currentClick, setCurrentClick] = useState('');

  const incrememntScore = () => {
    setScore(score + 1);
  };

  const onImageClick = (e) => {
    setCurrentClick(e.target.innerText);
    setWhoseBeenClickedOn(whoseBeenClickedOn.concat(currentClick));
  };

  useEffect(() => {
    if (whoseBeenClickedOn.length) {
      incrememntScore();

      console.log(whoseBeenClickedOn);
      console.log(currentClick);

      whoseBeenClickedOn.map((clicked) => {
        if (currentClick === clicked) {
          console.log('RESET COUNTER NOW');
          setScore(0);
          setWhoseBeenClickedOn([]);
          setCurrentClick('');
        }
      });
    }
  }, [whoseBeenClickedOn]);

  return (
    <div className="App">
      <div className="container">
        <div className="title">Memory Game</div>
        <div>Some info about this game</div>

        <Scoreboard score={score} />
        <Gameboard onImageClick={onImageClick} />
      </div>
    </div>
  );
};

export default App;
