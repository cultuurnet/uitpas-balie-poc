import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'location-header',
  templateUrl: './location-header.component.html',
  styleUrls: ['./location-header.component.scss'],
})
export class LocationHeaderComponent implements OnInit {
  @Input() loadedLocation: string;

  constructor() { }

  ngOnInit() {}

}
