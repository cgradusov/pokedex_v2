import axios from 'axios';

const fetchPokeAPI = async (uri) => {
  const url = `https://pokeapi.co/api/v2/${uri}`;
  const { data } = await axios.get(url);
  return data;
};

export const getPokemonsLinks = async () => {
  const uri = 'pokemon/?limit=2000';
  return fetchPokeAPI(uri);
};

export const getPokemon = async (name) => fetchPokeAPI(`pokemon/${name}/`);

export const getPokemonSpecs = async (name) => {
  const uri = `pokemon-species/${name}/`;
  return fetchPokeAPI(uri);
};
