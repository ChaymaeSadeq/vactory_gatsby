import React from "react";
import {Picture} from "vactory-gatsby-ui";
import AnimatedNumber from "animated-number-react";

const imageStyles = {
    sizes: [
        {
            name: "decoupled_image_60_60",
            media: "(min-width: 768px)"
        },
        {
            name: "decoupled_image_60_60",
            media: "(max-width: 767px)"
        }
    ],
    width: 60,
    height: 60,
    ratio: 60 / 60
};

const ChiffreCss = {
    fontSize: ['40px', null, '50px'],
    lineHeight: ['40px', null, '50px'],
    color: 'black',
    fontWeight: "black",
    " span": {
        fontSize: ['40px', null, '50px'],
        lineHeight: ['40px', null, '50px'],
        color: 'black',
        fontWeight: "black",
    }
}

export const ChiffreCle = ({number, word_before, word_after, description, imageUrl, image_alt}) => {
    const formatValue = (value) =>  value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
    return (
        <div className="flex flex-col justify-center bg-white border border-indigo-500 rounded-lg w-56 px-8 py-14 box-content mx-4 mt-10 text-center">
            {imageUrl && <div className="w-16 h-16 mx-auto">
                <Picture
                    file={imageUrl}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </div>}
            <span className="text-7xl font-black text-indigo-500 text-stroked">
                {word_before}
                <AnimatedNumber value={number} formatValue={(number)=> formatValue(number)} duration="2000" />
                {word_after}
            </span>
            {description && <span className="mt-2 leading-6 font-medium text-indigo-900">
                {description}
            </span>}
        </div>
    )
}