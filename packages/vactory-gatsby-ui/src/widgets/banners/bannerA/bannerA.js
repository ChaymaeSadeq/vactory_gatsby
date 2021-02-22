import React from 'react'
import {Breadcrumb} from 'vactory-gatsby-ui'

export const BannerA = ({settings}) => {
    return (
		<div
			className="flex justify-center items-center bg-gray-400 py-10 bg-cover h-48"
			style={{ backgroundImage: `url(${settings.image._default})` }}
		>
			<div className="container">
				<h1 className="text-white text-5xl font-extrabold">
					{settings.title}
				</h1>
				<div>{settings.description}</div>
				{settings.useBreadcrumb &&
					settings.breadcrumbItems.length > 0 && (
						<Breadcrumb items={settings.breadcrumbItems} />
					)}
			</div>
		</div>
	);
};
