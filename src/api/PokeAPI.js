import axios from 'axios';

const fetchPokeAPI = async (uri) => {
    const url = `https://pokeapi.co/api/v2/${uri}`
    const { data } = await axios.get(url)
    return data
}

export const getPokemonsList = async (limit=9, offset=0) => {
    const uri = `pokemon/?limit=${limit}&offset=${offset}/`
    return await fetchPokeAPI(uri)
}

export const getPokemon = async (name) => {
    return await fetchPokeAPI(`pokemon/${name}/`)
}

export const getPokemonSpecs = async (name) => {
    const uri = `pokemon-species/${name}/`
    return await fetchPokeAPI(uri)
}
