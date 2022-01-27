import React, { createContext, useState, useEffect } from 'react';

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
    if (window.innerWidth < 500) {
      setIsMobile(true);
      console.log('is mobile');
    } else {
      setIsMobile(false);
      console.log('is not mobile');
    }
  });
  return <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileContext.Provider>;
}
