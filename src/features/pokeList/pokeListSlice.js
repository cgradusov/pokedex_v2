import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null,

    pokemonsLinks: [],
    pokemonsList: [],
    limit: 9,
    offset: 0,
    count: 0
}

const pokemons = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        getPokemonsLinksStart(state) {
            state.loading = true
            state.error = null
        },
        getPokemonsLinksSuccess(state, action) {
            state.pokemonsLinks = action.payload.results
            state.count = action.payload.count
            // state.next = action.payload.next
            state.loading = false
            state.error = null
        },
        getPokemonsLinksFailure(state, action) {
            state.loading = false
            state.error = action.payload
        },

        getPokemonSuccess(state, action) {
            state.pokemonsList.push(action.payload)
        },
    }
})

export const {
  getPokemonsLinksStart,
  getPokemonsLinksSuccess,
  getPokemonsLinksFailure,

  getPokemonSuccess
} = pokemons.actions;

export default pokemons.reducer;

// mock
const getPokemonsList = async () => {
    return {
        count: 1118,
        next: "https://pokeapi.co/api/v2/pokemon/?offset=151&limit=151",
        previous: null,
        results: [
            {
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
                "name": "venusaur",
                "url": "https://pokeapi.co/api/v2/pokemon/3/"
            },
            {
                "name": "charmander",
                "url": "https://pokeapi.co/api/v2/pokemon/4/"
            },
            {
                "name": "charmeleon",
                "url": "https://pokeapi.co/api/v2/pokemon/5/"
            },
            {
                "name": "charizard",
                "url": "https://pokeapi.co/api/v2/pokemon/6/"
            },
            {
                "name": "squirtle",
                "url": "https://pokeapi.co/api/v2/pokemon/7/"
            },
            {
                "name": "wartortle",
                "url": "https://pokeapi.co/api/v2/pokemon/8/"
            },
            {
                "name": "blastoise",
                "url": "https://pokeapi.co/api/v2/pokemon/9/"
            },
            {
                "name": "caterpie",
                "url": "https://pokeapi.co/api/v2/pokemon/10/"
            },
        ]
    }
}

// mock
const getPokemon = async (url) => {
    return {
        id: 1,
        name: 'bulbasaur',
        _url: url,
        description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        types: ['grass', 'poison']
    }
}

export const fetchPokemons = () => async dispatch => {
    try {
        dispatch(getPokemonsLinksStart())
        const pokemons = await getPokemonsList()
        dispatch(getPokemonsLinksSuccess(pokemons))

        pokemons.results.map(async (el) => {
            dispatch(getPokemonsLinksStart())
            const pokemon = await getPokemon(el.url)
            dispatch(getPokemonSuccess(pokemon))
        })
    } catch (err) {
        dispatch(getPokemonsLinksFailure(err))
    }
}

export const fetchPokemon = (url) => async dispatch => {
    try {
        dispatch(getPokemonsLinksStart())
        const pokemon = await getPokemon(url)
        dispatch(getPokemonSuccess(pokemon))
    } catch (err) {
        dispatch(getPokemonsLinksFailure(err))
    }
}
