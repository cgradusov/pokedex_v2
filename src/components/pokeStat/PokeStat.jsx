/* eslint-disable react/prop-types */
import React from 'react';
import Progress from 'antd/lib/progress';
import { presetPalettes } from '@ant-design/colors';
import './PokeStat.css';

const {
  lime, blue, volcano, orange, red, cyan,
} = presetPalettes;

const statColor = {
  hp: red[5],
  attack: orange[5],
  defense: blue[5],
  'special-attack': volcano[5],
  'special-defense': cyan[5],
  speed: lime[5],
};

const nameShortByParam = {
  hp: ['HP', 'HP'],
  attack: ['Attack', 'AP'],
  defense: ['Defence', 'DF'],
  'special-attack': ['Special Attack', 'SA'],
  'special-defense': ['Special Defence', 'SD'],
  speed: ['Speed', 'SP'],
};

const PokeStat = ({ param, value }) => {
  const [name, short] = nameShortByParam[param];
  return (
    <div className="pokestat-container">
      <span className="pokestat-info" title={name}>{short}</span>
      <Progress steps={13} percent={value / 2.25} strokeColor={statColor[param]} showInfo={false} className="pokestat-progress" />
      <span className="pokestat-info">{value}</span>
    </div>
  );
};

export default PokeStat;
