import { createReducer, on } from "@ngrx/store";
import { IStoreResponse } from "src/app/models/store.model";

import { INews } from '../../models/news.model';
import { retrievedNewsList, retrievedNewsListError, retrievedNewsListSuccess } from '../actions/news.actions'

const initialState: IStoreResponse<INews[]> = {data: [], isLoading: false};

export const newsReducer = createReducer(
  initialState,
  on(retrievedNewsList, (state) => { return {...state, isLoading: true} }),
  on(retrievedNewsListSuccess, (state, {payload}) => {
    return {data: payload, isLoading: false}
  }),
  on(retrievedNewsListError, (state, {error}) => {
    return {data: [], isLoading: false, error}
  })
);
