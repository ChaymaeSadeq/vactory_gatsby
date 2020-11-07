import React, {useMemo, useContext} from 'react';
import {Input} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {toRegister} from '../utils/toRegister'
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import { useTranslation } from "react-i18next"

export const TextField = ({
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
    const fieldStyles = useStyles('textField', styles);
    const { t } = useTranslation();
    const {register, watch} = useFormContext();
    const errorMessage = useErrorMessage(name, label);
    const values = watch({nest: true});
    const isVisible = useMemo(() => {
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [values, shouldDisplay]);

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

            <Input
                id={id}
                data-testid={id}
                key={id || `${name}-input`}
                type={htmlInputType || 'text'}
                name={name}
                aria-label={name}
                ref={register(toRegister(label || name, validation, values, t))}
                placeholder={placeholder}
                {...fieldStyles?.input}
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
