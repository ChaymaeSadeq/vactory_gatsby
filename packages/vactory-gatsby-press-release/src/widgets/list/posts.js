import React from 'react'
import {
  HorizontalCard,
  imageLayoutStyles,
} from 'vactory-gatsby-press-release'

const Posts = ({ posts }) => {
  return (
    <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
      {posts.map((node) => (
        <HorizontalCard
          {...node}
          imageSettings={imageLayoutStyles.threeColumns}
      />))}
    </div>
  )
}

export default Posts
