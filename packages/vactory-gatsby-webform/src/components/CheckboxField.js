import React, {useMemo} from 'react';
import {Checkbox, Box} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const CheckboxField = ({
                                  id,
                                  name,
                                  field,
                              }) => {
    const {label, helperText, isRequired, shouldDisplay, styles = {}, value = 1} = field;
    const fieldStyles = useStyles('checkboxField', styles);
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
                <Box>
                    <FormLabel htmlFor={name} alignItems="center" {...fieldStyles?.label}>
                        <Checkbox
                            name={name}
                            value={value}
                            id={name}
                            ref={register}
                            data-testid={`${id}-${name}`}
                            {...fieldStyles?.input}
                        />

                        {label}
                    </FormLabel>
                </Box>
            )}

            {!!helperText && (
                <FormHelperText {...fieldStyles?.helperText}>
                    {helperText}
                </FormHelperText>
            )}
            <FormErrorMessage  {...fieldStyles?.errorMessage}>
                {errorMessage}
            </FormErrorMessage>
        </FormControl>
    ) : null;
};
