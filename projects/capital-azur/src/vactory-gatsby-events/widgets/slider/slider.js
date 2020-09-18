import React from 'react'
import {
	Box,
	Link,
	Paragraph,
} from 'vactory-ui'
import {DashHeading} from '../../../components/Headings'
import {Container} from '../../../components/Container'
import {EventsSlider} from '../../../components/EventsSlider'

export const EventsSection = ({title, intro, action, events}) => {
  return <Box sx={{
		bg: '#f4f8f8',
		py: 50,
  }}>
	  <Container>
			<Box variant='boxes.intro'>
				{title && <DashHeading mb={30}>{title}</DashHeading>}
				{intro && <Paragraph as='div'>{intro}</Paragraph>}
			</Box>

		  	<EventsSlider events={events} />

			{ (action && 'href' in action) && <Link sx={{
					mt: 70,
					mx: 'auto',
					width: 'fit-content',
					display: 'flex',
					variant: 'buttons.white',
				}} href={action.href} >
					{action.label}
				</Link>
			}

	  </Container>
  </Box>
}