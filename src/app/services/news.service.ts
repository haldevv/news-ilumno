import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../models/news.model';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  /**
   * Consulta la lista de noticias
   * @returns
   */
  getNews(): Observable<Array<INews>> {
    return this.http.get<INews[]>(environment.api + '/servicios/noticias')
  }
}
