export const defaultStyles = {
    container: {
        padding: 4,
        maxWidth: '500px'
    },
    fieldSpacing: 6,
    buttonGroup: {
        marginTop: 4,
        display: 'flex',
        justifyContent: 'flex-end',
        '& > *': {
            mr: '5px',
            '&:last-child': {
                mr: 0
            }
        }
    },
    submitButton: {
        fill: 'primary',
    },
    resetButton: {
        fill: 'basic',
    },
    formControl: {
        width: "100%",
        position: "relative",
        mb: "medium"
    },
    formLabel: {
        display: "block",
        mr: 3,
        mb: 2,
        fontWeight: "medium",
    },
    errorMessage: {
        mt: 1,
        color: "danger500",
        px: "1",
        lineHeight: "1em",
        borderRadius: "xsmall",
    },
    requiredIndicator: {
        mx: 2,
        color: "danger500",
    },
    helperText: {
        mt: 2,
        color: "gray900",
        lineHeight: "normal",
        fontSize: "caption",
    },
    textField: {
        input: {
            width: '100%'
        }
    },
    textAreaField: {
        input: {
            width: '100%',
            minHeight: '130px'
        }
    },
    numberField: {
        input: {
            width: '100%'
        }
    },
    selectField: {
        input: {
            width: '100%'
        }
    },
    checkboxField: {
        input: {
            mr: "8px"
        },
    },
    checkboxesField: {
        input: {
            mr: "8px"
        },
        label: {
            fontWeight: "normal",
        }
    },
    radiosField: {
        input: {
            mr: "8px"
        },
        label: {
            fontWeight: "normal",
        }
    }

};
