import React from 'react';
import { ThemeContext } from 'styled-components';
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
import {Dots, PrevArrow, NextArrow} from './Slider';

const Tag = ({color, ...props}) => <Text
    __css={{
        color: 'white',
        bg: color,
        fontSize: 10,
        fontWeight: 'bold',
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
        date,
        description,
        title,
        tag,
        location,
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
                borderRadius: ['8px 8px 0 0', null, '8px 0 0 8px'],
                overflow: 'hidden',
                }}>
                <Image src={image} alt={''} sx={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }} />
                <TimeSpan start={date.start} end={date.end} />
            </Box>

            <Flex width={[1, null, 2/3]} p={20} flexDirection='column' alignItems='flex-start'>
                <Heading level={3} sx={{
                    variant: 'heading.events',
                    mb: [10, null, 15],
                }}>{title}</Heading>

                <Box>
                    <Tag color='primary' sx={{textTransform:'uppercase'}}>{tag}</Tag>
                    <Tag color='red'>{location}</Tag>
                </Box>

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

export const EventsSlider = ({events, ...rest}) => {
    const theme = React.useContext(ThemeContext);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow right={[-25, -40, -50, 'calc(50% - 950px/2)']} />,
        prevArrow: <PrevArrow left={[-25, -40, -50, 'calc(50% - 950px/2)']} />,
        appendDots: (dots) => React.cloneElement(
            Dots(dots),
            {css: {
                marginTop: '10px !important'
            }}
        ),

        responsive: [
            {
                breakpoint: parseInt(theme.breakpoints.md),
                settings: {
                    arrows: false,
                }
            }
        ]
    }
    return <Slider {...settings}>

        {events.map( (event, i) => <Slide
            key={event.key}
            title={event.title}
            description={event.excerpt}
            image={event.image}
            date={event.date}
            tag={event.category}
            location={event.city}
            action={{
                href: event.url,
                label: 'Lire Plus'
            }}
            />
        )}

    </Slider>
}