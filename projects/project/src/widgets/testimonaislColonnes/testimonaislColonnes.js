import React from "react";
import {Picture, Wysiwyg} from "vactory-gatsby-ui";


const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_100_100",
            media: "(min-width: 0px)"
        },
    ],
    width: 100,
    height: 100,
    ratio: 100 / 100
};

export const TestimonaislColonnes = ({imageUrl, image_alt, name, role, description, inversed}) => {
    return (
            <div className="bg-indigo-800 py-12 px-4 border-t-2 border-indigo-900 sm:px-6 md:py-16 md:ltr:pr-0 md:rtl:pl-0 md:ltr:pl-10 md:rtl:pr-10 md:border-t-0 md:ltr:border-l md:rtl:border-r lg:ltr:pl-16 lg:rtl:pr-16">
					<blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
						<div className="relative text-lg font-medium text-white md:flex-grow">
							<svg
								className="absolute top-0 ltr:left-0 rtl:right-0 transform ltr:-translate-x-3 rtl:translate-x-3 -translate-y-2 h-8 w-8 text-indigo-600 rtl:-scale-x-100"
								fill="currentColor"
								viewBox="0 0 32 32"
							>
								<path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
							</svg>
                            {description && <div className="relative">
                                <Wysiwyg html={description} />
                            </div>}
						</div>
						<footer className="mt-8">
							<div className="flex">
								<div className="flex-shrink-0 inline-flex rounded-full border-2 border-white h-12 w-12">
                                    <Picture
                                        file={imageUrl}
                                        alt={image_alt}
                                        sizes={imageStyles.sizes}
                                        width={imageStyles.width}
                                        height={imageStyles.height}
                                        ratio={imageStyles.ratio}
										className="h-12 w-12 rounded-full"
                                    />
								</div>
								{(name || role) && <div className="ltr:ml-4 rtl:mr-4">
									{name && <div className="text-base font-medium text-white">
										{name}
									</div>}
									{role && <div className="text-base font-medium text-indigo-200">
										{role}
									</div>}
								</div>}
							</div>
						</footer>
					</blockquote>
				</div>
    )
}