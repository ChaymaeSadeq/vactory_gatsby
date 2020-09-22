import React from 'react';
import {
    Box,
    Container,
    Flex,
    Link,
} from 'vactory-ui';
import { DashHeading } from './Headings';
import { AccessSection } from './AccessSection';

export const ImageAndTextSection = ({image, title, body, link, mode=0, ...rest}) => {
    if (mode === 1 && false)
        return <AccessSection
            title={title}
            paragraph={body}
            backgroundImage={image}
            action={link}
            {...rest}
        />

    return <Box sx={{
        bg: 'lightBlue',
        color: 'white',
    }} {...rest}>
        <Container>
            <Flex sx={{
                maxWidth: ['90%', null, null, 'unset'],
                mx: ['auto', null, null, '0'],
                flexWrap: 'wrap',
            }}>
                <Box sx={{
                    flexBasis: ['100%', null, null, '50%'],
                    pb: ['83%', null, null, 0],
                    order: [1, null, null, mode == 1 ? 1 : 0],
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: ['0 0', null, null, '-10px 215px', '-110px 65px'],
                    backgroundSize: ['100% auto', null, null, 'auto 75%', 'auto 121%'],
                }} />

                <Flex sx={{
                    flexDirection: 'column',
                    flexBasis: ['100%', null, null, '50%'],
                    pt: 75,
                    pb: [25, null, null, 75],
                    }} >

                    <DashHeading __css={{'&::before': {color: 'white !important'}}}>{title}</DashHeading>
                    <Box sx={{
                        mt: 30,
                        fontSize: 'paragraph',
                        lineHeight: '28px',
                        letterSpacing: .3,
                    }}>{body}</Box>
                    { ( link.href || link.label ) && <Link sx={{
                            variant:'buttons.white',
                            mt: 30,
                            alignSelf: 'flex-start',
                        }} href={link.href}>{link.label}</Link>
                    }
                </Flex>
            </Flex>
        </Container>
    </Box>
}


