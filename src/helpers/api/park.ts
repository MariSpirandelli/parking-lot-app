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

const remove = (parkingLotId: number, vehicleId: number): Promise<IParking[]> => {
  return api.put(`/api/parkings/${parkingLotId}/remove/${vehicleId}`);
};

const load = (parkingLotId: number, filters: IParkingFilter): Promise<IParking[]> => {
  return api.get(`/api/parkings/${parkingLotId}`, { params: filters });
};

export default {
  load,
  park,
  remove,
};
