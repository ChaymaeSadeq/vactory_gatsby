import React from 'react'

export const ServiceCards = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        return (
          <div key={i}>
            <img alt={item.title} src={item.image} />
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
  )
}
