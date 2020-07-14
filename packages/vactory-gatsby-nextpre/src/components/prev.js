import React from 'react'
import {NextPreCard} from './nextpre-card'
import {useRtl} from "vactory-gatsby-core";

export const PrevNode = (props) => {
    const isRtl = useRtl();
    const direction = isRtl ? 'right' : 'left';

    return <NextPreCard direction={direction} {...props} />
};
