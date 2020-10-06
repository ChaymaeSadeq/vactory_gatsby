import React from 'react';
import {
    Box,
    Link,
    Paragraph,

} from 'vactory-ui';
import { Container } from './Container';
import { DashHeading } from './Headings';
import map_image from '../../static/images/iloilostreetsnorth.png';

const LocationPin = ({sx, ...rest}) => <Box sx={{
    position: 'absolute',
    ...sx
}}>
    <Box sx={{
        position: 'relative',
        width: 100,
        height: 100,
        top: -50,
        left: -50,
        borderRadius: '50%',
        background: 'linear-gradient(131deg, rgba(126, 176, 255, .1), rgba(33, 120, 255, .1)) center / 100% no-repeat',
        '&::after': {
            margin: 30,
            background: 'linear-gradient(131deg, rgba(126, 176, 255, .3), rgba(33, 120, 255, .3)) center / 100% no-repeat',
        },
        '&::before': {
            margin: 42,
            background: 'linear-gradient(131deg, rgba(126, 176, 255, 1), rgba(33, 120, 255, 1)) center / 100% no-repeat',
        },
        '&::after, &::before': {
            content: '""',
            position: 'absolute',
            borderRadius: 'inherit',
            display: 'block',
            top: 0, bottom: 0,
            left: 0, right: 0,
            cursor: 'pointer',
        }
        }} />
    <Box sx={{
        background: 'white',
        position: 'relative',
        maxWidth: 256,
        py: 25,
        px: 20,
        top: -25,
        left: -35,
        borderRadius: 8,
        boxShadow: 'cards',
        fontSize: 18,
        lineHeight: '26px',

        '&::before': {
            content: '""',
            display: 'block',
            background: 'inherit',
            transform: 'rotate(45deg)',
            position: 'absolute',
            width: 20,
            height: 20,
            left: 25,
            top: -10,
        }
        
    }}>{rest.title}</Box>
</Box>

export const AccessSection = ({title, paragraph, backgroundImage, action={label: 'Notre présence en Afrique', href: '://'}, ...rest}) => {
    return <Box sx={{
        pt: 75,
        backgroundColor: '#F4F8F8',
    }}>
        <Container as={Box} sx={{
            position: 'relative',
            pb: [300, 350, 75],
            background: `#F4F8F8 url(${map_image}) no-repeat`,
            backgroundPosition: ['bottom', 'center 110%', 'right'],
            backgroundSize: ['150% auto', null, 'auto 110%'],
        }}>
            <Box width={[1, null, 1/2]} p={30}>
                <DashHeading mb={22}>Accédez à nos services, où que vous soyez.</DashHeading>

                <Paragraph LineHeight={22}>Nos services sont accessibles au niveau de 13 pays en Afrique, et bien plus dans les prochains mois !</Paragraph>

                <Link sx={{
                    variant: 'buttons.white',
                    mt: 44,
                }} href={action.href}>{action.label}</Link>
            </Box>

            <LocationPin title='Casablanca, 20000 Maroc' sx={{
                top: ['73%', null, '25%'],
                right: ['auto', null, '8%'],
                left: ['20%', null, 'auto'],
                }} />

        </Container>
    </Box>
}