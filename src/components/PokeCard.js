/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Avatar, Tag } from 'antd';

const { Meta } = Card;

const PokeCard = ({loading=false}) => {
    return (
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <Meta
                avatar={
                    <Avatar src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
                }
                title="Bulbasaur #001"
                description={
                    <>
                        <p>There is a plant seed on its back right from 
                            the day this Pokémon is born. 
                            The seed slowly grows larger.</p>
                        <Tag color="green">Grass</Tag>
                        <Tag color="purple">Poison</Tag>
                    </>
                }
            />
            
        </Card>

    )
}

export default PokeCard
