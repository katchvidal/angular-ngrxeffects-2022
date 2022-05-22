import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/users/user.model';

export const CARGAR_USUARIO = createAction(
    '[USER] CARGAR USUARIO',
    props<{ id : any }>()
)
export const CARGAR_USUARIO_FAIL = createAction(
    '[USER] CARGAR USUARIO FAIL',
    props<{ payload : any }>()  //  Recibe un payload ( propiedad desconocida ) que recibe informacion del Error
)
export const CARGAR_USUARIO_SUCCESS = createAction(
    '[USER] CARGAR USUARIO SUCCESS',
    props<{ user : User }>()
)