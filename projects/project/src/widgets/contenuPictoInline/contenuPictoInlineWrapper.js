import React from "react";
import {Box, Col, Heading, Paragraph, Row} from "vactory-ui";
import {ContenuPictoInline} from "./contenuPictoInline";

export const ContenuPictoInlineWrapper = ({colCount, centercontent, bigTitle, intro, items}) => {
    const number_cols = 12 / colCount
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
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} sm={12} md={number_cols}>
                            <ContenuPictoInline {...item} centercontent={centercontent}/>
                        </Col>
                    )
                })}
            </Row>
        </Box>
    )
}