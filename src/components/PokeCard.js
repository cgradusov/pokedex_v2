/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Avatar } from 'antd';
import PokeTag from './PokeTag';

const { Meta } = Card;

const PokeCard = ({loading=false, img_url, title, description, tags}) => {
    return (
        <Card loading={loading}>
            <Meta
                avatar={
                    <Avatar src={img_url} />
                }
                title={title}
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
