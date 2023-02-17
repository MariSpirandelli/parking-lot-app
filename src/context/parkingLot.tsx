import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import useSlot from '../hooks/api/useSlots';

type ParkingLot = {
  parkingLotId: number;
  slots: ISlot[] | undefined;
  setHasSetup: (hasSetup: boolean) => void;
  hasSetup: () => boolean;
  loading: boolean;
};

const parkingLotId = 1; // TODO: get proper parkingLotId when authentication is done
const ParkingLotContext = createContext<ParkingLot>({
  parkingLotId,
  slots: [],
  setHasSetup: (hasSetup: boolean) => hasSetup,
  hasSetup: () => false,
  loading: true,
});

function ParkingLotProvider(props: { children: ReactNode }) {
  const [parkingLotData, setParkingLotData] = useState<number>(parkingLotId);
  const [setUpComplete, setSetUpComplete] = useState<boolean>();
  const [data, { loading }] = useSlot(parkingLotId);

  useEffect(() => {
    if (!data) {
      return;
    }
    setSetUpComplete(data.length > 0);
  }, [data, parkingLotData]);

  const parkingLot = useMemo<ParkingLot>(() => {
    return {
      parkingLotId: parkingLotData,
      slots: data,
      setHasSetup: setSetUpComplete,
      hasSetup: () => setUpComplete || false,
      loading,
    };
  }, [parkingLotData, setUpComplete]);

  return <ParkingLotContext.Provider value={parkingLot}>{props.children}</ParkingLotContext.Provider>;
}

const useParkingLot = () => useContext(ParkingLotContext);

export { ParkingLotProvider, useParkingLot };
