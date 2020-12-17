import React from 'react'
import get from 'lodash.get';
import {Ancre} from "vactory-gatsby-ui";

export const AncreContainer = ({data}) => {
    const items = data.components.map(component => {
        return {
            title: get(component, 'title'),
            id: get(component, 'paragraphId'),
        }
    });

    return (
        <Ancre
            items={items}
        />
    )
};
