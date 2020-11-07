import React, {useMemo} from 'react';
import {Checkbox} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const CheckboxesField = ({
                                    id,
                                    name,
                                    field,
                                }) => {
    const {label, helperText, isRequired, shouldDisplay, styles = {}} = field;
    const fieldStyles = useStyles('checkboxesField', styles);
    const {register, watch} = useFormContext();
    const values = watch({nest: true});
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
                <FormLabel>
                    {label}
                </FormLabel>
            )}
            <div>
                {field.options.map((checkbox, i) => (
                    <div key={i}>
                        <FormLabel htmlFor={checkbox.name}
                                   showRequiredIndicator={false}
                                   alignItems="center"
                                   {...fieldStyles?.label}>
                            <Checkbox
                                key={checkbox.name}
                                id={checkbox.name}
                                name={name}
                                value={checkbox.value}
                                ref={register}
                                data-testid={`${id}-${checkbox.name}`}
                                {...fieldStyles?.input}
                            />
                            {checkbox.label || checkbox.name}
                        </FormLabel>
                    </div>
                ))}
            </div>
            {!!helperText && (
                <FormHelperText  {...fieldStyles?.helperText}>
                    {helperText}
                </FormHelperText>
            )}
            <FormErrorMessage {...fieldStyles?.errorMessage}>
                {errorMessage}
            </FormErrorMessage>
        </FormControl>
    ) : null;
};
