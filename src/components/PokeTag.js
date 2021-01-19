/* eslint-disable react/prop-types */
import React from 'react'
import { Tag } from 'antd';
import { capitalizeString } from "../utils/stringUtils";

const colorsMap = {
    grass: 'green',
    poison: 'purple'
}

const PokeTag = ({ type }) => {
    return (
        <Tag color={colorsMap[type]}>{capitalizeString(type)}</Tag>
    )
}

export default PokeTag
