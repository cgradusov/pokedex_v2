/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import Skeleton from 'antd/lib/skeleton';
import { Link } from 'react-router-dom';
import PokeTag from '../../components/PokeTag';
import { capitalizeString, formatNumber } from '../../utils/stringUtils';

const PokeCard = ({
  loading = false, name, num, desc, types, filters, toggleFilter,
}) => {
  const cardStyle = {
    height: '100%',
    margin: '15px 10px',
    padding: loading ? '24px' : '0',
    border: '1px solid #f0f0f0',
    borderRadius: '9px',
  };

  const descriptionStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    padding: '0 24px',
  };

  const imgUrl = `/pokedex/assets/${formatNumber(num)}.png`;
  const headingStyle = {
    background: `no-repeat url(${imgUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: 'white',
    textShadow: '0px 0px 5px #000000',
    textAlign: 'center',
    height: '215px',
    paddingTop: '20px',
    cursor: 'pointer',
    userSelect: 'none',
  };

  const headingText = `${capitalizeString(name)} #${formatNumber(num)}`;

  return (
    <div style={cardStyle}>
      <Skeleton loading={loading} active>
        <Link to={`/pokemon/${name}`}>
          <h2 style={headingStyle}>{headingText}</h2>
        </Link>
        <p
          style={{ color: 'rgba(0, 0, 0, 0.45)', padding: '24px' }}
        >
          {desc}
        </p>
        <p />
        <div style={descriptionStyle}>
          {types.map((type) => (
            <PokeTag type={type} key={type} filters={filters} toggleFilter={toggleFilter} />
          ))}
        </div>
      </Skeleton>
    </div>
  );
};

export default PokeCard;
