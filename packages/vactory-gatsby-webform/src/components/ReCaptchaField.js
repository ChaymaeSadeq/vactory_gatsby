import React, {useMemo, useEffect} from 'react';
import {Input} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import ReCaptcha from "react-google-recaptcha"
import {useTranslation} from "react-i18next"
import {AppSettings} from "vactory-gatsby-core";
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {toRegister} from "../utils/toRegister";

export const ReCaptchaField = ({
                                   id,
                                   name,
                                   field,
                               }) => {
    const {
        label,
        placeholder,
        htmlInputType,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const fieldStyles = useStyles('reCaptchaField', styles);
    const recaptchaRef = React.createRef();
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;

    const {register, watch, setValue, clearErrors} = useFormContext();
    const errorMessage = useErrorMessage("g-recaptcha-response", label);
    const values = watch({nest: true});
    const isVisible = useMemo(() => {
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [values, shouldDisplay]);

    useEffect(() => {
        register({
            name: "g-recaptcha-response",
        }, toRegister(label || name, validation, values, t))
    }, []);

    return isVisible ? (
        <FormControl
            key={`${name}-control`}
            isRequired={validation?.required}
            isInvalid={!!errorMessage}
        >
            {!!label && (
                <FormLabel htmlFor={name}>
                    {label}
                </FormLabel>
            )}

            <ReCaptcha
                sitekey={AppSettings.keys.reCaptcha}
                hl={currentLanguage}
                ref={recaptchaRef}
                onChange={val => {
                    setValue("g-recaptcha-response", val);
                }}
                onExpired={() => {
                    setValue("g-recaptcha-response", null)
                }}
                onErrored={() => {
                    setValue("g-recaptcha-response", null)
                }}
            />

            {!!helperText && (
                <FormHelperText {...fieldStyles?.helperText}>
                    {helperText}
                </FormHelperText>
            )}
            <FormErrorMessage {...fieldStyles?.errorMessage}>
                {errorMessage}
            </FormErrorMessage>
        </FormControl>
    ) : null;
};
