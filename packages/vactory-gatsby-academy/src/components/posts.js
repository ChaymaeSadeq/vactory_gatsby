import React from 'react'
import { CardAcademy } from 'vactory-gatsby-academy'
import { Flex, Pagination, Box } from 'vactory-ui'

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Flex flexWrap="wrap">
        {posts.map((node) => {
          return (
            <Flex key={node.id} px="medium" width={[1, 1 / 2, 1 / 3]}>
              <CardAcademy {...node} />
            </Flex>
          )
        })}
      </Flex>
      <Box p="medium">
        <Pagination
          total={count}
          pageSize={4}
          current={current}
          onChange={onChange}
        />
      </Box>
    </div>
  )
}

export default Posts
