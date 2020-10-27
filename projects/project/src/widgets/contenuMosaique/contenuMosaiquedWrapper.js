import React from "react";
import {Box, Heading, Paragraph} from "vactory-ui";
import {ContenuMosaique} from "./contenuMosaique";

export const ContenuMosaiquedWrapper = ({centercontent, intro, bigTitle, activeBorder, items}) => {
    const contentTextAlignClass = centercontent ? "center" : "left"
    const contentWithBorder = activeBorder
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
            <Box
                borderWidth={contentWithBorder ? 'medium' : 'none'}
                borderStyle={contentWithBorder ? 'solid' : 'none'}
                borderColor={contentWithBorder ? 'black' : 'none'}
                borderRadius={contentWithBorder ? 'xlarge' : '0'}
            >
                {
                    items.map((item, index) => {
                        const inversed = index % 2;
                        return (
                            <ContenuMosaique key={index} {...item}
                                             inversed={inversed}
                                             textAlign={contentTextAlignClass}
                                             activeBorder={contentWithBorder}
                            />
                        )
                    })
                }
            </Box>
        </Box>
    )
}