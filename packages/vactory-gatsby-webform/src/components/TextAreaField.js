import React, {useMemo} from 'react';
import {Input} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const TextAreaField = ({
                                  id,
                                  name,
                                  field,
                              }) => {
    const {
        label,
        placeholder,
        helperText,
        isRequired,
        shouldDisplay,
        styles = {},
    } = field;

    const { register, watch } = useFormContext();

    const errorMessage = useErrorMessage(name, label);

    const values = watch({ nest: true });

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
            <Input
                as={"textarea"}
                id={id}
                data-testid={id}
                name={name}
                placeholder={placeholder}
                ref={register}
            />
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
