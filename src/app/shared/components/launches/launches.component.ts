import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit, AfterViewInit {
  launches = [];
  showResults = 0;
  options = {};
  visibility = false;

  constructor(private launchesService: LaunchesService) {}
  getLaunches() {
    this.launchesService.getLaunches(this.showResults).subscribe((data) => {
      this.launches = data;
    });
  }
  show(e: any) {
    this.visibility = e;
    console.log('this.visibility', this.visibility);
  }

  ngOnInit(): void {
    this.getLaunches();
  }
  ngAfterViewInit(): void {
    if (this.visibility) {
      console.log(this.visibility);
      this.showResults += 20;
      this.getLaunches();
    }
  }
  ngAfterContentInit() {}
  intersectionObserver() {}
}
