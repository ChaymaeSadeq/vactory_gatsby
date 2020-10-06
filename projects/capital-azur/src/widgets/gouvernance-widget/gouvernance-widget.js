import React from 'react'

export const GouvernanceWidget = ({ fields, extra_field }) => {
  return (
    <div>
      <h1>{extra_field.intro}</h1>
      <div>
        {fields.map((item, i) => {
          return (
            <div key={i}>
              <img alt={item.title} src={item.image} />
              <h1>{item.title}</h1>
              <a href={item.link}>{item.link_label}</a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
