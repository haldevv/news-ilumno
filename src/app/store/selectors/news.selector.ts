import { createFeatureSelector, createSelector } from "@ngrx/store";
import { INews } from "src/app/models/news.model";
import { IStoreResponse } from "src/app/models/store.model";

const newsFeature = createFeatureSelector<IStoreResponse<INews[]>>('news')

export const allNewsSelector = createSelector(newsFeature, (state): IStoreResponse<INews[]> => state)
