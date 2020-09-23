import React, { useState } from 'react';
import get from 'lodash.get';
import {
	Anchor,
	Box,
	Container,
	Flex,
	Header,
	Icon,
	Image,
	Layer,
	Nav as DefaultNav,
	Navs as DefaultNavs,
} from 'vactory-ui';
import { Squash as Hamburger } from 'hamburger-react';
import { useMenu } from 'vactory-gatsby-core'
import capital_azur_logo from '../images/capital-azur-logo.png';



const Nav = ({asButton, icon, active, ...props}) => {

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
		},

		'&:not(:first-of-type)::before': {
			content: [null, null, null, '""'],
			display: 'block',
			width: '1px',
			height: '16px',
			top: 'calc(50% - 16px/2)',
			left: '-1px',
			bg: 'rgba(0, 0, 0, .16)',
			position: 'absolute',
		},
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
		width: 'calc(100% - 24px)',
		textAlign: 'center',
		mt: [10, null, null, 0],
		width: [null, null, null, 'auto'],

		'&:not(:first-of-type)::before': {
			content: 'none',
		},

		'&:hover': {
            bg: 'white',
            color: 'darkBlue',
			boxShadow: '0 10px 14px 5px rgba(191, 191, 191, .67)',
		},
	}

	return <DefaultNav sx={{
			...styleProperties,
			...( asButton ? ButtonStyleProperties : {} ),
		}} {...props}>
		{props.children}
		{icon && <Icon name="lock" size="15px" sx={{ ml: "medium", verticalAlign: "text-bottom" }} />}
	</DefaultNav>
}

const navsMap = ( list ) => {
	return list.map( item => <Nav
		key={item.id}
		href={item.url}
		asButton={get(item, 'options.attributes.class', '').indexOf('as-btn') > -1}
		icon={get(item, 'options.attributes.icon', null)}
		target={get(item, 'options.attributes.target', null)}
		> {item.title} </Nav>
	)
}

const DesktopNavs = ({menuItems, ...rest}) => {
	return <DefaultNavs p={0} {...rest}>
		{ navsMap(menuItems) }
	</DefaultNavs>
}

const MobileNavs = (props) => {

	return (props.menuOpened &&
		<Layer 
			className="menu-layer"
			position="left"
			full="vertical"
			onClickOutside={() => props.menuHandler(false)} >

			<DefaultNavs sx={{
				p: 0,
				flexDirection: 'column !important',
				alignItems: 'flex-start',
				minHeight: '100vh',
				width: '250px',
				backgroundColor: 'white',
			}}>
				<Logo sx={{
					display: {lg: 'none'},
					mx: 12,
					mb: 20,
					color: 'lightBlue',
					borderBottom: '1px solid currentColor',
					width: 'calc(100% - 24px)',
					}} />

				{ navsMap(props.menuItems) }

			</DefaultNavs>
		</Layer>
	)
}

const Logo = props => {
	return <Anchor href="/" ml="small" mr="auto" {...props}>
		<Image src={capital_azur_logo} alt="Capital Azur Logo" height="82px" display="block" />
	</Anchor>
}

export const CapitalAzurHeader = () => {
	const [menuOpened, openCloseMenu] = useState(false);
	const menuItems = useMenu('main');

	return <Header px="large" py={5} bg="white" boxShadow={1}>
			<Container as={Flex} alignItems='center'>
				<Logo />

				{/* Desktop menu */}
				<Box display={{_: 'none', lg: 'block'}}>
					<DesktopNavs menuItems={menuItems} />
				</Box>

				{/* Mobile menu */}
				<Box display={{lg: 'none'}}>
					<MobileNavs
						className={"navs"}
						menuItems={menuItems}
						menuOpened={menuOpened}
						menuHandler={openCloseMenu} />
				</Box>
				
				<Box display={{lg: 'none'}} >
					<Hamburger toggled={menuOpened} toggle={openCloseMenu} />
				</Box>
			</Container>
		</Header>;
}