import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news.service';
import { STORE_ACTIONS } from '../store.actions';

@Injectable()
export class NewsEffects {
  constructor(private actions: Actions, private newsService: NewsService) { }

  loadNews = createEffect(() =>
    this.actions.pipe(
      ofType(STORE_ACTIONS.NEWS.LOAD),
      mergeMap(() => this.newsService.getNews().pipe(
        map(news => ({type: STORE_ACTIONS.NEWS.LOAD_SUCCESS, payload: news })),
        catchError(err => of({type: STORE_ACTIONS.NEWS.LOAD_ERROR, error: {message: 'Hubo un error al cargar los datos', error: err}}))
      ))
    )
  )
}
