import React from 'react'
import { Share } from './share'
import { Box, Flex } from 'vactory-ui'
import { useTranslation } from 'react-i18next'

const Title = ({ sx, children, ...rest }) => {
  return (
    <Box
      as="h6"
      sx={sx}
      __css={{
        fontSize: ['15px', null, '17px', null],
        ineHeight: '28px',
        fontWeight: 600,
        letterSpacing: '0',
        color: '#707070',
        textTransform: 'uppercase',
        py: ['medium', '45px'],
        px: 'medium',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
}

export const SocialShare = ({ url = '' }) => {
  const { t } = useTranslation()
  let internalUrl = url
  if (url.length <= 0 && typeof window !== 'undefined')
    internalUrl = window.location.href
  return (
    <Flex flexDirection={['column', 'row']}>
      <Title>{t('Partager sur')}</Title>
      <Box display="flex" p="medium">
        <Share
          link={internalUrl}
          platform="facebook"
          icon="facebook"
          color="info800"
        />
        <Share
          link={internalUrl}
          platform="twitter"
          icon="twitter"
          color="info400"
        />
        <Share
          link={internalUrl}
          platform="linkedin"
          icon="linkedin-i"
          color="info600"
        />
      </Box>
    </Flex>
  )
}
