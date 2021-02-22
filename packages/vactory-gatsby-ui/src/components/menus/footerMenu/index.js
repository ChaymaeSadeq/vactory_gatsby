import React from "react"
import {useMenu} from 'vactory-gatsby-core'
import {Link} from 'vactory-gatsby-ui'

export const FooterMenu = () => {
    const items = useMenu('footer');

    return (
        <ul className="flex my-3 justify-center divide-x-2 rtl:divide-x-reverse">
            {items.map(item => {
                return (
					<li key={item.id}>
						<Link className="hover:underline mx-4 px-2" href={item.url}>
							{item.title}
						</Link>
					</li>
				);
            })}
        </ul>
    )
};
