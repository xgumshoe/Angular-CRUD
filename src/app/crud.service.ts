import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private uri = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(this.uri + url)
  }

  delete(url: string) {
    return this.http.delete(this.uri + url)
  }

  post(url: string, data: object) {
    return this.http.put(this.uri + url, data)
  }

  put(url: string, data: object) {
    return this.http.put(this.uri + url, data)
  }
}