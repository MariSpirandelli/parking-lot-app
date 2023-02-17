import api from './index';

const setup = (parkingLotId: number, slots: IParkingLotSetup[]): Promise<ISlot[]> => {
  const body = {
    slots,
  };

  return api.put(`/api/parking-lots/${parkingLotId}/setup`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};

export default {
  setup
};
