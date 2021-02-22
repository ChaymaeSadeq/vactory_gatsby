import React, {useMemo, forwardRef} from 'react';
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
            <div
                className={classNames("ui-form__formControlInner", {"ui-form__formControlInner_noLabel": !!label})}
                __css={formControlLayout?.inner}
            >
                {!!label && (
                    <label
                        htmlFor={name}
                        className="ui-form__formControlLabel block text-sm font-medium text-gray-700"
                    {...fieldStyles?.label}
                    >
                        {label}
                    </label>
                )}

                <div className="ui-form__formControlField mt-1 relative rounded-md shadow-sm" __css={formControlLayout?.field}>
                    <select
                        id={name}
                        name={name}
                        data-testid={id}
                        className={`mt-1 block w-full pl-3 ltr:pr-10 rtl:pl-10 py-2 text-base focus:outline-none sm:text-sm rounded-md ${
							!!errorMessage
								? "border-red-300 text-red-900 focus:ring-red-500 focus:border-red-500"
								: "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
						}`}
                        ref={register(toRegister(label || name, validation, values, t))}
                        {...fieldStyles?.input}
                    >
                        {field.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label || option.value}
                            </option>
                        ))}
                    </select>
                </div>

                {!!helperText && (
                    <p className="mt-2 text-sm text-gray-500" id={`field-${name}-description`}>
                    <Wysiwyg html={helperText} />
                    </p>
                )}

                {!!errorMessage && (
                    <p className="mt-2 text-sm text-red-600" id={`field-${name}-error`}>
                    <Wysiwyg html={errorMessage} />
                    </p>
                )}
            </div>
        </FormControl>
    ) : null;
});
