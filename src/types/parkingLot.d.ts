export interface IParkingLotSetup {
  vehicleTypeId: number;
  quantity: number;
}

export interface IParkingLot extends IBaseModel {
  name: string;

  slots?: ISlot[];
  parkings: IParking[];
}
