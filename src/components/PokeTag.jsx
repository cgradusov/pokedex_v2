/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { capitalizeString } from '../utils/stringUtils';
import getTagStyleMixin from '../utils/pokeColorUtils';

const PokeTag = ({ type = 'grass', width = 'inherit' }) => {
  const [isType, markType] = useState(false);

  const stateStyles = isType ? {} : {
    color: 'grey',
    border: '1px solid grey',
  };

  const tagStyle = {
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '20px',
    fontVariant: 'tabular-nums',
    fontFeatureSettings: 'tnum',
    display: 'inline-flex',
    height: 'auto',
    whiteSpace: 'nowrap',
    margin: '0 8px 0 0',
    padding: '0 7px',
    cursor: 'pointer',
    userSelect: 'none',
    width,
    justifyContent: 'center',

    ...getTagStyleMixin(type),
    ...stateStyles,
  };

  return (
    <span onClick={() => markType(!isType)} style={tagStyle}>{capitalizeString(type)}</span>
  );
};

export default PokeTag;
