/* eslint-disable camelcase */
import pokeTypes from '../constants/pokeTypes';

const calculateWeaknesses = (types) => {
  const selectedTypesData = types.map((t) => pokeTypes[t]);
  const combinedTypesData = selectedTypesData.reduce((acc, el) => {
    const keys = Object.keys(el);
    keys.forEach((k) => {
      if (typeof acc[k] === 'undefined') {
        acc[k] = [];
      }
      acc[k] = [...acc[k], ...el[k]];
    });

    return acc;
  }, {});

  const weaknesses = combinedTypesData.double_damage_from;
  const strengths = combinedTypesData.double_damage_to;
  const immunes = combinedTypesData.no_damage_from;
  const half = combinedTypesData.half_damage_from;

  return weaknesses.filter(
    (w) => !types.includes(w)
      && !strengths.includes(w)
      && !immunes.includes(w)
      && !half.includes(w),
  );
};

export default calculateWeaknesses;
