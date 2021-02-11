/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'antd/lib/card';
import Avatar from 'antd/lib/avatar';
import PokeTag from './PokeTag';
import { capitalizeString, formatNumber } from '../utils/stringUtils';

const { Meta } = Card;

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

  const tags = types.map((el) => (el.type.name));

  const cardStyle = {
    height: '100%',
    margin: '15px 10px',
  };

  const descriptionStyle = {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  };

  return (
    <Card loading={loading} style={cardStyle}>
      <Meta
        avatar={
          <Avatar src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber(num)}.png`} />
                }
        title={`${capitalizeString(name)} #${formatNumber(num)}`}
        description={(
          <>
            {/* eslint-disable-next-line camelcase */}
            <p>{flavor_text}</p>
          </>
        )}
      />
      <p />
      <div style={descriptionStyle}>
        {tags.map((type) => (
          <PokeTag type={type} key={type} />
        ))}
      </div>

    </Card>

  );
};

export default PokeCard;
