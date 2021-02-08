import React, {useMemo, forwardRef} from 'react';
import {Box, Radio} from 'vactory-ui';
import {Wysiwyg} from 'vactory-gatsby-ui';
import classNames from "classnames"
import {useFormContext} from 'react-hook-form';
import {useErrorMessage} from '../hooks/useErrorMessage';
import {useStyles} from '../hooks/useStyles';
import {FormControl, FormLabel, FormHelperText, FormErrorMessage} from './FormControls'
import {useTranslation} from "react-i18next"
import {toRegister} from "../utils/toRegister";

export const RadiosField = forwardRef(({
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
                        {field.options.map((radio, i) => (
                            <div key={i}>
                                <FormLabel htmlFor={radio.name}
                                           showRequiredIndicator={false}
                                           alignItems="center"
                                           {...fieldStyles?.labelOptions}
                                >
                                    <Radio
                                        mr="8px"
                                        key={radio.name}
                                        id={radio.name}
                                        name={name}
                                        value={radio.value}
                                        ref={register(toRegister(radio.label || radio.name, validation, values, t))}
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
