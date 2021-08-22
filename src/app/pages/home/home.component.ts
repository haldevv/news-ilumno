import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { INews } from 'src/app/models/news.model';
import { IStoreResponse, IStoreResponseError } from 'src/app/models/store.model';
import { allNewsSelector } from 'src/app/store/selectors/news.selector';
import { STORE_ACTIONS } from 'src/app/store/store.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  isLoadingNews = false
  error: IStoreResponseError | undefined
  news: INews[] = []
  onDestroySubject: Subject<void> = new Subject()

  constructor(private store: Store<IStoreResponse<INews[]>>) { }

  /**
   * Ciclo de vida del componente
   */
  ngOnInit(): void {
    this.listenChangesInNewsEvents()
    this.store.dispatch({type: STORE_ACTIONS.NEWS.LOAD})
  }

  /**
   * Ciclo de vida del componente
   */
  ngOnDestroy() {
    this.onDestroySubject.next()
    this.onDestroySubject.complete()
  }

  /**
   * Escucha los cambios del store en el selector 'news'
   */
  listenChangesInNewsEvents() {
    this.store.pipe(select(allNewsSelector)).pipe(
      takeUntil(this.onDestroySubject.asObservable()),
    ).subscribe(({isLoading, data, error}) => {
      this.isLoadingNews = isLoading
      this.news = data
      this.error = error
    })
  }

}
