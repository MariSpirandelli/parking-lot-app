import useFetch from './useFetch';
import apiSlot from '../../helpers/api/slot';

type FetchDashboardSummaryHookReturn = [
  IDashboardSummary | undefined,
  {
    loading: boolean;
    error: any;
    mutate: () => void;
  },
];

const useDashboardSummary = (parkingLotId: number): FetchDashboardSummaryHookReturn => {
  const { loading, data, error, mutate: slotMutate } = useFetch<IDashboardSummary>(`/api/dashboard/${parkingLotId}/slots/status`);

  const mutate = async() =>{
    if (!slotMutate) {
      return;
    }
    const newData = await apiSlot.load(parkingLotId);

    slotMutate(newData, false);
  }

  return [data, { loading, error, mutate }];
};

export default useDashboardSummary;
