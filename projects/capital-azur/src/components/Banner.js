import React from 'react';
import {
	Box,
	Container,
} from 'vactory-ui';
import {BreadCrumb} from './BreadCrumb';
import {DashHeading} from './Headings';


export const Banner = ({title, breadcrumb, description, image, imageMobile, bgColor, ...rest}) => {
  return <Box sx={{
		backgroundColor: bgColor,
  }}>
		<Container css={`
			position: relative;
			height: 271px;
			background: url(${image}) center / cover no-repeat;
			@media (min-width: ${p => p.theme.breakpoints.md}) {
				${ imageMobile && `background-image: url(${imageMobile});` }
				background-position: right;
			}
		`}>

			<Box sx={{
				position: 'absolute',
				color: 'lightBlue',
				bottom: 40,
			}}>
				{breadcrumb && <BreadCrumb path={breadcrumb} />}
				<DashHeading variant='heading.banner' mb={0} mt={12}>{title}</DashHeading>
				{ description &&
					<Box>
						{description}
					</Box>
				}
			</Box>

		</Container>
    </Box>
}