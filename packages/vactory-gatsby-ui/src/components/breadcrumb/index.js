import React from "react"
import {Box, Breadcrumb as BreadcrumbContainer, BreadcrumbItem} from "vactory-ui";
import {Link} from 'vactory-gatsby-ui'

export const Breadcrumb = ({items}) => {
    const lastIndex = items.length - 1;

    return (
        <Box>
            <BreadcrumbContainer>
                {items.map((item, index) => {
                    const isActive = (index === lastIndex);
                    return (
                        <BreadcrumbItem
                            key={index}
                            as={Link}
                            to={item.url}
                            active={isActive}
                        >{item.text}
                        </BreadcrumbItem>
                    )
                })}
            </BreadcrumbContainer>
        </Box>
    )
};
