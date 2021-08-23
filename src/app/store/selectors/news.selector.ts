import { createFeatureSelector, createSelector } from "@ngrx/store";
import { INews } from "src/app/models/news.model";
import { IStoreResponse, IStoreResponseError } from "src/app/models/store.model";

const newsFeature = createFeatureSelector<IStoreResponse<INews[]>>('news')

export const allNewsSelector = createSelector(newsFeature, (state): IStoreResponse<INews[]> => state)
export const newsByIdSelector = (id: string) => createSelector(newsFeature, (state): IStoreResponse<INews> => {
  if(Array.isArray(state.data)) {
    const newsItem = state.data.find(item => item.id === id)
    if(newsItem) {
      return {...state, data: newsItem}
    }
  }
  const error: IStoreResponseError = {message: '', error: ''}
  return {...state, data: {body: '', id: '', title: ''}, error}
})

