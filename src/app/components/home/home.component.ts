import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import {
  IFlickrImage,
  IFlickrImageItems,
  ILaunches,
} from '../../shared/interfaces/launches.model';
import { LaunchesService } from '../../shared/services/launches.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private launchService: LaunchesService,
  ) {}
  flickrImages: string[] = [];
  loading: boolean = false;
  imagesArr: IFlickrImageItems = [];
  imageObj: IFlickrImage = {
    imagePath: '',
    imageWidth: 0,
  };
  getImages() {
    this.launchService.getLaunchesData().subscribe((data) => {
      data.forEach((d: any) => {
        if (d.links.flickr_images.length > 0) {
          this.flickrImages.push(d.links.flickr_images[0]);
        }
      });
      this.getRadomImages(this.flickrImages);
    });
  }
  randomNum() {
    var number = Math.floor(Math.random() * 50 + 200);
    return number;
  }
  getRadomImages(images: string[]) {
    images.forEach((img) => {
      let newImageObject = {
        imagePath: img,
        imageWidth: this.randomNum(),
      };
      this.imageObj = { ...newImageObject };
      this.imagesArr.push(this.imageObj);
    });
    console.log(this.imagesArr);
  }
  ngOnInit(): void {
    this.getImages();
  }
}
