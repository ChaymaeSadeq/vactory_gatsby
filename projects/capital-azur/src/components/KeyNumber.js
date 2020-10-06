import React, {useEffect} from 'react';
import { ThemeContext } from 'styled-components';
import {
    Box,
    Flex,
    Slider,
    Text,
} from 'vactory-ui';


export const KeyNumber = ({number, suffix, description, ...rest}) => {

    return <Box sx={{
        border: '1px solid',
        borderColor: 'lightBlue',
        borderRadius: 8,
        padding: '54px 43px 35px',
        bg: 'white',
        mx: 15,
        textAlign: 'center',
        maxWidth: 275,
    }} {...rest}>

        <Text as='span' sx={{
            display: 'block',
            fontSize: 100,
            lineHeight: '124px',
            fontWeight: 'black',
            color: 'primary',
            WebkitTextFillColor: 'white',
            WebkitTextStroke: '4px currentColor',
            mb: 24,
        }}>{number}{suffix}</Text>

        <Text as='span' sx={{
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 'semiBold',
            color: '#3e4555',
        }}>{description}</Text>

    </Box>
}

export const KeyNumbers = ( {numbers, ...rest} ) => {
    const theme = React.useContext(ThemeContext);

    const settings = {
        autoPlay: false,
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,

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
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '20px',
                }
            }
        ]
    }


    return <Slider {...settings}>
        {
          numbers.map( (item) => {
            return <KeyNumber
                width={[1, null, 1 / numbers.length]}
                number={item.chiffre}
                suffix={item.chiffre_alt}
                description={item.title} />
          })
        }
    </Slider>
}