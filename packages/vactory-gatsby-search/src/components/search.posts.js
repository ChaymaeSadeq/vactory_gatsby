import React from "react"
import {useTranslation} from "react-i18next"
import {Link} from 'vactory-gatsby-ui'

export const SearchPosts = ({posts}) => {
    const {t} = useTranslation();

    return (
        <div className="p-3.5">
            {posts.map(function (item, index) {
                return (
                    <div
                        key={index}
                        className="mb-5 p-3 shadow-md"
                    >
                        <h3 className="text-2xl">{item.title}</h3>
                        <p dangerouslySetInnerHTML={{__html: item.excerpt}}/>
                        <div>
                            <Link to={item.url}>
                                {t("En Savoir Plus")}
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
