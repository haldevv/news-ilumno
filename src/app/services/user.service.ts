import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { IRegister } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Consulta la lista de noticias
   * @returns
   */
  register(data: IRegister): Observable<any> {
    return this.http.post(environment.api + '/servicios/registro', data)
  }
}
