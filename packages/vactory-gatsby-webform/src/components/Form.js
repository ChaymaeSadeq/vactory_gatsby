import React, {useMemo} from 'react';
import {useForm, FormContext, UseFormOptions} from 'react-hook-form';
import {Box, Button, Text} from 'vactory-ui';
import merge from 'lodash.merge';
import {StyleCtx} from '../hooks/useStyles';
import {defaultStyles} from './FormStyles'
import {TextField} from './TextField';
import {TextAreaField} from './TextAreaField';
import {NumberField} from './NumberField';
import {CheckboxField} from './CheckboxField';
import {CheckboxesField} from './CheckboxesField';
import {RadiosField} from './RadiosField';
import {SelectField} from './SelectField';
import {ReCaptchaField} from './ReCaptchaField';

const renderField = ([name, field]) => {
    let Component = null;

    switch (field.type) {
        case 'text':
            Component = TextField;
            break;

        case 'textArea':
            Component = TextAreaField;
            break;

        case 'number':
            Component = NumberField;
            break;

        case 'checkbox':
            Component = CheckboxField;
            break;

        case 'checkboxes':
            Component = CheckboxesField;
            break;

        case 'radios':
            Component = RadiosField;
            break;

        case 'select':
            Component = SelectField;
            break;

        case 'captcha':
            Component = ReCaptchaField;
            break;


        case 'custom':
            Component = field.component;
            return (
                <Box key={`${name}-container`}>
                    <Component name={name} field={field} {...field.props} />
                </Box>
            );

        default:
            return (
                <Box
                    variant="primary"
                    __themeKey="alerts"
                    __css={{
                        display: 'flex',
                        alignItems: 'center',
                        px: 10,
                        py: 15,
                        fontWeight: 'bold',
                        color: 'white',
                        bg: 'primary',
                        borderRadius: 4,
                    }}
                >
                    <Text>Component <i>{field.type}</i> is not found. Checkout
                        `packages/vactory-gatsby-webform/src/components/Form.js` for more.</Text>
                </Box>
            );
    }

    return (
        <Box key={`${name}-container`}>
            <Component name={name} field={field}/>
        </Box>
    );
};

export const Form = ({
                         schema,
                         handleSubmit,
                         formOptions,
                         overwriteDefaultStyles,
                         buttons,
                         styles = {},
                     }) => {
    const form = useForm(formOptions);
    const baseStyles = useMemo(() => {
        return overwriteDefaultStyles ? styles : merge(defaultStyles, styles);
    }, [styles, overwriteDefaultStyles]);

    return (<StyleCtx.Provider value={baseStyles}>
        <FormContext {...form}>
            <Box
                as="form"
                onSubmit={form.handleSubmit(handleSubmit)}
                {...baseStyles?.container}
            >
                <Box>
                    {Object.entries(schema).map(renderField)}
                </Box>
                <Box {...baseStyles?.buttonGroup}>
                    {buttons?.reset?.hidden ? null : (
                        <Button type="reset" {...baseStyles?.resetButton}>
                            {buttons?.reset?.text || 'Reset'}
                        </Button>
                    )}
                    <Button type="submit" {...baseStyles?.submitButton}>
                        {buttons?.submit?.text || 'Submit'}
                    </Button>
                </Box>
            </Box>
        </FormContext>
    </StyleCtx.Provider>)

};
