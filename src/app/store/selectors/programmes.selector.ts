import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProgrammes } from "src/app/models/programmes.model";
import { IStoreResponse } from "src/app/models/store.model";

const programmesFeature = createFeatureSelector<IStoreResponse<IProgrammes[]>>('programmes')

export const allProgrammesSelector = createSelector(programmesFeature, (state): IStoreResponse<IProgrammes[]> => state)
