import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestWebinarLinkService {
  constructor(private http: HttpClient) { }

  public getCustomersTable(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/0c4d8de522d047d8b53804b878919dc9`);
  }
}
