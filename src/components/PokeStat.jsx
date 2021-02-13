/* eslint-disable react/prop-types */
import React from 'react';
import Progress from 'antd/lib/progress';
import { presetPalettes } from '@ant-design/colors';

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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
      <span style={{ width: '20px' }} title={name}>{short}</span>
      <Progress steps={13} percent={value / 2.25} strokeColor={statColor[param]} showInfo={false} style={{ margin: '0 10px' }} />
      <span style={{ width: '20px' }}>{value}</span>
    </div>
  );
};

export default PokeStat;
