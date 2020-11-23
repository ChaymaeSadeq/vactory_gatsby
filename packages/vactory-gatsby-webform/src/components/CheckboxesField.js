import React, {useMemo, forwardRef} from 'react';
import {Box, Checkbox} from 'vactory-ui';
import classNames from "classnames"
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {useTranslation} from "react-i18next"
import {toRegister} from "../utils/toRegister";

export const CheckboxesField = forwardRef(({
                                    id,
                                    name,
                                    field,
                                }, ref) => {
    const {label, helperText, validation, shouldDisplay, styles = {}} = field;
    const {t} = useTranslation();
    const fieldStyles = useStyles('checkboxesField', styles);
    const formControlLayout = useStyles('formControlLayout', styles);
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
            className={'field--'+name}
        >
            <Box className={classNames("ui-form__formControlInner", !!label ? "" : "ui-form__formControlInner_noLabel")}
                 __css={formControlLayout?.inner}>
                {!!label && (
                    <Box className="ui-form__formControlLabel" __css={formControlLayout?.label}>
                        <FormLabel {...fieldStyles?.label}>
                            {label}
                        </FormLabel>
                    </Box>
                )}
                <Box className="ui-form__formControlField" __css={formControlLayout?.field}>

                    <div>
                        {field.options.map((checkbox, i) => (
                            <div key={i}>
                                <FormLabel htmlFor={checkbox.name}
                                           showRequiredIndicator={false}
                                           alignItems="center"
                                           {...fieldStyles?.labelOptions}>
                                    <Checkbox
                                        key={checkbox.name}
                                        id={checkbox.name}
                                        name={name}
                                        value={checkbox.value}
                                        ref={register(toRegister(checkbox.label || checkbox.name, validation, values, t))}
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
                </Box>
            </Box>
        </FormControl>
    ) : null;
});
