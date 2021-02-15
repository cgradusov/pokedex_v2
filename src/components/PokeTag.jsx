/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch, connect } from 'react-redux';
import { capitalizeString } from '../utils/stringUtils';
import getTagStyleMixin from '../utils/pokeColorUtils';
import { toggleFilter } from '../features/pokeTypesFilter/pokeTypesFilterSlice';

const PokeTag = ({
  type = 'grass', width = 'inherit', clickable = true, filters,
}) => {
  const isSelected = filters[type] ?? false;
  const dispatch = useDispatch();

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
      dispatch(toggleFilter(type));
    }
  };

  return (
    <span onClick={onClick} style={tagStyle}>
      {capitalizeString(type)}
    </span>
  );
};

const mapState = (state) => ({
  filters: state.pokeFilter.filters,
});

export default connect(mapState, null)(PokeTag);
