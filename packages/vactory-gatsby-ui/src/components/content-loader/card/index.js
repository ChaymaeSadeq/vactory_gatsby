import React from "react"
import ContentLoader from "react-content-loader"
import {useRtl} from "vactory-gatsby-core";

// Made using https://danilowoz.com/create-content-loader/
export const CardContentLoader = (props) => {
    const isRtl = useRtl();

    return (
        <ContentLoader
            animate={false}
            width={364}
            height={465}
            backgroundColor="#cccccc"
            foregroundColor="#cccccc"
            rtl={isRtl}
            style={{
                width: '100%',
                maxWidth: '100%'
            }}
            {...props}
        >
            <rect x="0" y="0" rx="0" ry="0" width="100%" height="238" />
            <rect x="0" y="255" rx="0" ry="0" width="50%" height="18" />
            <rect x="0" y="296" rx="0" ry="0" width="100%" height="61" />
            <rect x="0" y="378" rx="0" ry="0" width="20%" height="39" />
        </ContentLoader>
    );
};
