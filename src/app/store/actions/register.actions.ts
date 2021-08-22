import { createAction, props } from '@ngrx/store';
import { IRegister } from 'src/app/models/register.model';
import { STORE_ACTIONS } from '../store.actions'

export const registerUser = createAction(
  STORE_ACTIONS.REGISTER.SAVE,
  props<{ data: IRegister }>()
);

