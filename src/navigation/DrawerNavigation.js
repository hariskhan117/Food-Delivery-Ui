import { createDrawerNavigator } from '@react-navigation/drawer';
import { moderateScale, verticalScale } from '../constant/Scaling';
import ProfileCmp from '../components/ProfileComponent/index';
import NotificationDrawer from '../components/NotificationDrawer/index';
import { ScrollView, View } from 'react-native';
import BottomTabNavigation from './BottomTabNavigation';
import { Colors } from '../constant/Colors';

const CustomDrawerContent = props => {
  const { routes, index } = props.state;
  const activeRouteName = routes[index].name;
  console.log('Current Active Route', activeRouteName);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.orange600 }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ backgroundColor: Colors.orange600 }}
      >
        <View style={{ flex: 1, paddingTop: verticalScale(40) }}>
          {activeRouteName === 'Profile' ? (
            <ProfileCmp />
          ) : activeRouteName === 'Notification' ? (
            <NotificationDrawer />
          ) : (
            <ProfileCmp />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          flex: 1,
          backgroundColor: Colors.orange600,
          borderTopLeftRadius: moderateScale(80),
          borderBottomLeftRadius: moderateScale(80),
          width: '80%',
          overflow: 'hidden',
          zIndex: 1000,
          elevation: 5,
        },
      }}
    >
      <Drawer.Screen name="Tabs" component={BottomTabNavigation} />
      <Drawer.Screen name="Profile" component={BottomTabNavigation} />
      <Drawer.Screen name="Notification" component={BottomTabNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
