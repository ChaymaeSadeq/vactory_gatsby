import React from 'react';
import {withKnobs, select, boolean} from "@storybook/addon-knobs";
import ContenuImg from '../../assets/img1.jpg'
import {ContenuInline} from "../contenuInline"
import {useRtl} from "vactory-gatsby-core";

const numberCols = [3, 4, 5, 6];
const groupId = 'Options'


export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            imgUrl: ContenuImg,
            title: "This is the title",
            description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.</p>",
            cta_text: "En savoir plus",
            cta_url: '/',
            activeBorder: boolean('Activer Border', false, groupId),
            activeBorderImage: boolean("Activer border de l'image", false, groupId),
            inversed: boolean('Inverser template', false, groupId),
            colImage: select('Nombre des colonnes', numberCols, 5, groupId),
        }
        : {
            imgUrl: ContenuImg,
            title: "هذا هو العنوان",
            description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            cta_text: 'اقرأ أكثر',
            cta_url: '/',
            activeBorder: boolean('Activer Border', false, groupId),
            activeBorderImage: boolean("Activer border de l'image", false, groupId),
            inversed: boolean('Inverser template', false, groupId),
            colImage: select('Nombre des colonnes', numberCols, 5, groupId),
        }
    return (
        <div className="container">
            <ContenuInline imgUrl={data.imgUrl} title={data.title} description={data.description}
                           cta_text={data.cta_text} cta_url={data.cta_url}
                           activeBorder={data.activeBorder} activeBorderImage={data.activeBorderImage}
                           inversed={data.inversed}
                           colImage={data.colImage}
            />
        </div>
    );
}

export const Variant2 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            imgUrl: ContenuImg,
            title: "This is the title",
            description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.</p>",
            cta_text: "En savoir plus",
            cta_url: '/',
            activeBorder: boolean('Activer Border', true, groupId),
            activeBorderImage: boolean("Activer border de l'image", false, groupId),
            inversed: boolean('Inverser template', true, groupId),
            colImage: select('Nombre des colonnes', numberCols, 3, groupId),
        }
        : {
            imgUrl: ContenuImg,
            title: "هذا هو العنوان",
            description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            cta_text: 'اقرأ أكثر',
            cta_url: '/',
            activeBorder: boolean('Activer Border', true, groupId),
            activeBorderImage: boolean("Activer border de l'image", false, groupId),
            inversed: boolean('Inverser template', true, groupId),
            colImage: select('Nombre des colonnes', numberCols, 3, groupId),
        }
    return (
        <div className="container">
            <ContenuInline imgUrl={data.imgUrl} title={data.title} description={data.description}
                           cta_text={data.cta_text} cta_url={data.cta_url}
                           activeBorder={data.activeBorder} activeBorderImage={data.activeBorderImage}
                           inversed={data.inversed}
                           colImage={data.colImage}
            />
        </div>
    )
}

export const Variant3 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
            imgUrl: ContenuImg,
            title: "This is the title",
            description: "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.</p>",
            cta_text: "En savoir plus",
            cta_url: '/',
            activeBorder: boolean('Activer Border', false, groupId),
            activeBorderImage: boolean("Activer border de l'image", true, groupId),
            inversed: boolean('Inverser template', false, groupId),
            colImage: select('Nombre des colonnes', numberCols, 5, groupId),
        }
        : {
            imgUrl: ContenuImg,
            title: "هذا هو العنوان",
            description: "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>",
            cta_text: 'اقرأ أكثر',
            cta_url: '/',
            activeBorder: boolean('Activer Border', false, groupId),
            activeBorderImage: boolean("Activer border de l'image", true, groupId),
            inversed: boolean('Inverser template', false, groupId),
            colImage: select('Nombre des colonnes', numberCols, 5, groupId),
        }
    return (
        <div className="container">
            <ContenuInline imgUrl={data.imgUrl} title={data.title} description={data.description}
                           cta_text={data.cta_text} cta_url={data.cta_url}
                           activeBorder={data.activeBorder} activeBorderImage={data.activeBorderImage}
                           inversed={data.inversed}
                           colImage={data.colImage}
            />
        </div>
    );
}


export default {
    title: 'Dynamic Fields/Contenu en inline',
    decorators: [withKnobs],
};