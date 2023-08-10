import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=04bd82c4dbcb488e87bda2303ad411de';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.url);
  }
}
