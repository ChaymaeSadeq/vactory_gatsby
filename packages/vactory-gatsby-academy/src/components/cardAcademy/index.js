import React from 'react'
import { Flex, Box, Text, Image, Button, Icon } from 'vactory-ui'
import { Link } from 'gatsby'

const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        fontSize: ['16px', null, '18px', null],
        ineHeight: '28px',
        fontWeight: 600,
        letterSpacing: '0',
        marginBottom: '16px',
        color: 'info500',
        textTransform: 'uppercase',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const CardImage = ({ sx, children, ...rest }) => {
  return (
    <Box
      __css={{
        position: 'relative',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const AcademyDuration = ({ sx, children, ...rest }) => {
  return (
    <Box
      __css={{
        float: 'left',
        position: 'absolute',
        left: '0px',
        top: '0px',
        zIndex: 1000,
        bg: 'info500',
        px: 'medium',
        py: 'xsmall',
        color: 'white',
        fontWeight: 500,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const AddToFavorite = ({ sx, ...rest }) => {
  return (
    <Icon
      __css={{
        float: 'left',
        position: 'absolute',
        left: '88%',
        top: '3%',
        zIndex: 1001,
        p: 'none',
        '&:hover': {
          color: 'warning500',
        },
      }}
      name="chevron-down"
      color="danger700"
      size="xlarge"
      onClick={(e) => console.log(e)}
    />
  )
}

const Rating = ({ sx, rating }) => {
  let table = []
  for (let i = 0; i < 5; i++) {
    if (i < rating)
      table.push(<Icon name="chevron-top" color="warning500" size="xlarge" />)
    else table.push(<Icon name="chevron-top" color="black500" size="xlarge" />)
  }
  return (
    <Flex>
      {table}
      <Text p="small" fontSize="12px" color="black800">
        Note ({rating}/5)
      </Text>
    </Flex>
  )
}

const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text fontSize="14px" color="black800" {...rest}>
      {children}
    </Text>
  )
}

const CardBody = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const Card = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        marginBottom: '16px',
        boxShadow: 2,
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export const CardAcademy = (props) => {
  //const id = props.id
  const title = props.title
  const excerpt = props.excerpt
  const instructor = props.instructor
  const duration = props.duration
  const url = props.url
  const image = props.image._default

  return (
    <Card>
      <CardBody>
        <CardImage>
          <AddToFavorite />
          <AcademyDuration>Duree {duration}</AcademyDuration>
          <Box width={[1]} height="244px">
            <Image src={image} width={[1]} height="100%" />
          </Box>
        </CardImage>
        <Box sx={{ p: 'medium' }}>
          <CardTitle>{title}</CardTitle>
          <Text fontSize="body" mb="small">
            {instructor}
          </Text>
          <Rating rating={4} />
          <CardExcerpt
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          />
        </Box>
        <Box p="medium" mt='auto'>
          <Link to={url} style={{ textDecoration: 'none' }}>
            <Button fill="info">Read more</Button>
          </Link>
        </Box>
      </CardBody>
    </Card>
  )
}
/**
 * pagination
 * same size
 */
