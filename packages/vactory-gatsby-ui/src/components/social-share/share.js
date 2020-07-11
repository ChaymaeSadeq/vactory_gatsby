import React from 'react'
import shareLinks from './consts'
import { Icon, Box } from 'vactory-ui'

const LinkIcon = ({ icon, color, sx, children, ...rest }) => {
  return (
    <Box
      as="span"
      __css={{
        display: 'flex',
        border: '1px solid #707070',
        p: 'xsmall',
        m: 'medium',
        bg: 'white',
        transform: 'rotate(45deg)',
        '&:hover': {
          bg: color,
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
          transform: 'rotate(-45deg)',
        }}
        name={icon}
        size="xlarge"
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
