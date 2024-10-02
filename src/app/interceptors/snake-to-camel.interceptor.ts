import {HttpEvent, HttpInterceptorFn, HttpResponse} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import {objectToCamel} from "ts-case-convert";

export const snakeToCamelInterceptor: HttpInterceptorFn = (
    req,
    next
): Observable<HttpEvent<any>> => {
  return next(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.body) {
          const modifiedBody = objectToCamel(event.body);
          return event.clone({ body: modifiedBody });
        }
        return event;
      })
  );
};