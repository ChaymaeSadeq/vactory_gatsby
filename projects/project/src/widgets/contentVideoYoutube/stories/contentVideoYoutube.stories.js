import React from 'react';
import {withKnobs, boolean} from "@storybook/addon-knobs";
import {Container} from 'vactory-ui';
import {ContentVideoYoutube} from "../contentVideoYoutube";
import ImageUrl from "../../assets/img1.jpg"
import {useRtl} from "vactory-gatsby-core";


const groupId = "options"
const description = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eveniet impedit ipsa placeat quis repellendus sed. Aliquam amet autem consequuntur deserunt eius id laborum nam, quaerat quam rerum? Alias, iste?</p>"
const description_ar = "<p>لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت</p>"

export const Variant1 = () => {
    const rtl = useRtl()
    const isPopUp = boolean("Video dans une popup", false, groupId)
    return (
        <Container>
            <ContentVideoYoutube videoId="FSchPwCHBdA" image={ImageUrl} hideImage={false} isPopUp={isPopUp}
                                 description={rtl ? description_ar : description}/>
        </Container>
    )
}

export const Variant2 = () => {
    const rtl = useRtl()
    const isPopUp = boolean("Video dans une popup", true, groupId)
    return (
        <Container>
            <ContentVideoYoutube videoId="FSchPwCHBdA" image={ImageUrl} hideImage={false} isPopUp={isPopUp}
                                 description={rtl ? description_ar : description}/>
        </Container>
    )
}

export const Variant3 = () => {
    const rtl = useRtl()
    return (
        <Container>
            <ContentVideoYoutube videoId="FSchPwCHBdA" image={ImageUrl} hideImage={true} isPopUp={false}
                                 description={rtl ? description_ar : description}/>
        </Container>
    )
}


export default {
    title: 'Dynamic Fields/Content avec youtube video',
    decorators: [withKnobs],
};

