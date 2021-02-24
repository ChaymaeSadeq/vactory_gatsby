import React, {useMemo, forwardRef} from 'react';
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
            <div className="ui-form__formControlInner ui-form__formControlInner_noLabel"
                 __css={formControlLayout?.inner}>
                <div className="ui-form__formControlField" {...formControlLayout?.field}>
                    {!!label && (
                        <div>
                            <FormLabel htmlFor={name}
                                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                                {...fieldStyles?.label}>
                                <input
                                    type="checkbox"
                                    defaultChecked={value}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ltr:mr-3 rtl:ml-3"
                                    name={name}
                                    id={name}
                                    ref={register(toRegister(label || name, validation, values, t))}
                                    data-testid={`${id}-${name}`}
                                    variant={!!errorMessage ? 'danger' : null}
                                    {...fieldStyles?.input}
                                />
                                {label || name}
                            </FormLabel>
                        </div>
                    )}

                    
                    {!!helperText && (
                        <p
                            className="mt-2 text-sm text-gray-500"
                            id={`field-${name}-description`}
                            {...fieldStyles?.helperText}
                        >
                            <Wysiwyg html={helperText} />
                        </p>
                    )}
                    {!!errorMessage && (
                        <p
                            className="mt-2 text-sm text-red-600"
                            id={`field-${name}-error`}
                            {...fieldStyles?.errorMessage}
                        >
                            <Wysiwyg html={errorMessage} />
                        </p>
                    )}
                </div>
            </div>
        </FormControl>
    ) : null;
});
