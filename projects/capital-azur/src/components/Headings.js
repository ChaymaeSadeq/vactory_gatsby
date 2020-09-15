import React from 'react';
import { Heading } from 'vactory-ui';


export const DashHeading = props => <Heading sx={{
    position: 'relative',
    pl: [36, 47, '60px'],
    color: 'inherit',

    '&::before': {
        content: '""',
        display: 'block',
        width: [20, 33, '44px'],
        height: '2px',
        color: 'lightBlue',
        backgroundColor: 'currentColor',
        position: 'absolute',
        top: [18, null, '24px'],
        left: 0,
    }
}} {...props} />