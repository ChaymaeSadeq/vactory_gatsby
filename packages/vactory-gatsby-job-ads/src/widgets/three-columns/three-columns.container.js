import React from 'react'
import get from 'lodash.get'
import {Box, Heading, Button} from 'vactory-ui'
import {Wysiwyg, Link} from 'vactory-gatsby-ui'
import {ThreeColumns} from 'vactory-gatsby-job-ads'
import {stripHtml, truncate} from 'vactory-gatsby-core'

export const ThreeColumnsContainer = ({data}) => {
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const title = get(data, 'components.0.title', '')
    const raw_description = get(data, 'components.0.description.value.#text', null)
    const description = <Wysiwyg html={raw_description}/>
    const link = get(data, 'components.0.link.url', null)
    const link_label = get(data, 'components.0.link.title', '')
    const posts = nodes.map((post) => {
        return {
            ...post,
            profileDescription: truncate(stripHtml(get(post, 'profileDescription', '')), 100),
            city: get(post, 'city.label', null),
            date: get(post, 'date.html_date', null),
            contract: get(post, 'contract.label', null),
            profession: get(post, 'profession.label', null),
        }
    });

    return (
        <Box mb="30px">
            <Box sx={{'text-align': 'center'}}>
                <Heading level={2}>{title}</Heading>
                {raw_description.length > 0 && <div>{description}</div>}
            </Box>
            <ThreeColumns posts={posts}/>
            <Box sx={{'text-align': 'center'}}>
                {link && (
                    <Button as={Link} to={link}>
                        {link_label}
                    </Button>
                )}
            </Box>
        </Box>
    )
}
