import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ILaunches } from 'src/app/shared/interfaces/launches.model';
import { LaunchesService } from 'src/app/shared/services/launches.service';

@Component({
  selector: 'app-launches-details',
  templateUrl: './launches-details.component.html',
  styleUrls: ['./launches-details.component.scss'],
})
export class LaunchesDetailsComponent implements OnInit {
  launchDetail = {
    missionName: '',
    rocketName: '',
    rocketType: '',
    imagePath: '',
  };
  constructor(
    private launchDetails: LaunchesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.launchDetails
      .getLaunchesDetails(this.route.snapshot.params['id'])
      .subscribe((data: ILaunches) => {
        console.log(data);
        this.launchDetail.missionName = data.mission_name;
        this.launchDetail.rocketName = data.rocket.rocket_name;
        this.launchDetail.rocketType = data.rocket.rocket_type;
        this.launchDetail.imagePath = data.links.mission_patch_small;
      });
  }
}
