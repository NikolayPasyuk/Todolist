import {TasksStateType} from '../trash/App';
import {tasksReducer} from './tasks-reducer';
import {addTodolistAC, TodolistDomainType, todolistsReducer} from './todolists-reducer';
import {TodolistType} from '../api/todolists-api';

test('ids should be equals', () => {
    const startTasksState: TasksStateType = {};
    const startTodolistsState: Array<TodolistDomainType> = [];

    let todolist: TodolistType = {
        id: 'any id',
        addedDate: '',
        order: 0,
        title: 'New Todolist'
    };

    const action = addTodolistAC(todolist)

    const endTasksState = tasksReducer(startTasksState, action)
    const endTodolistsState = todolistsReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolist.id);
    expect(idFromTodolists).toBe(action.todolist.id);
});



