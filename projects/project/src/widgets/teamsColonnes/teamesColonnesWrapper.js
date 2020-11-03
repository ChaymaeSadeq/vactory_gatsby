import React from "react";
import {TeamsColonnes} from "./teamsColonnes";
import {Row, Col} from 'vactory-ui'
import {TemplateWrapper} from "../../composants/template-wrapper";


export const TeamsColonnesWrapper = ({bigTitle, intro, colCount, image_cyrcle, items}) => {
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} md={6} lg={12 / colCount}>
                            <TeamsColonnes image_cyrcle={image_cyrcle} key={index} {...item} />
                        </Col>
                    )
                })}
            </Row>
        </TemplateWrapper>
    )
}