import React from 'react';
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import PictoImage from "../../assets/pictoImage.png"
import {ContenuPictoInlineWrapper} from "../contenuPictoInlineWrapper";
import {useRtl} from "vactory-gatsby-core";

const groupId = 'Options';
const colsNumbers = [2, 3, 4];


export const Variant1 = () => {
    const rtl = useRtl()
    const data = !rtl ? {
            colCount: select("Nombre des colonnes", colsNumbers, 2, groupId),
            centercontent: boolean('Center content with picto', false, groupId),
            items: [
                {
                    imgUrl: PictoImage,
                    title: "this is title 1",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    imgUrl: PictoImage,
                    title: "this is title 2",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    imgUrl: PictoImage,
                    title: "this is title 3",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    imgUrl: PictoImage,
                    title: "this is title 4",
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
            ]
        }
        : {
            colCount: select("Nombre des colonnes", colsNumbers, 2, groupId),
            centercontent: boolean('Center content with picto', false, groupId),
            items: [
                {
                    imgUrl: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    imgUrl: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    imgUrl: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    imgUrl: PictoImage,
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <div className="container">
            <ContenuPictoInlineWrapper {...data} />
        </div>
    )
}

export const Variant2 = () => {
    const rtl = useRtl()
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: select("Nombre des colonnes", colsNumbers, 2, groupId),
            centercontent: boolean('Center content with picto', false, groupId),
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
            colCount: select("Nombre des colonnes", colsNumbers, 2, groupId),
            centercontent: boolean('Center content with picto', false, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <div className="container">
            <ContenuPictoInlineWrapper {...data} />
        </div>
    )
}


export default {
    title: 'Dynamic Fields/contenu avec picto en inline',
    decorators: [withKnobs],
};

