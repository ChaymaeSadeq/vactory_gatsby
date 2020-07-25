import React from "react"
import {Box, Header, Layer, Button, Icon} from "vactory-ui";
import {
    MenuA as MenuNavigation,
    SearchA as SearchBox,
    LanguageSelectorA as LanguageSelector,
    Link,
    HeaderALayerMenu as LayerMenu,
    StatePageSection
} from 'vactory-gatsby-ui'
import {useRtl, AuthUserProfile} from "vactory-gatsby-core";
import { motion, useAnimation } from 'framer-motion';

const MotionHeader = motion.custom(Header);

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

export const HeaderA = ({pageInfo, currentLanguage, location}) => {
    const headerRef = React.useRef({
        location: null,
    });
    const [showSidebarMenu, setShowSidebarMenu] = React.useState();
    const isRtl = useRtl();
    let pageSection = StatePageSection.useContainer();
    const headerAnimationCtrls = useAnimation();
    let variants = {
        initial: { backgroundColor: '#ffffff' },
        state2: { backgroundColor: '#333333' },
        state3: { backgroundColor: '#ff6347' },
    };

    React.useEffect(() => {
        if (!headerRef.current.location) {
            headerRef.current.location = location;
        }
        else if (headerRef.current.location !== location) {
            pageSection.setCurrentSection('initial');
            headerRef.current.location = location
        }
        else {
            headerAnimationCtrls.start(pageSection.section)
        }
    }, [pageSection]);  // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box>
            <MotionHeader
                animate={headerAnimationCtrls}
                initial="initial"
                variants={variants}
                transition={{ ease: "easeOut", duration: 0.5 }}
                p="large"
                boxShadow={1}
                sticky={true}
            >
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

                <AuthUserProfile />

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
            </MotionHeader>
        </Box>
    );
};
