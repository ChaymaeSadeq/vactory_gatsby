import React from 'react'
import { Share } from './share'
import { useTranslation } from 'react-i18next'


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
      <div className="flex flex-wrap items-center">
        <p className="text-base font-bold">{t('Vous avez aimé cette page ? Partagez la !')}</p>
        <div className="flex p-4 justify-center">
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
        </div>
      </div>
  )
}
