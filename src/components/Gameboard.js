import React from 'react';
import bumi from '../img/King_Bumi_HD_Render.webp';
import jeongjeong from '../img/Jeong_Jeong_render.webp';
import hama from '../img/Hama.webp';
import tylee from '../img/Ty_Lee.webp';
import hakoda from '../img/Hakoda.webp';
import cabbage from '../img/tumblr_p2d5ebA04r1tyjd90o1_250.png';
import pipsqueak from '../img/tumblr_p2mak6FIKD1tyjd90o1_250.png';
import jet from '../img/jet.png';
import longfeng from '../img/Longfengfull.webp';
import piandao from '../img/Piandao.webp';
import combustion from '../img/Combustion_Man_render.webp';
import roku from '../img/1af6544d8559c1597f7edb14305d7f22.png';

const Gameboard = (props) => {
  return (
    <div className="images">
      <div className="card" data-id="King Bumi" onClick={props.onImageClick}>
        <img src={bumi} alt="King Bumi" />
        <div className="name">King Bumi</div>
      </div>
      <div className="card" data-id="Jeong Jeong" onClick={props.onImageClick}>
        <img src={jeongjeong} alt="Jeong Jeong" />
        <div className="name">Jeong Jeong</div>
      </div>
      <div className="card" data-id="Hama" onClick={props.onImageClick}>
        <img src={hama} alt="Hama" />
        <div className="name">Hama</div>
      </div>
      <div className="card" data-id="Ty Lee" onClick={props.onImageClick}>
        <img src={tylee} alt="Tylee" />
        <div className="name">Ty Lee</div>
      </div>
      <div className="card" data-id="Hakoda" onClick={props.onImageClick}>
        <img src={hakoda} alt="Hakoda" />
        <div className="name">Hakoda</div>
      </div>
      <div
        className="card"
        data-id="Cabbage Merchant"
        onClick={props.onImageClick}
      >
        <img src={cabbage} alt="Cabbage" />
        <div className="name">Cabbage Merchant</div>
      </div>
      <div className="card" data-id="Pipsqueak" onClick={props.onImageClick}>
        <img src={pipsqueak} alt="Pipsqueak" />
        <div className="name">Pipsqueak</div>
      </div>
      <div className="card" data-id="Jet" onClick={props.onImageClick}>
        <img src={jet} alt="Jet" />
        <div className="name">Jet</div>
      </div>
      <div className="card" data-id="Long Feng" onClick={props.onImageClick}>
        <img src={longfeng} alt="Long Feng" />
        <div className="name">Long Feng</div>
      </div>
      <div
        className="card"
        data-id="Master Piandao"
        onClick={props.onImageClick}
      >
        <img src={piandao} alt="Master Piandao" />
        <div className="name">Master Piandao</div>
      </div>
      <div
        className="card"
        data-id="Combustion Man"
        onClick={props.onImageClick}
      >
        <img src={combustion} alt="Combustion Man" />
        <div className="name">Combustion Man</div>
      </div>
      <div className="card" data-id="Avatar Roku" onClick={props.onImageClick}>
        <img src={roku} alt="Avatar Roku" />
        <div className="name">Avatar Roku</div>
      </div>
    </div>
  );
};

export default Gameboard;
