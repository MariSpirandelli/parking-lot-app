import api from './index';

const load = (parkingLotId: number): Promise<IDashboardSummary> => {
  return api.get(`/api/dashboard/${parkingLotId}/slots/status`);
};

export default {
  load,
};
