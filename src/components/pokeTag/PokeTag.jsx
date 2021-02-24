/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { capitalizeString } from '../../utils/stringUtils';
import getTagStyleMixin from '../../utils/pokeColorUtils';
import './PokeTag.css';

const PokeTag = ({
  type = 'grass', clickable = true, filters = {}, toggleFilter,
}) => {
  const isSelected = filters[type] ?? false;

  const tagStyle = {
    cursor: clickable ? 'pointer' : 'auto',
    ...getTagStyleMixin(type, isSelected || !clickable),
  };

  const onClick = () => {
    if (clickable) {
      toggleFilter(type);
    }
  };

  return (
    <span onClick={onClick} style={tagStyle} className="tag-style tag-size">
      {capitalizeString(type)}
    </span>
  );
};

export default PokeTag;
