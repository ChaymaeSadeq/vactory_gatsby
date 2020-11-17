import React, {useRef} from 'react';
import {useForm, FormContext, useFormContext} from 'react-hook-form';
import {Box, Button, Text, Icon} from 'vactory-ui';
import merge from 'lodash.merge';
import {StyleCtx, useWebformRequest} from '../hooks';
import {defaultStyles} from './FormStyles'
import {TextField} from './TextField';
import {TextAreaField} from './TextAreaField';
import {NumberField} from './NumberField';
import {CheckboxField} from './CheckboxField';
import {CheckboxesField} from './CheckboxesField';
import {RadiosField} from './RadiosField';
import {SelectField} from './SelectField';
import {ReCaptchaField} from './ReCaptchaField';
import {UploadField} from './UploadField';
import {useTranslation} from "react-i18next"
import {navigate} from "gatsby"
import cogoToast from 'cogo-toast';

export const RenderField = (props) => {
    const fieldData = props.field;
    const [name, field] = fieldData;
    const {webformId, internalRefs} = useFormContext();
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

        case 'upload':
            Component = UploadField;
            break;

        case 'custom':
            Component = field.component;
            return (
                <Box key={`${name}-container`}>
                    <Component
                        name={name}
                        webformId={webformId}
                        field={field}
                        ref={r => (internalRefs.current[name] = r)}
                        {...field.props} />
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
            <Component
                name={name}
                webformId={webformId}
                field={field}
                ref={r => (internalRefs.current[name] = r)}
            />
        </Box>
    );
};

export const Form = ({
                         webformId,
                         schema,
                         overwriteDefaultStyles,
                         buttons,
                         styles = {},
                         render,
                         handleSubmitRedirection = true,
                         formatSubmitData = (data) => data,
                     }) => {
    const {t} = useTranslation();
    const form = useForm({
        validateCriteriaMode: "all"
    });
    const internalRefs = useRef({});
    const baseStyles = overwriteDefaultStyles ? styles : merge(defaultStyles, styles);
    const submitWebform = useWebformRequest();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const onSubmit = async (data) => {
        let submit_data = formatSubmitData(data);
        submit_data.webform_id = webformId;

        setIsLoading(true)
        setIsSuccess(false)
        setIsError(false)

        submitWebform(submit_data).then(response => {
            setIsLoading(false)
            if (response?.status === 200) {
                setIsSuccess(true)
                if (handleSubmitRedirection === true) {
                    if (
                        response?.data?.settings?.confirmation_type === 'page' ||
                        response?.data?.settings?.confirmation_type === 'inline' ||
                        response?.data?.settings?.confirmation_type === 'message' ||
                        response?.data?.settings?.confirmation_type === 'url_message' ||
                        response?.data?.settings?.confirmation_type === 'modal' ||
                        response?.data?.settings?.confirmation_type === 'none'
                    ) {
                        const confirmation_message = response?.data?.settings?.confirmation_message || t("Merci d'avoir rempli notre formulaire!")
                        const {hide} = cogoToast.success(confirmation_message, {
                            hideAfter: 0,
                            onClick: () => {
                                hide();
                            }
                        });
                    } else if (
                        response?.data?.settings?.confirmation_type === 'url'
                    ) {
                        const confirmation_url = response?.data?.settings?.confirmation_url || '/fr/';
                        navigate(confirmation_url)
                    }
                }
            } else {
                setIsError(true)
                Object.entries(response).forEach(([name, message]) => {
                    form.setError(name, 'server', message)
                    // Internal name is used to target upload fields.
                    form.setError('__' + name + '_internal', 'server', message)
                })
            }
        }).catch(error => {
            console.log(error)
        })
    };

    const resetForm = () => {
        form.reset();
        /* eslint-disable no-unused-expressions */
        try {
            Object.entries(schema).forEach(([name]) => internalRefs?.current?.[name]?.reset());
        } catch (err) {
        }
    };

    return (<StyleCtx.Provider value={baseStyles}>
        <FormContext webformId={webformId} internalRefs={internalRefs} {...form}>
            <Box
                as="form"
                onSubmit={form.handleSubmit(onSubmit)}
                {...baseStyles?.container}
            >
                {render ? (<Box>
                    {render(
                        resetForm,
                        isLoading,
                        isSuccess,
                        isError
                    )}
                </Box>) : (
                    <Box>
                        <Box>
                            {Object.entries(schema).map((field, key) => <RenderField key={key} field={field}/>)}
                        </Box>
                        <Box __css={baseStyles?.buttonGroup}>
                            {buttons?.reset?.hidden ? null : (
                                <Button type="reset" onClick={resetForm} {...baseStyles?.resetButton}
                                        disabled={isLoading}>
                                    {buttons?.reset?.text || t('webform:Reset')}
                                </Button>
                            )}
                            <Button type="submit" {...baseStyles?.submitButton} disabled={isLoading}>
                                {!!buttons?.submit?.leftIcon &&
                                <Icon mr="14px" name={buttons.submit.leftIcon} __css={baseStyles?.submitButtonLeftIcon}
                                      size="14px"/>}
                                {buttons?.submit?.text || t('webform:Submit')}
                                {!!buttons?.submit?.rightIcon &&
                                <Icon name={buttons.submit.rightIcon} __css={baseStyles?.submitButtonRightIcon}/>}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </FormContext>
    </StyleCtx.Provider>)

};
