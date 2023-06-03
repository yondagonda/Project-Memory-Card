/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState, useEffect } from 'react';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

const App = () => {
  const [score, setScore] = useState(0);
  const [whoseBeenClickedOn, setWhoseBeenClickedOn] = useState([]);
  const [currentClick, setCurrentClick] = useState('');
  const [bestScore, setBestScore] = useState(0);

  const incrememntScore = () => {
    setScore(score + 1);
  };

  const onImageClick = (e) => {
    setCurrentClick(e.target.dataset.id);
    setWhoseBeenClickedOn(whoseBeenClickedOn.concat(currentClick));
  };

  useEffect(() => {
    randomiseCards();
  }, [currentClick]);

  useEffect(() => {
    if (whoseBeenClickedOn.length) {
      incrememntScore();

      whoseBeenClickedOn.map((clicked) => {
        if (currentClick === clicked) {
          setScore(0);
          setWhoseBeenClickedOn([]);
          setCurrentClick('');
          if (score > bestScore) {
            setBestScore(score);
          }
        }
      });
    }
  }, [whoseBeenClickedOn]);

  const randomiseCards = () => {
    const cards = document.getElementsByClassName('card');
    const array = Array.from(cards);
    array.sort(() => Math.random() - 0.5);

    for (let i = 0; i < array.length; i++) {
      document.querySelector('.images').appendChild(array[i]);
    }
  };

  useEffect(() => {
    if (score === 12) {
      alert('Congratulaions, you have beat the game!');
      window.location.reload(true);
    }
  }, [score]);

  return (
    <div className="App">
      <div className="container">
        <div className="title">Avatar Memory Game</div>
        <div>
          Get points by clicking on an image, but don't click on any more than
          once!
        </div>
        <div className="score-area">
          <Scoreboard score={score} bestScore={bestScore} />
          <Gameboard onImageClick={onImageClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
