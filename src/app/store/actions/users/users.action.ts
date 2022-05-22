import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/users/user.model';

export const CARGAR_USUARIOS = createAction(
    '[USERS] CARGAR USUARIOS'
)
export const CARGAR_USUARIOS_FAIL = createAction(
    '[USERS] CARGAR USUARIOS FAIL',
    props<{ payload : any }>()  //  Recibe un payload ( propiedad desconocida ) que recibe informacion del Error
)
export const CARGAR_USUARIOS_SUCCESS = createAction(
    '[USERS] CARGAR USUARIOS SUCCESS',
    props<{ user : User[]}>()
)


//  Aqui van todas las acciones disponibles para el Usuario guardadas en el Store