/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { capitalizeString } from '../utils/stringUtils';
import getTagStyleMixin from '../utils/pokeColorUtils';
import { toggleFilter } from '../features/pokeTypesFilter/pokeTypesFilterSlice';

const PokeTag = ({ type = 'grass', width = 'inherit' }) => {
  const [isType, markType] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    markType(!isType);
    dispatch(toggleFilter(type));
  };

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
    <span onClick={onClick} style={tagStyle}>{capitalizeString(type)}</span>
  );
};

export default PokeTag;
