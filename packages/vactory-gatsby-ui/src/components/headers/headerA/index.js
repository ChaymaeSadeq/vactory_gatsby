import React from "react"
import {Box, Header, Layer, Button, Icon, Flex} from "vactory-ui";
import {
    MenuA as MenuNavigation,
    LanguageSelectorA as LanguageSelector,
    Link
} from 'vactory-gatsby-ui'

// const CloseButton = ({ size = 'large', ...props }) =>
//     <Button {...props}
//             sx={{
//                 transform: 'rotate(45deg)',
//                 padding: '0',
//                 background: 'transparent',
//                 '&:hover, &:focus': {
//                     background: 'transparent',
//                     color: 'inherit',
//                     borderColor: 'transparent'
//                 }
//             }}
//             size="none"
//             onClick={props.onClick}>
//         <Icon name="add-simple" size={size} />
//     </Button>

const MenuButton = ({size = 'large', ...props}) =>
    <Button {...props}
            sx={{
                padding: '0',
                background: 'transparent',
                color: 'inherit',
                '&:hover, &:focus': {
                    background: 'transparent',
                    color: 'inherit',
                    borderColor: 'transparent'
                }
            }}
            size="none"
            onClick={props.onClick}>
        <Icon name="menu" size={size}/>
    </Button>

export const HeaderA = ({pageInfo, currentLanguage}) => {
    const [showSidebarMenu, setShowSidebarMenu] = React.useState();

    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1}>
                <Box flexGrow={[1, 1, 0, 0]}>
                    <Box display="inline-block" textAlign="center" fontWeight="black" fontSize="14px"
                         sx={{
                             px: 3,
                             py: 3,
                             textTransform: 'uppercase',
                             letterSpacing: '0.1em',
                             border: '4px solid',
                             color: 'primary500',
                         }}
                    >
                        <Link color="primary500" to={`/${currentLanguage}`}>VACTORY</Link>
                    </Box>
                </Box>
                <Box display={['none', 'none', 'block']}><MenuNavigation/></Box>
                <LanguageSelector currentLanguage={currentLanguage} pageInfo={pageInfo}/>
                <Box display={['block', null, 'none']} color="gray900"><MenuButton
                    onClick={() => setShowSidebarMenu(true)}/> </Box>

                {showSidebarMenu && (
                    <Layer
                        position="right"
                        full="vertical"
                        modal={true}
                        responsive
                        plain={true}
                        onClickOutside={() => setShowSidebarMenu(false)}>
                        <Flex sx={{
                            backgroundColor: '#383838',
                            color: 'white',
                            height: '100%',
                            flexDirection: 'column',
                            width: '100%',
                            fontSize: '17px',
                            fontWeight: 200
                        }}>
                            <h1>Hello menu</h1>
                        </Flex>
                    </Layer>
                )}
            </Header>
        </Box>
    );
};
