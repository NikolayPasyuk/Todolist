import {AddItemForm} from './AddItemForm';
import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';

export default {
    title: 'Todolist/AddItemForm',
    component: AddItemForm,
    argTypes: {
        addItem: {
            description: 'callback'
        }
    },
} as ComponentMeta<typeof AddItemForm>

const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind({});
export const AddItemFormDisabledExample = Template.bind({});

AddItemFormExample.args = {
    addItem: action('Button inside form clicked')
}

AddItemFormDisabledExample.args = {
    disabled: true,
    addItem: action('Button inside form clicked')
}