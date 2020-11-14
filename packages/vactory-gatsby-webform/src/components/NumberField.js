import React, {useMemo, forwardRef} from 'react';
import {Box, Input} from 'vactory-ui';
import classNames from "classnames"
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {useTranslation} from "react-i18next"
import {toRegister} from "../utils/toRegister";

export const NumberField = forwardRef(({
                                id,
                                name,
                                field,
                            }, ref) => {
    const {
        label,
        placeholder,
        htmlInputType,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const fieldStyles = useStyles('numberField', styles);
    const formControlLayout = useStyles('formControlLayout', styles);
    const {t} = useTranslation();

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
            <Box className={classNames("ui-form__formControlInner", !!label ? "" : "ui-form__formControlInner_noLabel")}
                 __css={formControlLayout?.inner}>

                {!!label && (
                    <Box className="ui-form__formControlLabel" __css={formControlLayout?.label}>
                        <FormLabel htmlFor={name} {...fieldStyles?.label}>
                            {label}
                        </FormLabel>
                    </Box>
                )}
                <Box className="ui-form__formControlField" __css={formControlLayout?.field}>

                    <Input
                        id={id}
                        data-testid={id}
                        key={id || `${name}-input`}
                        type={htmlInputType || 'number'}
                        name={name}
                        aria-label={name}
                        ref={register(toRegister(label || name, validation, values, t))}
                        placeholder={placeholder}
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
                </Box>
            </Box>
        </FormControl>
    ) : null;
});
