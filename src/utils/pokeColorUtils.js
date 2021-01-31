import { presetPalettes, grey as gray } from '@ant-design/colors';

const {
  lime, blue, volcano, magenta, orange, purple, yellow, green, geekblue, gold,
} = presetPalettes;

const colorsMap = {
  bug: lime[7],
  dragon: [blue[3], volcano[5]],
  fairy: magenta[3],
  fire: orange[6],
  ghost: purple[6],
  ground: [yellow[4], yellow[8]],
  normal: gray[6],
  psychic: magenta[6],
  steel: gray[7],

  dark: gray[9],
  electric: yellow[5],
  fighting: orange[7],
  flying: [blue[2], gray[1]],
  grass: green[3],
  ice: geekblue[2],
  poison: purple[3],
  rock: gold[8],
  water: blue[4],
};

const getTagStyleMixin = (type) => {
  const pokeColor = colorsMap[type];

  if (typeof pokeColor === 'string') {
    const color = pokeColor;

    return {
      color,
      border: `1px solid ${color}`,
      background: `${color}15`,
    };
  }

  const [color1, color2] = pokeColor;

  return {
    color: 'white',
    border: `1px solid ${color2}`,
    background: `linear-gradient(180deg, ${color1}88 50%, ${color2}88 50%)`,
  };
};

export default getTagStyleMixin;
