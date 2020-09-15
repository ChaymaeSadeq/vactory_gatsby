import React from 'react';
import {
	Box,
	Container,
} from 'vactory-ui';
import {BreadCrumb} from './BreadCrumb';
import {DashHeading} from './Headings';


export const Banner = ({title, breadcrumb, image, bgColor='#D0E0DF', props}) => {
  return <Box sx={{
		backgroundColor: bgColor,
  }}>
		<Container css={`
			position: relative;
			height: 271px;
			background: url(${image}) center / cover no-repeat;
			@media (min-width: ${p => p.theme.breakpoints.md}) {
				background-position: right;
			}
		`}>

			<Box sx={{
				position: 'absolute',
				color: 'lightBlue',
				bottom: 40,
			}}>
				<BreadCrumb path={breadcrumb} />
				<DashHeading variant='heading.banner' mb={0} mt={12}>{title}</DashHeading>
			</Box>

		</Container>
    </Box>
}