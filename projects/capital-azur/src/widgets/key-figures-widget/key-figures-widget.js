import React from 'react'
import {
  Box,
  Container,
  Link,
  Paragraph,
} from 'vactory-ui'
import { DashHeading } from '../../components/Headings';
import { KeyNumbers } from '../../components/KeyNumber'

export const KeyNumbersSection = ({ action, numbers, title, intro, ...rest }) => {

  return <Box sx={{
    backgroundColor: '#f2f6f6',
    py: 90,
  }} {...rest}>
    <Container>
      <Box sx={{}}>

        <Box variant='boxes.intro'>
          {title && <DashHeading mb={30}>{title}</DashHeading>}
          {intro && <Paragraph as='div'>{intro}</Paragraph>}
        </Box>

        <KeyNumbers numbers={numbers} />

        { (action.label || action.href) && <Link sx={{
            mt: 70,
            mx: 'auto',
            width: 'fit-content',
            display: 'flex',
            variant: 'buttons.white',
          }} href={action.href} >
            {action.label}
          </Link>
			  }

      </Box>
    </Container>
  </Box>
}
