import React from 'react'
import get from 'lodash.get';
import {Wysiwyg} from "vactory-gatsby-ui";
import {AccordionSection} from "./capital-azur-accordion";

export const CapitalAzurAccordionContainer = ({data}) => {

    const title = get(data, 'extra_field.title');
    const intro = get(data, 'extra_field.intro.value.#text', null);

    const items = data.components.map(component => {
        return {
            title: get(component, 'title'),
            text: <Wysiwyg html={get(component, 'description.value.#text')} />,
            image: get(component, 'image.0._default'),
            link: {
                href: get(component, 'link.url'),
                label: get(component, 'link.title'),
                attributes: get(component, 'link.attributes'),
            },
        }
    });


    return <AccordionSection
        title={title}
        intro={intro && <Wysiwyg html={intro} />}
        items={items} />
};
