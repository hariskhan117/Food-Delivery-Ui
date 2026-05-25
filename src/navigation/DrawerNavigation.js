import { createDrawerNavigator } from '@react-navigation/drawer';
import { moderateScale, verticalScale } from '../constant/Scaling';

import { ScrollView, View } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import { Colors } from '../constant/Colors';
import { useState } from 'react';
import Cart from '../screen/CartScreen';
import NotificationScreen from '../screen/NotificationScreen/index';
import ProfileScreen from '../screen/ProfileScreen/index';
import { useDrawer } from './DrawerContext';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  const { drawerContent } = useDrawer();
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerPosition: 'right',
        swipeEnabled: false,
        drawerStyle: {
          backgroundColor: Colors.orange600,
          borderTopLeftRadius: moderateScale(80),
          borderBottomLeftRadius: moderateScale(80),
          width: '80%',
          overflow: 'hidden',
        },
      }}
      drawerContent={props => {
        return (
          <View style={{ flex: 1, backgroundColor: Colors.orange600 }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              style={{ backgroundColor: Colors.orange600 }}
            >
              <View style={{ flex: 1, paddingTop: verticalScale(40) }}>
                {drawerContent === 'profile' && <ProfileScreen {...props} />}
                {drawerContent === 'notification' && <NotificationScreen />}
                {drawerContent === 'cart' && <Cart {...props} />}
              </View>
            </ScrollView>
          </View>
        );
      }}
    >
      <Drawer.Screen name="Tabs" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
