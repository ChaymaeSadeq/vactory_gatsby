import React from "react";
import {TestimonialsInline} from "./TestimonialsInline";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {Row, Col} from 'vactory-ui'

export const TestimonialsInlineWrapper = ({bigTitle, intro, inversed, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            {items.map((item, index) => {
                return (
                    <Row key={index}>
                        <Col>
                            <TestimonialsInline inversed={inversed} {...item} />
                        </Col>
                    </Row>
                )
            })}
        </TemplateWrapper>
    )
}