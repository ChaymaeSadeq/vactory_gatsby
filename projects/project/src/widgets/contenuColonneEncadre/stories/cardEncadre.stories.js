import React from 'react';
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";
import PictoImage from "../../assets/pictoImage.png"
import {DirectionManager} from "vactory-ui";
import {ContenuColonneEncadreWrapper} from "../contenuColonneEncadreWrapper";
import {Container, Box} from "vactory-ui";

const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false
const colsNumbers = [2, 3, 4];

export const Variant1 = ({backgroundColor = "#fff", width}) => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
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
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Box backgroundColor={backgroundColor}>
                <Container>
                    <ContenuColonneEncadreWrapper bigTitle={data.bigTitle}
                                                  intro={data.intro}
                                                  colCount={width}
                                                  items={data.items}
                                                  centercontent={data.centercontent}
                    />
                </Container>
            </Box>
        </DirectionManager>
    )
}
export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = !rtl ? {
            colCount: select("Numbers of cols", colsNumbers, 3, groupId),
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
            colCount: select("Numbers of cols", colsNumbers, 3, groupId),
            centercontent: boolean("Centrer le contenu", true, groupId),
            items: [
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
                {
                    title: "هذا هو العنوان",
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                    cta_text: 'اقرأ أكثر',
                    cta_url: "/"
                },
            ]
        }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <ContenuColonneEncadreWrapper bigTitle={data.bigTitle}
                                              intro={data.intro}
                                              colCount={data.colCount}
                                              items={data.items}
                                              centercontent={data.centercontent}
                />
            </Container>
        </DirectionManager>
    )
}
export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
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
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <ContenuColonneEncadreWrapper bigTitle={data.bigTitle}
                                              intro={data.intro}
                                              colCount={data.colCount}
                                              items={data.items}
                                              centercontent={data.centercontent}
                />
            </Container>
        </DirectionManager>
    )
}

Variant1.args = {
    //backgroundColor: '#e00',
    width: 2,
};

export default {
    title: 'Dynamic Fields/Contenu en colonne encadré',
    decorators: [withKnobs],
    argTypes: {
        backgroundColor: {control: 'color'},
        width: {
            control: {type: 'range', min: 2, max: 4, step: 1},
        },
    },
};

