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
    cardsActive: '0 10px 60px rgba(31, 121, 230, .2)',
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
};

const text = {
    slider: {
        fontSize: ['18px', null, '21px'],
        lineHeight: ['23px', null, '25px'],
        fontWeight: 'regular',
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
        border: '1px solid currentColor',
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
    shadows,
    text,
};
