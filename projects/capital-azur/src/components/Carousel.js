import React from 'react';
import { ThemeContext } from 'styled-components';
import {
    Box,
    Flex,
    Image,
    Text,
    Slider,
} from 'vactory-ui';
import { Dots, PrevArrow, NextArrow } from './Slider';


const CarouselCard = ({title, image, link, ...rest}) => <Box sx={{
    mt: 60,
    mb: 30,
    '&:hover > div': {
        transform: 'translateY(-30px)',
        boxShadow: 'cardsActive',
    }
}}>
    <Flex __css={{
        mx: [15, null, 'auto'],
        bg: 'white',
        boxShadow: 'cardsLight',
        width: 205,
        height: 215,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 8,
        transition: '.3s ease-out',
    }}>
        <Image src={image} sx={{
            width: 115,
            height: 'auto',
            mt: 50,
            mb: 40,
        }} />

        <Text href={link ? link : null} as={link ? 'a' : null} sx={{
            fontSize: '16px',
            lineHeight: '24px',
            fontWeight: 'semiBold',
        }}>{title}</Text>

    </Flex>
</Box>;

export const CapitalAzurCarousel = ({cards, ...rest}) => {
    const theme = React.useContext(ThemeContext);

    const settings = {
        autoPlay: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow right={-64} />,
        prevArrow: <PrevArrow left={-64} />,
        appendDots: (dots) => React.cloneElement(
            Dots(dots),
            {css: {
                marginTop: '10px !important'
            }}
        ),

        responsive: [
            {
                breakpoint: parseInt(theme.breakpoints.lg), // 992
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: parseInt(theme.breakpoints.md), // 768
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                    variableWidth: true,
                }
            }
        ]
    }



    return <Slider {...settings} {...rest}>
        {cards.map( (card, i) => <CarouselCard
            key={i}
            title={card.title}
            image={card.image}
            link={card.link} />
        )}
    </Slider>



}