import { createAction, props } from '@ngrx/store';
import { IProgrammes } from 'src/app/models/programmes.model';
import { IStoreResponse } from 'src/app/models/store.model';
import { STORE_ACTIONS } from '../store.actions';


export const retrievedProgrammesList = createAction(
  STORE_ACTIONS.PROGRAMMES.LOAD
);

export const retrievedProgrammesListSuccess = createAction(
  STORE_ACTIONS.PROGRAMMES.LOAD_SUCCESS,
  props<{ payload: IProgrammes[] }>()
);

export const retrievedProgrammesListError = createAction(
  STORE_ACTIONS.PROGRAMMES.LOAD_ERROR,
  props<IStoreResponse<IProgrammes[]>>()
);
