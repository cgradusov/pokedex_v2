import axios from 'axios';
import pokemons from '../constants/pokemonsList';

const fetchPokeAPI = async (uri) => {
  const url = `https://pokeapi.co/api/v2/${uri}`;
  const { data } = await axios.get(url);
  return data;
};

export const getPokemonsLinks = async () => {
  const uri = 'pokemon/?limit=898';
  return fetchPokeAPI(uri);
};

export const getPokemon = async (name) => pokemons[name];

export const getPokemonSpecs = async (name) => {
  const uri = `pokemon-species/${name}/`;
  return fetchPokeAPI(uri);
};

export const getPokemonsTypes = async () => {
  const uri = 'type/';
  return fetchPokeAPI(uri);
};

export const getPokemonsLinksByType = async (type) => {
  const uri = `type/${type}/`;
  return fetchPokeAPI(uri);
};
