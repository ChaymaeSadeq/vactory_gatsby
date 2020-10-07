import React from 'react'
import get from 'lodash.get';
import {Box, Heading, Button} from "vactory-ui"
import {Wysiwyg} from "vactory-gatsby-ui";
import {Link} from 'vactory-gatsby-ui'
import {Tabs} from 'vactory-gatsby-gouvernance'

export const TabsContainer = ({data}) => {
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const terms = get(data, 'components.0.views.data.exposed.vactory_governance_role', []);
    const title = get(data, 'components.0.title', '');
    const raw_description = get(data, 'components.0.description.value.#text', null);
    const description = <Wysiwyg html={raw_description}/>;
    const link = get(data, 'components.0.link.url', null);
    const link_label = get(data, 'components.0.link.title', '');
    const posts = nodes.map(post => {
        return {
            ...post,
            excerpt: get(post, 'excerpt'),
            role: get(post, 'role.label'),
        }
    });

    return (
        <Box my={'30px'}>
            <Box sx={{
                'text-align': 'center'
            }}>
                <Heading level={2}>{title}</Heading>
                {raw_description.length > 0 && <div>{description}</div>}
            </Box>
            <Box my={'30px'}>
            <Tabs posts={posts} terms={terms} />
            </Box>
            <Box sx={{
                'text-align': 'center'
            }}>
                {link && <Button as={Link} to={link}>{link_label}</Button>}
            </Box>
        </Box>
    )
};
