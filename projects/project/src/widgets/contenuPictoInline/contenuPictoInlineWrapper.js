import React from "react";
import {Col, Row} from "vactory-ui";
import {ContenuPictoInline} from "./contenuPictoInline";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuPictoInlineWrapper = ({colCount, centercontent, bigTitle, intro, items}) => {
    const number_cols = 12 / colCount
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} sm={12} md={number_cols}>
                            <ContenuPictoInline {...item} centercontent={centercontent}/>
                        </Col>
                    )
                })}
            </Row>
        </TemplateWrapper>
    )
}