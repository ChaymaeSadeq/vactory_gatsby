import React from "react";
import {Col, Row} from "vactory-ui";
import {ContenuColonnePicto} from "./contenuColonnePicto";
import {TemplateWrapper} from "../../composants/template-wrapper";

export const ContenuColonnePictoWrapper = ({items, colCount, centercontent, bigTitle, intro}) => {
    const contentTextAlignClass = centercontent ? 'center' : 'left'
    const number_cols = 12 / colCount
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
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
        </TemplateWrapper>
    )
}

