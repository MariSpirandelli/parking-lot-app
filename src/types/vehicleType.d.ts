declare type VehicleTypeEnum = 'car' | 'motorcycle' | 'van';

declare interface IVehicleType extends IBaseModel {
  type: VehicleTypeEnum;
}
