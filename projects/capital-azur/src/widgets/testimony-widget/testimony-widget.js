import React from 'react'

export const TestimonyWidget = (props) => {
  const title = props.title
  const name = props.name
  const role = props.role
  const description = props.description
  const image = props.image

  return (
    <div>
      <img alt={name} src={image} />
      <p>{name}</p>
      <p>{role}</p>
      <h1>{title}</h1>
      {description}
    </div>
  )
}
