import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'd0317f6a-b584-4afe-8a81-d7b60d153a6b'
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    ...settings
})

export type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}


export const todolistsAPI = {
    getTodolist() {
        const promise = instance.get<TodolistType[]>('todo-lists')
        return promise
    },
    createTodolist(tilte: string) {
        const promise = instance.post<ResponseType<{ item: TodolistType }>>('todo-lists', {title: tilte})
        return promise
    },
    deleteTodolist(id: string) {
        const promise = instance.delete<ResponseType<{}>>(`todo-lists/${id}`)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise = instance.put<ResponseType<{}>>(`todo-lists/${id}`, {title: title})
        return promise
    },
    getTasks(todolistId: string) {
        const promise = instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
        return promise
    }
}