import React from 'react'
import { Box, Flex, Text, Button } from 'vactory-ui'
import { useTranslation } from 'react-i18next'
import { Link } from 'vactory-gatsby-ui'

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
        marginBottom: 'xsmall',
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

const CardHeader = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={sx}
      __css={{
        maxHeight: '52px',
        p: 'medium',
        marginBottom: 0,
        backgroundColor: '#00000008',
        borderBottom: '1px solid #00000020',
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
        borderRadius: 'small',
        boxShadow: '2',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        marginBottom: '16px',
        width: '100%',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

const CardTag = ({ sx, children }) => (
  <Box
    sx={sx}
    __css={{
      display: 'inline-flex',
      fontSize: '9px',
      fontWeight: '600',
      backgroundColor: 'info500',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'xsmall',
      textTransform: 'uppercase',
      py: 'xxsmall',
      px: 'xsmall',
      mb: 'auto',
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
      mb: 'medium',
    }}
  >
    {children}
  </Box>
)

const CardButton = ({ url, children }) => {
  return (
    <Link to={url} style={{ textDecoration: 'none' }}>
      <Button fill="info">{children}</Button>
    </Link>
  )
}

export const CardJobAds = (props) => {
  const { t } = useTranslation()
  const url = props.url
  const title = props.title
  const date = props.date
  const city = props.city
  const profession = props.profession
  const profileDescription = props.profileDescription

  return (
    <Box height="100%" pb="16px">
      <Card height="100%">
        <CardHeader>
          <Flex>
            <CardTag sx={{ mr: 'xxsmall' }}>{profession}</CardTag>
            <CardTag sx={{ color: 'black', backgroundColor: 'warning400' }}>
              {city}
            </CardTag>
          </Flex>
        </CardHeader>
        <CardBody>
          <Box sx={{ p: 'medium', flexGrow: 1 }}>
            <CardTitle>{title}</CardTitle>
            <CardDate>{date}</CardDate>
            <CardExcerpt className="card-excerpt">
              {profileDescription}
            </CardExcerpt>
          </Box>
          <Box p="medium" mt="auto">
            <CardButton url={url}>{t('Read more')}</CardButton>
          </Box>
        </CardBody>
      </Card>
    </Box>
  )
}

export const CardJobAdsOneRow = (props) => {
  const { t } = useTranslation()
  const url = props.url
  const title = props.title
  const date = props.date
  const city = props.city
  const profession = props.profession
  const profileDescription = props.profileDescription

  return (
    <Card>
      <CardHeader>
        <Flex>
          <CardTag sx={{ mr: 'xxsmall' }}>{profession}</CardTag>
          <CardTag sx={{ color: 'black', backgroundColor: 'warning400' }}>
            {city}
          </CardTag>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex flexDirection="column">
          <Box sx={{ p: 'medium', flexGrow: 1 }}>
            <CardTitle>{title}</CardTitle>
            <CardDate>{date}</CardDate>
            <CardExcerpt className="card-excerpt">
              {profileDescription}
            </CardExcerpt>
          </Box>
          <Box p="medium" mt="auto">
            <CardButton url={url}>{t('Read more')}</CardButton>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}
