/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { fetchPokemons } from './pokeListSlice'
import PokeCard from '../../components/PokeCard';
import { Row, Col } from "antd";

const PokeList = ({ pokeList }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemons())
    }, [])

    const chunksPokeList = pokeList.reduce((acc, el, index) => {
        if (index % 3 == 0) {
            acc.push([])
        }

        const last_chunk_index = acc.length - 1;
        
        acc[last_chunk_index].push(el)
        return acc
    }, [])

    return (
        <>
            {
                chunksPokeList.map((chunk, i) => (
                    <Row key={i} gutter={[16, 16]}>
                        {
                            chunk.map((el, j) => (
                                <Col key={j} span={6} offset={j % 3 == 0 ? 2 : 1}>
                                   <PokeCard 
                                        key={el.id}
                                        num={`${el.id}`}
                                        name={el.name}
                                        specs={el.specs}
                                        description={"test"}
                                        types={el.types}
                                    /> 
                                </Col>
                            ))
                        }
                    </Row>
                ))
            }
        </>
    )
}

const mapState = state => ({
    pokeList: state.pokeList.pokemonsList
})

export default connect(mapState, null)(PokeList)
