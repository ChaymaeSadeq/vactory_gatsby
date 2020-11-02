import React from 'react';
import {withKnobs, boolean, text} from "@storybook/addon-knobs";
import CardImg from '../../assets/img1.jpg'
import {DirectionManager} from "vactory-ui";
import {ContenuMosaiquedWrapper} from "../contenuMosaiquedWrapper";
import {Container} from "vactory-ui";

// Variable for kbobs
const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = !rtl ? {
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", false, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "this is title 1",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 2",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 3",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 4",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
        ]
    }
    : {
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", false, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
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
                <ContenuMosaiquedWrapper centercontent={data.centercontent}
                                  intro={data.intro}
                                  bigTitle={data.bigTitle}
                                  activeBorder={data.activeBorder}
                                  items={data.items}/>
            </Container>
        </DirectionManager>
    )
}

export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", true, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "this is title 1",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 2",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 3",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "this is title 4",
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                cta_text: "En savoir plus",
                cta_url: "/",
            },
        ]
    }
    : {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        centercontent: boolean("Centrer le contenu", false, groupId),
        activeBorder: boolean("Ajouter border", true, groupId),
        items: [
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
                title: "هذا هو العنوان",
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                cta_text: 'اقرأ أكثر',
                cta_url: "/",
            },
            {
                imgUrl: CardImg,
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
                <ContenuMosaiquedWrapper centercontent={data.centercontent}
                                  intro={data.intro}
                                  bigTitle={data.bigTitle}
                                  activeBorder={data.activeBorder}
                                  items={data.items}/>
            </Container>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Contenu avec image en mosaique',
    decorators: [withKnobs],
};

