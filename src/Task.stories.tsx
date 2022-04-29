import React from 'react';
import {action} from '@storybook/addon-actions';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Task} from './Task';
import {TaskPriorities, TaskStatuses} from './api/todolists-api';

export default {
    title: 'Todolist/Task',
    component: Task,
    args: {
        changeTaskStatus: action('Status changed inside Task'),
        changeTaskTitle: action('Title changed inside Task'),
        removeTask: action('Remove Button inside Task clicked')
    }
} as ComponentMeta<typeof Task>


const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;


export const TaskIsDoneExample = Template.bind({});
TaskIsDoneExample.args = {
    task: {
        id: '1', status: TaskStatuses.Completed, title: 'JS',
        todoListId: 'todolistId1', startDate: '', deadline: '',
        addedDate: '', order: 0, priority: TaskPriorities.Low,
        description: ''
    },
    todolistId: 'todolistId1'
}

export const TaskIsNotDoneExample = Template.bind({});
TaskIsNotDoneExample.args = {
    task: {
        id: '1', status: TaskStatuses.New, title: 'JS',
        todoListId: 'todolistId1', startDate: '', deadline: '',
        addedDate: '', order: 0, priority: TaskPriorities.Low,
        description: ''
    },
    todolistId: 'todolistId1'
}

