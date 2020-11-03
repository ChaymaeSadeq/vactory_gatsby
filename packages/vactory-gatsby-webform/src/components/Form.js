import React, {useMemo} from 'react';
import { useForm, FormContext, UseFormOptions } from 'react-hook-form';
import {Box} from 'vactory-ui';
import { StyleCtx } from '../hooks/useStyles';
import { TextField } from './TextField';
import { TextAreaField } from './TextAreaField';
import { NumberField } from './NumberField';
import { CheckboxField } from './CheckboxField';
import { SelectField } from './SelectField';

const renderField = ([name, field]) => {
    let Component = null;

    switch (field.type) {
        case 'text':
            Component = TextField;
            break;

        case 'textArea':
            Component = TextAreaField;
            break;

        case 'number':
            Component = NumberField;
            break;

        case 'checkbox':
            Component = CheckboxField;
            break;

        case 'select':
            Component = SelectField;
            break;

        case 'custom':
            Component = field.component;
            return (
                <Box key={`${name}-container`}>
                    <Component name={name} field={field} {...field.props} />
                </Box>
            );

        default:
            break;
    }

    return (
        <Box key={`${name}-container`}>
            <Component name={name} field={field}/>
        </Box>
    );
};

export const Form = ({
                         schema,
                         handleSubmit,
                         formOptions,
                         overwriteDefaultStyles,
                         buttons,
                         styles = {},
                     }) => {
    const form = useForm(formOptions);
    // const baseStyles = useMemo(() => {
    //     return overwriteDefaultStyles ? styles : merge(defaultStyles, styles);
    // }, [styles, overwriteDefaultStyles]);

    return (<StyleCtx.Provider value={{}}>
        <FormContext {...form}>
            <Box
                as="form"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <div>
                    {Object.entries(schema).map(renderField)}
                </div>
                {/*<ButtonGroup {...baseStyles.form?.buttonGroup}>*/}
                {/*    {buttons?.reset?.hidden ? null : (*/}
                {/*        <Button type="reset" {...baseStyles.form?.resetButton}>*/}
                {/*            {buttons?.reset?.text || 'Reset'}*/}
                {/*        </Button>*/}
                {/*    )}*/}
                {/*    <Button type="submit" {...baseStyles.form?.submitButton}>*/}
                {/*        {buttons?.submit?.text || 'Submit'}*/}
                {/*    </Button>*/}
                {/*</ButtonGroup>*/}
            </Box>
        </FormContext>
    </StyleCtx.Provider>)

};
