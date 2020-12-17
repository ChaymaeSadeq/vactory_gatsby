import React from "react"
import {WidgetsMapping, WidgetsAmpMapping} from 'vactory-gatsby-core';
import {Box} from 'vactory-ui'

const Alert = React.forwardRef((props, ref) => (
    <Box
        ref={ref}
        variant="primary"
        {...props}
        __themeKey="alerts"
        __css={{
            display: 'flex',
            alignItems: 'center',
            px: 10,
            py: 15,
            fontWeight: 'bold',
            color: 'white',
            bg: 'primary',
            borderRadius: 4,
        }}
    />
));

export const ParagraphsTemplate = (props) => {
    const {id, settings, hasAMP = false, ...rest} = props;
    let Component = hasAMP ? WidgetsAmpMapping[id] : WidgetsMapping[id];

    if (!Component) {
        return (
            <Alert mb={"15px"} role="alert">
                Caught an error. Template {hasAMP ? "AMP " +id : id} is not mapped!
            </Alert>
        )
    }

    return (
        <Component data={settings} {...rest} />
    )
};
