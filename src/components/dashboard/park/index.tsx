import Loading from '@/components/Loading';
import useVehicleType from '@/hooks/api/useVehicleType';
import { FormControl, MenuItem, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { StyledDiv } from './_styles';

const Park: React.FC = () => {
  const [plate, setPlate] = useState<string>();
  const [vehicleTypeId, setVehicleTypeId] = useState<number>(1);

  const [vehicleTypes, { loading }] = useVehicleType();

  return (
    <StyledDiv>
      <Paper elevation={24}>
        <Typography component="h4" variant="h4">
          Park vehicle
        </Typography>
        <div className="paper-wrapper">
          {loading && <Loading />}
          {!loading && (
            <>
              <div className="input-wrapper">
                <FormControl size="medium" variant="outlined">
                  <TextField
                    required
                    id="vehiclePlate"
                    label="Vehicle Plate"
                    helperText="Please type vehicle plate"
                    value={plate}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setPlate(event.target.value);
                    }}
                  />
                </FormControl>

                {!!vehicleTypes?.length && (
                  <FormControl size="medium">
                    <TextField
                      id="vehicleType"
                      select
                      required
                      label="Vehicle type"
                      defaultValue="1"
                      helperText="Please select vehicle type"
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        setVehicleTypeId(parseInt(event.target.value, 10));
                      }}
                    >
                      {vehicleTypes.map((vehicleType) => (
                        <MenuItem key={`vehicleType_${vehicleType.id}`} value={vehicleType.id}>
                          {vehicleType.type}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                )}
              </div>
              <div className="park-button">
                <Button color="primary" variant="contained">
                  {' '}
                  Park
                </Button>
              </div>
            </>
          )}
        </div>
      </Paper>
    </StyledDiv>
  );
};

export default Park;
