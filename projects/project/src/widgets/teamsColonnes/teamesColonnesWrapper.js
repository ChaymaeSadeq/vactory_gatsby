import React from "react";
import {TeamsColonnes} from "./teamsColonnes";
import {Row, Col} from 'vactory-ui'
import {TemplateWrapper} from "../../composants/template-wrapper";

const imageStyles2Cols = {
    sizes: [
        {
            name: "decoupled_image_466_262",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 466,
    height: 262,
    ratio: 466 / 262
};
const imageStyles3Cols = {
    sizes: [
        {
            name: "decoupled_image_354_200",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 354,
    height: 200,
    ratio: 354 / 200
};
const imageStyles4Cols = {
    sizes: [
        {
            name: "decoupled_image_252_142",
            media: "(max-width: 767px)"
        },
        {
            name: "decoupled_image_288_162",
            media: "(min-width: 768px)"
        }
    ],
    width: 252,
    height: 142,
    ratio: 252 / 142
};
const imageStylesCyrcle = {
    sizes: [
        {
            name: "decoupled_image_200_200",
            media: "(min-width: 0px)"
        },
    ],
    width: 200,
    height: 200,
    ratio: 200 / 200
};

export const TeamsColonnesWrapper = ({bigTitle, intro, colCount, image_cyrcle, items}) => {

    let imageStyles = imageStylesCyrcle
    if(!image_cyrcle) {
        if(colCount === 2) {
            imageStyles = imageStyles2Cols
        }
        else if (colCount === 3) {
            imageStyles = imageStyles3Cols
        }
        else if (colCount === 4) {
            imageStyles = imageStyles4Cols
        }
    }
    return (
        <TemplateWrapper bigTitle={bigTitle} intro={intro}>
            <Row>
                {items.map((item, index) => {
                    return (
                        <Col key={index} xs={12} md={6} lg={12 / colCount}>
                            <TeamsColonnes imageStyles={imageStyles} image_cyrcle={image_cyrcle} key={index} {...item} />
                        </Col>
                    )
                })}
            </Row>
        </TemplateWrapper>
    )
}