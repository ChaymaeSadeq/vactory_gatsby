import React from 'react'
import {useMenu} from 'vactory-gatsby-core'

export const DefaultMenu = () => {
    const items = useMenu('main');

    return (
        <ul>
            {items.map(item => {
                return (
                    <li key={item.id}>{item.title}</li>
                )
            })}
        </ul>
    )
};
