import React, {useMemo, forwardRef} from 'react';
import {Wysiwyg} from 'vactory-gatsby-ui';
import classNames from "classnames"
import {useFormContext} from 'react-hook-form';
import {useTranslation} from "react-i18next";
import {useErrorMessage} from '../hooks/useErrorMessage';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {toRegister} from "../utils/toRegister";
import {useStyles} from "..";

export const TextAreaField = forwardRef(({
                                  id,
                                  name,
                                  field,
                              }, ref) => {
    const {
        label,
        placeholder,
        helperText,
        validation,
        shouldDisplay,
        styles = {},
    } = field;
    const {t} = useTranslation();
    const fieldStyles = useStyles('textAreaField', styles);
    const formControlLayout = useStyles('formControlLayout', styles);
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
            className={'field--'+name}
        >
            <div className={classNames("ui-form__formControlInner", !!label ? "" : "ui-form__formControlInner_noLabel")}
                 __css={formControlLayout?.inner}>
                {!!label && (
                    <label
                        htmlFor={name}
                        className="ui-form__formControlLabel block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                        __css={formControlLayout?.label}
                    >
                        {label}
                    </label>
                )}
                <div className="mt-1 sm:mt-0 sm:col-span-2" __css={formControlLayout?.field}>
                    <textarea
                        id={name}
                        data-testid={id}
                        name={name}
                        rows="3"
                        className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                        ref={register(toRegister(label || name, validation, values, t))}
                        placeholder={placeholder}
                        aira-invalid={!!errorMessage}
                        {...fieldStyles?.input}
                    />
                    {!!helperText && (
                        <p className="mt-2 text-sm text-gray-500" {...fieldStyles?.helperText}>
                            <Wysiwyg html={helperText} />
                        </p>
                    )}
                    {!!errorMessage && (
                        <p className="mt-2 text-sm text-red-600" {...fieldStyles?.errorMessage}>
                            <Wysiwyg html={errorMessage} />
                        </p>
                    )}
                </div>
            </div>
        </FormControl>
    ) : null;
});
