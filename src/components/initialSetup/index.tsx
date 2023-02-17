import { useParkingLot } from '@/context/parkingLot';
import useVehicleType from '@/hooks/api/useVehicleType';
import { Typography, Divider, Paper, Button, FormControl, MenuItem, TextField, InputLabel } from '@mui/material';
import { useState } from 'react';
import Body from '../layout/body';
import Loading from '../Loading';
import { StyledDiv, StyledError } from './_styles';
import apiParkingLot from '../../helpers/api/parkingLot';

const InitialSetup: React.FC = () => {
  const parkingLot = useParkingLot();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isSubimitting, setIsSubimitting] = useState<boolean>(false);
  const [slots, setSlots] = useState<IParkingLotSetup[]>([]);
  const [vehicleTypes, { loading }] = useVehicleType();

  const quantityChange = (slotIndex: number, vehicleTypeId: number, quantity: string) => {
    slots[slotIndex] = { quantity: parseInt(quantity, 10), vehicleTypeId };
    setSlots(slots);
  };

  const submit = async () => {
    if (!slots?.length || slots.every((slot) => !slot.quantity)) {
      setErrorMessage(`You must create a few slots first`);
      return;
    }

    const newSlots = slots.filter((slot) => !!slot.vehicleTypeId);

    setIsSubimitting(true);
    try {
      const result = await apiParkingLot.setup(parkingLot.parkingLotId, newSlots);
      setIsSubimitting(false);
      if ((result as any)?.error) {
        setErrorMessage((result as any)?.error.message);
        return;
      }
      parkingLot.setHasSetup(true);
    } catch (error) {
      setErrorMessage(`Error while proceeding to checkout. Try again later`);
    }
  };

  const renderControls = () => {
    return vehicleTypes?.map((vehicleType, i) => {
      console.log(vehicleType);
      console.log(slots);
      return (
        <>
          <div className="input-wrapper">
            <FormControl size="medium" variant="outlined">
              <TextField
                key={`${vehicleType.type}_${vehicleType.id}`}
                size="medium"
                required
                type="number"
                label={vehicleType.type}
                id={`${vehicleType.type}_${vehicleType.id}`}
                value={slots[i]?.quantity}
                inputProps={{ maxLength: 2 }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  quantityChange(i, vehicleType.id, event.target.value);
                }}
              />
            </FormControl>
          </div>
        </>
      );
    });
  };

  return (
    <Body>
      <Typography component="h1" variant="h1">
        Parking Lot - inital setup
      </Typography>
      <Divider />
      <StyledError>
        <Typography component="h6" variant="h6" color="red">
          {errorMessage}
        </Typography>
      </StyledError>

      {loading && <Loading />}
      {!loading && (
        <>
          <StyledDiv>
            <div className="input-group-wrapper">{renderControls()}</div>

            <div className="park-button">
              <Button color="primary" variant="contained" onClick={submit} disabled={isSubimitting}>
                <>
                  {!isSubimitting && <>Save</>}
                  {isSubimitting && <Loading />}
                </>
              </Button>
            </div>
          </StyledDiv>
        </>
      )}
    </Body>
  );
};

export default InitialSetup;
