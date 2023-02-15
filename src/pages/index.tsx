import Head from 'next/head';
import { useParkingLot } from '@/context/parkingLot';
import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Dashboard from '@/components/dashboard';
import InitialSetup from '@/components/initialSetup';

export default function Home() {
  const parkingLot = useParkingLot();

  const [hasInitialSetup, setHasInitialSetup] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(parkingLot.loading);
  useEffect(() => {
    setHasInitialSetup(parkingLot.hasSetup);
    setIsLoading(false);
  }, [parkingLot.hasSetup]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasInitialSetup) {
    return <Dashboard />;
  }

  return <InitialSetup />;
}
