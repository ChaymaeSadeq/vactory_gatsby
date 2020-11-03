import React, {useMemo} from 'react';
import {Checkbox} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const CheckboxField = ({
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
            <div>
                {field.checkboxes.map((checkbox, i) => (
                    <div key={i}>
                        <Checkbox
                            key={checkbox.name}
                            name={name}
                            value={checkbox.value}
                            ref={register}
                            data-testid={`${id}-${checkbox.name}`}
                        />
                        {checkbox.label || checkbox.name}
                    </div>
                ))}
            </div>
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
