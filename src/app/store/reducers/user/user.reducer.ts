 import { createReducer, on } from "@ngrx/store";
 import { User } from "src/app/models/users/user.model";
 import * as UserActions from '../../actions'
 
 export interface OneUserState {
     user: User | any ;
     loaded: boolean;
     loading: boolean;
     error: any;
 }
 
 const initialState: OneUserState = {
     user: null,
     loaded: false,
     loading: false,
     error: null
 }
 
 export const userReducer = createReducer(
     initialState,
     on(UserActions.CARGAR_USUARIO, state => ({ ...state, loading: true, error: null })),
     on(UserActions.CARGAR_USUARIO_SUCCESS, (state, { user }) => ({ ...state, loading: false, loaded: true, user: {...user } })),
     on(UserActions.CARGAR_USUARIO_FAIL, (state, { payload }) => ({ ...state, loading: false, loaded: false, error : { status :payload.status, message : payload.message, url : payload.url }}))
 );