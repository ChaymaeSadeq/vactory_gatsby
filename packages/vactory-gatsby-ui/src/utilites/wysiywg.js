import React from "react"
import parse, {domToReact} from "html-react-parser"
import { Link, Icon } from "vactory-gatsby-ui";

export const Wysiwyg = ({html}) => {
    if (typeof html !== 'string') {
        return ''
    }

    const options = {
        replace: ({type, name, attribs, children}) => {

            // Convert class attributes.
            if (attribs && attribs.class) {
                attribs.className = attribs.class
                delete attribs.class
            }

            // // Paragraphs.
            // if (type === "tag" && name === "p") {
            //     return <Paragraph {...attribs}>{domToReact(children, options)}</Paragraph>
            // }

            // Icons.
            if (
                type === "tag" &&
                name === "span" &&
                typeof attribs.className !== 'undefined' &&
                attribs.className.indexOf('icon-') > 0
            ) {
                return <Icon icon="download">{domToReact(children, options)}</Icon>
            }

            // // Headings.
            // for (let level = 1; level <= 6; level++) {
            //     if (type === "tag" && name === "h" + level) {
            //         return <Heading level={level} {...attribs}>{domToReact(children, options)}</Heading>
            //     }
            // }

            // Links.
            if (type === "tag" && name === "a") {
                let LinkClassName = attribs.className || ""
                // LinkClassName += "btn btn-link"
                attribs.className = LinkClassName
                return <Link to={attribs.href} {...attribs}>{domToReact(children, options)}</Link>
            }
        },
    };

    return parse(`<div class="wysiwyg-content">${html}</div>`, options)
};
