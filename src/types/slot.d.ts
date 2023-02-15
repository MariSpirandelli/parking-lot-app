declare type SlotStatus = 'available' | 'occupied';

declare interface ISlotFilter {
  inUse?: boolean;
  vehiclesTypesIds?: number[];
}

declare interface ISlot extends IBaseModel {
  parkingLotId: number;
  status: SlotStatus;

  vehicleType?: IVehicleType;
}
