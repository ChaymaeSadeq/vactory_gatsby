import React from 'React';
import {
    Box,
    Container,
    Flex,
    Link,
} from 'vactory-ui';
import { DashHeading } from './Headings';


export const TextSection = ({title, body, link, ...rest}) => {
    return <Container>
        <Flex sx={{
                flexDirection: 'column',
                mx: 'auto',
                my: 100,
                width: ['90%', null, 720]}} >
            <DashHeading>{title}</DashHeading>
            <Box sx={{
                mt: 30,
                fontSize: 'paragraph',
                lineHeight: '28px',
                letterSpacing: .3,
            }}>
                {body}
            </Box>
            <Link
                variant='buttons.primary'
                sx={{
                    mt: 30,
                    mx: 'auto',
                }}
                href={link.href}>{link.label}</Link>
        </Flex>
    </Container>
}


