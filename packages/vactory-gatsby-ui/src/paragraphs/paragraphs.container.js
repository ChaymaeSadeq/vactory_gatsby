import React from "react"
import classNames from "classnames"
import {Container, Row, Col} from 'vactory-ui'

const NarrowContainer = ({children}) => {
    return (<Container><Row><Col>{children}</Col></Row></Container>)
};

const FullContainer = ({children}) => {
    return (<Container fluid={true}>{children}</Container>)
};

const NoContainer = ({children}) => {
    return (<div>{children}</div>)
};

const layoutsMapping = {
    narrow_width: NarrowContainer,
    full_width: FullContainer,
    no_container: NoContainer,
};


export const ParagraphsContainer = ({children, id, style, layout, className}) => {
    const LayoutComponent = layoutsMapping[layout];
    const isBackgroundSolid = style.backgroundColor ? 'has-background' : null;

    return (
        <div className={classNames(className, isBackgroundSolid)} style={style} id={id}>
            <LayoutComponent>
                {children}
            </LayoutComponent>
        </div>
    )
};
