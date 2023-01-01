import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environment/environment";

export class BaseHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const baseRequest = req.clone({ url: `${environment.baseApiUrl}${req.url}` });
        return next.handle(baseRequest);
    }

}