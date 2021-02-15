import React from 'react'
import IcoMoon from "react-icomoon";
// import styled from "styled-components";
// import {size, color, space} from "styled-system";
// import shouldForwardProp from '@styled-system/should-forward-prop';
// import {sx, base} from "../../core";
import {useVactoryIcon} from "./context"
import iconSet from './selection.json';
// import { props as systemProps } from '@styled-system/should-forward-prop';


const sizes = {
	xxxsmall: "2px",
	xxsmall: "4px",
	xsmall: "8px",
	small: "12px",
	medium: "16px",
	large: "24px",
	xlarge: "32px",
	xxlarge: "64px",
	xxxlarge: "128px",
};


const colors = {
	black: "#000",
	white: "#fff",
	transparent: "transparent",
	light: "",
	disabled: "",

	text: "#0a1f44",

	primary100: "#f2f6ff",
	primary200: "#d9e4ff",
	primary300: "#a6c1ff",
	primary400: "#598bff",
	primary500: "#3366ff",
	primary600: "#274bdb",
	primary700: "#1a34b8",
	primary800: "#102694",
	primary900: "#091c7a",

	black100: "#707d91",
	black200: "#626f88",
	black300: "#596680",
	black400: "#4e5c78",
	black500: "#455571",
	black600: "#374766",
	black700: "#293a5b",
	black800: "#13284b",
	black900: "#0a1f44",

	gray100: "#f7f8f9",
	gray200: "#f7f8f9",
	gray300: "#f1f2f4",
	gray400: "#e1e4e8",
	gray500: "#c9ced6",
	gray600: "#afb7c3",
	gray700: "#a6aebb",
	gray800: "#98a1b1",
	gray900: "#8a94a6",

	success100: "#f0fff5",
	success200: "#ccfce3",
	success300: "#8cfac7",
	success400: "#2ce69b",
	success500: "#00d68f",
	success600: "#00b887",
	success700: "#00997a",
	success800: "#007d6c",
	success900: "#004a45",

	info100: "#f2f8ff",
	info200: "#c7e2ff",
	info300: "#94cbff",
	info400: "#42aaff",
	info500: "#0095ff",
	info600: "#006fd6",
	info700: "#0057c2",
	info800: "#0041a8",
	info900: "#002885",

	warning100: "#fffdf2",
	warning200: "#fff1c2",
	warning300: "#ffe59e",
	warning400: "#ffc94d",
	warning500: "#ffaa00",
	warning600: "#db8b00",
	warning700: "#b86e00",
	warning800: "#945400",
	warning900: "#703c00",

	danger100: "#fff2f2",
	danger200: "#ffd6d9",
	danger300: "#ffa8b4",
	danger400: "#ff708d",
	danger500: "#ff3d71",
	danger600: "#db2c66",
	danger700: "#b81d5b",
	danger800: "#94124e",
	danger900: "#700940",

	btnPrimary: "#3366ff",

	backgroundBasic100: "#fff",
	backgroundBasic200: "#f7f8f9",

	textBasic500: "#30435c",
	textBasic900: "#30435c",

	skeletonBackground: "rgba(0, 0, 0, 0.08)",
};

export {iconSet}

export const mergeIcons = (source, target) => {
    return {
        ...source,
        icons: source.icons.concat(target.icons)
    }
};

export const Icon = ({name, size, color, ...rest}) => {
    const icons = useVactoryIcon();
    let sizeValue = size;
    let colorValue = color;

    if (size in sizes) {
        console.warn(`keyword sizes in <Icon /> are deprecated. Pass a valid css length value instead.`);
        sizeValue = sizes[size];
    }

    if (color in colors) {
        console.warn(`custom color names in <Icon /> are deprecated. Pass a valid css color value instead.`);
        colorValue = colors[color];
    }
    return <IcoMoon iconSet={icons} icon={name} size={sizeValue} color={colorValue} {...rest} />
};

// export const Icon = ({ size, color, ...rest }) => {
//     return (
//         <WrapperIcon  />
//     )
// };



export default Icon;
