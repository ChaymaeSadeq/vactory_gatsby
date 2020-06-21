import React from "react"
import {useTranslation} from "react-i18next"
import {Text, Image} from "vactory-ui";
import * as moment from "moment"
import 'moment/locale/fr';
import 'moment/locale/ar';
import get from 'lodash.get';
import DefaultCommentAvatar from "../images/avatar-default.png"
import {
    CommentBase,
    CommentAvatar,
    CommentBox,
    CommentHead,
    CommentContent,
    CommentName
} from "vactory-gatsby-comments"

export const Comment = ({comment, uid}) => {
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    moment.locale(currentLanguage);

    // const [showReplies, setShowReplies] = useState(false);
    const avatar = get(comment, "internal_user.uid.picture._default", DefaultCommentAvatar);
    const timeAgo = moment(get(comment, "created")).fromNow();
    const commentUid = parseInt(get(comment, "internal_user.uid.id", 0));
    const isOwner = commentUid === uid;
    const username = get(comment, "internal_user.uid.name", "");
    const first_name = get(comment, "internal_user.uid.first_name");
    const last_name = get(comment, "internal_user.uid.last_name");
    const content = get(comment, "comment_body.processed", '');
    // const hasReplies = get(comment, "extra_data.hasChilds", false);
    // const repliesCount = get(comment, "extra_data.count", 0);

    let fullName = `${first_name} ${last_name}`;
    // Anonymous.
    if (commentUid === 0) {
        fullName = get(comment, 'name', '')
    } else if (first_name.length <= 0 && last_name.length <= 0) {
        fullName = username
    }

    return (
        <CommentBase>
            <CommentAvatar>
                <Image src={avatar} alt={fullName}/>
            </CommentAvatar>
            <CommentBox>
                <CommentHead>
                    <CommentName isOwner={isOwner} ownerText={t('Author')}>{fullName}</CommentName>
                    <p>{timeAgo}</p>
                </CommentHead>
                <CommentContent>
                    <Text dangerouslySetInnerHTML={{__html: content}}/>
                </CommentContent>

                {/*{hasReplies &&*/}
                {/*(<button onClick={() => setShowReplies(!showReplies)}>*/}
                {/*        +{repliesCount}*/}
                {/*    </button>*/}
                {/*)*/}
                {/*}*/}

                {/*{showReplies &&*/}
                {/*<div>*/}
                {/*    <h2>Sub comments.</h2>*/}
                {/*</div>*/}
                {/*}*/}
            </CommentBox>
        </CommentBase>
    )
};
