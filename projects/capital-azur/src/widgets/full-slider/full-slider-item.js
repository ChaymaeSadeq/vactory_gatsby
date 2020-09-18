import React from 'react'
import { Link } from 'vactory-gatsby-ui'
import { Box, Flex } from 'vactory-ui'

const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        fontSize: ['25px', null, '30px', null],
        ineHeight: '38px',
        fontWeight: 800,
        letterSpacing: '0',
        marginBottom: '16px',
        'font-family': 'Montserrat',
      }}
    >
      {children}
    </Box>
  )
}

const CardDescription = ({ sx, children, ...rest }) => {
    return (
      <Box
        as="p"
        sx={sx}
        __css={{
          fontSize: ['18px', null, '21px', null],
          ineHeight: '25px',
          letterSpacing: '0',
          fontWeight: 350,
          marginBottom: '16px',
          'font-family': 'Montserrat',
        }}
      >
        {children}
      </Box>
    )
  }

const CardButton = ({ children, ...rest }) => (
  <Box
    as={Link}
    {...rest}
    __css={{
      display: 'inline-flex',
      fontSize: '21px',
      fontWeight: '350',
      color: '#2178FF',
      textDecoration: 'none',
      border: 0,
      p: 0,
      m: 0,
      pb: '8px',
      background: 'transparent',
      '&:hover': {
        cursor: 'pointer',
      },
    }}
  >
    {children}
  </Box>
)

const ContentCard = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        p: 'large',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        marginBottom: '16px',
        width: '100%',
        maxWidth: '500px',
        'border-radius': '8px',
        'background-color': '#FFFFFF',
        'box-shadow': '0 50px 400px 20px rgba(0,0,0,0.05)',
      }}
    >
      {children}
    </Box>
  )
}

export const FullSliderItem = (props) => {
  const title = props.title
  const description = props.description
  const image = props.image
  const link = props.link
  const link_label = props.link_label
  return (
    <Flex
      sx={{
        p: 'large',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      
        <ContentCard>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
            <CardButton to={link}>{link_label}</CardButton>
        </ContentCard>
    
    </Flex>
  )
}
