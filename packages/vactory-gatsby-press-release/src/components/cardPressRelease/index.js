import React from 'react'
import { Box, Flex, Text, Image, Button, Col } from 'vactory-ui'
import get from 'lodash.get'
import { useTranslation } from 'react-i18next'
import { ImageDefault } from 'vactory-gatsby-ui'

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

export const CardPressRelease = (props) => {
  const { t } = useTranslation()
  const title = props.title
  const date = props.date
  const category = props.category
  const excerpt = props.excerpt
  const file = props.file
  const image = get(props, 'image._default', ImageDefault)

  return (
    <Box height="100%" pb="16px">
      <Card height="100%">
        <CardBody>
          <Box width="100%" height="244px">
            <Image src={image} width="100%" height="100%" />
          </Box>
          <Box sx={{ p: 'medium', flexGrow: 1 }}>
            <CardTitle>{title}</CardTitle>
            <Flex mb="medium">
              <CardTag>{category}</CardTag>
            </Flex>
            <CardDate>{date}</CardDate>
            <CardExcerpt
              dangerouslySetInnerHTML={{
                __html: excerpt,
              }}
            />
          </Box>
          {file && (
            <Box p="medium" mt="auto">
              <Button
                outline="info"
                as={'a'}
                href={file}
                target={'_blank'}
                download
              >
                {t('Télécharger le document')}
              </Button>
            </Box>
          )}
        </CardBody>
      </Card>
    </Box>
  )
}

export const CardPressReleaseOneRow = (props) => {
  const { t } = useTranslation()
  const title = props.title
  const date = props.date
  const category = props.category
  const excerpt = props.excerpt
  const file = props.file
  const image = get(props, 'image._default', ImageDefault)

  return (
    <Card>
      <CardBody>
        <Flex flexDirection={['column', 'column', 'row']}>
          <Col xs={12} md={5}>
            <Box>
              <Image src={image} width="100%" maxHeight="260px" />
            </Box>
          </Col>
          <Flex flexDirection="column">
            <Box sx={{ p: 'medium', flexGrow: 1 }}>
              <CardTitle>{title}</CardTitle>
              <Flex mb="medium">
                <CardTag>{category}</CardTag>
              </Flex>
              <CardDate>{date}</CardDate>
              <CardExcerpt
                dangerouslySetInnerHTML={{
                  __html: excerpt,
                }}
              />
            </Box>
            {file && (
              <Box p="medium" mt="auto">
                <Button
                  outline="info"
                  as={'a'}
                  href={file}
                  target={'_blank'}
                  download
                >
                  {t('Télécharger le document')}
                </Button>
              </Box>
            )}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  )
}
