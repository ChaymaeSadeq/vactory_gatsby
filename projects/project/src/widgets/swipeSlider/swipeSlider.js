import React, {useState} from "react";
import { autoPlay } from 'react-swipeable-views-utils';
import SwipeableViews from "react-swipeable-views";
import {SwipeSlide} from "./swipeSlide";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const data = [
    {
        color: 'red',
    },
    {
        color: 'blue',
    },
    {
        color: 'orange',
    },
    {
        color: 'yellow',
    },
]

export const SwipeSlider = ({autoPlay}) => {

    if(autoPlay) {
        const [indexSlide, handleIndex] = useState(0)
        return  (
            <AutoPlaySwipeableViews interval="2000" enableMouseEvents index={indexSlide} onChangeIndex={handleIndex}>
                {data.map((item, index) => {
                    return (
                        <SwipeSlide key={index} index={index} {...item} />
                    )
                })}

            </AutoPlaySwipeableViews>
        )
    }
    return (
        <SwipeableViews enableMouseEvents >
            {data.map((item, index) => {
                return (
                    <SwipeSlide key={index} index={index} {...item} />
                )
            })}
        </SwipeableViews>
    )
}