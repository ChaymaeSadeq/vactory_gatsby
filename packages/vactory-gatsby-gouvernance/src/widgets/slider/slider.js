import React from 'react'
import {Box} from 'vactory-ui'
import {CardGouvernance} from 'vactory-gatsby-gouvernance'
import {default as SlickSlider} from "react-slick";
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlickSlider = styled(SlickSlider)`   
    /*.slick-track {
    display: flex;
    }
    .slick-slide{
        display: flex;
        height: auto;
        align-items: center;
        justify-content: center;
    }*/
      .slick-dots {
        position: relative;
        bottom: inherit;
      }
`;

export const Slider = ({posts}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <StyledSlickSlider {...settings}>
            {posts.map(node => {
                return (
                    <Box key={node.key} px="8px">
                        <CardGouvernance {...node} />
                    </Box>
                )
            })}
        </StyledSlickSlider>
    )
};
