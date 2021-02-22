import React from 'react'
import { useMenu } from 'vactory-gatsby-core'
import { Link } from 'vactory-gatsby-ui'

export const Toolbox = () => {
  const items = useMenu('toolbox')

  return (
		<div className="fixed inset-0 overflow-hidden">
			<nav className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-36">
				<ul className="flex flex-col space-y-0.5">
        {items.map((item) => {
          return (
					<li key={item.id}>
						<Link
							href={item.url}
							className="flex rounded-l-lg delay-75 transform hover:-translate-x-36 focus:translate-x-0 transition"
							title="Find an agency"
						>
							<div className="border-2 border-indigo bg-white rounded-l-md mr-0.5">
								<svg
									className="h-6 w-6 text-indigo m-2"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div className="w-36 bg-indigo text-white flex items-center">
								<span className="block m-2">{item.title}</span>
							</div>
						</Link>
					</li>
			);
        })}
					
        </ul>
			</nav>
		</div>
  )
}
