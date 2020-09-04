import React from 'React';
import {
    Box,
    Container,
    Flex,
    Link,
    Image,
} from 'vactory-ui';
import { DashHeading } from './Headings';


export const ImageAndTextSection = ({image, title, body, link, ...rest}) => {
    return <Box sx={{
        bg: 'lightBlue',
        color: 'white',
    }}>
        <Container>
            <Flex >
                <Box sx={{
                    flexBasis: '50%',
                    backgroundImage: `url(${image})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '-110px 65px',
                    backgroundSize: 'auto 121%',
                }} />

                <Flex sx={{
                    flexDirection: 'column',
                    flexBasis: '50%',
                    py: 75,
                    }} >

                    <DashHeading __css={{'&::before': {color: 'white !important'}}}>{title}</DashHeading>
                    <Box sx={{
                        mt: 30,
                        fontSize: 'paragraph',
                        lineHeight: '28px',
                        letterSpacing: .3,
                    }}>{body}</Box>
                    <Link sx={{
                            variant:'buttons.white',
                            mt: 30,
                            mx: 'auto',
                        }} href={link.href}>{link.label}</Link>
                </Flex>
            </Flex>
        </Container>
    </Box>
}


