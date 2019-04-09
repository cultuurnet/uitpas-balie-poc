import { Injectable } from '@angular/core';

import {AppConfig} from '../../../app.config';
import {AuthService} from '../../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    private url = AppConfig.settings.uitpasApi;
    private key = AppConfig.settings.consumerKey;
    private secret = AppConfig.settings.secret;

  constructor(private auth: AuthService) { }

  submitEmail(email: string) {
    return this.auth.getApiPostUrl('/uitpas/passholder/update/email', {email: email});
  }

  submitPhone(phone: string) {
    return this.auth.getApiPostUrl('/uitpas/passholder/update/phone', {phone: phone});
  }
}
