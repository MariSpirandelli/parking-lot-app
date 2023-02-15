import { useParkingLot } from '@/context/parkingLot';

const Dashboard: React.FC = () => {
  const parkingLot = useParkingLot();

  return <p> Dashboard: {parkingLot.parkingLotId}</p>;
};

export default Dashboard;
