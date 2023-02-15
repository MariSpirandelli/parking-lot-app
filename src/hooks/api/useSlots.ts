import useFetch from './useFetch';

type FetchSlotHookReturn = [
  ISlot[] | undefined,
  {
    loading: boolean;
    error: any;
  }
];

const useSlot = (parkingLotId: number): FetchSlotHookReturn => {
  const { loading, data, error } = useFetch<ISlot[]>(
    `/api/slots/${parkingLotId}`
  );

  return [data, { loading, error }];
};

export default useSlot;
