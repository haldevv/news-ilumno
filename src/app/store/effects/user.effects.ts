import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, tap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { STORE_ACTIONS } from '../store.actions';

@Injectable()
export class UserEffects {
  constructor(private actions: Actions, private userService: UserService, private snackbar: MatSnackBar) { }

  registerUser = createEffect(() =>
    this.actions.pipe(
      ofType(STORE_ACTIONS.REGISTER.SAVE),
      mergeMap((action: any) => this.userService.register(action.data)),
      tap(() => {
        this.snackbar.open('Usuario registrado, Fin del registro')
      })
    ), {dispatch: false}
  )
}
