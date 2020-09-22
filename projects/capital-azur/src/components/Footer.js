import React from 'react';
import {
    Anchor,
	Box,
	Container,
    Flex,
    Footer,
    Icon,
	Nav,
    Navs,
    Text,
} from 'vactory-ui';
import { useMenu } from 'vactory-gatsby-core'


const FooterNav = props =>  <Nav
    as={Anchor} sx={{
    fontSize: 11,
    lineHeight: '20px',
    fontWeight: 'medium',
    letterSpacing: .21,
    textTransform: 'uppercase',
    color: '#000',
    padding: 0,
    paddingX: [0, null, null, '16px'],
    borderRight: ['0', null, null, '1px solid rgba(0,0,0,0.19)'],
    m:0,
    mb: ['12px', null, null, '0'],
    '&:hover': {
        color: 'primary',
    },
    '&:last-child' : {
        borderRight: 0,
        pr: 0,
        m: 0
    }
    }} {...props}/>

const FooterNavs = props =>  <Navs sx={{
        p: 0,
        m:0,
        width:"100%",
        alignItems: 'baseline',
        flexDirection: ['column !important', null, null, 'row !important'],
        }}>{props.children}</Navs>


const SocialIcon = ({name, link='#', ...rest}) => {
    return <Anchor href={link} sx={{
        mr: 16,
        color: 'primary',
        transition: '.3s',
        '&:hover': {
            color: 'black',
        }
        }} {...rest}>
        <Icon name={name} size="24px" />
    </Anchor>
}


export const CapitalAzurFooter = () => {
    const menuItems = useMenu('footer');

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
                width: '100%',
                flexDirection: 'column',
            }}>
                <Flex sx={{
                    fontSize: "14px",
                    color: '#000000',
                    flexDirection: ['column', null, null, 'row'],
                    justifyContent: 'space-between',
                    alignItems: ['flex-start', null, null, 'center'],
                    p: '23px 12px',
                }}>
                    <Flex className="vf-footer1__social-media" sx={{
                            mb: ['16px', '0px'],
                            flexWrap: 'wrap',
                            width: ['100%', null, null, 'auto'],
                            justifyContent: 'center',
                        }}>
                        <Text display={{lg: 'none'}} sx={{
                            mb: 7.5,
                            flex: '1 100%',
                            textAlign: 'center',
                            fontWeight: 'semiBold',
                        }}>Follow us</Text>
                        <SocialIcon name="youtube" link="#" />
                        <SocialIcon name="linkedin" link="#" />
                        <SocialIcon name="facebook" link="#" />
                    </Flex>
                    <Flex className="vf-footer1__nav-menu">
                        <FooterNavs>
                            {menuItems.map(
                                item => <FooterNav
                                    key={item.id}
                                    href={item.url}
                                    { ...('attributes' in item.options ? item.options.attributes : {})}>
                                {item.title}
                                </FooterNav>
                            )}
                        </FooterNavs>
                    </Flex>
                </Flex>

                <Flex 
                    display={{_: 'none !important', lg: 'flex !important'}}
                    sx={{
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
