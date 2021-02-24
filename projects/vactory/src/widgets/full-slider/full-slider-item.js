import React from 'react'
import { Link } from 'vactory-gatsby-ui'

export const FullSliderItem = (props) => {
  const title = props.title
  const description = props.description
  const image = props.image
  const link = props.link
  const link_label = props.link_label
  return (
    <div
      className="flex p-6 w-full h-full bg-cover"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      
      <div className="p-6 bg-white flex flex-col overflow-hidden mb-4 w-full max-w-lg rounded-lg shadow-lg">
        <h3 className="text-2xl font-extrabold tracking-tight mb-4">{title}</h3>
        <div className="text-lg mb-4 leading-6 font-medium">
          {description}
        </div>
        <Link
          className="inline-flex items-center border border-transparent px-3 py-2 text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          to={link}>
          {link_label}
        </Link>
      </div>
    
    </div>
  )
}
