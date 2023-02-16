import InfoCard from './infoCard';
import { StyledDiv } from './_styles';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  slotInfo: IDashboardSummary | undefined;
  loading: boolean;
}

const SpotData: React.FC<Props> = ({ loading, slotInfo }) => {
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
