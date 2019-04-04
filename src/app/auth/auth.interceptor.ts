import { Injectable } from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import {AppConfig} from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const consumerKey = AppConfig.settings.consumerKey;
        const consumerSecret = AppConfig.settings.secret;
        console.log('intercepted!');
        console.log(request);

        request = request.clone({
            headers: request.headers.set('OAuth', `oauth_consumer_key="${consumerKey}",
                oauth_consumer_secret="${consumerSecret}",
                oauth_signature_method="HMAC-SHA1",`)
            /*setHeaders: {
                Authorization: `OAuth oauth_consumer_key="${consumerKey}",
                oauth_consumer_secret="${consumerSecret}",
                oauth_signature_method="HMAC-SHA1",
                oauth_timestamp="1554375134",
                oauth_nonce="AHRep9l9NT4",
                oauth_version="1.0"`
            }*/
        });

        return next.handle(request);
    }
}
