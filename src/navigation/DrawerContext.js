import { View, Text } from 'react-native';
import React, { createContext, useContext, useState } from 'react';

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [drawerContent, setDrawerContent] = useState('profile');
  return (
    <DrawerContext.Provider value={{ drawerContent, setDrawerContent }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
 