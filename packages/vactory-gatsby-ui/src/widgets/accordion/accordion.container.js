import React from 'react'
import get from 'lodash.get';
import {Wysiwyg, Accordion} from "vactory-gatsby-ui";
import {Box} from "vactory-ui"

export const AccordionContainer = ({data}) => {
    const title = get(data, 'extra_field.title');
    const description = <Wysiwyg html={get(data, 'extra_field.intro.value.#text')}/>;

    const items = data.components.map(component => {
        return {
            title: get(component, 'title'),
            description: <Wysiwyg html={get(component, 'description.value.#text')} />,
        }
    });

    return (
        <Box>
            <h1>{title}</h1>
            <div>{description}</div>
            <Box my="large">
                <Accordion
                    items={items}
                />
            </Box>
        </Box>
    )
};
