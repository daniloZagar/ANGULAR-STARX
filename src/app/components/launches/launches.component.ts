import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ILaunches } from 'src/app/shared/interfaces/launches.model';
import { LaunchesService } from 'src/app/shared/services/launches.service';


@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss'],
})
export class LaunchesComponent implements OnInit, AfterViewInit {
  @ViewChildren('theLastList', { read: ElementRef })
  theLastList?: QueryList<ElementRef>;
  showResults: number = 0;
  launches: ILaunches[] = [];
  observer: any;
  constructor(private launchesService: LaunchesService) {}
  getLaunches() {
    this.launchesService.getLaunches(this.showResults).subscribe((data) => {
      data.forEach((element: ILaunches) => {
        this.launches.push(element);
      });
    });
  }
  ngOnInit(): void {
    this.getLaunches();
    this.intersectionObserver();
  }

  ngAfterViewInit() {
    this.theLastList?.changes.subscribe((d) => {
      console.log(d);
      if (d.last) this.observer.observe(d.last.nativeElement);
    });
  }

  intersectionObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.showResults += 20;
        this.getLaunches();
      }
    }, options);
  }
}
