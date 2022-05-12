
const initialState = {
    status: 'loading' as RequestStatusType,
    error: 'some error' as ErrorType
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

type ActionsType = any