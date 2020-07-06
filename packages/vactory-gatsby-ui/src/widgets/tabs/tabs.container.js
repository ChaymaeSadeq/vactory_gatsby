import React from 'react'
import get from 'lodash.get';
import {Wysiwyg, Tabs} from "vactory-gatsby-ui";
import {Box, Heading} from "vactory-ui"

export const TabsContainer = ({data}) => {
    const title = get(data, 'extra_field.title');
    const raw_description = get(data, 'extra_field.intro.value.#text', null);
    const description = <Wysiwyg html={raw_description}/>;

    const items = data.components.map(component => {
        return {
            title: get(component, 'title'),
            description: <Wysiwyg html={(get(component, 'description.value.#text'))}/>,
        }
    });

    return (
        <Box>
            <Box sx={{
                'text-align': 'center'
            }}>
                <Heading level={2}>{title}</Heading>
                {raw_description.length > 0 && <div>{description}</div>}
            </Box>
            <Box my="large">
                <Tabs
                    items={items}
                />
            </Box>
        </Box>
    )
};
