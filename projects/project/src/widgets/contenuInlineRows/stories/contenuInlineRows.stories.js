import React from 'react';
import {withKnobs, select, boolean} from "@storybook/addon-knobs";
import {DirectionManager, Container} from "vactory-ui";
import {ContenuInlineRowsWrapper} from "../contenuInlineRowsWrapper";
import imageContent from '../../assets/pictoImage.png'

const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const inversed = boolean('inversed', false, groupId)
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            inversed: inversed,
            items: [
                {
                    pictoImg: imageContent,
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: "En savoir plus",
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: "En savoir plus",
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: "En savoir plus",
                    cta_url: "/",
                },
            ]
        }
        : {
            bigTitle: "هذا هو العنوان الكبير",
            intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            items: [
                {
                    pictoImg: imageContent,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/",
                },
            ]
        }

    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <ContenuInlineRowsWrapper {...data} />
            </Container>
        </DirectionManager>
    )
}

export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const inversed = boolean('inversed', true, groupId)
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            inversed: inversed,
            items: [
                {
                    pictoImg: imageContent,
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: "En savoir plus",
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: "En savoir plus",
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: "En savoir plus",
                    cta_url: "/",
                },
            ]
        }
        : {
            bigTitle: "هذا هو العنوان الكبير",
            intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            items: [
                {
                    pictoImg: imageContent,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/",
                },
                {
                    pictoImg: imageContent,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/",
                },
            ]
        }

    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <ContenuInlineRowsWrapper {...data} />
            </Container>
        </DirectionManager>
    )
}



export default {
    title: 'Dynamic Fields/Contenu inline in Rows',
    decorators: [withKnobs],
};

