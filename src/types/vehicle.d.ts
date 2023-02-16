declare interface IVehicle extends IBaseModel {
  vehicleTypeId: number;
  plate: string;

  type: IVehicleType;
}
