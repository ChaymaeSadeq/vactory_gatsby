import React from "react";
import {Wysiwyg, Picture} from 'vactory-gatsby-ui'
import {LinkUrl} from "../../composants/link-url";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_562_316",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 562,
    height: 316,
    ratio: 562 / 316
};

export const ContenuMosaique = ({imgUrl, image_alt, title, description, cta_text, cta_url, centered, inversed, activeBorder}) => {
    return (
		<div
			className={`  ${centered ? "text-center" : ""} flex ${
				inversed
					? "flex-col-reverse sm:flex-row-reverse space-x-reverse"
					: "flex-col sm:flex-row"
			} ${activeBorder ? "space-x-2 rtl:space-x-reverse" : ""}`}
		>
			{imgUrl && (
                <div
                    className="w-full sm:w-1/2"
				>
					<Picture
						file={imgUrl}
						alt={image_alt}
						sizes={imageStyles.sizes}
						width={imageStyles.width}
						height={imageStyles.height}
						ratio={imageStyles.ratio}
					/>
				</div>
            )}
            <div className="bg-white w-full sm:w-1/2 ">
            <div 
                className="h-full flex flex-col items-center justify-center p-3 md:p-5"
			>
				{title && <h4 className="text-2xl font-medium mb-2">{title}</h4>}
				{description && <div className="mb-1"><Wysiwyg html={description} /></div>}
				{cta_text && cta_url && (
						<LinkUrl href={cta_url}>{cta_text}</LinkUrl>
				)}
            </div>
                </div>
		</div>
	);
}
