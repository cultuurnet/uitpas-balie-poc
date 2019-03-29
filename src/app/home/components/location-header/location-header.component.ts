import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'location-header',
  templateUrl: './location-header.component.html',
  styleUrls: ['./location-header.component.scss'],
})
export class LocationHeaderComponent implements OnInit {
  loadedLocation = 'Sporthal Lago Gent Rozebroeken';

  constructor() { }

  ngOnInit() {}

}
