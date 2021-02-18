/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import Skeleton from 'antd/lib/skeleton';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { useLocation } from 'react-router-dom';
import PokeTag from './PokeTag';
import { capitalizeString, formatNumber } from '../utils/stringUtils';

const PokeCard = ({
  loading = false, name, num, specs, types,
}) => {
  // eslint-disable-next-line camelcase
  const { flavor_text_entries } = specs;
  const filteredFlavorTextEntries = flavor_text_entries.filter((el) => (
    el.language.name === 'en' && ['sword', 'y', 'sun'].includes(el.version.name)
  ));

  // eslint-disable-next-line camelcase
  const { flavor_text } = filteredFlavorTextEntries[0] ?? '';

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

  const location = useLocation();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(push({
      pathname: `/pokemon/${name}`,
      state: {
        from: location.pathname,
      },
    }));
  };

  const imgUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(num)}.png`;

  return (
    <div style={cardStyle}>
      <Skeleton loading={loading} active>
        <h2
          style={{
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
          }}
          onClick={onClick}
        >
          {`${capitalizeString(name)} #${formatNumber(num)}`}

        </h2>
        <p
          style={{ color: 'rgba(0, 0, 0, 0.45)', padding: '24px' }}
        >
          {/* eslint-disable-next-line camelcase */}
          {flavor_text}
        </p>
        <p />
        <div style={descriptionStyle}>
          {types.map((type) => (
            <PokeTag type={type} key={type} />
          ))}
        </div>
      </Skeleton>
    </div>
  );
};

export default PokeCard;
