import React, {useMemo} from 'react';
import {Input} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import { useTranslation } from "react-i18next";
import {useErrorMessage} from '../hooks/useErrorMessage';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {toRegister} from "../utils/toRegister";
import {useStyles} from "..";

export const TextAreaField = ({
                                  id,
                                  name,
                                  field,
                              }) => {
    const {
        label,
        placeholder,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const { t } = useTranslation();
    const fieldStyles = useStyles('textAreaField', styles);
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
                as={"textarea"}
                id={id}
                data-testid={id}
                name={name}
                placeholder={placeholder}
                ref={register(toRegister(label || name, validation, values, t))}
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
