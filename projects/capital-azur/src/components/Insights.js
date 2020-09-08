import React from 'react';
import {
    Box,
    // Card,
    Flex,
    Image,
    Link,
    Paragraph,
} from 'vactory-ui';
import { DashHeading } from './Headings';
import { Container } from './Container';


const CapitalCardTitle = ({ sx, children, ...rest }) => {
    return (<Box
        as='h1'
        sx={sx}
        __css={{
            fontSize: ['16px', null, '20px', null],
            lineHeight: ['24px', null, '28px', null,],
            fontWeight: 600,
            letterSpacing: -.4,
            marginBottom: '16px'
        }}>
        {children}
    </Box>)
}

const CardBody = ({ sx, children, ...rest }) => {
    return (<Box sx={sx} __css={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }}>
        {children}
    </Box>)
}

const Card = ({ sx, children, ...rest }) => {
    return (<Box  sx={sx} __css={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        marginBottom: '16px',
        // minHeight: '421px'
    }} {...rest}>
        {children}
    </Box>)
}

const CapitalCardTag = ({ children }) => <Box __css={{
    display: 'inline-flex',
    fontSize: "9px",
    fontWeight: '600',
    backgroundColor: 'primary800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'rounded',
    textTransform: 'uppercase',
    py: 'xsmall',
    px: 'medium',
    color: 'white',
}}>{children}</Box>

const CapitalCardDate = ({ children }) => <Box __css={{
    display: 'inline-flex',
    fontSize: "15px",
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    color: '#9B9B9B',
    ml: '10px'
}}>{children}</Box>

const CapitalCardButton = ({ children }) => <Box
    as="button"
    __css={{
        display: 'inline-flex',
        fontSize: "14px",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        color: '#2178FF',
        textTransform: 'uppercase',
        border: 0,
        p: 0,
        m: 0,
        pb: '8px',
        background: 'transparent',
        borderBottom: '2px solid',
        '&:hover': {
            cursor: 'pointer'
        }
    }}>{children}</Box>


export const InsightsCard = ({tag, date, image, title, link, ...rest}) => {
    return <Box width={[1, 1/2, null, 1/3]}>
            <Card sx={{
                m: 15,
                boxShadow: 'cards',
            }}>
                <CardBody>
                    <Image src={'https://capital-azur.com/sites/default/files/2020-05/13.jpg'} />
                    <Box p='medium'>
                        <Flex mb="16px">
                            <CapitalCardTag>ACTUALITE</CapitalCardTag>
                            <CapitalCardDate>15/01/08</CapitalCardDate>
                        </Flex>
                        <CapitalCardTitle>Crise du Coronavirus Capital Azur accompagne ses clients Professionnels et Entreprises</CapitalCardTitle>
                        <CapitalCardButton>Lire Plus</CapitalCardButton>
                    </Box>
                </CardBody>
            </Card>
        </Box>
}

export const Insights = ({title, intro, cards, action={label: 'Voir tous les insights', href: '://'}, ...rest}) => {
    return <Box sx={{
        py: 70,
        backgroundImage: 'linear-gradient(72.21deg, #F4F8F8 0%, #FFFFFF 100%)'
    }}>
        <Container>
                <Box variant='boxes.intro'>
                    <DashHeading mb={30}>{title}</DashHeading>
                    <Paragraph>{intro}</Paragraph>
                </Box>

                <Flex flexWrap='wrap' mx={-15}>
                    {cards}
                </Flex>

                <Link sx={{
                    mt: 70,
                    mx: 'auto',
                    width: 'fit-content',
                    display: 'flex',
                    variant: 'buttons.white',
                }} href={action.href}>{action.label}</Link>
        </Container>
    </Box>
}