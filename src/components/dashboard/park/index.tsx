import Loading from '@/components/Loading';
import useVehicleType from '@/hooks/api/useVehicleType';
import { FormControl, MenuItem, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { StyledDiv } from './_styles';
import apiVehicle from '../../../helpers/api/vehicle';
import apiParking from '../../../helpers/api/park';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  parkingLotId: number;
  onChange: () => void;
}

const Park: React.FC<Props> = ({ parkingLotId, onChange }) => {
  const [plate, setPlate] = useState<string>();
  const [vehicleTypeId, setVehicleTypeId] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSubimitting, setIsSubimitting] = useState<boolean>(false);

  const [vehicleTypes, { loading }] = useVehicleType();

  const submit = async () => {
    if (!plate?.trim().length || !vehicleTypeId) {
      setErrorMessage('Vehicle Plate and type are mandatory fields!');
      return;
    }
    setIsSubimitting(true);
    try {
      const newVehicle: IVehicle = await apiVehicle.save(plate.toUpperCase(), vehicleTypeId);

      if ((newVehicle as any).error?.message) {
        return setErrorMessage((newVehicle as any).error.message);
      }

      const result = await apiParking.park(parkingLotId, newVehicle.id);
      cleanInputData();
      if ((result as any)?.error) {
        setErrorMessage((result as any)?.error.message);
        return;
      }
    } catch (err) {
      setErrorMessage(`Error while proceeding to checkout. Try again later`);
    }
  };

  const cleanInputData = () => {
    setIsSubimitting(false);
    setErrorMessage('');
    setPlate('');
    onChange();
  };

  return (
    <StyledDiv>
      <Paper elevation={24}>
        <Typography component="h4" variant="h4">
          Park vehicle
        </Typography>

        <div className="error-message">
          <Typography component="h6" variant="h6" color="red">
            {errorMessage}
          </Typography>
        </div>
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
                    inputProps={{ maxLength: 7 }}
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
                      helperText="Please select vehicle type"
                      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
                <Button color="primary" variant="contained" onClick={submit} disabled={isSubimitting}>
                  <>
                    {!isSubimitting && <>Park</>}
                    {isSubimitting && <Loading />}
                  </>
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
