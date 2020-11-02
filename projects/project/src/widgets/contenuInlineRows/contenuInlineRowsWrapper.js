import React from "react";
import {ContenuInlineRows} from "./contenuInlineRows";
import {Box, Heading, Paragraph} from 'vactory-ui'

export const ContenuInlineRowsWrapper = ({bigTitle, intro, inversed, items}) => {
    return (
        <Box>
            {(bigTitle || intro) &&
            <Box mb={30}>
                {bigTitle &&
                <Heading level={2}>{bigTitle}</Heading>
                }
                {intro &&
                <Paragraph fontSize="title" lineHeight="title">{intro}</Paragraph>
                }
            </Box>
            }
            {items.map((item, index) => {
                return (
                    <ContenuInlineRows key={index} {...item} inversed={inversed}  />
                )
            })}
        </Box>
    )
}