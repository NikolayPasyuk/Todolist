import axios from 'axios';
import {CreateTodolist} from '../stories/todolists-api.stories';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'd0317f6a-b584-4afe-8a81-d7b60d153a6b'
    }
}

export const todolistAPI = {
    getTodolist() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },
    createTodolist(tilte: string) {
        const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: tilte}, settings)
        return promise
    }
}