import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from './auth.service';
import {AppConfig} from '../app.config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router) { }

  ngOnInit() {
    this.authService.authenticate();
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('/home');
    }
  }

}