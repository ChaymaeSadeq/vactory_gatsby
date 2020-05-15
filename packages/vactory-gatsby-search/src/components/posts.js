import React from "react"
import {useTranslation} from "react-i18next"
import {Link} from 'vactory-gatsby-ui'
import {Box, Heading, Paragraph, Button} from "vactory-ui";

const Posts = ({posts}) => {
    const {t} = useTranslation();

    return (
        <Box sx={{
            m: 0,
            px: 3,
            py: 4,
        }}>
            {posts.map(function (item, index) {
                return (
                    <Box
                        key={index}
                        boxShadow={1}
                        pb="medium"
                        sx={{
                            mb: 'large',
                        }}
                    >
                        <Heading level={3}>{item.title}</Heading>
                        <Paragraph dangerouslySetInnerHTML={{__html: item.excerpt}}/>
                        <div>
                            <Link to={item.url}>
                                <Button>{t("En Savoir Plus")}</Button>
                            </Link>
                        </div>
                    </Box>
                )
            })}
        </Box>
    )
}

export default Posts
