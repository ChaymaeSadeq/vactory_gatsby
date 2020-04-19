import React from "react"
import classNames from "classnames"
import ParagraphsContainer from "./paragraphs.container"
import ParagraphsTemplate from "./pargaraphs.template"

export default (props) => {
    const {hasAMP = false} = props;
    const {
        type,
        paragraph_identifier,
        paragraph_container,
        paragraph_css_class,
        paragraph_background_color = {color: {hexadecimal: null}},
        field_vactory_component = null,
        paragraph_background_image = null
    } = props.data;

    const backgroundColor = paragraph_background_color.color.hexadecimal;
    const backgroundImage = paragraph_background_image ?
        `url(${paragraph_background_image.thumbnail.uri.value._default})` :
        null;

    let childComponent;

    if (type === 'paragraph--vactory_component' && field_vactory_component) {
        childComponent = <ParagraphsTemplate
            id={field_vactory_component.widget_id}
            hasAMP={hasAMP}
            settings={JSON.parse(field_vactory_component.widget_data)}
        />
    }

    return (
        <ParagraphsContainer
            id={paragraph_identifier}
            layout={paragraph_container}
            style={{
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage
            }}
            className={classNames("paragraph", type, paragraph_css_class)}
        >
            {childComponent}
        </ParagraphsContainer>
    )
}
