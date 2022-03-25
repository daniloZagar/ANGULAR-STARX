import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map, mergeMap, Observable } from 'rxjs';
import { ILaunches } from '../interfaces/launches.model';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  baseUrl = 'https://api.spacexdata.com/v3/launches';
  constructor(private http: HttpClient) {}
  getLaunches(offset: number): Observable<any> {
    return this.http.get(`${this.baseUrl}?limit=20&offset=${offset}`);
  }
  getLaunchesDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getLaunchesData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
