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
  defence: blue[5],
  'special-attack': volcano[5],
  'special-defence': cyan[5],
  speed: lime[5],
};

const PokeStat = ({
  short, name, param, value,
}) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
    <span style={{ width: '20px' }} title={name}>{short}</span>
    <Progress steps={15} percent={value / 2.25} strokeColor={statColor[param]} showInfo={false} style={{ margin: '0 10px' }} />
    <span style={{ width: '20px' }}>{value}</span>
  </div>
);

export default PokeStat;
