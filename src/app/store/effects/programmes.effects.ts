import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ProgrammesService } from 'src/app/services/programmes.service';
import { STORE_ACTIONS } from '../store.actions';

@Injectable()
export class ProgrammesEffects {
  constructor(private actions: Actions, private programmesServices: ProgrammesService) { }

  loadProgrammes = createEffect(() =>
    this.actions.pipe(
      ofType(STORE_ACTIONS.PROGRAMMES.LOAD),
      mergeMap(() => this.programmesServices.getProgrammes().pipe(
        map(programmes => ({type: STORE_ACTIONS.PROGRAMMES.LOAD_SUCCESS, payload: programmes })),
        catchError(err => of({type: STORE_ACTIONS.PROGRAMMES.LOAD_ERROR, error: {message: 'Hubo un error al cargar los datos', error: err}}))
      ))
    )
  )
}
