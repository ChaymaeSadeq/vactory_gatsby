import React, {useMemo, forwardRef} from 'react';
import {Box, Select} from 'vactory-ui';
import {Wysiwyg} from 'vactory-gatsby-ui';
import classNames from "classnames"
import {useTranslation} from "react-i18next"
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {toRegister} from "../utils/toRegister";
import {useStyles} from "..";

export const SelectField = forwardRef(({
                                id,
                                name,
                                field,
                            }, ref) => {
    const {
        label,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const {t} = useTranslation();
    const fieldStyles = useStyles('selectField', styles);
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
                        <FormLabel htmlFor={name} {...fieldStyles?.label}>
                            {label}
                        </FormLabel>
                    </Box>
                )}

                <Box className="ui-form__formControlField" __css={formControlLayout?.field}>

                    <Select
                        id={name}
                        name={name}
                        data-testid={id}
                        ref={register(toRegister(label || name, validation, values, t))}
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
                            <Wysiwyg html={helperText} />
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
