import React from "react"
import {Comments} from 'vactory-gatsby-comments'
import { imageLayoutStyles } from 'vactory-gatsby-academy'
import { Picture } from 'vactory-gatsby-ui'

const Post = ({ post }) => {
  return (
    <div>
      <div>
        <div>
          <h1>{post.title}</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: post.body,
            }}
          />
        </div>
        <div>
          <div>
            <div>
              <div>
                <div>
                {post.forum_expert.picture &&
                  <Picture
                    file={post.forum_expert.picture}
                    sizes={imageLayoutStyles.Avatar.sizes}
                    alt={post.forum_expert.name}
                    width={imageLayoutStyles.Avatar.width}
                    height={imageLayoutStyles.Avatar.height}
                    ratio={imageLayoutStyles.Avatar.ratio}
                    style={{
                      mb: "16px",
                      borderRadius: "50%",
                    }}
                  />}
                </div>
                <div>
                  <div>
                    <h5>
                      {post.forum_expert.first_name}{" "}
                      {post.forum_expert.last_name}
                    </h5>
                    <p>
                      {post.forum_expert.profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p>{post.forum_expert.about}</p>
            </div>
          </div>
        </div>
      </div>
      <Comments
        entity_uid={post.id}
        type_content="vactory_forum"
        uid={parseInt(post.forum_expert.id)}
      />
    </div>
  );
  }
export default Post;
