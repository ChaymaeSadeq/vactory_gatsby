const breakpoints = [
    '576px',
    '768px',
    '992px',
    '1200px'
];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];


//@todo: added to cancel big marge of heading
export const heading = {
    default: {
        color: 'black500',
        h1: {
            marginBottom: ['5px', null, '5px'],
        },
        h2: {
            marginBottom: ['5px', null, '5px'],
        },
        h3: {
            marginBottom: ['5px', null, '5px'],
        },
        h4: {
            marginBottom: ['5px', null, '5px'],
        },
        h5: {
            marginBottom: ['5px', null, '5px'],
        },
        h6: {
            marginBottom: ['5px', null, '5px'],
        },
    },
};

const colors = {
    lightBlue: '#017CFE',
    darkBlue: '#08286A',
};

colors.primary = colors.lightBlue;

const buttons = {
    fill: {
        primary: {
            backgroundColor: 'primary',
            ':hover': {
                backgroundColor: 'darkBlue',
            }
        }
    }
};

// const heading = {
//     default: {
//         fontSize: 'black500'
//     }
// };

export const theme = {
    colors,
    buttons,
    breakpoints,
    heading,
};
