export interface ILaunches {
  flight_number: number;
  mission_name: string;
  rocket: { rocket_name: string; rocket_type: string };
  links: { mission_patch_small: string };
}
