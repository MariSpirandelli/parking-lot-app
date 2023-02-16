declare interface IParkingFilter {
  id?: number;
  slotId?: number;
  vehicleId?: number;
  inUse?: boolean;
  parkingLotId?: number;
}

declare interface IParking extends IBaseModel {
  slotId: number;
  vehicleId: number;
  checkinAt: string;
  checkoutAt?: string;

  vehicle: IVehicle;
  slot: ISlot;
}
