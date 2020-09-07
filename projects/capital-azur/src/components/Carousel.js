import React from 'react';
import styled, { ThemeContext } from 'styled-components';
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
import { PrevArrow, NextArrow } from './Slider';


const CarouselCard = ({title, image, ...rest}) => <Box sx={{
    m: '60px 15px 30px',
    '&:hover > div': {
        transform: 'translateY(-30px)',
        boxShadow: 'carouselCardActive',
    }
}}>
    <Flex __css={{
        mx: 'auto',
        bg: 'white',
        boxShadow: 'carouselCard',
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

        <Text sx={{
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
          {
            breakpoint: parseInt(theme.breakpoints.lg.replace('px', '')),
            settings: {
                slidesToShow: 3,
            }
          },
          {
            breakpoint: parseInt(theme.breakpoints.md.replace('px', '')),
            settings: {
                slidesToShow: 2,
            }
          },
          {
            breakpoint: parseInt(theme.breakpoints.sm.replace('px', '')),
            settings: {
                slidesToShow: 1,
            }
          }
        ]
    }



    return <Box bg='#f4f8f8'>
        <Container>
            <Box sx={{
                padding: '85px 0',
                maxWidth: ['90%', null, 'unset'],
                mx: 'auto'
            }}>

                <Box variant='boxes.intro'>
                    <DashHeading mb={30}>{title}</DashHeading>

                    <Paragraph>{intro}</Paragraph>
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