import React from "react";
import CardEvents from "./cardEvents";
import { Flex, Pagination, Box } from "vactory-ui";

const Posts = ({ posts, current, onChange, count }) => {
  return (
    <div>
      <Flex flexWrap="wrap">
        {posts.map((node) => {
          return (
            <Flex key={node.id} px="8px" width={[1, 1 / 2, 1 / 3]}>
              <CardEvents node={node} />
            </Flex>
          );
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
  );
};

export default Posts;
