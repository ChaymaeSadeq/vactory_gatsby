import React from "react";
import {Picture, Wysiwyg} from "vactory-gatsby-ui";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 0px)"
        },
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200

}

export const TestimonialsInline = ({imageUrl, image_alt, name, description, role, inversed}) => {
    return (
		<>
			<div className="my-3 space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
				{/* <!-- Image --> */}
                <div className={`aspect-w-2 aspect-h-2 sm:aspect-w-4 sm:aspect-h-4${inversed ? " sm:col-start-3 sm:row-start-1" : ""}`}>
					<Picture
						file={imageUrl}
						alt={image_alt}
						sizes={imageStyles.sizes}
						width={imageStyles.width}
						height={imageStyles.height}
                        ratio={imageStyles.ratio}
                        className="object-cover shadow-lg rounded-lg"
                    />
				</div>
                <div className={`sm:col-span-2${inversed ? " sm:col-start-1 sm:row-start-1" : ""}`}>
					<div className="space-y-4">
                        {(role || name) && <div className="text-lg leading-6 font-medium space-y-1">
                            <h3>{name}</h3>
                            <p className="text-indigo-600">{role}</p>
                        </div>}
						{description && <div className="text-lg">
							<div className="text-gray-500">
                             <Wysiwyg html={description} />
							</div>
                        </div>}
                    </div>
				</div>
			</div>	
        </>
	);
}
