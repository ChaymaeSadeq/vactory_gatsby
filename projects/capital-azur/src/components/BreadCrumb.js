import React from 'react';
import {
    Box,
    Anchor,
} from 'vactory-ui';

export const BreadCrumb = ({path, ...rest}) => <Box sx={{
    fontSize: 16,
    lineHeight: '22px',
    fontWeight: 'medium',
}}>
    {path.map( (element, i) => <>
        { i !== 0 && <> > </> }
        <Anchor sx={{
            '&:hover': {
                textDecoration: 'underline',
            }
        }} href={element.link} key={i}>
            {element.text}
        </Anchor>
        </> )
    }
</Box>