import React, { useState, createContext, useContext } from 'react';
import {
	Anchor,
	Container,
	Flex,
	Header,
	Icon,
	Image,
	Layer,
	Nav as DefaultNav,
	Navs as DefaultNavs,
	useMedia,
} from 'vactory-ui';
import { Squash as Hamburger } from 'hamburger-react';
import { theme } from '../theme';
import capital_azur_logo from '../images/capital-azur-logo.png';


const ViewModeContext = createContext('desktop');
const ViewModeProvider = ViewModeContext.Provider;

const Nav = ({asButton, active, ...props}) => {
	const viewMode = useContext(ViewModeContext);

	let styleProperties = {
		fontSize: '11px',
		lineHeight: '32px',
		fontWeight: active ? 'extraBold' : 'medium',
		textTransform: 'uppercase',
		position: 'relative',
		paddingX: 'medium',
		paddingY: 0,
		color: active ? 'lightBlue' : 'black',
		transition: '.2s',

		'&:hover': {
			color: 'primary',
		}
	}

	if ( viewMode === 'desktop' ) {
		styleProperties['&:not(:first-of-type)::before'] = {
			content: '""',
			display: 'block',
			width: '1px',
			height: '16px',
			top: 'calc(50% - 16px/2)',
			left: '-1px',
			bg: 'rgba(0, 0, 0, .16)',
			position: 'absolute',
		}
	}

	let ButtonStyleProperties = {
		fontWeight: 'medium',
		bg: 'darkBlue',
        color: 'white',
        border: '1px solid darkBlue',
		borderRadius: 'large',
		ml: 15,
		pl: 9,
		pr: 18,
		py: 4,
        boxShadow: '0 10px 14px -5px rgba(191, 191, 191, .67)',
		transition: '.3s ease-in',

		'&:not(:first-of-type)::before': {
			content: 'none',
		},

		'&:hover': {
            bg: 'white',
            color: 'darkBlue',
			boxShadow: '0 10px 14px 5px rgba(191, 191, 191, .67)',
		},
	}

	if ( asButton ) {
		return <DefaultNav 
					sx={{...styleProperties, ...ButtonStyleProperties}} 
					{...props} />
	}
	else {
		return <DefaultNav sx={styleProperties} {...props} />
	}
}

const Navs = props => {
	const viewMode = useContext(ViewModeContext);

	if ( viewMode === 'desktop' ) 
		return <DefaultNavs {...props} />
	
	return (
		props.menuOpened &&
		<Layer 
			position="left"
			full="vertical"
			onClickOutside={props.onClickOutside} >
			<DefaultNavs sx={{
				flexDirection: 'column !important',
				minHeight: '100vh',
				width: '250px',
				backgroundColor: 'white',
			}} {...props} />
		</Layer>
	);
}

export const CapitalAzurHeader = () => {
	const [menuOpened, openCloseMenu] = useState(false);
	const isUpLg = useMedia(`(min-width: ${theme.breakpoints.lg})`);


	return <Header px="large" py={5} bg="white" boxShadow={1}>
			<ViewModeProvider value={isUpLg ? 'desktop' : 'mobile'}>
			<Container as={Flex} alignItems='center'>
				<Anchor href="/" ml="small" mr="auto">
					<Image src={capital_azur_logo} alt="Capital Azur Logo" height="82px" display="block" />
				</Anchor>

				<Navs menuOpened={menuOpened} onClickOutside={() => openCloseMenu(false)} className={"navs"} p={0}>
					<Nav href="/produits-services">Produits & Services</Nav>
					<Nav href="#">Nous connaître</Nav>
					<Nav href="#" active={true}>Insights</Nav>
					<Nav href="#" asButton={true}>
						Banque digitale
						<Icon name="lock" size="15px" sx={{ ml: "medium", verticalAlign: "text-bottom" }} />
					</Nav>
				</Navs>
				
				{ !isUpLg && <Hamburger toggled={menuOpened} toggle={openCloseMenu} />}
			</Container>
			</ViewModeProvider>
		</Header>;
}