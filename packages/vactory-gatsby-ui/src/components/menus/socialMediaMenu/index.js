import React from 'react'
import { useMenu } from 'vactory-gatsby-core'

export const SocialMediaMenu = () => {
  const items = useMenu('social-media')

  return (
    <nav>
      <ul className="flex space-x-2 rtl:space-x-reverse">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <a target="_blank" className="hover:text-indigo-500" rel="noopener noreferrer" href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
