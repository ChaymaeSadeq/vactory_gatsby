import React from "react"
import {useTranslation} from "react-i18next"
import {Button} from 'vactory-ui'
import {Link} from 'vactory-gatsby-ui'

const Post = ({post}) => {
    const formUrl = post.path.alias + '/form/';
    const {t} = useTranslation();
    return (
        <div>
            <main>
                <h1>{post.title}</h1>
                {/*<p>*/}
                {/*    {post.date}*/}
                {/*</p>*/}
                {/*<div>{post.body}</div>*/}
                <Button as={Link} to={formUrl}>{t('Postuler')}</Button>
            </main>
        </div>
    )
}

export default Post
