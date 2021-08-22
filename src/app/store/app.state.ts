import { INews } from "../models/news.model";
import { IProgrammes } from "../models/programmes.model";

export interface AppState {
  news: ReadonlyArray<INews>
  programmes: ReadonlyArray<IProgrammes>
}
