import { useParkingLot } from '@/context/parkingLot';
import useDashboardSummary from '@/hooks/api/useDashbord';
import useParkingInfo from '@/hooks/api/useParking';
import { Divider, Typography } from '@mui/material';
import Body from '../layout/body';
import Park from './park';
import ParkHistory from './parkHistory';
import SpotData from './spotsData';

const Dashboard: React.FC = () => {
  const parkingLot = useParkingLot();
  const [parkings, { loading: parkingLoading, mutate: parkingMutate }] = useParkingInfo(parkingLot.parkingLotId);
  const [slotInfo, { loading: slotInfoLoading, mutate: slotInfoMutate }] = useDashboardSummary(parkingLot.parkingLotId);

  const onParkingChange = ()=>{
    parkingMutate();
    slotInfoMutate();
  }

  return (
    <Body>
      <Typography component="h1" variant="h1">
        Parking Lot
      </Typography>
      <Divider />
      <SpotData loading={slotInfoLoading} slotInfo={(slotInfo)}/>
      <Park parkingLotId={parkingLot.parkingLotId} onChange={onParkingChange}/>
      <ParkHistory parkings={parkings || []} loading={parkingLoading} parkingLotId={parkingLot.parkingLotId} onChange={onParkingChange}/>
    </Body>
  );
};

export default Dashboard;
