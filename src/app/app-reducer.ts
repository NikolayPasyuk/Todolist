const initialState = {
    status: 'loading' as RequestStatusType,
    error: null as ErrorType
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type ErrorType = null | string
export type InitialStateType = typeof initialState

export const setErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)

export type SetErrorActionType = ReturnType<typeof setErrorAC>;
type ActionsType =
    | SetErrorActionType
    | ReturnType<typeof setStatusAC>