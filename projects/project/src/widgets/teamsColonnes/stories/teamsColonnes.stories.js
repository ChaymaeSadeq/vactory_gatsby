import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {TeamsColonnesWrapper} from "../teamesColonnesWrapper";
import {useRtl} from "vactory-gatsby-core";

const groupId = 'Options';
const colsNumbers = [2, 3, 4];

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        image_cyrcle: boolean("image_cyrcle", false, groupId),
        colCount: select("Numbers of cols", colsNumbers, 3, groupId),
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
        image_cyrcle: boolean("image_cyrcle", false, groupId),
        colCount: select("Numbers of cols", colsNumbers, 3, groupId),
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
        <div className="container">
            <TeamsColonnesWrapper {...data} />
        </div>
    )
}

export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        image_cyrcle: boolean("image_cyrcle", true, groupId),
        colCount: select("Numbers of cols", colsNumbers, 3, groupId),
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
        image_cyrcle: boolean("image_cyrcle", true, groupId),
        colCount: select("Numbers of cols", colsNumbers, 3, groupId),
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
        <div className="container">
            <TeamsColonnesWrapper {...data} />
        </div>
    )
}


export default {
    title: 'Dynamic Fields/ Teams en colonne',
    decorators: [withKnobs],
}