import React from 'react';
import styled from 'styled-components'
import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import {withKnobs, text} from "@storybook/addon-knobs";
import {Box, Flex} from '../../Box';

import Icon, {mergeIcons, iconSet} from '../Icon';

import customIconSet from './custom-icons.json';
import voidIconSet from './void-icons.json';
import {VactoryIconProvider} from '../context'

const iconNameList = (list) => list.icons.map(icon => icon.properties.name);

const copyToClipboard = (name) => {
    copy(name);
    toast.success(`Copied '${name}' to clipboard`, {
        position: "bottom-center"
    });
};

const IconBox = styled(Flex)`
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.danger400};
    ${Icon} {
        fill: ${props => props.theme.colors.danger400};
    }
    
    ${Box}.iconName {
        color: ${props => props.theme.colors.danger400};
    }
  }
`

export const Sizes = () => {
    let filter = text("search", "");

    return (
        <VactoryIconProvider value={iconSet}>
            <Box>
                <Box display="flex" flexDirection="column">
                    <Flex sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {
                            iconNameList(iconSet).map((iconName, key) => {

                                if ( iconName.indexOf(filter) > -1 )
                                return <IconBox
                                    key={key}
                                    tabIndex={0}
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'gray200',
                                        borderRadius: 'small',
                                        m: 'small',
                                        p: 'small',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        color: 'black500',
                                        height: "100px",
                                        width: "130px",
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => copyToClipboard(iconName)}
                                    >
                                    <Icon name={iconName} color="primary" size="large"/>
                                    <Box className={'iconName'} mt="medium">{iconName}</Box>
                                </IconBox>
                            })
                        }
                    </Flex>
                </Box>
            </Box>
        </VactoryIconProvider>
    )
}

export const Void = () => {
    const customIcons = mergeIcons(iconSet, voidIconSet);

    let filter = text("search", "");
    return (
        <VactoryIconProvider value={customIcons}>
            <Box>
                <Box display="flex" flexDirection="column">
                    <Flex sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {
                            iconNameList(customIcons).map((iconName, key) => {

                                if ( iconName.indexOf(filter) > -1 )
                                return <IconBox
                                    key={key}
                                    tabIndex={0}
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'gray200',
                                        borderRadius: 'small',
                                        m: 'small',
                                        p: 'small',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        color: 'black500',
                                        height: "100px",
                                        width: "130px",
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => copyToClipboard(iconName)}
                                    >
                                    <Icon name={iconName} color="primary" size="large"/>
                                    <Box className={'iconName'} mt="medium">{iconName}</Box>
                                </IconBox>
                            })
                        }
                    </Flex>
                </Box>
            </Box>
        </VactoryIconProvider> );
}

export const Custom = () => {
    const customIcons = mergeIcons(iconSet, customIconSet)
    let filter = text("search", "");

    return (
        <VactoryIconProvider value={customIcons}>
            <Box>
                <Box display="flex" flexDirection="column">
                    <Flex sx={{
                        flexDirection: 'row',
                        flexWrap: 'wrap'
                    }}>
                        {
                            iconNameList(customIcons).map((iconName, key) => {

                                if ( iconName.indexOf(filter) > -1 )
                                return <IconBox
                                    key={key}
                                    tabIndex={0}
                                    sx={{
                                        border: '2px solid',
                                        borderColor: 'gray200',
                                        borderRadius: 'small',
                                        m: 'small',
                                        p: 'small',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexDirection: 'column',
                                        color: 'black500',
                                        height: "100px",
                                        width: "130px",
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => copyToClipboard(iconName)}
                                    >
                                    <Icon name={iconName} color="primary" size="large"/>
                                    <Box className={'iconName'} mt="medium">{iconName}</Box>
                                </IconBox>
                            })
                        }
                    </Flex>
                </Box>
            </Box>
        </VactoryIconProvider>
    )
}


export default {
    title: 'Primitives/Icons',
    decorators: [withKnobs],
};
