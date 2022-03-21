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
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList?: QueryList<ElementRef>;
  launches = [];
  showResults = 0;
  observer: any;
  constructor(private launchesService: LaunchesService) {}
  getLaunches() {
    this.launchesService.getLaunches(this.showResults).subscribe((data) => {
      console.log(data);
      this.launches = data;
    });
  }
  ngOnInit(): void {
    this.getLaunches();
    this.intersectionObserver();
  }
  ngAfterViewInit(): void {
    this.theLastList?.changes.subscribe((d) => {
      console.log(d);
      if (d.last) {
        this.observer.observe(d.last.nativeElement);
      }
    });
  }
  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('scroll more');
        if (this.showResults < this.launches.length) {
          this.showResults += 20;
          this.getLaunches();
        }
      }
    }, options);
  }
}
