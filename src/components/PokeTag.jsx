/* eslint-disable react/prop-types */
import React from 'react';
import { capitalizeString } from '../utils/stringUtils';
import getTagStyleMixin from '../utils/pokeColorUtils';

const PokeTag = ({ type }) => {
  const tagStyle = {
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '20px',
    fontVariant: 'tabular-nums',
    fontFeatureSettings: 'tnum',
    display: 'inline-block',
    height: 'auto',
    whiteSpace: 'nowrap',
    margin: '0 8px 0 0',
    padding: '0 7px',

    ...getTagStyleMixin(type),
  };

  return (
    <span style={tagStyle}>{capitalizeString(type)}</span>
  );
};

export default PokeTag;
