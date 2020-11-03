import React from "react";
import {ContentTeamsColonnes} from "./contentTeamsColonnes";
import {TemplateWrapper} from "../../composants/template-wrapper";
import {Row, Col} from 'vactory-ui'

export const ContentTeamsColonnesWrapper = ({bigTitle, intro, items, colCount}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} md={6} lg={12 / colCount}>
                            <ContentTeamsColonnes {...item} />
                        </Col>
                    )
                })}
            </Row>
        </TemplateWrapper>
    )
}