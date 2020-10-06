import React, { useContext, useState } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
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
        left: left !== undefined ? left : 'calc(50% - 1200px/2 + 1px)',
        ...arrowStyle,
    }} {...props}>
    <Icon name="chevron-left" size="36px" />
</Arrow>


export const NextArrow = ({right, ...props}) => <Arrow sx={{
        right: right !== undefined ? right : 'calc(50% - 1200px/2 + 1px)',
        ...arrowStyle,
    }} {...props}>
    <Icon name="chevron-right" size="36px" />
</Arrow>

const barDotsStyle = css`

    @media (min-width: ${ p => p.theme.breakpoints.md }) {
        max-width: 600px;
        height: 4px;
        transform: translateY(-100%);
        margin: 0 auto;
        position: static;

        & > li {
            flex: 1;
            height: 4px;
            box-shadow: none;
            margin: 0;
            border: 0;

            button {
                background: rgba(0, 0, 0, .24);
                border-radius: 0;

                &::after {
                    content: none;
                    display: none;
                }
            }
        }

        & > li:hover {
            height: 9px;

            button {
                background: rgba(0, 0, 0, .3);
                border-radius: 10px;
            }
        }

        & > li.slick-active {
            height: 9px;

            button {
                background: linear-gradient(to right, #017CFE 0%, #A2CFFF 100%);
                box-shadow: 0 6px 17px 4px rgba(33,168,255,0.20);
                border-radius: 10px;
            }
        }
    }
`


export const Dots = (dots, bar=false) => <Box
    as="ul"
    css={`
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: -35px;
        position: relative;

        & > li {
            height: 15px;
            width: 15px;
            border-radius: 50%;
            transition: .3s ease;
            margin: 0 10px;
            border: 1px solid #e1efff;
            box-shadow: 0 0 2px -2px rgba(0, 0, 0, .2);

            button {
                display: block;
                width: 100%;
                height: 100%;
                font: 0/0 none;
                transition: inherit;
                border: 0;
                border-radius: inherit;
                background: #fff;
                padding: 0;
                outline: 0;

                &::after {
                    content: '';
                    display: block;
                    transition: inherit;
                    width: 100%;
                    height: 100%;
                    transform: scale(3);
                    border-radius: inherit;
                    box-shadow: 0 0 1px ${ p => p.theme.colors.primary};
                    visibility: hidden;
                    opacity: 0;
                    background: ${ p => p.theme.colors.primary};
                }
            }
        }

        & > li:hover {
            button {
                cursor: pointer;
            }
        }

        & > li.slick-active {
            border-color: transparent;

            button {
                background: ${ p => p.theme.colors.primary};
                &::after {
                    transform: scale(1);
                    opacity: 1;
                    visibility: visible;
                }
            }
        }

        ${ bar ? barDotsStyle : null }
    `}
>
    {dots}
</Box>

const Slide = ({title, description, bgImage, bgColor, link, linkLabel="En Savoir Plus", isCurrent=false, ...rest}) => {
    
    return <Box sx={{
        position: 'relative',
        height: '490px',
    }}>
        <Box sx={{
            backgroundColor: bgColor ? bgColor : 'transparent',
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: bgColor ? 'contain' : 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
        }} />
        <Container>
            <Box sx={{
                transition: '.5s ease',
                backgroundColor: 'white',
                padding: '30px',
                position: 'absolute',
                width: ['90%', null, '570px'],
                top: isCurrent ? [null, null, '50%'] : '100%',
                bottom: isCurrent ? ['50px', null, 'auto'] : '-100%',
                left: ['2.5%', null, '2%'],
                transform: isCurrent ? [null, null, 'translateY(-50%)'] : 'none',
                opacity: isCurrent ? 1 : 0,
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


export const CapitalAzurSlider = ({slides, ...rest}) => {
    const [current, setCurrent] = useState(-1);
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
        appendDots: (dots) => Dots(dots, true),
        afterChange: (index) => {
            setCurrent(index);
        },
        onInit: () => {
            setCurrent(0);
        },

        responsive: [
          {
            breakpoint: theme.breakpoints.xl,
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

        {slides.map( (slide, i) => <Slide
            key={i}
            isCurrent={current === i}
            title={slide.title}
            description={slide.description}
            link={slide.link}
            linkLabel={slide.link_label || "En Savoir Plus"}
            bgImage={slide.image}
            bgColor={null}
            />
        )}

    </Slider>
}

