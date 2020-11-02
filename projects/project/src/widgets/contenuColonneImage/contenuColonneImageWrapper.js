import React from "react";
import {Box, Col, Heading, Paragraph, Row} from "vactory-ui";
import {ContenuColonneImage} from "./contenuColonneImage";
import {TemplateWrapper} from "../../composants/template-wrapper";


export const ContenuColonneImageWrapper = ({bigTitle, intro, colCount, centercontent, activeBorder, items}) => {
    const contentTextAlignClass = centercontent ? "center" : "left"
    const number_cols = 12 / colCount
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {
                    items.map((item, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={number_cols} textAlign={contentTextAlignClass}>
                                <ContenuColonneImage {...item} activeBorder={activeBorder}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </TemplateWrapper>
    )
}
