import api from './index';

const park = (parkingLotId: number, vehicleId: number): Promise<IVehicle> => {
  const body = {
    vehicleId,
  };

  return api.post(`/api/parkings/${parkingLotId}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};

export default {
  park,
};
