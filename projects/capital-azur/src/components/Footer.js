import React from 'react';
import {
	Box,
	Container,
    Flex,
    Footer,
	Icon,
	Nav,
	Navs,
} from 'vactory-ui';


const FooterNav = props =>  <Nav sx={{
    color: 'inherit',
    p: 0,
    px: [0, '16px'],
    borderRight: ['0', '1px solid rgba(0,0,0,0.19)'],
    m:0,
    mb: ['12px', '0'],
    '&:last-child' : {
        borderRight: 0,
        pr: 0,
        m: 0
    }
    }}>{props.children}</Nav>

const FooterNavs = props =>  <Navs sx={{
        p: 0,
        m:0,
        width:"100%",
        alignItems: 'baseline'
        }}>{props.children}</Navs>

export const CapitalAzurFooter = () => {
    return (
        <Container>
        <Footer sx={{
            backgroundColor: '#fff',
            fontFamily: 'montserrat',
            display: 'flex',
            flexDirection: 'column',
            mt: 'xlarge'
        }} className="vf-footer1">
            <Flex sx={{
                width: ['100%', '100%', '900px', '100%', '100%'],
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Flex sx={{
                    fontSize: "14px",
                    color: '#000000',
                    flexDirection: ['column', 'row'],
                    justifyContent: 'space-between',
                    alignItems: ['baseline', 'center'],
                    p: '23px 12px',
                }}>
                    <Flex mb={['16px', '0px']} className="vf-footer1__social-media">
                        <Box mr="16px"><Icon name="linkedin" size="24px" color="#017CFE" /></Box>
                        <Box mr="16px"><Icon name="youtube" size="24px" color="#017CFE" /></Box>
                        <Box mr="16px"><Icon name="twitter" size="24px" color="#017CFE" /></Box>
                    </Flex>
                    <Flex className="vf-footer1__nav-menu">
                        <FooterNavs>
                           <FooterNav>Nous Contacter</FooterNav>
                           <FooterNav>Mentions Légales</FooterNav>
                           <FooterNav>Plan du Site</FooterNav>
                        </FooterNavs>
                    </Flex>
                </Flex>

                <Flex sx={{
                    fontSize: "11px",
                    color: '#017CFE',
                    flexDirection: ['column', 'row'],
                    justifyContent: 'space-between',
                    p: '23px 12px',
                    borderTop: '1px solid',
                    borderTopColor: 'gray400',
                }} className="vf-footer1__copytight">
                    <Box mb={['12px', '0']}>©2020 CAPITAL AZUR</Box>
                    <Box>Conception et Développement: VOID</Box>
                </Flex>

            </Flex>
        </Footer>
        </Container>
    )
}
