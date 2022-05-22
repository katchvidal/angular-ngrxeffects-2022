



import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';
import * as UsersActions from '../../actions'

@Injectable()
export class UsersEffects {
    Users$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(UsersActions.CARGAR_USUARIOS),
                exhaustMap(action => this.userService.getUsers().pipe(
                    map(user => UsersActions.CARGAR_USUARIOS_SUCCESS({ user })),
                    catchError(payload => of(UsersActions.CARGAR_USUARIOS_FAIL({ payload })))
                )
                )
            )
        });

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}