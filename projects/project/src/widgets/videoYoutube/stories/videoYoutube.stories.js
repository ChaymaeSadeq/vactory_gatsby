import React from 'react';
import {withKnobs, boolean} from "@storybook/addon-knobs";
import {DirectionManager, Container} from 'vactory-ui';
import {VideoYoutube} from "../videoYoutube";
import ImageUrl from "../../assets/img1.jpg"


const groupRtl = "Version arabe"
const groupId = "options"
const activeRtl = false
const description="<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, eveniet impedit ipsa placeat quis repellendus sed. Aliquam amet autem consequuntur deserunt eius id laborum nam, quaerat quam rerum? Alias, iste?</p>"

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const isPopUp = boolean("Video dans une popup", false, groupId)
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <VideoYoutube videoId="C2p-peir5Qw" image={ImageUrl} hideImage={false} isPopUp={isPopUp} description={description} />
            </Container>
        </DirectionManager>
    )
}

export const Variant2 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const isPopUp = boolean("Video dans une popup", true, groupId)
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <VideoYoutube videoId="C2p-peir5Qw" image={ImageUrl} hideImage={false} isPopUp={isPopUp} description={description} />
            </Container>
        </DirectionManager>
    )
}

export const Variant3 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const isPopUp = boolean("Video dans une popup", false, groupId)
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <VideoYoutube videoId="C2p-peir5Qw" image={ImageUrl} hideImage={true} isPopUp={isPopUp} description={description} />
            </Container>
        </DirectionManager>
    )
}



export default {
    title: 'Dynamic Fields/youtube video',
    decorators: [withKnobs],
};

