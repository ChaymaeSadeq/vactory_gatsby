import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import {
	Anchor,
    Box,
    Icon,
	Container as DefaultContainer,
	Text,
} from 'vactory-ui';
import { DashHeading } from "./Headings";
import { Slider, Arrow } from 'vactory-ui';


// because __css, sx, props style does not take effect on Container
const Container = styled(DefaultContainer)`
    position: relative;
    height: 100%;
`

const arrowStyle = {
    color: 'lightBlue',
    transition: '.2s',
    '&:not(:hover)': {
        opacity:  .38,
    }
}

export const PrevArrow = ({left, ...props}) => <Arrow sx={{
        left: [-15, -40, -50, null, 'calc(50% - 1200px/2 - 32px)'],
        ...arrowStyle,
        left,
    }} {...props}>
    <Icon name="chevron-left" size="36px" />
</Arrow>


export const NextArrow = ({right, ...props}) => <Arrow sx={{
        right: [-15, -40, -50, null, 'calc(50% - 1200px/2 - 32px)'],
        ...arrowStyle,
        right,
    }} {...props}>
    <Icon name="chevron-right" size="36px" />
</Arrow>


const Dots = dots => <Box
    as="ul"
    __css={{
        width: '100%',
        height: '4px',
        display: 'flex',
        alignItems: 'center',
        transform: 'translateY(-100%)',

        '& > li': {
            flex: 1,
            height: '4px',
            transition: '.2s',

            'button': {
                display: 'block',
                width: '100%',
                height: '100%',
                bg: 'rgba(0, 0, 0, .24)',
                border: 0,
                borderRadius: 0,
                font: '0/0 none',
                transition: 'inherit',
            },
        },

        '& > li:hover': {
            height: '9px',

            'button': {
                cursor: 'pointer',
                bg: 'rgba(0, 0, 0, .3)',
                borderRadius: '10px',
            }
        },

        '& > li.slick-active': {
            height: '9px',

            'button': {
                background: 'linear-gradient(to right, #017CFE 0%, #A2CFFF 100%);',
                boxShadow: '0 6px 17px 4px rgba(33,168,255,0.20)',
                borderRadius: '10px',
            }
        }

    }}
>
    {dots}
</Box>

const Slide = ({title, description, image, link, linkLabel="En Savoir Plus", ...rest}) => {
    
    return <Box sx={{
        position: 'relative',
        height: '490px',
    }}>
        <Box sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
        }} />
        <Container>
            <Box sx={{
                backgroundColor: 'white',
                padding: '30px',
                position: 'absolute',
                width: ['90%', null, '570px'],
                top: [null, null, '50%'],
                bottom: ['30px', null, 'auto'],
                left: ['2.5%', null, 0],
                transform: [null, null, 'translateY(-50%)'],
                borderRadius: 'large',
                boxShadow: ['11px 11px 14px -17px #BEBEBE', null],
            }}>
                <DashHeading level="2" variant="heading.slider">{title}</DashHeading>
                <Text variant="text.slider">{description}</Text>
                <Box variant="text.slider" mt='medium'>
                    <Anchor href={link} sx={{
                        color: 'lightBlue',
                        '&:hover': {
                            color: 'darkBlue',
                        }
                    }} >{linkLabel}</Anchor>
                </Box>
            </Box>
        </Container>
    </Box>;
}


export const CapitalAzurSlider = () => {
    const theme = useContext(ThemeContext);
    let autoplaySpeed = 5000;

    const settings = {
        autoPlay: true,
        autoplaySpeed: autoplaySpeed,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        appendDots: Dots,

        responsive: [
          {
            breakpoint: theme.breakpoints.md,
            settings: {
              arrows: false,
            },
    
          }
        ]
      }
    
    const style = {
        '.slick-slide': {
            p: 0,
        }
    }

    return <Slider {...settings} __css={{style}}>
        <Slide 
            title="Covid-19"
            description="Capital Azur accompagne ses clients Professionnels"
            image="https://capital-azur.com/sites/default/files/2020-05/3.jpg"
            link="://" />
        <Slide 
            title="Capital Azur, votre banque en ligne"
            description=" Application mobile, Banque en ligne : Découvrez une nouvelle expérience de navigation au cœur de vos comptes bancaires."
            image="https://capital-azur.com/sites/default/files/2020-05/1.jpg"
            linkLabel="Gerer vos comptes"
            link="://" />
        <Slide 
            title="COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne"
            description="COVID-19 : Professionnels et Entreprises : Capital Azur vous accompagne"
            image="https://capital-azur.com/sites/default/files/2020-05/slider-pro.png"
            link="://" />

    </Slider>
}

