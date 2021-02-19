import React from 'react';
import {withKnobs, boolean} from "@storybook/addon-knobs";
import {ChiffreCleWrapper} from "../chiffreCleWrapper";
import {useRtl} from "vactory-gatsby-core";

//const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: 3,
            items: [
                {
                    imageUrl: '/kd',
                    image_alt: 'image alt',
                    number: 1000,
                    word_before: 'N',
                    description: 'Lorem ipsum dolor',
                },
                {
                    imageUrl: '/kd',
                    image_alt: 'image alt',
                    number: 75.39,
                    word_before: 'N',
                    description: 'Lorem ipsum dolor',
                },
                {
                    imageUrl: '/kd',
                    image_alt: 'image alt',
                    number: 953,
                    word_after: '%',
                    description: 'Lorem ipsum dolor',
                },
            ]
        }
        : {
            bigTitle: "هذا هو العنوان الكبير",
            intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            colCount: 3,
            items: [
                {
                    number: 4953,
                    word_before: 'N',
                    description: "هذا هو العنوان الكبير",
                },
                {
                    number: 953,
                    word_after: '%',
                    description: "هذا هو العنوان الكبير",

                },
                {
                    number: 43,
                    description: "هذا هو العنوان الكبير",
                },
                {
                    number: 1984,
                    description: "هذا هو العنوان الكبير",
                },
            ]
        }

    return (
        <div className="container">
            <ChiffreCleWrapper {...data} />
        </div>
    )
}

export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: 3,
            items: [
                {
                    number: 1000,
                    word_before: 'N',
                    description: 'Lorem ipsum dolor',
                },
                {
                    number: 1000,
                    word_before: 'N',
                    description: 'Lorem ipsum dolor',
                },
                {
                    number: 953,
                    word_after: '%',
                    description: 'Lorem ipsum dolor',
                },
                {
                    number: 99,
                    description: 'Lorem ipsum dolor',
                },
                {
                    number: 45,
                    word_after: '%',
                    description: 'Lorem ipsum dolor',
                },
            ]
        }
        : {
            bigTitle: "هذا هو العنوان الكبير",
            intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            colCount: 3,
            items: [
                {
                    number: 4953,
                    word_before: 'N',
                    description: "هذا هو العنوان الكبير",
                },
                {
                    number: 953,
                    word_after: '%',
                    description: "هذا هو العنوان الكبير",

                },
                {
                    number: 43,
                    description: "هذا هو العنوان الكبير",
                },
                {
                    number: 1984,
                    description: "هذا هو العنوان الكبير",
                },
            ]
        }

    return (
        <div className="container">
            <ChiffreCleWrapper {...data} />
        </div>
    )
}


export default {
    title: 'Dynamic Fields/Chiffre clé',
    decorators: [withKnobs],
};

