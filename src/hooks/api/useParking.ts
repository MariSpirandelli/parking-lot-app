import useFetch from './useFetch';
import apiParking from '../../helpers/api/park';

type FetchParkInfoSummaryHookReturn = [
  IParking[] | undefined,
  {
    loading: boolean;
    error: any;
    mutate: () => void;
  },
];

const useParkingInfo = (parkingLotId: number): FetchParkInfoSummaryHookReturn => {
  const {
    loading,
    data,
    error,
    mutate: parkingsMutate,
  } = useFetch<IParking[]>(`/api/parkings/${parkingLotId}`, {
    params: {
      inUse: true,
    },
  });

  const mutate = async () => {
    if(!parkingsMutate){
      return;
    }
    const newData = await apiParking.load(parkingLotId, {inUse: true})
    parkingsMutate((newData || []), false);
  };

  return [data, { loading, error, mutate }];
};

export default useParkingInfo;
