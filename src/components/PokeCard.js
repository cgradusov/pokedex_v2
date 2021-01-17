/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Avatar } from 'antd';
import PokeTag from './PokeTag';

const { Meta } = Card;

const PokeCard = ({loading=false, img_url, title, description, tags}) => {
    return (
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
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
