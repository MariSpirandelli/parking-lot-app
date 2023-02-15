import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { OverlayDiv } from './_styles';

interface Props {
  title?: string;
  style?: React.CSSProperties;
}

const Loading: React.FC<Props> = ({ title, style }) => (
  <OverlayDiv style={style} className="loading-spinner-overlay">
    <CircularProgress />
    {title && <Typography>{title}</Typography>}
  </OverlayDiv>
);

export default Loading;
