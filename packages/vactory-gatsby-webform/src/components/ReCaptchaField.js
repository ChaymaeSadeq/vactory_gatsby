import React, {useMemo, useEffect} from 'react';
import {Box} from 'vactory-ui';
import classNames from "classnames"
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
                                   refsCollection
                               }) => {
    const {
        label,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const fieldStyles = useStyles('reCaptchaField', styles);
    const formControlLayout = useStyles('formControlLayout', styles);
    const recaptchaRef = React.createRef();
    const {t, i18n} = useTranslation();
    const currentLanguage = i18n.language;
    const {register, watch, setValue} = useFormContext();
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
            <Box className={classNames("ui-form__formControlInner", !!label ? "" : "ui-form__formControlInner_noLabel")}
                 __css={formControlLayout?.inner}>
                {!!label && (
                    <Box className="ui-form__formControlLabel" __css={formControlLayout?.label}>
                        <FormLabel htmlFor={name}>
                            {label}
                        </FormLabel>
                    </Box>
                )}

                <Box className="ui-form__formControlField" __css={formControlLayout?.field}>
                    <ReCaptcha
                        sitekey={AppSettings.keys.reCaptcha}
                        hl={currentLanguage}
                        ref={(e) => {
                            recaptchaRef.current = e;
                            refsCollection["reCaptcha"] = recaptchaRef
                        }}
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
                </Box>
            </Box>
        </FormControl>
    ) : null;
};
