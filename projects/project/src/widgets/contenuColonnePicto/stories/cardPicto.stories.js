import React from 'react';
import {withKnobs, select, boolean, text} from "@storybook/addon-knobs";
import PictoImage from "../../assets/pictoImage.png"
import {Container} from "vactory-ui";
import {ContenuColonnePictoWrapper} from "../contenuColonnePictoWrapper";
import {useRtl} from "vactory-gatsby-core";

// Variable for kbobs
const groupId = 'Options';
const colsNumbers = [2, 3, 4];


export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: select("Nombre des colonnes", colsNumbers, 4, groupId),
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
            colCount: select("Nombre des colonnes", colsNumbers, 4, groupId),
            centercontent: boolean("Centrer le contenu", false, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <Container>
            <ContenuColonnePictoWrapper items={data.items}
                                        intro={data.intro}
                                        bigTitle={data.bigTitle}
                                        colCount={data.colCount}
                                        centercontent={data.centercontent}/>
        </Container>
    )
}
export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            colCount: select("Nombre des colonnes", colsNumbers, 2, groupId),
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
            colCount: select("Nombre des colonnes", colsNumbers, 2, groupId),
            centercontent: boolean("Centrer le contenu", false, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <Container>
            <ContenuColonnePictoWrapper items={data.items}
                                        intro={data.intro}
                                        bigTitle={data.bigTitle}
                                        colCount={data.colCount}
                                        centercontent={data.centercontent}/>
        </Container>
    )
}
export const Variant3 = () => {
    const rtl = useRtl()
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: select("Nombre des colonnes", colsNumbers, 4, groupId),
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
            colCount: select("Nombre des colonnes", colsNumbers, 4, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <Container>
            <ContenuColonnePictoWrapper items={data.items}
                                        intro={data.intro}
                                        bigTitle={data.bigTitle}
                                        colCount={data.colCount}
                                        centercontent={data.centercontent}/>
        </Container>
    )
}
export const Variant4 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            colCount: select("Nombre des colonnes", colsNumbers, 3, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: 'Lire plus',
                    cta_url: "/"
                },
                {
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: 'Lire plus',
                    cta_url: "/"
                },
                {
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                    cta_text: 'Lire plus',
                    cta_url: "/"
                },
            ]
        }
        : {
            colCount: select("Nombre des colonnes", colsNumbers, 3, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
            ]
        }
    return (
        <Container>
            <ContenuColonnePictoWrapper items={data.items}
                                        intro={data.intro}
                                        bigTitle={data.bigTitle}
                                        colCount={data.colCount}
                                        centercontent={data.centercontent}/>
        </Container>
    )
}


export default {
    title: 'Dynamic Fields/Contenu en colonne avec picto',
    decorators: [withKnobs],
};

