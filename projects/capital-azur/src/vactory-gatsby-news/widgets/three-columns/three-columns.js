import React from 'react'
import {
    Box,
    Flex,
    Link,
    Paragraph,
} from 'vactory-ui';
import { DashHeading } from '../../../components/Headings';
import { Container } from '../../../components/Container';
import {InsightCard} from '../../../components/Insights'


export const ThreeColumns = ({title, intro, posts, action}) => {
    return <Box sx={{
        py: 70,
        backgroundImage: 'linear-gradient(72.21deg, #F4F8F8 0%, #FFFFFF 100%)'
    }}>
        <Container>
                <Box variant='boxes.intro'>
                    {title && <DashHeading mb={30}>{title}</DashHeading>}
                    {intro && <Paragraph as='div'>{intro}</Paragraph>}
                </Box>

                <Flex flexWrap='wrap' mx={-15}>
                    {posts.map( (post) => <InsightCard
                        key={post.key}
                        image={post.image_url}
                        title={post.title}
                        date={post.date}
                        tag={post.category}
                        link={post.url}
                        link_label='Lire Plus'
                        />
                    )}
                </Flex>

                { (action && 'href' in action) && <Link sx={{
                        mt: 70,
                        mx: 'auto',
                        width: 'fit-content',
                        display: 'flex',
                        variant: 'buttons.white',
                    }} href={action.href} >
                        {action.label}
                    </Link>
                }
        </Container>
    </Box>
}
