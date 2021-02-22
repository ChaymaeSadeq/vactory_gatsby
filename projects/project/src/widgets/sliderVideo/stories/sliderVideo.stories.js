import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import imageContent from "../../assets/image.png"
import {useRtl} from "vactory-gatsby-core";
import {SliderVideoWrapper} from "../sliderVideoWrapper";

export const Variant1 = () => {
    const rtl = useRtl()
    const data = !rtl ? {
            items: [
                {
                    imageUrl: "/image",
                    image_alt: "this is title 1",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: "/image",
                    image_alt: "this is title 1",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: "/image",
                    image_alt: "this is title 1",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: "/image",
                    image_alt: "this is title 1",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: "/image",
                    image_alt: "this is title 1",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: "/image",
                    image_alt: "this is title 1",
                    videoId: "f2KaIJogSWo",
                },
            ]
        }
        : {
            items: [
                {
                    imageUrl: imageContent,
                    image_alt: "هذا هو العنوان",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: imageContent,
                    image_alt: "هذا هو العنوان",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: imageContent,
                    image_alt: "هذا هو العنوان",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: imageContent,
                    image_alt: "هذا هو العنوان",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: imageContent,
                    image_alt: "هذا هو العنوان",
                    videoId: "f2KaIJogSWo",
                },
                {
                    imageUrl: imageContent,
                    image_alt: "هذا هو العنوان",
                    videoId: "f2KaIJogSWo",
                },
            ]
        }
    return (
        <SliderVideoWrapper {...data} />
    )
}


export default {
    title: 'Dynamic Fields/Slider Video',
    decorators: [withKnobs],
};

