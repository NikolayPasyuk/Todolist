import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../app/app-reducer';
import {ResponseType} from '../api/todolists-api';
import {Dispatch} from 'redux';


export const handleServerAppError = <D>(data: ResponseType, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}