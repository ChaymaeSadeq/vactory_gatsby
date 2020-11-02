import React from 'react';
import {withKnobs, boolean} from "@storybook/addon-knobs";
import {Container, Box, DirectionManager} from "vactory-ui";
import {ContenuHalfSide} from "../contenuHalfSide";

const groupId = 'Options';
const groupRtl = "Version arabe"
const activeRtl = false

export const Variant1 = ({backgroundColor}) => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const inversed = boolean('inversed', true, groupId)
    const centercontent = boolean('Centrer le contenu', false, groupId)
    const data = !rtl ? {
            title: "This is the big title",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            cta_text: "En savoir plus",
            cta_url: '/',
            inversed: inversed,
            centercontent: centercontent,
        }
        : {
            title: "هذا هو العنوان الكبير",
            description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            cta_text: "En savoir plus",
            cta_url: '/',
            inversed: inversed,
            centercontent: centercontent,
        }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Box backgroundColor={backgroundColor}>
                <Container>
                    <ContenuHalfSide {...data} />
                </Container>
            </Box>
        </DirectionManager>
    )
}

export const Variant2 = ({backgroundColor}) => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const inversed = boolean('inversed', false, groupId)
    const centercontent = boolean('Centrer le contenu', false, groupId)
    const data = !rtl ? {
            title: "This is the big title",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            cta_text: "En savoir plus",
            cta_url: '/',
            inversed: inversed,
            centercontent: centercontent,
        }
        : {
            title: "هذا هو العنوان الكبير",
            description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            cta_text: "En savoir plus",
            cta_url: '/',
            inversed: inversed,
            centercontent: centercontent,
        }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Box backgroundColor={backgroundColor}>
                <Container>
                    <ContenuHalfSide {...data} />
                </Container>
            </Box>
        </DirectionManager>
    )
}

export const Variant3 = ({backgroundColor}) => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const inversed = boolean('inversed', false, groupId)
    const centercontent = boolean('Centrer le contenu', true, groupId)
    const data = !rtl ? {
            title: "This is the big title",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at corporis, culpa dignissimos error explicabo incidunt inventore ipsa ipsum laborum maiores molestiae nihil nostrum possimus quaerat quia recusandae totam voluptatum!",
            cta_text: "En savoir plus",
            cta_url: '/',
            inversed: inversed,
            centercontent: centercontent,
        }
        : {
            title: "هذا هو العنوان الكبير",
            description: "لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت",
            cta_text: "En savoir plus",
            cta_url: '/',
            inversed: inversed,
            centercontent: centercontent,
        }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Box backgroundColor={backgroundColor}>
                <Container>
                    <ContenuHalfSide {...data} />
                </Container>
            </Box>
        </DirectionManager>
    )
}


Variant1.args = {
    backgroundColor: '#2e2bde',
};

Variant2.args = {
    backgroundColor: '#e42525',
};

Variant3.args = {
    backgroundColor: '#3ee83b',
};

export default {
    title: 'Dynamic Fields/Contenu half side',
    decorators: [withKnobs],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

