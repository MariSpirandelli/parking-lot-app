import { useParkingLot } from '@/context/parkingLot';
import useSlot from '@/hooks/api/useSlots';
import InfoCard from './infoCard';
import { StyledDiv } from './_styles';

const SpotData: React.FC = () => {
  const parkingLot = useParkingLot();
  const [slot, { loading }] = useSlot(parkingLot.parkingLotId);

  return (
    <StyledDiv>
      <InfoCard
        loading={loading}
        title="Spots Remaining"
        quantity={7}
        total={10}
      />
      <InfoCard loading={loading} title="Cars Parked" quantity={1} total={2} />
      <InfoCard
        loading={loading}
        title="Motorcycles Parked"
        quantity={2}
        total={3}
      />
      <InfoCard loading={loading} title="Vans Parked" quantity={1} total={2} />
    </StyledDiv>
  );
};

export default SpotData;