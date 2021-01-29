import React from "react"
import classNames from "classnames"
import {Container} from 'vactory-ui'
import { StatePageSection } from 'vactory-gatsby-ui'
import { Waypoint } from 'react-waypoint';

const NarrowContainer = ({children}) => {
    return (<Container className="vui-container">{children}</Container>)
};

const FullContainer = ({children}) => {
    return (<Container className="vui-container" fluid={true}>{children}</Container>)
};

const NoContainer = ({children}) => {
    return (<div className="vui-container">{children}</div>)
};

const layoutsMapping = {
    narrow_width: NarrowContainer,
    full_width: FullContainer,
    no_container: NoContainer,
};


export const ParagraphsContainer = ({children, id, style, layout, className, state}) => {
    const LayoutComponent = layoutsMapping[layout];
    const isBackgroundSolid = style.backgroundColor ? 'has-background' : null;
    let pageSection = StatePageSection.useContainer();
    const handleEnter = () => {
        if (state) {
            pageSection.setCurrentSection(state);
        }
    };
    return (
        <section className={classNames(className, isBackgroundSolid)} style={style} id={id}>
            <Waypoint onEnter={handleEnter} />
            <LayoutComponent>
                {children}
            </LayoutComponent>
        </section>
    )
};
