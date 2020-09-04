import React from 'react';
import { Heading } from 'vactory-ui';


export const DashHeading = props => <Heading sx={{
    position: 'relative',
    pl: '60px',
    color: 'inherit',

    '&::before': {
        content: '""',
        display: 'block',
        width: '44px',
        height: '2px',
        color: 'lightBlue',
        backgroundColor: 'currentColor',
        position: 'absolute',
        top: '24px',
        left: 0,
    }
}} {...props} />