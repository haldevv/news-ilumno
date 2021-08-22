import { createAction, props } from '@ngrx/store';
import { IStoreResponse } from 'src/app/models/store.model';
import { INews } from '../../models/news.model';
import { STORE_ACTIONS } from '../store.actions'


export const retrievedNewsList = createAction(
  STORE_ACTIONS.NEWS.LOAD
);

export const retrievedNewsListSuccess = createAction(
  STORE_ACTIONS.NEWS.LOAD_SUCCESS,
  props<{ payload: INews[] }>()
);

export const retrievedNewsListError = createAction(
  STORE_ACTIONS.NEWS.LOAD_ERROR,
  props<IStoreResponse<INews[]>>()
);
