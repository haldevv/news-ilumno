import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { INews } from 'src/app/models/news.model';
import { IStoreResponse, IStoreResponseError } from 'src/app/models/store.model';
import { newsByIdSelector } from 'src/app/store/selectors/news.selector';
import { STORE_ACTIONS } from 'src/app/store/store.actions';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsId: string = ''
  isLoadingNews = false
  error: IStoreResponseError | undefined
  news: INews | undefined
  onDestroySubject: Subject<void> = new Subject()

  constructor(private store: Store<IStoreResponse<INews>>, private activatedRoute: ActivatedRoute) { }

  /**
   * Ciclo de vida del componente
   */
  ngOnInit(): void {
    this.newsId = this.activatedRoute.snapshot.params['id']
    this.listenChangesInNewsEvents()
    this.store.dispatch({type: STORE_ACTIONS.NEWS.LOAD})
  }

  /**
   * Escucha los cambios del store en el selector 'news'
   */
  listenChangesInNewsEvents() {
    this.store.pipe(select(newsByIdSelector(this.newsId))).pipe(
      takeUntil(this.onDestroySubject.asObservable()),
    ).subscribe(({isLoading, data, error}) => {
      this.isLoadingNews = isLoading
      this.news = data
      this.error = error
    })
  }
}
