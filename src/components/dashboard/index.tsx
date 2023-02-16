import { useParkingLot } from '@/context/parkingLot';
import { Divider, Typography } from '@mui/material';
import Body from '../layout/body';
import Park from './park';
import ParkHistory from './parkHistory';
import SpotData from './spotsData';

const Dashboard: React.FC = () => {
  const parkingLot = useParkingLot();

  return (
    <Body>
      <Typography component="h1" variant="h1">
        Parking Lot
      </Typography>
      <Divider />
      <SpotData />
      <Park parkingLotId={parkingLot.parkingLotId} />
      <ParkHistory />
    </Body>
  );
};

export default Dashboard;
