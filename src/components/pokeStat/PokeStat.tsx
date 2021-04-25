import React from 'react';
import Progress from 'antd/lib/progress';
import { presetPalettes } from '@ant-design/colors';
import './PokeStat.css';
import PropTypes from 'prop-types';

const {
  lime, blue, volcano, orange, red, cyan,
} = presetPalettes;

type statColorType = {
  [key: string]: string,
}

type nameShortByParamType = {
  [key: string]: string[],
}

const statColor: statColorType = {
  hp: red[5],
  attack: orange[5],
  defense: blue[5],
  'special-attack': volcano[5],
  'special-defense': cyan[5],
  speed: lime[5],
};

const nameShortByParam: nameShortByParamType = {
  hp: ['HP', 'HP'],
  attack: ['Attack', 'AP'],
  defense: ['Defence', 'DF'],
  'special-attack': ['Special Attack', 'SA'],
  'special-defense': ['Special Defence', 'SD'],
  speed: ['Speed', 'SP'],
};

type PokeStatProps = {
  param: string,
  value: number
}

const PokeStat = ({ param, value } : PokeStatProps) => {
  const [name, short] = nameShortByParam[param];
  return (
    <div className="pokestat-container">
      <span className="pokestat-info" title={name}>{short}</span>
      <Progress steps={13} percent={value / 2.25} strokeColor={statColor[param]} showInfo={false} className="pokestat-progress" />
      <span className="pokestat-info">{value}</span>
    </div>
  );
};

PokeStat.propTypes = {
  param: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default PokeStat;
