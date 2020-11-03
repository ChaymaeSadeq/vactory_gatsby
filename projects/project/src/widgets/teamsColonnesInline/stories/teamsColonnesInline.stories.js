import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {TeamsColonnesInlineWrapper} from "../teamesColonnesInlineWrapper";
import {Container} from 'vactory-ui'
import {useRtl} from "vactory-gatsby-core";

const groupId = 'Options';
const colsNumbers = [2, 3];

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        colCount: select("Numbers of cols", colsNumbers, 2, groupId),
        activeBorder: boolean('Activer le border', false, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
        ]
    } : {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        colCount: select("Numbers of cols", colsNumbers, 2, groupId),
        activeBorder: boolean('Activer le border', false, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "على سبيل المثال ... او نماذج مواقع انترنت",
            },
        ]
    }

    return (
        <Container>
            <TeamsColonnesInlineWrapper {...data} />
        </Container>
    )
}

export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        colCount: select("Numbers of cols", colsNumbers, 2, groupId),
        activeBorder: boolean('Activer le border', true, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
        ]
    } : {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        colCount: select("Numbers of cols", colsNumbers, 2, groupId),
        activeBorder: boolean('Activer le border', true, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "على سبيل المثال ... او نماذج مواقع انترنت",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "على سبيل المثال ... او نماذج مواقع انترنت",
            },
        ]
    }

    return (
        <Container>
            <TeamsColonnesInlineWrapper {...data} />
        </Container>
    )
}



export default {
    title: 'Dynamic Fields/ Teams en colonne en inline',
    decorators: [withKnobs],
}