import React from "react"
import {useMenu} from 'vactory-gatsby-core'
import {Link} from 'vactory-gatsby-ui'

export const MenuA = () => {
    const items = useMenu("main");

    return (
        <ul className="flex my-3 justify-center ">
            {items.map(item => {
                return (
					<li key={item.id}>
						<Link className="mx-2 px-1 text-indigo-500 font-medium hover:text-indigo-600" href={item.url}>
							{item.title}
						</Link>
					</li>
				);
            })}
        </ul>
    )
};
