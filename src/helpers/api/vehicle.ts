import api from './index';

const save = (plate: string, vehicleTypeId?: number): Promise<IVehicle> => {
  const body = {
    plate,
    vehicleTypeId,
  };

  return api.post(`/api/vehicles/`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
};

export default {
  save,
};
