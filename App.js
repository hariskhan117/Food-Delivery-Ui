import { View, Text, PermissionsAndroid, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import { store, persistor } from './src/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DrawerProvider } from './src/navigation/DrawerContext';
import BootSplash from 'react-native-bootsplash';
import messaging from '@react-native-firebase/messaging';
import notifee, { AndroidImportance } from '@notifee/react-native';

// import { PermissionsAndroid , pl} from 'react-native';

const App = () => {
  useEffect(() => {
    createChannel();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('foreground:', remoteMessage);

      await notifee.displayNotification({
        title: remoteMessage.notification.title,
        body: remoteMessage.notification.body,
        android: {
          channelId: 'default',
          pressAction: {
            id: 'default',
          },
        },
      });
    });
    return unsubscribe;
  }, []);

  const createChannel = async () => {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });
    return null;
  };

  const requestPermission = async () => {
    try {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      console.log('result :', result);
      console.log('result2 : ', PermissionsAndroid.RESULTS.GRANTED);

      if (result === PermissionsAndroid.RESULTS.GRANTED) {
        requestToken();
      } else {
        Alert.alert('Permission Denied');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const requestToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('token:', token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

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
