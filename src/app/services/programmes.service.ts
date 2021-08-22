import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProgrammes } from '../models/programmes.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammesService {

  constructor(private http: HttpClient) { }

  /**
   * Consulta la lista de programas academicos
   * @returns
   */
  getProgrammes(): Observable<Array<IProgrammes>> {
    return this.http.get<IProgrammes[]>(environment.api + '/servicios/programas')
  }
}
