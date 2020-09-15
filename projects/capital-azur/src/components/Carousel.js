import React from 'react';
import { ThemeContext } from 'styled-components';
import {
    Box,
	Container,
    Flex,
    Image,
    Text,
    Paragraph,
    Slider,
} from 'vactory-ui';
import { DashHeading } from './Headings';
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

export const CapitalAzurCarousel = ({title, intro, cards, ...rest}) => {
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



    return <Box sx={{
            bg: '#f4f8f8',
            overflow: 'hidden', // to prevent y-scroll because of carousel btns
        }}>
        <Container>
            <Box sx={{
                padding: '85px 0',
                maxWidth: ['90%', null, 'unset'],
                mx: 'auto'
            }}>

                <Box variant='boxes.intro'>
                    <DashHeading mb={30}>{title}</DashHeading>

                    <Paragraph as='div'>{intro}</Paragraph>
                </Box>

                <Slider {...settings} __css={{}}>
                    <CarouselCard
                        title='Comptes & Cartes'
                        image='https://capital-azur.com/sites/default/files/2020-05/18.png' />

                    <CarouselCard
                        title='Epargne'
                        image='https://capital-azur.com/sites/default/files/2020-05/17.png' />


                    <CarouselCard
                        title='Crédit'
                        image='https://capital-azur.com/sites/default/files/2020-05/16_0.png' />


                    <CarouselCard
                        title='Assurance'
                        image='https://capital-azur.com/sites/default/files/2020-05/18.png' />

                </Slider>
            </Box>
        </Container>
    </Box>



}