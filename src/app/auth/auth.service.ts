import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AppConfig} from '../app.config';
import {TwitterService} from 'ng2-twitter-httpclient';

import { NgxXml2jsonService } from 'ngx-xml2json';
import {EventResponse} from '../models/eventResponse';
import {CultureEvent} from '../models/cultureEvent';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private url = AppConfig.settings.uitpasApi;
    private key = AppConfig.settings.consumerKey;
    private secret = AppConfig.settings.secret;

    private authenticated: Boolean = false;
    private balieEvent: EventResponse;


    constructor(private api: TwitterService,
                private http: HttpClient,
                private xml2json: NgxXml2jsonService) {}

    private parseXmlResponse(obj) {
        const response = obj.response;
        const cultureEvent = response.cultureEvent;
        const eventResponse = new EventResponse(
            response.code,
            new CultureEvent(
                cultureEvent.cdbid,
                cultureEvent.checkinAllowed,
                cultureEvent.gracePeriodMonths,
                cultureEvent.locationId,
                cultureEvent.numberOfPoints,
                cultureEvent.organizerId,
                cultureEvent.organizerName,
                cultureEvent.price,
                cultureEvent.tariff,
                cultureEvent.title
            ),
            response.autodetect,
            response.checkinFromDate,
            response.checkinCode
        );
        return eventResponse;
    }

    authenticate() {

        /*return this.api.get(
            this.url + '/uitpas/cid/event',
            {},
            {
                consumerKey: this.key,
                consumerSecret: this.secret
            },
            {
                token: '',
                tokenSecret: ''
            })
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );*/

        const xmlFile = 'assets/mocks/event.xml';
        return this.http.get(xmlFile, { responseType: 'text' })
            .subscribe(
                data => {
                    this.authenticated = true;
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(data, 'text/xml');
                    const obj = this.xml2json.xmlToJson(xml);
                    this.balieEvent = this.parseXmlResponse(obj);
                },
                error => {
                    this.authenticated = false;
                    console.log('Error: ', error);
                }
            );
    }

    getApiGetUrl(endpoint: string, query: object) {
        return this.api.get(
            this.url + endpoint,
            query,
            {
                consumerKey: this.key,
                consumerSecret: this.secret
            },
            {
                token: '',
                tokenSecret: ''
            });
    }

    getApiPostUrl(endpoint: string, params: object) {
        return this.api.post(
            this.url + endpoint,
            params,
            {
                consumerKey: this.key,
                consumerSecret: this.secret
            },
            {
                token: '',
                tokenSecret: ''
            });
    }

    getBalieEvent() {
        return this.balieEvent;
    }

    isAuthenticated() {
        return this.authenticated;
    }
}
