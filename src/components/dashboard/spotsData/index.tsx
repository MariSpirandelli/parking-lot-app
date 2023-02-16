import useDashboardSummary from '@/hooks/api/useDashbord';
import InfoCard from './infoCard';
import { StyledDiv } from './_styles';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  parkingLotId: number;
}

const SpotData: React.FC<Props> = ({ parkingLotId }) => {
  const [slotInfo, { loading }] = useDashboardSummary(parkingLotId);

  return (
    <StyledDiv>
      <InfoCard loading={loading} title="Spots Remaining" quantity={slotInfo?.remaining || 0} />
      <InfoCard loading={loading} title="Cars Parked" quantity={slotInfo?.car?.parked || 0} />
      <InfoCard loading={loading} title="Motorcycles Parked" quantity={slotInfo?.motorcycle?.parked || 0} />
      <InfoCard loading={loading} title="Vans Parked" quantity={slotInfo?.van?.parked || 0} />
    </StyledDiv>
  );
};

export default SpotData;
