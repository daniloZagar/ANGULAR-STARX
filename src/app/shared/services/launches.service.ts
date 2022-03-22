import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  baseUrl = 'https://api.spacexdata.com/v3/launches';
  constructor(private http: HttpClient) {}
  getLaunches(offset: number): Observable<any> {
    return this.http
      .get(`${this.baseUrl}?limit=20&offset=${offset}`)
      .pipe(map((response) => response));
  }
}
