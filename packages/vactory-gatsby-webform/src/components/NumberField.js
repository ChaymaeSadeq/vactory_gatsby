import React, {useMemo} from 'react';
import {Input} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const NumberField = ({
                              id,
                              name,
                              field,
                          }) => {
    const {
        label,
        placeholder,
        htmlInputType,
        helperText,
        isRequired,
        shouldDisplay,
        styles = {},
    } = field;
    // const fieldStyles = useStyles('textField', styles);

    const {register, watch} = useFormContext();
    const errorMessage = useErrorMessage(name, label);
    const values = watch({nest: true});
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
                id={id}
                data-testid={id}
                key={id || `${name}-input`}
                type={htmlInputType || 'number'}
                name={name}
                aria-label={name}
                ref={register}
                placeholder={placeholder}
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
