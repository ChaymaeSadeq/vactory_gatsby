import React from 'react'
import { Box, Flex } from 'vactory-ui'
import { useMenu } from 'vactory-gatsby-core'

export const SocialMediaMenu = () => {
  const items = useMenu('social-media')

  return (
    <Box
      __css={{
        position: 'fixed',
        left: 10,
        top: '60%',
        'z-index': 2000,
        display: 'block',
      }}
    >
      <Flex flexDirection="column">
        {items.map((item) => {
          return (
            <Box p="small" key={item.id}>
              <a target="_blank" rel="noopener noreferrer" href={item.url}>
                {item.title}
              </a>
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
