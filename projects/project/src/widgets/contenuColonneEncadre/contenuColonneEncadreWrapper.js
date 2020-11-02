import React from "react";
import {Col, Row} from "vactory-ui";
import {ContenuColonneEncadre} from "./contenuColonneEncadre";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuColonneEncadreWrapper = ({bigTitle, intro, colCount, items, centercontent}) => {
    const contentTextAlignClass = centercontent ? 'center' : 'left';
    const number_cols = 12 / colCount
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {
                    items.map((item, index) => {
                        return (
                            <Col key={index} xs={12} sm={6} md={number_cols} textAlign={contentTextAlignClass}>
                                <ContenuColonneEncadre {...item} />
                            </Col>
                        )
                    })
                }
            </Row>
        </TemplateWrapper>
    )
}