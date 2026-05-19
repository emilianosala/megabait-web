'use client';

import { useState, useEffect, useCallback } from 'react';
import SplashScreen from './SplashScreen';

export default function SplashProvider({ children }) {
  // Start hidden — sessionStorage is client-only, so we check in useEffect
  // to avoid hydration mismatch between server and client renders.
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // splash desactivado temporalmente — se reactiva cuando esté la versión final
    // if (!sessionStorage.getItem('splashShown')) {
    //   setShowSplash(true);
    // }
  }, []);

  const handleDone = useCallback(() => setShowSplash(false), []);

  return (
    <>
      {showSplash && <SplashScreen onDone={handleDone} />}
      {children}
    </>
  );
}
