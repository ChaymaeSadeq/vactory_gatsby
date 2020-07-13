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
        lineHeight: '28px',
        fontWeight: 400,
        color: '#707070',
      }}
      {...rest}
    >
      {children}
    </Box>
  )
};

export const SocialShare = ({ url = '' }) => {
  const { t } = useTranslation();
  const [internalUrl, setInternalUrl] = React.useState(url);

    React.useEffect(() => {
        if (url.length <= 0 && typeof window !== 'undefined') {
            setInternalUrl(window.location.href);
            const canonicalElement = document.querySelector('link[rel=canonical]');
            if (canonicalElement !== null) {
                setInternalUrl(canonicalElement.href);
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Flex flexDirection={['column', 'row']} alignItems="center">
      <Title>{t('Vous avez aimé cette page ? Partagez la !')}</Title>
      <Box display="flex" p="medium">
        <Share
          link={internalUrl}
          platform="facebook"
          icon="facebook"
          color="#1875ec"
        />
        <Share
          link={internalUrl}
          platform="twitter"
          icon="twitter"
          color="#219dec"
        />
        <Share
          link={internalUrl}
          platform="linkedin"
          icon="linkedin-i"
          color="#1778b0"
        />
      </Box>
    </Flex>
  )
}
