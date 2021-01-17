import React from 'react'
import PokeCard from './PokeCard';

const PokeList = () => {
    return (
        <div>
            <PokeCard 
                img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                title="Bulbasaur #001"
                description="There is a plant seed on its back right from 
                            the day this Pokémon is born. 
                            The seed slowly grows larger."
                tags={['Grass', 'Poison']}
            />
        </div>
    )
}

export default PokeList
