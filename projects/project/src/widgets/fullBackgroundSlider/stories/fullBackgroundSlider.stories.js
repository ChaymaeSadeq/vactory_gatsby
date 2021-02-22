import React from "react";
import {boolean, select, withKnobs} from "@storybook/addon-knobs";
import {FullBackgroundSliderWrapper} from "../fullBackgroundSliderWrapper";
import {useRtl} from "vactory-gatsby-core";
import imageUrl from '../../assets/image.png'

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            items: [
                {
                    imageUrl:imageUrl,
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: 'Lire plus',
                    cta_url: "/"
                },
                {
                    imageUrl:imageUrl,
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: 'Lire plus',
                    cta_url: "/"
                },
                {
                    imageUrl:imageUrl,
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: 'Lire plus',
                    cta_url: "/"
                },
            ]
        }
        : {
            colCount: select("Numbers of cols", colsNumbers, 3, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    imageUrl:imageUrl,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
                {
                    imageUrl:imageUrl,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
                {
                    imageUrl:imageUrl,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
            ]
        }
    return (
        <FullBackgroundSliderWrapper {...data} />
    )
}


export default {
    title: 'Dynamic Fields/Full backgroundSlider',
    decorators: [withKnobs],
};
