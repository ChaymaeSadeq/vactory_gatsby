const breakpoints = [
    '500px',
    '960px',
    '1280px',
    '1920px'
];

breakpoints.md = '960px';
breakpoints.sm = '500px';
breakpoints.xs = '0px';
breakpoints.lg = '1280px';
breakpoints.xl = '1920px';


const buttons = {
    fill: {
        success : {
            backgroundColor: 'success500',
        },
    }
};

export const theme = {
    breakpoints,
    buttons
};
