import React from "react"
import {Box, Header, Text, Layer, Button, Icon, Flex} from "vactory-ui";
import {MenuA as MenuNavigation} from '../../menus/menuA'
import {LanguageSelectorA as LanguageSelector} from "../../language-selectors/languageSelectorA";


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

const MenuButton = ({ size = 'large', ...props }) =>
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
        <Icon name="menu" size={size} />
    </Button>

export const HeaderA = ({pageInfo, currentLanguage}) => {
    const [showSidebarMenu, setShowSidebarMenu] = React.useState();

    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1}>
                <Box><Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text></Box>
                <Box display={['none', 'none', 'block']}><MenuNavigation/></Box>
                <LanguageSelector currentLanguage={currentLanguage} pageInfo={pageInfo}/>
                <Box display={['block', null, 'none']} color="gray900" ><MenuButton onClick={() => setShowSidebarMenu(true)} /> </Box>

                {showSidebarMenu && (
                    <Layer
                        position="right"
                        full="vertical"
                        modal={true}
                        responsive
                        plain={true}
                        onClickOutside={() => setShowSidebarMenu(false)} >
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
