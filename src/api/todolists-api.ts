import axios from 'axios';
import {CreateTodolist, DeleteTodolist, UpdateTodolistTitle} from '../stories/todolists-api.stories';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'd0317f6a-b584-4afe-8a81-d7b60d153a6b'
    }
}

export const todolistsAPI = {
    getTodolist() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },
    createTodolist(tilte: string) {
        const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: tilte}, settings)
        return promise
    },
    deleteTodolist(id: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/5bb673c2-26f7-4f7f-b78f-eba5f720a77e${id}`, {title: title}, settings)
        return promise
    }
}