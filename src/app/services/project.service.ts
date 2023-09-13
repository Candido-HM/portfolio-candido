import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url: string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  testService(){
    return 'Probando el servicio de Angular';
  }

  getProjects(): Observable <any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.get(this.url+'projects', {headers: headers});
  }
}
