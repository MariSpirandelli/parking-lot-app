import useFetch from './useFetch';

type FetchSlotHookReturn = [
  IVehicleType[] | undefined,
  {
    loading: boolean;
    error: any;
  }
];

const useSlot = (): FetchSlotHookReturn => {
  const { loading, data, error } =
    useFetch<IVehicleType[]>(`/api/vehicle-types/`);

  return [data, { loading, error }];
};

export default useSlot;
