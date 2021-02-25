/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import Skeleton from 'antd/lib/skeleton';
import { Link } from 'react-router-dom';
import PokeTag from '../../components/pokeTag/PokeTag';
import { capitalizeString, formatNumber } from '../../utils/stringUtils';
import './PokeCard.css';

const PokeCard = ({
  loading = false, name, num, desc, types, filters, toggleFilter,
}) => {
  const cardStyle = {
    padding: loading ? '24px' : '0',
  };

  const imgUrl = `/pokedex_v2/assets/${formatNumber(num)}.png`;
  const headingStyle = {
    backgroundImage: `url(${imgUrl})`,
  };

  const headingText = `${capitalizeString(name)} #${formatNumber(num)}`;

  return (
    <div style={cardStyle} className="pokecard">
      <Skeleton loading={loading} active>
        <Link to={`/pokemon/${name}`}>
          <h2 style={headingStyle} className="pokecard-heading">
            {headingText}
          </h2>
        </Link>
        <p className="pokecard-description">{desc}</p>
        <p />
        <div className="pokecard-tags">
          {types.map((type) => (
            <PokeTag type={type} key={type} filters={filters} toggleFilter={toggleFilter} />
          ))}
        </div>
      </Skeleton>
    </div>
  );
};

export default PokeCard;
