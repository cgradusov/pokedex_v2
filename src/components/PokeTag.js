/* eslint-disable react/prop-types */
import React from 'react'
import { Tag } from 'antd';

const colorsMap = {
    grass: 'green',
    poison: 'purple'
}

const PokeTag = ({ type }) => {
    return (
        <Tag color={colorsMap[type.toLowerCase()]}>{type}</Tag>
    )
}

export default PokeTag
