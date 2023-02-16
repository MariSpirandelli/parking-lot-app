declare interface IDashSummaryDetails {
  parked: number;
}

declare type IDashboardSummary = { remaining: number } & {
  [key in VehicleTypeEnum]: ISlotSummaryDetails;
};