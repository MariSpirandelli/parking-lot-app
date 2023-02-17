declare interface IParkingLotSetup {
  vehicleTypeId: number;
  quantity: number;
}

declare interface IParkingLot extends IBaseModel {
  name: string;

  slots?: ISlot[];
  parkings: IParking[];
}
