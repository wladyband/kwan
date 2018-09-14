import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CategoriaService {

  categoriasUrl: string;

  constructor(private http: Http) {
    this.categoriasUrl = `${environment.apiUrl}/categorias`;
   }

  listarTodas(): Promise<any> {
    const headers = new Headers();


    return this.http.get(this.categoriasUrl, { headers })
      .toPromise()
      .then(response => response.json());
  }

}
