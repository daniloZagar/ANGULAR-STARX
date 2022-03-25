import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  private requests: HttpRequest<any>[] = [];
  constructor(private loaderService: LoaderService) {}
  removeRequest(req: HttpRequest<any>) {
    const i = this.requests.indexOf(req);
    console.log('indexOf', i);
    if (i >= 0) {
      this.requests.splice(i, 1);
      console.log('sliced', this.requests);
    }
    console.log('length of requests', this.requests.length);
    this.loaderService.isLoading.next(this.requests.length > 0);
    // Ako ima podataka u request zatvori request
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.requests.push(req);
    console.log('request from intercept', this.requests);
    this.loaderService.isLoading.next(true);
    return Observable.create((observer: any) => {
      const subscription = next.handle(req).subscribe(
        (event) => {
          if (event instanceof HttpResponse) {
            this.removeRequest(req);
            observer.next(event);
          }
        },
        (err) => {
          alert('error' + err);
          this.removeRequest(req);
          observer.error(err);
        },
        () => {
          this.removeRequest(req);
          observer.complete();
        }
      );
      return () => {
        this.removeRequest(req);
        subscription.unsubscribe;
      };
    });
  }
}
