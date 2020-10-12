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



const shadows = {
    buttons: '0 12px 14px -5px rgba(191, 191, 191, .67)',
    cards: '0 50px 400px 20px rgba(0, 0, 0, .05)',
    cardsLight: '0 5px 40px 2px rgba(0, 0, 0, .05)',
    cardsActive: '0 10px 60px rgba(31, 121, 230, .2)',
    mapPin: '0 30px 400px 20px rgba(0, 0, 0, .07)',
};



const fonts = {
    montserrat: '"Montserrat"',
};
fonts.sans = fonts.montserrat;

const fontSizes = {
    body: '16px',
 };



const heading = {
    default: {
        fontSize: ['24px', null, '29px'],
        lineHeight: ['30px', null, '38px'],
        fontWeight: 'extraBold',
        textTransform: 'uppercase',
    },
    slider: {
        fontSize: ['25px', null, '30px'],
        lineHeight: ['30px', null, '38px'],
        fontWeight: 'extraBold',
    },
    events: {
        fontSize: ['15px', null, '20px'],
        lineHeight: ['24px', null, '29px'],
        fontWeight: 'bold',
        color: 'black',
    },
    banner: {
        fontSize: '29px',
        lineHeight: '40px',
        fontWeight: 'bold',
        letterSpacing: '.55px',
        textTransform: 'uppercase',
    }
};

const text = {
    slider: {
        fontSize: ['18px', null, '21px'],
        lineHeight: ['23px', null, '25px'],
        fontWeight: 'regular',
    },
    events: {
        fontSize: ['15px', null, '16px'],
        lineHeight: ['22px', null, '24px'],
    }

};

const buttonsSharedStyle = {
    fontSize: 13,
    lineHeight: '22px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    border: 0,
    borderRadius: '8px !important',
    boxShadow: 'buttons',
    px: 33,
    py: 14,
    transition: '.3s ease-in',
}

const buttons = {
    primary: {
        ...buttonsSharedStyle,
        backgroundColor: 'lightBlue',
        color: 'white',
    },
    white: {
        ...buttonsSharedStyle,
        backgroundColor: 'white',
        color: 'lightBlue',
        border: '2px solid currentColor',
        '&:hover': {
            borderColor: 'currentColor',
        }
    },
    dashPrefixed: {
        background: 'transparent',
        color: 'lightBlue',
        position: 'relative',
        border: 0,
        fontWeight: 'semiBold',
        pl: [35, 48, 59],
        transition: '.3s ease-in',
        fontSize: 14,
        lineHeight: '24px',

        '&:hover': {
            color: '#0157b2',
            background: 'transparent',
        },

        '&::after': {
            content: '""',
            display: 'block',
            width: [20, 33, '44px'],
            height: '2px',
            backgroundColor: 'lightBlue',
            position: 'absolute',
            top: [12, null, '16px'],
            left: 0,
        }
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
};



const boxes = {
    intro: {
        mx: [0, null, 100, 180],
        mb: 55,
        '&:empty': {
            display: 'none'
        }
    }
}


const layer = {
    overlay: {
        opacity: '.68 !important',
        backgroundColor: 'black',
    }
}



export const theme = {
    boxes,
    breakpoints,
    buttons,
    colors,
    fonts,
    fontSizes,
    heading,
    navs,
    layer,
    shadows,
    text,
};