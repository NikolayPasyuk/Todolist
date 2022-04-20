import {AddItemForm} from './AddItemForm';
import {ComponentStory} from '@storybook/react';
import {Button} from './stories/Button';
import React from 'react';

export default {
    title: 'AddItemForm Component',
    component: AddItemForm,
}

export const AddItemFormBaseExample=(props:any)=>{
    return <AddItemForm addItem={(title:string)=>{alert(title)}}/>
}
