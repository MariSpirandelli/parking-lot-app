import useFetch from './useFetch';

type FetchDashBoardSummaryHookReturn = [
  IDashboardSummary | undefined,
  {
    loading: boolean;
    error: any;
  },
];

const useDashBoardSummary = (parkingLotId: number): FetchDashBoardSummaryHookReturn => {
  const { loading, data, error } = useFetch<IDashboardSummary>(`/api/dashboard/${parkingLotId}/slots/status`);

  return [data, { loading, error }];
};

export default useDashBoardSummary;
