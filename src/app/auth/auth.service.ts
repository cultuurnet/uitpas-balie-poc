import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../app.config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = AppConfig.settings.uitpasApi;

    constructor(private http: HttpClient) {}

    authenticate() {
        this.http.get(this.url + '/uitpas/cid/event')
            .subscribe(
                data => console.log(data),
                err => console.log('Error: ', err)
            );
    }

    getTokens() {
        return this.http.post(this.url + '/requestToken', {});
    }
}
