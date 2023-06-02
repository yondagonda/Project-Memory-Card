import React from 'react';

const Gameboard = (props) => {
  const randomise = () => {};

  return (
    <div className="images">
      <button onClick={props.onImageClick}>King Bumi</button>
      <button onClick={props.onImageClick}>Jeong Jeong</button>
      <button onClick={props.onImageClick}>Hama</button>
      <button onClick={props.onImageClick}>Ty Lee</button>
      <button onClick={props.onImageClick}>Hakoda</button>
      <button onClick={props.onImageClick}>Cabbage Merchant</button>
      <button onClick={props.onImageClick}>Pipsqueak</button>
      <button onClick={props.onImageClick}>Jet</button>
      <button onClick={props.onImageClick}>Long Feng</button>
      <button onClick={props.onImageClick}>Master Piandao</button>
      <button onClick={props.onImageClick}>The Boulder</button>
      <button onClick={props.onImageClick}>Avatar Roku</button>
    </div>
  );
};

export default Gameboard;
