import React from 'react';
import {
    Box,
    Flex,
    Heading,
    Image,
    Link,
    Paragraph,
    Slider,
    Text,
} from 'vactory-ui';
import {PrevArrow, NextArrow} from './Slider';
import {Container} from './Container';

const Tag = ({color, ...props}) => <Text
    sx={{
        color: 'white',
        bg: color,
        fontSize: 9,
        fontWeight: 'extraBold',
        lineHeight: '20px',
        borderRadius: 20,
        py: 2.5,
        px: 5,
        mx: 5,
        my: 2.5,
    }} {...props} as='span' />

const TimeSpan = ({start, end, ...props}) => {
    start = start.split(' ');
    end = end.split(' ');

    let largeFontSize = {
        fontSize: 30,
        lineHeight: '30px',
    };

    return <Box sx={{
            textAlign: 'center',
            position: 'absolute',
            background: 'linear-gradient(45deg, #fb3a3a, #ff6a5b)',
            color: 'white',
            padding: 10,
            borderRadius: 8,
            top: 20,
            right: 20,
            fontSize: 16,
            lineHeight: '20px',
        }}>
        <Box>{start[0]}</Box>
        <Box {...largeFontSize}>{start[1]}</Box>
        <Text>-</Text>
        <Box>{end[0]}</Box>
        <Box {...largeFontSize}>{end[1]}</Box>
    </Box>
}

export const Slide = ({ 
        image,
        date={start: '22 mai', end: '29 mai'},
        description,
        title,
        tags=[{label: 'EXPOSITION', color: 'primary'},
              {label: 'Nairobi', color: 'red'}],
        action,
    }) => {

    return <Box py={20} px={[20, null, null, 150]}>
        <Flex sx={{
            bg: 'white',
            borderRadius: 8,
            flexFlow: ['column wrap', null, 'row nowrap'],
        }}>
            <Box width={[1, null, 1/3]} sx={{
                position: 'relative',
                borderTopLeftRadius: 'inherit',
                borderBottomLeftRadius: 'inherit',
                overflow: 'hidden',
                }}>
                <Image src={image} alt={''} sx={{
                    height: '100%',
                    width: '100%',
                    ObjectFit: 'cover',
                    objectPosition: 'center',
                }} />
                <TimeSpan start={date.start} end={date.end} />
            </Box>

            <Flex width={[1, null, 2/3]} p={20} flexDirection='column' alignItems='flex-start'>
                <Heading level={3} sx={{
                    variant: 'heading.events',
                    mb: [10, null, 15],
                }}>{title}</Heading>
                <Box>{
                    tags.map( ({color, label}) => <Tag color={color}>{label}</Tag> )
                }</Box>
                <Paragraph sx={{
                    my: [10, null, 15],
                    variant: 'text.events',
                }}>
                    {description}
                </Paragraph>
                <Link sx={{
                    mt: 'auto',
                    variant: 'buttons.primary',
                }} href={action.link}>{action.label}</Link>
            </Flex>
        </Flex>
    </Box>
}

export const EventsSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow right={[-25, -40, -50, 'calc(50% - 950px/2)']} />,
        prevArrow: <PrevArrow left={[-25, -40, -50, 'calc(50% - 950px/2)']} />,
        appendDots: dots => <Box
            as="ul"
            __css={{
                display: 'flex',
                justifyContent: 'center',

                '& > li': {
                    font: '0/0 none',
                    background: 'white',
                    width: 15,
                    height: 15,
                    borderRadius: '50%',
                    mx: 10,
                    overflow: 'hidden',

                    'button': {
                        font: 'inherit',
                        width: '100%',
                        height: '100%',
                        bg: 'transparent',
                        border: 0,
                        borderRadius: 'inherit',
                        transform: 'scale(3)',
                        opacity: 0,
                        transition: '.5s ease',
                    }
                },
                '& > li:hover': {
                    'button': {
                        cursor: 'pointer',
                    }
                },
                '& > li.slick-active': {
                    overflow: 'visible',
                    'button': {
                        bg: 'primary',
                        transform: 'scale(1)',
                        opacity: 1,
                    }
                },
        }} >{dots}</Box>,
    }
    return <Box sx={{
        bg: '#f4f8f8',
        py: 50,
    }}>
        <Container>
            <Slider {...settings}>

                {Array(3).fill(<Slide
                    title='Capital Azur exposera à Seamless East Africa'
                    description="Seamless East Africa est la principale conférence fintech d'Afrique de l'Est, qui se tiendra au Radisson Blu Hotel, à Nairobi, au Kenya"
                    image='https://capital-azur.com/sites/default/files/2020-05/38e70ac1beba0588ca73eb1ab1957d60.jpg'
                    date={{start: '22 mai', end: '28 mai'}}
                    tag={[{color: 'red', label: 'Nairobi'},
                        {color: 'primary', label: 'EXPOSITION'}]}
                    action={{label: 'LIRE PLUS', href: '#!'}}
                    />)}


            </Slider>
        </Container>
    </Box>
}