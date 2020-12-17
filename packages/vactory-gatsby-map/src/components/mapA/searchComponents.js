import React from "react"
import {useTranslation} from "react-i18next"
import {Icon, Box, Heading, Text, Button, Flex, Input, Image} from "vactory-ui"
import default_image from "./images/building.jpg"

export const SearchResult = ({image = 'default', name, locality, addressLine1, addressLine2, phone, phone2, fax, ...rest}) => {
    const {t} = useTranslation();
    let image_url, image_style;

    if (image === 'default') {
        image_url = default_image;
        let hueHash = (name+' '+addressLine1).split('').reduce( (acc, cur) => acc + cur.charCodeAt(0), 0) % 360;
        image_style = {
            filter: `sepia(50%) hue-rotate(${hueHash}deg)`
        };
    }
    else
        image_url = image;

    return (
        <Flex
            className="card"
            __css={{
                alignItems: 'center',
                maxWidth: 395,
                '.map-search-result &.card': {
                    padding: 10,
                    borderTop: '.5px solid #eee',
                    borderBottom: '.5px solid #eee',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: '#fafafa',
                    },
                }
            }}
            {...rest}
        >
            <Box __css={{
                mr: 10,
                flexShrink: 0,
                img: { objectFit: 'cover' }
            }}>
                <Image src={image_url} alt={name} width={78} height={78} sx={image_style} />
            </Box>
            <Box>
                <Heading variant={null} fontWeight="normal" fontSize={15} level={5}>{name}</Heading>
                <Text fontSize={11} color='#9c9c9c'>
                    {locality}
                    ​​{ addressLine1 && <><br/> {addressLine1}</> }
                    ​​{ addressLine2 && <><br/> {addressLine2}</> }
                    ​​{ phone        && <><br/> {t('Phone')}: {phone}</> }
                    ​​{ phone2       && <><br/> {t('Phone')}: {phone2}</> }
                    ​​{ fax          && <><br/> {t('Fax')}: {fax}</> }
                </Text>
            </Box>
        </Flex>
    )
}

export const SearchButton = ({icon, ...rest}) => {
    return (
        <Button
            __css={{
                marginLeft: 10,
                padding: 0,
                flexGrow: 0,
                border: 0,
                color: '#adadad',
            }}
            fill={null}
            {...rest}
        >
            <Icon icon={icon} size={22} />
        </Button>
    )
}

export const SearchInput = props => (
    <Input
        border={0}
        padding={0}
        width="auto"
        variant={null}
        sx={{
            '&:focus': {boxShadow: 'none'},
        }}
        type="text"
        placeholder="Search"
        className="form-control"
        {...props}
    />
)

export const SearchBox = props => (
    <Flex
        __css={{
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFF',
            padding: '10px',
            border: '1px solid #eee',
            marginBottom: '4px',
            boxShadow: '0px 0px 1px rgba(0,0,0,0.45)',
        }}
        {...props}
    />
)