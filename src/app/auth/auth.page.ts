import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../app.config";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  protected apiServer = AppConfig.settings.uitpasApi;

  constructor() { }

  ngOnInit() {
  }

}
