import React from 'react'
import {NextPreCard} from './nextpre-card'
import {useRtl} from "vactory-gatsby-core";

export const NextNode = (props) => {
    const isRtl = useRtl();
    const direction = isRtl ? 'left' : 'right';

    return <NextPreCard direction={direction} {...props} />
};
