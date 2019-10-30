import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {

  // tslint:disable-next-line:no-inferrable-types
  private url: string = '';

  constructor(
    private http: HttpClient
  ) { }

  configure(url: string) {
    this.url = url;
  }

  // tslint:disable-next-line:variable-name
  setUrl(_url: string) {
    this.url = _url;
  }

  private getToken() {
    const user = StorageService.getSession('user');
    return user === null ? null : user.jwt;
  }

  private setUrlToken(url: any, auth: any) {
    if (!auth) { return url; }

    if (url.indexOf('?') > -1) {
      return `${url}&token=${this.getToken()}`;
    }

    return `${url}?token=${this.getToken()}`;
  }

  post(url: string, data: any, auth: boolean = false): Observable<any> {
    return this.http.post(this.setUrlToken(this.url + url, auth), data, { observe: 'response' });
  }

  get(url: string, auth: boolean = false): Observable<any> {
    if (url.indexOf('http') > -1) {
      return this.http.get(url, { observe: 'response'});
    }

    return this.http.get(this.setUrlToken(this.url + url, auth), { observe: 'response' });
  }

  delete(url: string, auth: boolean = false): Observable<any> {
    return this.http.delete(this.setUrlToken(this.url + url, auth), { observe: 'response' });
  }

  put(url: string, data: any, auth: boolean = false): Observable<any> {
    return this.http.put(this.setUrlToken(this.url + url, auth), data, { observe: 'response' });
  }
}
