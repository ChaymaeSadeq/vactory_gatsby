import React from "react";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import {TestimonialsInlineWrapper} from "../testimonialsInlineWrapper";
import {useRtl} from "vactory-gatsby-core";

const groupId = 'Options';

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        inversed: boolean('inversed', false, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!</p>",
            },
        ]
    } : {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        inversed: boolean('inversed', false, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            },
        ]
    }

    return (
        <div className="container">
            <TestimonialsInlineWrapper {...data} />
        </div>
    )
}

export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        bigTitle: "This is the big title",
        intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
        inversed: boolean('inversed', true, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "firstName LastName",
                role: 'The rôle of firstname',
                description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!</p>",
            },
        ]
    } : {
        bigTitle: "هذا هو العنوان الكبير",
        intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
        inversed: boolean('inversed', true, groupId),
        items: [
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            },
            {
                imageUrl: "/image",
                image_alt: "image alt",
                name: "الاسم الشخصي و العائلي",
                role: 'وظيفته في الشركة',
                description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            },
        ]
    }

    return (
        <div className="container">
            <TestimonialsInlineWrapper {...data} />
        </div>
    )
}



export default {
    title: 'Dynamic Fields/Testimonials en inline',
    decorators: [withKnobs],
}