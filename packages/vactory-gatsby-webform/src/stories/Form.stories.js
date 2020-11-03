import React from 'react';
import { action } from '@storybook/addon-actions';

import { Form } from '../components/Form';

export default {
    title: 'Form',
};

export const Default = () => (
    <Form
        schema={{
            text: {
                type: 'text',
                label: 'Name',
                placeholder: 'Name',
                isRequired: true,
                helperText: 'Hello World!'
            },
            about: {
                type: 'textArea',
                label: 'About',
                placeholder: 'Write something about yourself',
            },
            number: {
                type: 'number',
                label: 'Age',
                placeholder: 'Age',
            },
            phoneNumber: {
                type: 'text',
                label: 'Phone Number',
                htmlInputType: 'tel',
            },
            select: {
                type: 'select',
                label: 'Gender',
                options: [
                    {
                        value: 'Male',
                    },
                    {
                        value: 'Female',
                    },
                    {
                        value: 'Rather not say',
                    },
                ],
            },
            days: {
                type: 'checkbox',
                label: 'Days of the Week',
                checkboxes: [
                    {
                        name: 'Monday',
                        value: 'monday'
                    },
                    {
                        name: 'Tuesday',
                        value: 'tuesday'
                    },
                    {
                        name: 'Wednesday',
                        value: 'wednesday'
                    },
                    {
                        name: 'Thursday',
                        value: 'thursday'
                    },
                    {
                        name: 'Friday',
                        value: 'friday'
                    },
                ],
            },
        }}
        handleSubmit={action('Submit')}
    />
);
