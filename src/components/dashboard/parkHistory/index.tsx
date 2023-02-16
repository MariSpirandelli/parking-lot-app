import Loading from '@/components/Loading';
import useParkingInfo from '@/hooks/api/useParking';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Snackbar,
} from '@mui/material';
import { useState } from 'react';
import apiParking from '../../../helpers/api/park';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  parkingLotId: number;
  parkings: IParking[];
  loading: boolean;
  onChange: () => void;
}

const ParkHistory: React.FC<Props> = ({ parkingLotId, parkings, loading, onChange }) => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const remove = async (vehicleId: number) => {
    try {
      const result = await apiParking.remove(parkingLotId, vehicleId);
      if ((result as any)?.error) {
        setErrorMessage((result as any)?.error.message);
        return;
      }
      onChange();
      setErrorMessage(`Vehicle removed with success!`);
      setOpen(true);
    } catch (error: any) {
      setErrorMessage(error.error.message);
      setOpen(true);
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={errorMessage}
      />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Plate</TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="center">
                SpotID
              </TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="center">
                SpotType
              </TableCell>
              <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="center">
                Parked
              </TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && <Loading />}
            {!loading && !parkings?.length && (
              <TableRow key={`parking-empty-row`}>
                <TableCell component="th" scope="parking" align="center" colSpan={5}>
                  There's no parked car
                </TableCell>
              </TableRow>
            )}
            {!loading &&
              (parkings?.length || 0) > 0 &&
              parkings?.map((parking, i) => (
                <TableRow key={`parking_${i}`}>
                  <TableCell component="th" scope="parking" align="right">
                    {parking?.vehicle?.plate}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="right">
                    {parking?.slotId}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="right">
                    {parking?.slot?.vehicleType?.type}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }} align="right">
                    {!parking.checkoutAt ? 'Occupied' : 'Available'}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      disabled={!!parking.checkoutAt}
                      onClick={() => remove(parking.vehicleId)}
                      color="primary"
                    >
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ParkHistory;
