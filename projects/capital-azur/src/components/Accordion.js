import React, {useState} from 'react';
import {
    Accordion,
    AccordionPanel ,
    Box,
    Flex,
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
                <Icon name="minus" size="small" color={isActive ? '#2178FF' : '#C7C7C7'} />
                :
                <Icon name="plus" size="small" color={isActive ? '#2178FF' : '#C7C7C7'} />
            }
        </Box>
    </Flex>
}

const AccordionContentCapitalAzur = ({ children, ...rest }) => {
    return (
        <Box {...rest}
            sx={{
                padding: ['medium', null, '40px 60px'],
                border: 0,
            }}>
            {children}
        </Box>);
}

const AccordionPanelCapitalAzur = ({ title, panelKey, isActive, children }) =>
    <AccordionPanel sx={{
        border: 0,
        boxShadow: '0 10px 14px -5px rgba(191,191,191,0.67)',
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: '8px',
        marginBottom: '30px',
    }}
        panelKey={panelKey}
        title={<AccordionHeaderCapitalAzur isActive={isActive}>{title}</AccordionHeaderCapitalAzur>}>
        <AccordionContentCapitalAzur>
            {children}
        </AccordionContentCapitalAzur>
    </AccordionPanel>



export const CapitalAzurAccordion = () => {

    const [activeIndex, setActiveIndex] = useState(['credit']);

    const hanOnActive = index => {
        setActiveIndex(index);
    }

    const isActive = key => activeIndex.includes(key);

    return (
        <Box p="xlarge">
            <Accordion activeIndex={activeIndex} onChange={hanOnActive} >

                <AccordionPanelCapitalAzur panelKey="compte-carte" title="Comptes et cartes" isActive={isActive('compte-carte')}>
                    <Flex flexDirection={['column', null, 'row']}>
                        <Box mr="35px"><Image src={'https://placehold.it/300x300'} /></Box>
                        <Flex flexDirection="column" justifyContent="start" alignItems="start" ml="35px" fontSize="16px">
                            <Box as="p" mb="16px">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Box>
                            <Box as="p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Box>
                        </Flex>
                    </Flex>
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="epargne" title="Epargne" isActive={isActive('epargne')}>
                    Content #2
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="credit" title="Credit" isActive={isActive('credit')}>
                    Content #3
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="assurance" title="Assurance" isActive={isActive('assurance')}>
                    Content #5
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="bourse" title="Bourse" isActive={isActive('bourse')}>
                    Content #4
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="asset-management" title="Asset Management" isActive={isActive('asset-management')}>
                    Content #6
                </AccordionPanelCapitalAzur>

            </Accordion>
        </Box>
    )
}
