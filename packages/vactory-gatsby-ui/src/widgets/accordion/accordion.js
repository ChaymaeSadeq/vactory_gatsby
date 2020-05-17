import React, {useState} from 'react'
import {Accordion as BaseAccordion, AccordionPanel, Box, Flex, Icon} from 'vactory-ui'

export const AccordionHeader = ({isActive, children, ...rest}) => {
    return <Flex sx={{
        padding: ['medium', null, 'large'],
        backgroundColor: 'white',
        fontWeight: 700
    }} {...rest}>
        <Box>{children}</Box>
        <Box>
            {isActive ?
                <Icon name="chevron-top" size="medium"/>
                :
                <Icon name="chevron-down" size="medium"/>
            }
        </Box>
    </Flex>
};

export const AccordionContent = (props) => {
    return (<Box {...props} sx={{
        padding: ['medium', null, 'large'],
    }}>
        {props.children}
    </Box>);
};

export const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState([]);
    const hanOnActive = index => {
        setActiveIndex(index);
    }

    return (
        <BaseAccordion activeIndex={activeIndex} onChange={hanOnActive}>
            {items.map((item, index) => {
                return (
                    <AccordionPanel
                        title={<AccordionHeader
                            isActive={activeIndex.includes(index)}>
                            {item.title}
                        </AccordionHeader>}
                        key={index}
                    >
                        <AccordionContent>{item.description}</AccordionContent>
                    </AccordionPanel>
                )
            })}
        </BaseAccordion>
    )
};
