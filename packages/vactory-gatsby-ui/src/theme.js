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
        success: {
            backgroundColor: 'success500',
        },
    }
};

const navs = {
    ancre: {
        alignItems: 'start',
        nav: {
            padding: '0px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#000000',
            textTransform: 'uppercase',
            px: '16px',
            py: ['16px', '0'],
            borderWidth: ['0', '2px'],
            borderStyle: 'solid',
            borderColor: 'gray500',
            borderTop: '0px',
            borderBottom: '0px',
            '&:first-of-type': {
                border: '0px',
            },
            '&:last-of-type': {
                border: '0px',
            },
            ':hover': {
                color: '#017CFE'
            }

        },
        activeNav: {
            color: '#017CFE',
            fontWeight: 600,
            ':hover': {
                color: '#017CFE'
            }
        },
    }
}

export const theme = {
    breakpoints,
    buttons,
    navs
};
