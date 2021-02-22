import React from 'react'
import shareLinks from './consts'
import { Icon } from 'vactory-gatsby-ui'

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
    <Icon name={icon} size="28px" className="icon mx-2" color={color} />
  </a>
)
