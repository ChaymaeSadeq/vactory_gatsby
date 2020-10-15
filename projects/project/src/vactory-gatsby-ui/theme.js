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
};
