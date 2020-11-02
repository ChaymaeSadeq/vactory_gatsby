import React from 'react';
import {withKnobs, select, boolean} from "@storybook/addon-knobs";
import imageContent from "../../assets/image.png"
import {DirectionManager} from "vactory-ui";
import {ContenuColonneImageWrapper} from "../contenuColonneImageWrapper"
import {Container} from "vactory-ui";

const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = true
const colsNumbers = [2, 3, 4];

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = !rtl ? {
            bigTitle: "This is the big title",
            intro: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            colCount: select("Nombres de colonnes", colsNumbers, 3, groupId),
            centercontent: boolean('Centrer le contenu', true, groupId),
            activeBorder: boolean('Activer bordur', false, groupId),
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
            colCount: select("Nombres de colonnes", colsNumbers, 3, groupId),
            centercontent: boolean('Centrer le contenu', true, groupId),
            activeBorder: boolean('Activer bordur', false, groupId),
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
                <ContenuColonneImageWrapper bigTitle={data.bigTitle}
                                  intro={data.intro}
                                  colCount={data.colCount}
                                  items={data.items}
                                  centercontent={data.centercontent}
                                  activeBorder={data.activeBorder}
                />
            </Container>
        </DirectionManager>
    )
}
export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        colCount: select("Nombres de colonnes", colsNumbers, 4, groupId),
        centercontent: boolean('Centrer le contenu', false, groupId),
        activeBorder: boolean('Activer bordur', false, groupId),
        items: [
            {
                pictoImg: imageContent,
            },
            {
                pictoImg: imageContent,
            },
            {
                pictoImg: imageContent,
            },
            {
                pictoImg: imageContent,
            },
        ]
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <ContenuColonneImageWrapper bigTitle={data.bigTitle}
                                  intro={data.intro}
                                  colCount={data.colCount}
                                  items={data.items}
                                  centercontent={data.centercontent}
                                  activeBorder={data.activeBorder}
                />
            </Container>
        </DirectionManager>
    )
}
export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = !rtl ? {
            colCount: select("Nombres de colonnes", colsNumbers, 2, groupId),
            centercontent: boolean('Centrer le contenu', false, groupId),
            activeBorder: boolean('Activer bordur', true, groupId),
            items: [
                {
                    pictoImg: imageContent,
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
                {
                    pictoImg: imageContent,
                    description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci at atque, exercitationem incidunt ipsa laboriosam.</p>",
                },
            ]
        }
        : {
            colCount: select("Nombres de colonnes", colsNumbers, 2, groupId),
            centercontent: boolean('Centrer le contenu', false, groupId),
            activeBorder: boolean('Activer bordur', true, groupId),
            items: [
                {
                    pictoImg: imageContent,
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
                {
                    pictoImg: imageContent,
                    description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
                },
            ]
        }
    return (
        <DirectionManager dir={rtl ? "rtl" : "ltr"}>
            <Container>
                <ContenuColonneImageWrapper bigTitle={data.bigTitle}
                                  intro={data.intro}
                                  colCount={data.colCount}
                                  items={data.items}
                                  centercontent={data.centercontent}
                                  activeBorder={data.activeBorder}
                />
            </Container>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Contenu en colonne avec image',
    decorators: [withKnobs],
};

