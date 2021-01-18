import React from 'react'
import PokeCard from './PokeCard';
import { Row, Col } from "antd";

const PokeList = () => {
    return (
        <>
            <Row>
               <Col span={6} offset={2}>
                    <PokeCard
                        img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                        title="Bulbasaur #001"
                        description="There is a plant seed on its back right from 
                            the day this Pokémon is born. 
                            The seed slowly grows larger."
                        tags={['Grass', 'Poison']}
                    />
               </Col>
                <Col span={6} offset={1}>
                    <PokeCard
                        img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                        title="Bulbasaur #001"
                        description="There is a plant seed on its back right from 
                            the day this Pokémon is born. 
                            The seed slowly grows larger."
                        tags={['Grass', 'Poison']}
                    />
                </Col>
                <Col span={6} offset={1}>
                    <PokeCard
                        img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
                        title="Bulbasaur #001"
                        description="There is a plant seed on its back right from 
                            the day this Pokémon is born. 
                            The seed slowly grows larger."
                        tags={['Grass', 'Poison']}
                    />
                </Col>
           </Row>
        </>
    )
}

export default PokeList
