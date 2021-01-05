import React from 'react'
import get from 'lodash.get'
import {Box, Heading, Button} from 'vactory-ui'
import {Link, Wysiwyg} from "vactory-gatsby-ui";
import {Form, useWebform} from 'vactory-gatsby-webform';

export const WebformWidgetContainer = ({data}) => {
    const webform_id = get(data, 'components.0.webform.id', null);
    let style = get(data, 'components.0.webform.style', {});
    let buttons = get(data, 'components.0.webform.buttons', {});
    // const component = get(data, 'components.0.component', null);
    const title = get(data, 'extra_field.title', null);
    const raw_description = get(data, 'extra_field.intro.value.#text', null);
    const link = get(data, 'extra_field.link.url', null);
    const link_label = get(data, 'extra_field.link.title', null);
    const description = <Wysiwyg html={raw_description}/>;
    const webform = useWebform(webform_id);

    if (style !== "") {
        style = JSON.parse(style);
    }

    if (buttons !== "") {
        buttons = JSON.parse(buttons);
    }

    return (
        <Box mb="30px">
            { (title || raw_description) && <Box sx={{'text-align': 'center'}}>
                {title && <Heading level={2}>{title}</Heading> }
                {raw_description.length > 0 && <div>{description}</div>}
            </Box> }

            <Form
                webformId={webform_id}
                schema={webform.elements}
                styles={style}
                buttons={buttons}
            />

            { (link || link_label) && <Box sx={{'text-align': 'center'}}>
                <Button as={Link} to={link}>
                    {link_label}
                </Button>
            </Box> }
        </Box>
    )
};
