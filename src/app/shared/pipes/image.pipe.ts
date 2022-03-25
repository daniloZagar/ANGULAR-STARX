import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Pipe({ name: 'defaultImage' })
export class DefaultImagePipe implements PipeTransform {
  constructor(private http: HttpClient) {}
  transform(url: string): string {
    let defaultImg = '../../../assets/images/rocket.jpg';
    let validUrl = this.http.get(url);
    if (validUrl !== null) {
      return url;
    } else {
      return defaultImg;
    }
  }
}
