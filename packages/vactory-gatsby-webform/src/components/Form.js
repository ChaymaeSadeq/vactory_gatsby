import React, {useMemo} from 'react';
import {useForm, FormContext, UseFormOptions} from 'react-hook-form';
import {Box, Button, Text, Icon} from 'vactory-ui';
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
import {useTranslation} from "react-i18next"

const renderField = ([name, field], refsCollection) => {
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
                    <Component name={name} field={field} refsCollection={refsCollection} {...field.props} />
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
            <Component name={name} field={field} refsCollection={refsCollection}/>
        </Box>
    );
};

export const Form = ({
                         schema,
                         // handleSubmit,
                         formOptions,
                         overwriteDefaultStyles,
                         buttons,
                         styles = {},
                     }) => {
    const {t} = useTranslation();
    const form = useForm(formOptions);
    const refsCollection = {};
    const baseStyles = overwriteDefaultStyles ? styles : merge(defaultStyles, styles);

    const onSubmit = (data, e) => {
        console.log(data, e);
        console.log(refsCollection)
        refsCollection?.reCaptcha?.current?.reset();
    };

    const resetForm = () => {
        refsCollection?.reCaptcha?.current?.reset();
    };

    return (<StyleCtx.Provider value={baseStyles}>
        <FormContext {...form}>
            <Box
                as="form"
                onSubmit={form.handleSubmit(onSubmit)}
                {...baseStyles?.container}
            >
                <Box>
                    {Object.entries(schema).map(field => renderField(field, refsCollection))}
                </Box>
                <Box __css={baseStyles?.buttonGroup}>
                    {buttons?.reset?.hidden ? null : (
                        <Button type="reset" onClick={resetForm} {...baseStyles?.resetButton}>
                            {buttons?.reset?.text || 'Reset'}
                        </Button>
                    )}
                    <Button type="submit" {...baseStyles?.submitButton}>
                        {!!buttons?.submit?.leftIcon && <Icon mr="14px" name={buttons.submit.leftIcon}  __css={baseStyles?.submitButtonLeftIcon} size="14px"/>}
                        {buttons?.submit?.text || t('Submit')}
                        {!!buttons?.submit?.rightIcon && <Icon name={buttons.submit.rightIcon} __css={baseStyles?.submitButtonRightIcon}/>}
                    </Button>
                </Box>
            </Box>
        </FormContext>
    </StyleCtx.Provider>)

};
