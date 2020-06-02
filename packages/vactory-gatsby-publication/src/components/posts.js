import React from "react";
import { Publication } from "vactory-gatsby-publication";
import { Flex } from "vactory-ui";
import { Pagination } from "vactory-gatsby-ui";

const Posts = ({ posts, handlePaginationChange, pager, count }) => {
  return (
    <div>
      <Flex flexWrap="wrap">
        {posts.map((node) => {
          return (
            <Flex key={node.id} px="8px" width={[1, 1 / 2, 1 / 3]}>
              <Publication {...node} />
            </Flex>
          );
        })}
      </Flex>
      {count > 4 && (
        <Box p="medium">
          <Pagination
             total={count}
            pageSize={4}
            current={pager}
            onChange={handlePaginationChange}
          />
        </Box>
      )}
    </div>
  );
};

export default Posts;
