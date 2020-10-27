import React from "react";
import {Box, Col, Heading, Paragraph, Row} from "vactory-ui";
import {ContenuColonnePicto} from "./contenuColonnePicto";

export const ContenuColonnePictoWrapper = ({items, colCount, centercontent, bigTitle, intro}) => {
    const contentTextAlignClass = centercontent ? 'center' : 'left'
    const number_cols = 12 / colCount
    return (
        <Box>
            {(bigTitle || intro)&&
            <Box mb={30}>
                {bigTitle &&
                <Heading level={2}>{bigTitle}</Heading>
                }
                {intro &&
                <Paragraph fontSize="title" lineHeight="title">{intro}</Paragraph>
                }
            </Box>
            }
            <Row>
                {
                    items.map((item, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={number_cols} textAlign={contentTextAlignClass}>
                                <ContenuColonnePicto {...item} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Box>
    )
}

