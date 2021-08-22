import { createReducer, on } from "@ngrx/store";
import { IProgrammes } from "src/app/models/programmes.model";
import { IStoreResponse } from "src/app/models/store.model";
import { retrievedProgrammesList, retrievedProgrammesListError, retrievedProgrammesListSuccess } from "../actions/programmes.actions";

const initialState: IStoreResponse<IProgrammes[]> = {data: [], isLoading: false};

export const programmesReducer = createReducer(
  initialState,
  on(retrievedProgrammesList, (state) => { return {...state, isLoading: true} }),
  on(retrievedProgrammesListSuccess, (state, {payload}) => {
    const programmesMap: Map<string, boolean> = new Map()
    const data: Array<IProgrammes> = []
    for (const programme of payload) {
      if(!programmesMap.has(programme.id.toString())) {
        data.push(programme)
        programmesMap.set(programme.id.toString(), true)
      }
    }
    return {data, isLoading: false}
  }),
  on(retrievedProgrammesListError, (state, {error}) => {
    return {data: [], isLoading: false, error}
  })
);
