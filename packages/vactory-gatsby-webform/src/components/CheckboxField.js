import React, {useMemo, forwardRef} from 'react';
import {Checkbox, Box} from 'vactory-ui';
import {Wysiwyg} from 'vactory-gatsby-ui';
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {useTranslation} from "react-i18next"
import {toRegister} from "../utils/toRegister";

export const CheckboxField = forwardRef(({
                                  id,
                                  name,
                                  field,
                              }, ref) => {
    const {label, helperText, validation, shouldDisplay, styles = {}, value = 1} = field;
    const {t} = useTranslation();
    const fieldStyles = useStyles('checkboxField', styles);
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
            <Box className="ui-form__formControlInner ui-form__formControlInner_noLabel"
                 __css={formControlLayout?.inner}>
                <Box className="ui-form__formControlField" {...formControlLayout?.field}>
                    {!!label && (
                        <Box>
                            <FormLabel htmlFor={name} alignItems="center" {...fieldStyles?.label}>
                                <Checkbox
                                    name={name}
                                    value={value}
                                    id={name}
                                    ref={register(toRegister(label || name, validation, values, t))}
                                    data-testid={`${id}-${name}`}
                                    variant={!!errorMessage ? 'danger' : null}
                                    {...fieldStyles?.input}
                                />

                                {label || name}
                            </FormLabel>
                        </Box>
                    )}

                    {!!helperText && (
                        <FormHelperText {...fieldStyles?.helperText}>
                            <Wysiwyg html={helperText} />
                        </FormHelperText>
                    )}
                    <FormErrorMessage  {...fieldStyles?.errorMessage}>
                        {errorMessage}
                    </FormErrorMessage>
                </Box>
            </Box>
        </FormControl>
    ) : null;
});
