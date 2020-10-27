import React, {useState} from "react"
import Youtube from "react-youtube"
import { Wysiwyg } from 'vactory-gatsby-ui'
import {Image, Box, Icon, Layer} from 'vactory-ui'
import styled from 'styled-components'

const IframeWrapper = styled(Box)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before {
        content: '';
        display: block;
        padding-top: 56.25%;
    }
`

export const VideoYoutube = ({videoId, image, hideImage, isPopUp, description}) => {

    const [isShowVideo, handleShowVideo] = useState((hideImage) ? true : false)

    const youtubeOption = {
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
        },
    }

    return (
        <Box>
            <IframeWrapper
                borderWidth="large"
                borderStyle="solid"
                borderColor="black"
                sx={{
                    " iframe": {
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: '0px',
                        left: '0px',
                    }
                }}
                onClick={() => !isShowVideo ? handleShowVideo(true) : null} position="relative">
                {((!isShowVideo && !isPopUp) || isPopUp) &&
                <>
                    <Icon name="play" size="60px" color="white"/>
                    <Image src={image}
                           sx={{
                               width: "100%",
                               height: "100%",
                               position: "absolute",
                               top: '0px',
                               left: '0px',
                               zIndex: '-1',
                           }}
                    />
                </>
                }
                {(isShowVideo && !isPopUp) &&
                <Youtube {...youtubeOption} videoId={videoId}/>
                }
                {(isShowVideo && isPopUp) &&
                <Layer animation={'fadeIn'} onClickOutside={() => setShow(false)}>
                    <Box textAlign="right">
                        <Icon onClick={() => handleShowVideo(false)} name="add-simple" size="30px" color="white"/>
                        <Youtube {...youtubeOption} videoId={videoId}/>
                    </Box>
                </Layer>
                }
            </IframeWrapper>
            {description &&
                <Box mt="20px">
                    <Wysiwyg html={description} />
                </Box>
            }
        </Box>
    )
}