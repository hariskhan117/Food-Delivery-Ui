import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { store, persistor } from './src/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DrawerProvider } from './src/navigation/DrawerContext';
import BootSplash from 'react-native-bootsplash';
const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DrawerProvider>
          <NavigationContainer>
            <AppNavigation />
          </NavigationContainer>
        </DrawerProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
