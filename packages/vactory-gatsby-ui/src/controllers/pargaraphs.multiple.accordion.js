import React from "react"
import get from 'lodash.get';
import {Box, Button, Heading, AccordionPanel, Accordion} from "vactory-ui";
import {Link} from "../components/link";

export const ParagraphsMultipleAccordion = ({items, ...rest}) => {
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
            <Accordion>
                {tabItems.map(tab => {
                    return <AccordionPanel key={tab.key} title={tab.title}>
                        {tab.content}
                    </AccordionPanel>
                })}
            </Accordion>
        </Box>
        <Box sx={{
            'text-align': 'center'
        }}>
            {cta && cta.url && <Button as={Link} to={cta.url}>{cta.title}</Button>}
        </Box>
    </Box>)

};
