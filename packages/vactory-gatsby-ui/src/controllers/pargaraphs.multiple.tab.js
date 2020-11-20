import React from "react"
import get from 'lodash.get';
import {Box, Button, Heading, Tabs, Tab} from "vactory-ui";
import {Link, Wysiwyg} from "vactory-gatsby-ui";

export const ParagraphsMultipleTab = ({items, ...rest}) => {
    const {title = '', introduction = '', cta} = rest;
    const raw_description = get(introduction, 'processed', null);
    const description = <Wysiwyg html={raw_description}/>;

    const tabItems = items.map((item, index) => {
        return {
            key: get(item, 'id', index),
            title: get(item, '_title', ''),
            content: get(item, '_widgets', ''),
        }
    });

    return (<Box>
        <Box sx={{
            'text-align': 'center'
        }}>
            {title && title !== "" && <Heading level={2}>{title}</Heading>}
            {raw_description.length > 0 && <div>{description}</div>}
        </Box>
        <Box my="large">
            <Tabs>
                {tabItems.map(tab => {
                    return <Tab key={tab.key} title={tab.title}>
                        {tab.content}
                    </Tab>
                })}
            </Tabs>
        </Box>
        <Box sx={{
            'text-align': 'center'
        }}>
            {cta && cta.url && <Button as={Link} to={cta.url}>{cta.title}</Button>}
        </Box>
    </Box>)

};
