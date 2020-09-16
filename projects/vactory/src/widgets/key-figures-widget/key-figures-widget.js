import React from 'react'
import { Link } from 'vactory-gatsby-ui'

export const KeyFiguresWidget = ({ fields, extra_field }) => {
  return (
    <div>
      {fields.map((item, i) => {
        return (
          <div key={i}>
            <div>{item.chiffre} {item.chiffre_alt}</div>
            <h1>{item.title}</h1>
          </div>
        )
      })}
      <Link to={extra_field.link}>{extra_field.link_label}</Link>
    </div>
  )
}
