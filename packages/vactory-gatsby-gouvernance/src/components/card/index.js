import React from "react"
import {Box, Text, Image} from "vactory-ui";

const CardTitle = ({sx, children, ...rest}) => {
    return (<Box
        as='h1'
        sx={sx}
        __css={{
            fontSize: ['16px', null, '18px', null,],
            ineHeight: "28px",
            fontWeight: 600,
            letterSpacing: '0',
            marginBottom: '16px'
        }}>
        {children}
    </Box>)
};

const CardBody = ({sx, children, ...rest}) => {
    return (<Box sx={sx} __css={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }}>
        {children}
    </Box>)
};

const CardRoleTitle = ({children, ...rest}) => {
    return (<Text fontSize="14px" color="black800" {...rest}>
        {children}
    </Text>)
};

const InternalCard = ({sx, children, ...rest}) => {
    return (<Box sx={sx} __css={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        marginBottom: '16px',
        width: '100%'
    }}>
        {children}
    </Box>)
};

export const CardGouvernance = (props) => {
    const title = props.title;
    const role_title = props.role;
    const image = props.image._thumbnail;

    return (
        <InternalCard>
            <CardBody>
                <Image src={image} sx={{
                    width: '100%',
                    maxHeight: '240px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                }}/>
                <Box p='medium'>
                    <CardTitle>{title}</CardTitle>
                    <CardRoleTitle>{role_title}</CardRoleTitle>
                </Box>
            </CardBody>
        </InternalCard>
    )
};
