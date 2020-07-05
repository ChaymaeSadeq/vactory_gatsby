import React from "react"
import {Box, Header, Layer, Button, Icon} from "vactory-ui";
import {
    MenuA as MenuNavigation,
    SearchA as SearchBox,
    LanguageSelectorA as LanguageSelector,
    Link,
    HeaderALayerMenu as LayerMenu
} from 'vactory-gatsby-ui'
import {useRtl} from "vactory-gatsby-core";

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
    </Button>;

export const HeaderA = ({pageInfo, currentLanguage}) => {
    const [showSidebarMenu, setShowSidebarMenu] = React.useState();
    const isRtl = useRtl();

    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1} sticky={true}>
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
                <Box
                    flexGrow={1}
                    justifyContent="center"
                    display={['none', 'none', 'flex']}>
                    <MenuNavigation/>
                </Box>
                <Box mx="10px"><SearchBox/></Box>
                <LanguageSelector currentLanguage={currentLanguage} pageInfo={pageInfo}/>
                <Box display={['block', null, 'none']} color="gray900">
                    <MenuButton onClick={() => setShowSidebarMenu(true)}/>
                </Box>

                {showSidebarMenu && (
                    <Layer
                        position={isRtl ? "left" : "right"}
                        full="vertical"
                        modal={true}
                        responsive
                        plain={true}
                        onClickOutside={() => setShowSidebarMenu(false)}
                        onEsc={() => setShowSidebarMenu(false)}
                    >
                        <LayerMenu onClose={() => setShowSidebarMenu(false)} />
                    </Layer>
                )}
            </Header>
        </Box>
    );
};
