/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Avatar } from 'antd';
import PokeTag from './PokeTag';
import { capitalizeString, formatNumber } from "../utils/stringUtils";

const { Meta } = Card;

const PokeCard = ({loading=false, img_url, name, num, description, tags}) => {
    return (
        <Card loading={loading}>
            <Meta
                avatar={
                    <Avatar src={img_url} />
                }
                title={capitalizeString(name) + ' #' + formatNumber(num)}
                description={
                    <>
                        <p>{description}</p>
                        {tags.map(type => (
                            <PokeTag type={type} key={type} />
                        ))}
                    </>
                }
            />
            
        </Card>

    )
}

export default PokeCard
