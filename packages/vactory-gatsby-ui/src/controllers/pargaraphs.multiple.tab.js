import React from "react"
import get from 'lodash.get';
import {Box, Button, Heading, Tabs, Tab} from "vactory-ui";
import {Link} from "../components/link";

export const ParagraphsMultipleTab = ({items, ...rest}) => {
    const {title = '', introduction = '', cta} = rest;
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
            {introduction && introduction !== "" && <div>{introduction}</div>}
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
