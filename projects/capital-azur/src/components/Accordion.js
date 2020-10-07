import React, {useState} from 'react';
import {
    Accordion,
    AccordionPanel as DefautlAccordionPanel ,
    Box,
    Flex,
    Link,
    Icon,
    Image,
} from 'vactory-ui';

const AccordionHeaderCapitalAzur = ({ isActive, children, ...rest }) => {
    return <Flex sx={{
        padding: '19px 25px',
        color: isActive ? '#2178FF' : '#000000',
        fontSize: '18px',
        backgroundColor: 'white',
        fontWeight: 600,
        fontFamily: 'montserrat',
        borderRadius: '8px',
        boxShadow: isActive ? '0 10px 14px -5px rgba(191,191,191,0.67)' : 'none',
        borderBottomLeftRadius: isActive ? 0 : '8px',
        borderBottomRightRadius: isActive ? 0 : '8px',
        border: 0,
    }} {...rest}>
        <Box>{children}</Box>
        <Box>
            {isActive ?
                <Icon name="minus" size="large" color={isActive ? '#2178FF' : '#C7C7C7'} />
                :
                <Icon name="plus" size="large" color={isActive ? '#2178FF' : '#C7C7C7'} />
            }
        </Box>
    </Flex>
}

const AccordionPanel = ({ title, panelKey, isActive, content }) =>
    <DefautlAccordionPanel sx={{
            border: '1px solid #f1f1f1',
            boxShadow: '0 10px 14px -5px rgba(191,191,191,0.67)',
            overflow: 'hidden',
            backgroundColor: 'white',
            marginBottom: '30px',

            '&:first-child': {
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
            },
            '&:last-child': {
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
            },
        }}
        panelKey={panelKey}
        title={<AccordionHeaderCapitalAzur isActive={isActive}>{title}</AccordionHeaderCapitalAzur>}>
        {content}
    </DefautlAccordionPanel>


export const AccordionCard = ({image, text, link, ...rest}) => {
    return <Box sx={{
            padding: ['medium', null, '40px 60px'],
            border: 0,
            }} {...rest}>
        <Flex flexDirection={['column', null, 'row']}>
            <Box width={[1, null, null, 5/12]} mr={[0, null, 15]} mb={[15, null, 0]}>
                <Image src={image} sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                }}/>
            </Box>
            <Flex width={[1, null, null, 1 - 5/12]} flexDirection="column" justifyContent="start" alignItems="start" ml={[0, null, 15]} fontSize="16px">
                {text}
                {link && <Link sx={{
                    variant: 'buttons.dashPrefixed',
                    mb: 25,
                    mt: 'auto',
                }} href={link.href}>{link.label}</Link>}
            </Flex>
        </Flex>
    </Box>
}


export const CapitalAzurAccordion = ({items, ...rest}) => {

    const [activeIndex, setActiveIndex] = useState([0]);

    const handleOnActive = index => {
        setActiveIndex(index);
    }

    const isActive = key => activeIndex.includes(key);
    console.log(activeIndex)

    return <Accordion activeIndex={activeIndex} onChange={handleOnActive} {...rest}>
            {items.map( (item, index) => {
                const contentCard = <AccordionCard
                    reverseOrder={item.reverseOrder}
                    image={item.image}
                    text={item.text}
                    link={item.link} />

                return <AccordionPanel
                    key={index}
                    panelKey={index}
                    title={item.title}
                    isActive={isActive(index)}
                    content={contentCard} />
                }
            )}
        </Accordion>
}
