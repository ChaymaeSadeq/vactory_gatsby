import React from 'react'
import { Box, Flex, Button, Text } from 'vactory-ui'
import { Link } from 'vactory-gatsby-ui'
import { useTranslation } from 'react-i18next'

const CardTitle = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h1"
      sx={sx}
      __css={{
        color: 'inhert',
        textTransform: 'uppercase',
        fontSize: ['16px', null, '18px', null],
        ineHeight: '28px',
        fontWeight: 600,
        letterSpacing: '0',
        marginBottom: '16px',
      }}
    >
      {children}
    </Box>
  )
}

const CardExcerpt = ({ children, ...rest }) => {
  return (
    <Text fontSize="14px" color="black800" {...rest} ml="20px">
      {children}
    </Text>
  )
}

const CardDate = ({ children }) => (
  <Box
    __css={{
      display: 'inline-flex',
      fontFamily: 'Montserrat',
      fontSize: '20px',
      fontWeight: '500',
      color: '#3e4555',
      ml: '20px',
    }}
  >
    {children}
  </Box>
)

const CardTag = ({ children }) => (
  <Box
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
      color: 'white',
      marginBottom: '20px',
    }}
  >
    {children}
  </Box>
)

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

export const CardTender = (props) => {
  const { t } = useTranslation()

  const { title, reference, date, excerpt, url } = props
  const formUrl = url + '/form/'

  return (
    <Card>
      <Box p="medium">
        <CardTitle sx={{ mb: '0px' }}>{title}</CardTitle>
        <Flex>
          <CardTag>{reference}</CardTag>
        </Flex>
        <CardExcerpt
          dangerouslySetInnerHTML={{
            __html: excerpt,
          }}
        />

        <Box p="medium" mt="auto">
          <Button
            outline="info"
            as={Link}
            to={formUrl}
            target={'_blank'}
            download
          >
            {t('Télécharger le dossier')}
          </Button>
        </Box>
      </Box>

      <Box p="medium" mt="auto">
        <CardDate>{date}</CardDate>
      </Box>
    </Card>
  )
}
