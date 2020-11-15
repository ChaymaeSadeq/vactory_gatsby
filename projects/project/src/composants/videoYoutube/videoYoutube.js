import React, {useState} from "react";
import {Box, Flex, Icon, Layer} from 'vactory-ui'
import {Picture} from "vactory-gatsby-ui";
import Youtube from "react-youtube";

export const VideoYoutube = ({videoId, image, image_alt, hideImage, isPopUp, imageStyles}) => {
    const [isShowVideo, handleShowVideo] = useState((hideImage) ? true : false)
    const youtubeOption = {
        width: "100%",
        playerVars: {
            autoplay: 1,
            controls: 0,
        },
    }

    return (
        <Flex
            borderWidth="large"
            borderStyle="solid"
            borderColor="black"
            alignItems="center"
            justifyContent="center"
            sx={{
                position: 'relative',
                "& iframe": {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: '0px',
                    left: '0px',
                },
                '&:before': {
                    content: '""',
                    display: 'block',
                    paddingTop: '56.25%',
                },
                "& .react-aspect-ratio-placeholder": {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    zIndex: '-1',
                }
            }}
            onClick={() => !isShowVideo ? handleShowVideo(true) : null} position="relative">
            {((!isShowVideo && !isPopUp) || isPopUp) &&
            <>
                <Icon name="play" size="60px" color="white"/>
                <Picture
                    file={image}
                    alt={image_alt}
                    sizes={imageStyles.sizes}
                    width={imageStyles.width}
                    height={imageStyles.height}
                    ratio={imageStyles.ratio}
                />
            </>
            }
            {(isShowVideo && !isPopUp) &&
            <Youtube {...youtubeOption} videoId={videoId}/>
            }
            {(isShowVideo && isPopUp) &&
            <Layer animation={'fadeIn'} onClickOutside={() => handleShowVideo(false)}>
                <Box textAlign="right">
                    <Icon onClick={() => handleShowVideo(false)} name="add-simple" size="30px" color="white"/>
                    <Youtube {...youtubeOption} videoId={videoId}/>
                </Box>
            </Layer>
            }
        </Flex>
    )
}