import React, {useState, useEffect} from "react"
import {useTranslation} from "react-i18next"
import Api from "vactory-gatsby-api"
import {LoadingOverlay, InfiniteScroll} from 'vactory-gatsby-ui'
import {Container, Box, Heading} from "vactory-ui";
import {Comment, CommentForm, StyledCommentsList} from "vactory-gatsby-comments"

/**
 * Comments
 *
 * @param entity_uid
 *  Node uid.
 * @param type_content
 *  Content type.
 * @param uid
 *  User id or owner id.
 * @param perPage
 *  Number of comment per page
 * @constructor
 */
export const Comments = ({entity_uid, type_content, uid, perPage = 10}) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    let scroller = React.createRef();
    const [pageItems, setPageItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [totalComments, setTotalComments] = useState(0);
    const [isScrollData, setIsScrollData] = useState(false);

    // Fetch parent comments.
    const fetchData = () => {
        setIsLoading(true);

        const entityFilter = {
            "filter[entity_id][condition][path]": "entity_id.id",
            "filter[entity_id][condition][operator]": "=",
            "filter[entity_id][condition][value]": entity_uid,
            "filter[parentOnly][condition][path]": "pid",
            "filter[parentOnly][condition][operator]": "IS NULL",
        };

        Api.getResponse('comment/comment', {
            page: {
                limit: perPage,
                offset: offset
            },
            sort: "-thread",
            ...entityFilter,
            fields: {
                "comment--comment": "drupal_internal__cid,thread,internal_user,entity_id,langcode,title,comment_body,path,created,changed,pid,extra_data,name",
            },
            include: "pid",
        }, currentLanguage)
            .then(res => {
                const data = res.data;
                setTotalComments(res.meta.count);
                setHasMore(!!(res.links.next));

                // Append data.
                if (isScrollData) {
                    setPageItems(pageItems => [...pageItems, ...data])
                } else {
                    setPageItems(data)
                }
                setIsLoading(false)
            })
            .catch(err => {
                console.log("Error", err)
            })
    };

    useEffect(() => {
        fetchData()
    }, [offset]); // eslint-disable-line react-hooks/exhaustive-deps

    const handleLoadMore = (selected) => {
        const offset = Math.ceil(selected * perPage);
        setHasMore(false);
        setIsScrollData(true);
        setOffset(offset);
    };

    return (
        <Container>
            <Box>
                <Heading level={4}>{t("Poster un commentaire")}</Heading>
            </Box>

            <CommentForm entity_uid={entity_uid} type_content={type_content} />

            <LoadingOverlay active={isLoading}>
                <Box>
                    <Heading level={6}>{totalComments} {t("Commentaires")}</Heading>
                </Box>
                <StyledCommentsList>
                    <InfiniteScroll
                        ref={scroller}
                        pageStart={0}
                        initialLoad={false}
                        loadMore={handleLoadMore}
                        hasMore={hasMore}
                        threshold={250}>
                        {
                            pageItems.map((entry, index) => {
                                return <Comment key={index} comment={entry} uid={uid} type_content={type_content}/>
                            })
                        }
                    </InfiniteScroll>
                </StyledCommentsList>
            </LoadingOverlay>
        </Container>
    )
};

