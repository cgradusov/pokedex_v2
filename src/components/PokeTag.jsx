/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { capitalizeString } from '../utils/stringUtils';
import getTagStyleMixin from '../utils/pokeColorUtils';

const PokeTag = ({
  type = 'grass', width = 'inherit', clickable = true, filters = {}, toggleFilter,
}) => {
  const isSelected = filters[type] ?? false;

  const tagStyle = {
    boxSizing: 'border-box',
    fontSize: '14px',
    borderRadius: '20%',
    lineHeight: '20px',
    fontVariant: 'tabular-nums',
    fontFeatureSettings: 'tnum',
    display: 'inline-flex',
    height: 'auto',
    whiteSpace: 'nowrap',
    margin: '0 8px 0 0',
    padding: '2px 10px',
    cursor: clickable ? 'pointer' : 'auto',
    userSelect: 'none',
    width,
    justifyContent: 'center',

    ...getTagStyleMixin(type, isSelected || !clickable),
  };

  const onClick = () => {
    if (clickable) {
      toggleFilter(type);
    }
  };

  return (
    <span onClick={onClick} style={tagStyle}>
      {capitalizeString(type)}
    </span>
  );
};

export default PokeTag;
