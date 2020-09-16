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
    {path.map( (element, i) => <React.Fragment key={i}>
        { i !== 0 && <> > </> }
        <Anchor sx={{
            '&:hover': {
                textDecoration: 'underline',
            }
        }} href={element.link}>
            {element.text}
        </Anchor>
        </React.Fragment> )
    }
</Box>