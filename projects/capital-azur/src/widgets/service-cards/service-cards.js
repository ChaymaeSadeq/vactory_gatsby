import React from 'react'
import {
    Box,
    Container,
    Paragraph,
} from 'vactory-ui'
import { DashHeading } from '../../components/Headings'
import { CapitalAzurCarousel } from '../../components/Carousel'

export const ServiceCards = ({ title, intro, cards, ...rest }) => {

  return <Box sx={{
    bg: '#f4f8f8',
    overflow: 'hidden', // to prevent y-scroll because of carousel btns
    }} {...rest}>
    <Container>
      <Box sx={{
        padding: '85px 0',
        maxWidth: ['90%', null, 'unset'],
        mx: 'auto'
        }}>

        <Box variant='boxes.intro'>
          {title && <DashHeading mb={30}>{title}</DashHeading>}
          {intro && <Paragraph as='div'>{intro}</Paragraph>}
        </Box>

        <CapitalAzurCarousel cards={cards} />

      </Box>
    </Container>
  </Box>
}
