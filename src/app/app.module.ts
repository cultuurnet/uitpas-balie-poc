import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AppConfig} from './app.config';
import { HttpClientModule } from '@angular/common/http';
import {TwitterService} from 'ng2-twitter-httpclient';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';

export function initializeApp(appConfig: AppConfig) {
    return () => appConfig.load();
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TwitterService,
    NFC,
    Ndef,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppConfig], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
