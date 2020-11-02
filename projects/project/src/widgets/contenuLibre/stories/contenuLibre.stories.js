import React from 'react';
import {withKnobs} from "@storybook/addon-knobs";
import {ContenuLibre} from "../contenuLibre";
import {Container} from "vactory-ui";
import {useRtl} from "vactory-gatsby-core";

export const Variant1 = () => {
    const rtl = useRtl();
    const data = !rtl ? {
        content: "<h3>This is the title</h3>" +
            "<p>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.</p>" +
            "<a href='/node/1'>En savoir plus</a>",
    } : {
        content: "<h3>هذا هو العنوان الكبير</h3>" +
            "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>" +
            "<a href='/node/1'>اقرأ أكثر</a>",
    }
    return (
        <Container>
            <ContenuLibre content={data.content}/>
        </Container>
    )
}


export default {
    title: 'Dynamic Fields/Contenu Libre',
    decorators: [withKnobs],
};

