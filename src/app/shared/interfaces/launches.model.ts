export interface ILaunches {
  flight_number: number;
  mission_name: string;
  rocket: { rocket_name: string; rocket_type: string };
  links: { mission_patch_small: string; flickr_images: [] };
}
export interface ILaunchesItems extends Array<ILaunches> {}
export interface IFlickrImage {
  imagePath: string;
  imageWidth: number;
}
export interface IFlickrImageItems extends Array<IFlickrImage> {}
