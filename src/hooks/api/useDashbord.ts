import useFetch from './useFetch';

type FetchDashboardSummaryHookReturn = [
  IDashboardSummary | undefined,
  {
    loading: boolean;
    error: any;
  },
];

const useDashboardSummary = (parkingLotId: number): FetchDashboardSummaryHookReturn => {
  const { loading, data, error } = useFetch<IDashboardSummary>(`/api/dashboard/${parkingLotId}/slots/status`);

  return [data, { loading, error }];
};

export default useDashboardSummary;
