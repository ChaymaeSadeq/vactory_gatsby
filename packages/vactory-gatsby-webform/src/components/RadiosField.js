import React, {useMemo} from 'react';
import {Radio} from 'vactory-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'

export const RadiosField = ({
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
                {field.options.map((radio, i) => (
                    <div key={i}>
                        <FormLabel htmlFor={radio.name}
                                   showRequiredIndicator={false}
                                   alignItems="center"
                                   {...fieldStyles?.label}
                        >
                            <Radio
                                mr="8px"
                                key={radio.name}
                                id={radio.name}
                                name={name}
                                value={radio.value}
                                ref={register}
                                data-testid={`${id}-${radio.name}`}
                                {...fieldStyles?.input}
                            />
                            {radio.label || radio.name}
                        </FormLabel>
                    </div>
                ))}
            </div>
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
