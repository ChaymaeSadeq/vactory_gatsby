import React from 'react'
import {
    Box,
    Container,
    Paragraph,
} from 'vactory-ui'
import { DashHeading } from '../../components/Headings'
import {CapitalAzurAccordion} from '../../components/Accordion'



export const AccordionSection = ({title, intro, items, ...rest}) => {

    return <Box sx={{
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
    
            <CapitalAzurAccordion items={items} />
    
          </Box>
        </Container>
      </Box>
}
