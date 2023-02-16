import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from '@mui/material';

const rows = [
  {
    vehiclePlate: 'mmmm',
    spotId: 1,
    spotType: 'motocycle',
    isParked: true,
  },
  {
    vehiclePlate: 'kkkk',
    spotId: 2,
    spotType: 'car',
    isParked: false,
  },
];

const ParkHistory: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Plate</TableCell>
            <TableCell
              sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              align="center"
            >
              SpotID
            </TableCell>
            <TableCell
              sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              align="center"
            >
              SpotType
            </TableCell>
            <TableCell
              sx={{ display: { xs: 'none', sm: 'table-cell' } }}
              align="center"
            >
              Parked
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={`parking_${i}`}>
              <TableCell component="th" scope="row" align="right">
                {row.vehiclePlate}
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                align="right"
              >
                {row.spotId}
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                align="right"
              >
                {row.spotType}
              </TableCell>
              <TableCell
                sx={{ display: { xs: 'none', sm: 'table-cell' } }}
                align="right"
              >
                {row.isParked ? 'Occupied' : 'Available'}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  disabled={!row.isParked}
                  color="primary"
                >
                  {' '}
                  Remover{' '}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ParkHistory;
