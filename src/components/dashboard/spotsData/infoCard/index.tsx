import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import Loading from '../../../Loading';

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  title: string;
  quantity: number;
  total: number;
  loading: boolean;
}

const InfoCard: React.FC<Props> = ({
  title,
  quantity,
  total,
  loading,
  className,
  style,
}) => {
  return (
    <Card className={className} style={style}>
      <CardHeader title={title} />
      <CardContent>
        {loading && <Loading />}
        {!loading && (
          <Typography variant="body2" color="text.secondary">
            {quantity}/{total}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
