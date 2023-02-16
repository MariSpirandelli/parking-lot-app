import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import Loading from '../../../Loading';

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  quantity: number;
  loading: boolean;
}

const InfoCard: React.FC<Props> = ({ title, quantity, loading, className, style }) => {
  return (
    <Card className={className} style={style}>
      <CardHeader title={title} />
      <CardContent>
        {loading && <Loading />}
        {!loading && (
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
