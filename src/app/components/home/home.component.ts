import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import {
  IFlickrImage,
  IFlickrImageItems,
  ILaunches,
} from '../../shared/interfaces/launches.model';
import { LaunchesService } from '../../shared/services/launches.service';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  animate,
  style,
  transition,
  trigger,
  AnimationEvent,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({ tranform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
      transition('visible => void', [
        style({ tranform: 'scale(0.5)' }),
        animate('150ms', style({ transform: 'scale(1)' })),
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [])
    ])
  ],
})
export class HomeComponent implements OnInit {
  constructor(private launchService: LaunchesService) {}
  flickrImages: string[] = [];
  loading: boolean = false;
  imagesArr: IFlickrImageItems = [];
  imageObj: IFlickrImage = {
    imagePath: '',
    imageWidth: 0,
  };
  previewImage = false;
  showMask = false;
  currentLightboxImage = this.flickrImages[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;
  showCount = 0;
  prevArrow = faArrowCircleLeft;
  nextArrow = faArrowCircleRight;
  xMark = faXmark;
  getImages() {
    this.launchService.getLaunchesData().subscribe((data) => {
      data.forEach((d: any) => {
        if (d.links.flickr_images.length > 0) {
          this.flickrImages.push(d.links.flickr_images[0]);
        }
      });
    });
    this.totalImageCount = this.flickrImages.length;
  }

  ngOnInit(): void {
    this.getImages();
  }
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.flickrImages[index];
  }
  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }
  onClosePreview(){
    this.previewImage = false
  }
}
