import React, {useMemo} from 'react';
import {Select} from 'vactory-ui';
import { useTranslation } from "react-i18next"
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {toRegister} from "../utils/toRegister";
import {useStyles} from "..";

export const SelectField = ({
                                id,
                                name,
                                field,
                            }) => {
    const {
        label,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const { t } = useTranslation();
    const fieldStyles = useStyles('selectField', styles);
    const {register, watch} = useFormContext();
    const values = watch({nest: true});
    const errorMessage = useErrorMessage(name, label);

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
            <Select
                name={name}
                data-testid={id}
                ref={register(toRegister(label || name, validation, values, t))}
                {...fieldStyles?.input}
            >
                {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label || option.value}
                    </option>
                ))}
            </Select>
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
