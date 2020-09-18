import React from 'react'
import get from 'lodash.get';
import {Wysiwyg} from "vactory-gatsby-ui";
import {CapitalAzurAccordion} from "./capital-azur-accordion";
import {Box, Heading} from "vactory-ui";

export const CapitalAzurAccordionContainer = ({data}) => {

    const title = get(data, 'extra_field.title');
    const raw_description = get(data, 'extra_field.intro.value.#text', null);
    const description = <Wysiwyg html={raw_description}/>;

    const items = data.components.map(component => {
        return {
            title: get(component, 'title'),
            description: <Wysiwyg html={get(component, 'description.value.#text')} />,
            image: get(component, 'image.0._default'),
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
                <CapitalAzurAccordion
                    items={items}
                />
            </Box>
        </Box>
    )
};
