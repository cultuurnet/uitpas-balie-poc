import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent implements OnInit {
  @Input() pointsAmount: number;
  @Input() showString: boolean = true;

  constructor() { }

  ngOnInit() {}

}
