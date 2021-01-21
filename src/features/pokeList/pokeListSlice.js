import { createSlice } from "@reduxjs/toolkit";
import { getPokemonsList, getPokemon, getPokemonSpecs } from "../../api/PokeAPI";

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

export const fetchPokemons = () => async dispatch => {
    try {
        dispatch(getPokemonsLinksStart())
        const pokemonsList = await getPokemonsList()
        dispatch(getPokemonsLinksSuccess(pokemonsList))

        // pokemons.results.map(async (el) => {
        //     dispatch(getPokemonsLinksStart())
        //     const pokemon = await getPokemon(el.name)
        //     dispatch(getPokemonSuccess(pokemon))
        // })

        for await (const poke of pokemonsList.results) {
            dispatch(getPokemonsLinksStart())
            const pokemon = await getPokemon(poke.name)
            const pokemonSpecs = await getPokemonSpecs(poke.name)
            dispatch(getPokemonSuccess({...pokemon, specs: pokemonSpecs}))
        }
        

    } catch (err) {
        dispatch(getPokemonsLinksFailure(err))
    }
}
