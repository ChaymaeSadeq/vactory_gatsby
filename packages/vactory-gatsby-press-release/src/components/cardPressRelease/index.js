import React from 'react'
import { Box, Flex, Text, Image, Button, Col } from 'vactory-ui'

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
      }}
      {...rest}
    >
      {children}
    </Box>
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
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const CardTag = ({ children }) => (
  <Box
    __css={{
      display: 'inline-flex',
      fontSize: '9px',
      fontWeight: '600',
      backgroundColor: 'primary800',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'rounded',
      textTransform: 'uppercase',
      py: 'xsmall',
      px: 'medium',
      color: 'white',
    }}
  >
    {children}
  </Box>
)

const CardDate = ({ children }) => (
  <Box
    __css={{
      display: 'inline-flex',
      fontSize: '15px',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      color: '#9B9B9B',
      ml: '10px',
    }}
  >
    {children}
  </Box>
)

// const CardImage = ({ children }) => {
//   return (
//     <Box
//       __css={{
//         maxWidth: '577px',
//         maxHeight: '300px',
//         overflow: 'hidden',
//         '&:hover': {
//           transform: 'scale(1.5)',
//         },
//       }}
//     >
//       {children}
//     </Box>
//   )
// }

export const CardPressRelease = (props) => {
  const title = props.title
  const date = props.date
  const category = props.category
  const excerpt = props.excerpt
  // const url = props.url
  const image = props.image._default

  return (
    <Col xs={12}>
      <Card borderRadius="small" boxShadow={2}>
        <CardBody>
          <Flex flexDirection={['column', 'column', 'row']}>
            <Col xs={12} md={5}>
              <Image src={image} width={[1]} maxHeight="300px" />
            </Col>
            <Flex flexDirection="column">
              <Box sx={{ p: 'medium', flexGrow: 1 }}>
                <CardTitle sx={{ mb: 'xsmall' }}>{title}</CardTitle>
                <Flex mb="medium">
                  <CardTag sx={{ borderRadius: 'xsmall', bg: 'info500' }}>
                    {category}
                  </CardTag>
                </Flex>
                <CardDate sx={{ mb: 'small' }}>{date}</CardDate>
                <CardExcerpt
                  dangerouslySetInnerHTML={{
                    __html: excerpt,
                  }}
                />
              </Box>
              <Box p="medium">
                <Button outline="info">Download</Button>
              </Box>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Col>
  )
}
