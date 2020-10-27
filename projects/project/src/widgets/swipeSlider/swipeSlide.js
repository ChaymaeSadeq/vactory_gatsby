import React from "react";
import {Flex, Paragraph} from 'vactory-ui';

export const SwipeSlide = ({color, index}) => {
    return (
        <Flex backgroundColor={color} minHeight="300px" alignItems="center" justifyContent="center">
            <Paragraph>{"index" + (index + 1)}</Paragraph>
        </Flex>
    )
}