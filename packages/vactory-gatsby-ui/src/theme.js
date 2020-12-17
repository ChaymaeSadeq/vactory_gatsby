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

        layout: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        },

        wrapper: {
            marginTop: 10,
            paddingY: 10,
            boxShadow: '0 5px 16px 0 rgba(0,0,0,.1)',
            backgroundColor: 'white',
            transition: '.2s',
            '&.stuck': {
                marginTop: 0,
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                width: '100%',
                zIndex: 1,
            }
        },

        item: {
            lineHeight: '32px',
            fontSize: '13px',
            fontWeight: 400,
            color: '#000000',
            textTransform: 'uppercase',
            px: '16px',
            py: ['16px', '0'],
            '&:not(:last-child)': {
                borderRight: '2px solid #cccccc',
            },
            '&:hover': {
                color: 'primary',
            },
            '&.is-current': {
                color: 'primary',
                borderBottom: '4px solid #007732',
            },
            a: {
                display: 'block',
                font: 'inherit',
                color: 'inherit',
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
