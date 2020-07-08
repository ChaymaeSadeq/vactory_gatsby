import React from 'react'
import BaseBackToTop from "./BackToTop";
import {Icon} from 'vactory-ui'

export const BackToTop = (props) => {
    return <BaseBackToTop
        showOnScrollUp={true}
        showAt={40}
        speed={1500}
        easing="easeInOutQuint"
        {...props}>
        <Icon name="barre-ancres-fleche" size="36px"/>
    </BaseBackToTop>
};
