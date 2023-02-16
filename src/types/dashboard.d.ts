declare interface Info {
  available: number;
  total: number;
}

declare interface Dashboard {
  sumary: Info;
  [key in VehicleTypeEnum]: Info;
}
