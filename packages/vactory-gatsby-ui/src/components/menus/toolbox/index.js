import React from 'react'
import { Box, Flex } from 'vactory-ui'
import { useMenu } from 'vactory-gatsby-core'
import { Link } from 'vactory-gatsby-ui'

export const Toolbox = () => {
  const items = useMenu('toolbox')

  return (
    <Box
      __css={{
        position: 'fixed',
        right: 0,
        top: '50%',
        'z-index': 2000,
        display: 'block',
        backgroundColor: 'white',
        borderRaduis: 'medium'
      }}
    >
      <Flex flexDirection="column">
        {items.map((item) => {
          return (
            <Box py='medium' px='large' key={item.id} as={Link} to={item.url}>
              {item.title}
            </Box>
          )
        })}
      </Flex>
    </Box>
  )
}
