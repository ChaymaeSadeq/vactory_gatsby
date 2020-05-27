import React from 'react'
import { CardAcademy } from 'vactory-gatsby-academy'
import { Flex } from 'vactory-ui'

const Posts = ({ posts }) => {
  return (
    <div>
      <Flex flexWrap="wrap">
        {posts.map((node) => {
          return (
            <Flex key={node.id} px="8px" width={[1, 1 / 2, 1 / 3]}>
              <CardAcademy {...node} />
            </Flex>
          )
        })}
      </Flex>
    </div>
  )
}

export default Posts
