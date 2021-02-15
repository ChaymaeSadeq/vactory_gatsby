import React from 'react'
import IcoMoon from "react-icomoon";
import styled from "styled-components";
import {size, color, space} from "styled-system";
// import shouldForwardProp from '@styled-system/should-forward-prop';
// import {sx, base} from "../../core";
import {useVactoryIcon} from "./context"
import iconSet from './selection.json';
import { props as systemProps } from '@styled-system/should-forward-prop';

export {iconSet}

export const mergeIcons = (source, target) => {
    return {
        ...source,
        icons: source.icons.concat(target.icons)
    }
};

export const WrapperIcon = ({...rest}) => {
    const icons = useVactoryIcon();

    return <IcoMoon iconSet={icons} {...rest}/>
};

export const Icon = styled(WrapperIcon).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => { return  !['sx', '__css', ...systemProps].includes(prop);}
  }).attrs(props => ({
    removeInlineStyle: true,
    icon: props.name || props.icon,
}))
    `
    display: inline-block;
    stroke: currentcolor;
    fill: currentcolor;
    ${color}
    ${size}
    ${space}
    ${ /* base */'' }
    ${ /* sx */'' }
  `;

export default Icon;
