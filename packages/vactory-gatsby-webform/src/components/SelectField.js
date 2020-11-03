import React, {useMemo} from 'react';
import {Select} from 'vactory-ui';

import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const SelectField = ({
                                id,
                                name,
                                field,
                            }) => {
    const { label, helperText, isRequired, shouldDisplay, styles = {} } = field;

    const { register, watch } = useFormContext();

    const values = watch({ nest: true });

    const errorMessage = useErrorMessage(name, label);

    const isVisible = useMemo(() => {
        return shouldDisplay ? shouldDisplay(values) : true;
    }, [values, shouldDisplay]);

    return isVisible ? (
        <FormControl
            key={`${name}-control`}
            isRequired={isRequired}
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
                ref={register}
            >
                {field.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label || option.value}
                    </option>
                ))}
            </Select>
            {!!helperText && (
                <FormHelperText>
                    {helperText}
                </FormHelperText>
            )}
            <FormErrorMessage>
                {errorMessage}
            </FormErrorMessage>
        </FormControl>
    ) : null;
};
