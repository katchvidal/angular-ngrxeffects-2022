//  Aqui van los reducer de Usuarios con todos las actions disponibles
/**
 * 1.   Primero Crear el objeto ( ingredientes del reducer )
 * 2.   Segundo Crare el Estado Inicial debe contener el objeto
 * 3.   Tercero
 */

import { createReducer, on } from "@ngrx/store";
import { User } from "src/app/models/users/user.model";
import * as UserActions from '../../actions'

export interface UserState {
    user: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initialState: UserState = {
    user: [],
    loaded: false,
    loading: false,
    error: null
}

export const usersReducer = createReducer(
    initialState,
    on(UserActions.CARGAR_USUARIOS, state => ({ ...state, loading: true })),
    on(UserActions.CARGAR_USUARIOS_SUCCESS, (state, { user }) => ({ ...state, loading: false, loaded: true, user: [...user] })),
    on(UserActions.CARGAR_USUARIOS_FAIL, (state, { payload }) => ({ ...state, loading: false, loaded: false, error : { status :payload.status, message : payload.message, url : payload.url }}))
);