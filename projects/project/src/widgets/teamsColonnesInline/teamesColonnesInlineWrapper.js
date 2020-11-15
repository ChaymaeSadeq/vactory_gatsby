import React from "react";
import {Row, Col} from 'vactory-ui'
import {TemplateWrapper} from "../../composants/template-wrapper";
import {TeamsColonnesInline} from "./teamsColonnesInline";


export const TeamsColonnesInlineWrapper = ({bigTitle, intro, colCount, activeBorder, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} md={6} lg={12/colCount}>
                            <TeamsColonnesInline key={index} activeBorder={activeBorder} {...item} />
                        </Col>
                    )
                })}
            </Row>
        </TemplateWrapper>
    )
}