import React from 'react';
import {withKnobs, boolean, select, text, color} from "@storybook/addon-knobs";
import PictoImage from "../../assets/pictoImage.png"
import {ContenuColonneEncadreWrapper} from "../contenuColonneEncadreWrapper";
import {useRtl} from 'vactory-gatsby-core'



const groupId = 'Options';
const colsNumbers = [2, 3, 4];

export const Variant1 = () => {
    const rtl = useRtl();
    const backgroundColor = color("Color", "#fff", groupId);
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: select("Numbers of cols", colsNumbers, 4, groupId),
            centercontent: boolean("Centrer le contenu", false, groupId),
            items: [
                {
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    title: "this is title 4",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
            ]
        }
        : {
            bigTitle: "هذا هو العنوان الكبير",
            intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            colCount: select("Numbers of cols", colsNumbers, 4, groupId),
            centercontent: boolean("Centrer le contenu", false, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <div className="container">
                <ContenuColonneEncadreWrapper bigTitle={data.bigTitle}
                                              intro={data.intro}
                                              colCount={data.colCount}
                                              items={data.items}
                                              centercontent={data.centercontent}
                />
            </div>
        </div>
    )
}
export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            colCount: select("Numbers of cols", colsNumbers, 3, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    link: {
                        url: '/node/1',
                        title: 'Lire plus'
                    }
                },
                {
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    link: {
                        url: '/node/1',
                        title: 'Lire plus'
                    }
                },
                {
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    link: {
                        url: '/node/1',
                        title: 'Lire plus'
                    }
                },
            ]
        }
        : {
            colCount: select("Numbers of cols", colsNumbers, 3, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    link: {
                        url: '/node/1',
                        title: 'اقرأ أكثر',
                    },
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    link: {
                        url: '/node/1',
                        title: 'اقرأ أكثر',
                    },
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    link: {
                        url: '/node/1',
                        title: 'اقرأ أكثر',
                    },
                },
            ]
        }
    return (
        <div className="container">
            <ContenuColonneEncadreWrapper bigTitle={data.bigTitle}
                                          intro={data.intro}
                                          colCount={data.colCount}
                                          items={data.items}
                                          centercontent={data.centercontent}
            />
        </div>
    )
}
export const Variant3 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: select("Numbers of cols", colsNumbers, 4, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    pictoImg: PictoImage,
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "this is title 4",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
            ]
        }
        : {
            bigTitle: "هذا هو العنوان الكبير",
            intro: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            colCount: select("Numbers of cols", colsNumbers, 4, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <div className="container">
            <ContenuColonneEncadreWrapper bigTitle={data.bigTitle}
                                          intro={data.intro}
                                          colCount={data.colCount}
                                          items={data.items}
                                          centercontent={data.centercontent}
            />
        </div>
    )
}


export default {
    title: 'Dynamic Fields/Contenu en colonne encadré',
    decorators: [withKnobs],
};

