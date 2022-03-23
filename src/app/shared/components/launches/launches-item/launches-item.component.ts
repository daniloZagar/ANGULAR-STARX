import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launches-item',
  templateUrl: './launches-item.component.html',
  styleUrls: ['./launches-item.component.scss'],
})
export class LaunchesItemComponent implements OnInit {
  @Input() missionName: string = '';
  @Input() rocketName: string = '';
  @Input() rocketType: string = '';
  @Input() imagePath: string = '';

  constructor() {}

  ngOnInit(): void {}
}
