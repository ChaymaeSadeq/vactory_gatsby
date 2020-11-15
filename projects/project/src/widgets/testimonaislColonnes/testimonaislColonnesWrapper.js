import React from "react";
import {TestimonaislColonnes} from "./testimonaislColonnes";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {Row, Col} from 'vactory-ui'

export const TestimonaislColonnesWrapper = ({bigTitle, intro, items, colCount, inversed}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} md={6} lg={12 / colCount}>
                            <TestimonaislColonnes inversed={inversed} {...item} />
                        </Col>
                    )
                })}
            </Row>
        </TemplateWrapper>
    )
}