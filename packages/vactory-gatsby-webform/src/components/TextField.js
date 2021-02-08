import React, {useMemo, forwardRef} from 'react';
import {Box, Input} from 'vactory-ui';
import {Wysiwyg} from 'vactory-gatsby-ui';
import classNames from "classnames"
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {toRegister} from '../utils/toRegister'
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {useTranslation} from "react-i18next"

export const TextField = forwardRef(({
                              id,
                              name,
                              field,
                          }, ref) => {
    const {
        label,
        placeholder,
        htmlInputType,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const fieldStyles = useStyles('textField', styles);
    const formControlLayout = useStyles('formControlLayout', styles);
    const {t} = useTranslation();
    const {register, watch} = useFormContext();
    const errorMessage = useErrorMessage(name, label);
    const values = watch({nest: true});
    const isVisible = useMemo(() => {
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [values, shouldDisplay]);

    // console.log(errorMessage)

    return isVisible ? (
        <FormControl
            key={`${name}-control`}
            isRequired={validation?.required}
            isInvalid={!!errorMessage}
            className={'field--'+name}
        >

            <Box className={classNames("ui-form__formControlInner", !!label ? "" : "ui-form__formControlInner_noLabel")}
                 __css={formControlLayout?.inner}>
                {!!label && (
                    <Box className="ui-form__formControlLabel" __css={formControlLayout?.label}>
                        <FormLabel htmlFor={name}>
                            <span>{label}</span>
                        </FormLabel>
                    </Box>
                )}

                <Box className="ui-form__formControlField" __css={formControlLayout?.field}>
                    <Input
                        id={name}
                        data-testid={id}
                        key={id || `${name}-input`}
                        type={htmlInputType || 'text'}
                        name={name}
                        aria-label={name}
                        ref={register(toRegister(label || name, validation, values, t))}
                        placeholder={placeholder}
                        status={!!errorMessage ? 'danger' : null}
                        {...fieldStyles?.input}
                    />

                    {!!helperText && (
                        <FormHelperText {...fieldStyles?.helperText}>
                            <Wysiwyg html={helperText} />
                        </FormHelperText>
                    )}
                    <FormErrorMessage {...fieldStyles?.errorMessage}>
                        {errorMessage}
                    </FormErrorMessage>
                </Box>
            </Box>
        </FormControl>
    ) : null;
});
