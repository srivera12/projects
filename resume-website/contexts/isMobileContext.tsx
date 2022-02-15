import React, { createContext, useEffect, useState } from 'react';

interface IsMobileContextInterface {
  isMobile: boolean;
  setIsMobile?: Function;
}

export const IsMobileContext = createContext<IsMobileContextInterface>({ isMobile: false });

type ContextProps = {
  children: React.ReactNode;
};

export function IsMobileProvider({ children }: ContextProps) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkForMobile = () => {
      setIsMobile(window.innerWidth < 750 || window.innerHeight < 750);
    };
    window.addEventListener('resize', checkForMobile);
    checkForMobile();
  }, []);
  return <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileContext.Provider>;
}
