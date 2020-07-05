import React from 'react'
import {Button, Flex, Icon, Text} from "vactory-ui";
import {useMenu, useRtl} from "vactory-gatsby-core";
import {Link} from '../../link';
import styled from "styled-components"

const StyledMenuLink = styled(Link)`
    color: white
`;

const CloseButton = ({ size = 'large', ...props }) =>
    <Button {...props}
            sx={{
                transform: 'rotate(45deg)',
                padding: '0',
                background: 'transparent',
                '&:hover, &:focus': {
                    background: 'transparent',
                    color: 'inherit',
                    borderColor: 'transparent'
                }
            }}
            size="none"
            onClick={props.onClick}>
        <Icon name="add-simple" size={size} />
    </Button>;

const CaretButton = ({ size = 'large', ...props }) => {
    const isRtl = useRtl();

    return <Button {...props}
                   sx={{
                       transform: 'rotate(180deg)',
                       padding: '0',
                       background: 'transparent',
                       '&:hover, &:focus': {
                           background: 'transparent',
                           color: 'inherit',
                           borderColor: 'transparent'
                       }
                   }}
                   size="none"
                   onClick={props.onClick}>
        <Icon name={isRtl ? "chevron-right": "chevron-left"} size={size} />
    </Button>;
};

export const LayerMenu = ({onClose}) => {
    const items = useMenu('main');

    return <Flex sx={{
        backgroundColor: '#383838',
        color: 'white',
        height: '100%',
        flexDirection: 'column',
        width: '100%',
        fontSize: '17px',
        fontWeight: 200
    }}>
        <Flex padding="25px 20px" justifyContent="flex-end">
            <CloseButton onClick={onClose} />
        </Flex>
        <Flex flexDirection="column" sx={{
            overflowY: 'auto'
        }}>
            {items.map(item => {
                return (
                    <Flex key={item.id} borderTop="1px solid #fff">
                        <Flex justifyContent="space-between" alignItems="center" width="100%" padding="35px 20px">
                            <StyledMenuLink to={item.url}>
                                <Text as="span">{item.title}</Text>
                            </StyledMenuLink>
                            <CaretButton />
                        </Flex>
                    </Flex>
                )
            })}
        </Flex>
    </Flex>
};
