import React from 'react'
import {Box, Flex, Text, Icon, MotionBox} from "vactory-ui";
import {Link, Picture} from 'vactory-gatsby-ui'
import styled from "styled-components"

const FloatingBox = styled(MotionBox)`
    display: block;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    
    ${({direction}) => direction === 'left' && `
    left: 0;
  `}
  
  ${({direction}) => direction === 'right' && `
    right: 0;
  `}
    
    &:hover .icon-wrap::before {
        transform: translateX(0);
        transition-delay: 0s;
    }
    
    &:hover .box {
        transition-delay: 0.3s;
        transform: translateX(0);
    }
`;

const Card = ({sx, children, ...rest}) => {
    return (
        <Box
            sx={{
                width: '100%',
                'img': {
                    border: "5px solid #736176",
                    display: "block",
                    maxWidth: '100%'
                }
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};

const CardTitle = ({sx, children, ...rest}) => {
    return (
        <Box
            as="h6"
            sx={{
                margin: 0,
                padding: "0 0 10px",
                color: "#736176",
                fontWeight: 400,
                fontSize: ["16px", null, "18px", null],
                lineHeight: 1.2
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};

const CardBody = ({children, ...rest}) => {
    return <Text
        sx={{
            padding: "6px 0",
            color: "#d0c2d3",
            borderTop: "1px solid #d8cfda",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontWeight: 400,
            fontSize: "0.7em",
            lineHeight: 1.2
        }}
        {...rest}>
        {children}
    </Text>
};

export const NextPreCard = ({title, body, image, url, direction = 'left'}) => {
    const animation = {
        visible: {
            opacity: 1,
            x: 0
        },
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : '100'
        },
    };

    return (
        <FloatingBox
            direction={direction}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            variants={animation}
        >
            <Link to={url}>
                <Box
                    className={'icon-wrap'}
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        display: 'block',
                        padding: '65px 10px',
                        background: '#b68dbe',
                        overflow: 'hidden',
                        backfaceVisibility: 'hidden',
                        '&::before': {
                            content: '""',
                            zIndex: -1,
                            position: 'absolute',
                            width: '100%',
                            height: '110%',
                            background: '#131313',
                            top: 0,
                            left: 0,
                            backfaceVisibility: 'hidden',
                            transition: 'transform 0.3s 0.3s',
                            transform: direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)'
                        }
                    }}>
                    <Icon
                        name={direction === 'right' ? 'chevron-right' : 'chevron-left'}
                        color={'#736176'}
                        size={'24px'}/>
                </Box>
                <Box className={'box'} sx={{
                    position: 'absolute',
                    width: '440px',
                    height: '100%',
                    background: '#131313',
                    transition: 'transform 0.3s',
                    padding: direction === 'right' ? '20px 70px 20px 20px' : '20px 20px 20px 70px',
                    textAlign: direction === 'left' ? 'right' : 'left',
                    borderRadius: direction === 'right' ? '6px 0 0 6px' : '0 6px 6px 0',
                    transform: direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)',
                    left: direction === 'left' ? 0 : 'unset',
                    right: direction === 'right' ? 0 : 'unset',
                    top: 0,
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Card>
                        <Flex
                            alignItems="center"
                            flexDirection={direction === 'left' ? 'row-reverse' : 'row'}
                            textAlign={direction === 'left' ? 'right' : 'left'}
                        >
                            <Box minWidth={'114px'}>
                                <Picture
                                    file={image}
                                    sizes={[
                                        {
                                            name: "next_prev_image_114_114",
                                            media: "(min-width: 0px)",
                                        },
                                    ]}
                                    alt={title}
                                    width={114}
                                    height={114}
                                    ratio={1}
                                    className="card-image"
                                />
                            </Box>
                            <Box p="14px" flexGrow={1}>
                                <CardTitle>{title}</CardTitle>
                                <CardBody>{body}</CardBody>
                            </Box>
                        </Flex>
                    </Card>
                </Box>
            </Link>
        </FloatingBox>
    )
};
