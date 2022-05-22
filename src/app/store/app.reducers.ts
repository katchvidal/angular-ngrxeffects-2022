import { ActionReducerMap } from '@ngrx/store'
import * as reducers from './reducers'



export interface AppState {
    users: reducers.UserState,
    user: reducers.OneUserState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usersReducer,
    user: reducers.userReducer
}