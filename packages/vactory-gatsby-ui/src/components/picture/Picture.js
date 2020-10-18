import React from "react"
import {Picture as ResponsivePicture} from 'react-responsive-picture';
import isClient from "is-client"
import {AppSettings, ImageStyles} from "vactory-gatsby-core"
import AspectRatio from 'react-aspect-ratio';
import LazyLoad from 'react-lazyload';
import 'react-aspect-ratio/aspect-ratio.css'

export const Picture = (props) => {
    const backendURL = AppSettings.api.url;
    const styles = ImageStyles;
    const {
        file: {
            // fid,
            // _default,
            _lqip,
            uri,
        },
        sizes = [],
        alt = "",
        width,
        height,
        ratio,
        imgStyle = null,
        aspectRatioStyle = null,
        disableLazy = false,
        disableAspectRatio = false,
        debug = {
            enabled: false,
            delayURL: "http://localhost:4567/5000/" // npm install -g deelay
        },
        ...rest
    } = props;

    if (!isClient()) {
        return <img src={_lqip} width={width} height={height} alt={alt}/>
    }

    const sources = sizes.reverse().map((size, i) => {
        const imageStyle = styles.find(style => style.name === size.name);
        const imageStyleName = `decoupled_image_${imageStyle.width}_${imageStyle.height}`;
        let url = `${backendURL}sites/default/files/styles/${imageStyleName}/public/${encodeURI(uri)}`;

        if (debug.enabled) {
            // Delay image loading.
            url = `${debug.delayURL}${backendURL}sites/default/files/styles/${imageStyleName}/public/${encodeURI(uri)}`;
        }

        return {
            srcSet: url || "",
            media: size.media || ""
        };
    }) || [];

    let imageStyle = imgStyle ? imgStyle : {
        maxWidth: '100%',
        height: 'auto',
        width: '100%',
        display: 'block'
    };

    if (imgStyle === false) {
        imageStyle = null
    }

    let imageAspectRatioStyle = aspectRatioStyle ? aspectRatioStyle : {
        backgroundColor: '#f1f1f1',
    };

    if (aspectRatioStyle === false) {
        imageAspectRatioStyle = null
    }

    const AspectRatioComponent = disableAspectRatio === true ? 'div' : AspectRatio;
    const LazyLoadComponent = disableLazy === true ? 'div' : LazyLoad;

    return (
        <AspectRatioComponent style={imageAspectRatioStyle} ratio={ratio}>
            <LazyLoadComponent once>
                <ResponsivePicture
                    sources={sources}
                    width={width}
                    height={height}
                    alt={alt}
                    style={imageStyle}
                    {...rest}
                />
            </LazyLoadComponent>
        </AspectRatioComponent>
    )
};

