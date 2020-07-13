import React from 'react'
import shareLinks from './consts'
import { Icon, Box } from 'vactory-ui'

const LinkIcon = ({ icon, color, sx, children, ...rest }) => {
  return (
    <Box
      as="span"
      __css={{
        display: 'flex',
        border: '1px solid #e2e2e2',
        p: 'xsmall',
        m: '3px',
        bg: 'white',
          '.icon': {
            color: '#9c9c9c'
          },
        '&:hover': {
          bg: color,
          borderColor: color,
          '.icon': {
            fill: 'white',
          },
        },
      }}
      {...rest}
    >
      <Icon
        className="icon"
        __css={{
        }}
        name={icon}
        size="28px"
        color={color}
      />
    </Box>
  )
}

export const Share = ({ link, platform, icon, color, ...props }) => (
  <a
    href={shareLinks[platform](link)}
    target="_blank"
    rel="noreferrer nofollow noopener"
    aria-label={`Share on ${platform}`}
    title={`Share on ${platform}`}
    name={platform}
    {...props}
  >
    <LinkIcon icon={icon} color={color} />
  </a>
)
