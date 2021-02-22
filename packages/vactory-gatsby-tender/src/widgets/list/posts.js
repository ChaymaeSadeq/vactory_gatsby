import React from 'react'
import { TenderCard } from 'vactory-gatsby-tender'

const Posts = ({ posts }) => {
  return (
    <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
      {posts.map((node) => (
        <TenderCard {...node} />
      ))}
    </div>
  )
}

export default Posts
