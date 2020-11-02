import React from 'react';
import {withKnobs, boolean} from "@storybook/addon-knobs";
import {ContenuLibre} from "../contenuLibre";
import {DirectionManager, Container} from "vactory-ui";

const groupRtl = "Version arabe"
const activeRtl = false

export const Variant1 = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const data = {
        content: "<h3>This is the title</h3>" +
            "<p>2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias cupiditate enim eos fuga illo, libero minus, nam praesentium quidem quod, ratione temporibus voluptas! Atque consectetur dignissimos doloremque doloribus hic pariatur.</p>" +
            "<a href='/node/1'>En savoir plus</a>",
    }
    return (
        <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
            <Container>
                <ContenuLibre content={data.content}/>
            </Container>
        </DirectionManager>
    )
}


export default {
    title: 'Dynamic Fields/Contenu Libre',
    decorators: [withKnobs],
};

