import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {CultureEvent} from '../models/cultureEvent';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private event: CultureEvent;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    const response = this.authService.getBalieEvent();
    this.event = response.getCultureEvent();
  }

}
