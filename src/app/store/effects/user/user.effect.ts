import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';
import * as UsersActions from '../../actions'

@Injectable()
export class UserEffects {
    User$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(UsersActions.CARGAR_USUARIO),
                exhaustMap((action) => this.userService.getSingleUserbyID( action.id ).pipe(
                    map(user => UsersActions.CARGAR_USUARIO_SUCCESS({ user })),
                    catchError(payload => of(UsersActions.CARGAR_USUARIO_FAIL({ payload })))
                )
                )
            )
        });

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}