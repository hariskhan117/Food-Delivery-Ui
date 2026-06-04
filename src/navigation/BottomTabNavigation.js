import React from 'react';
import Home from '../screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../constant/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Menu from '../screen/MenuScreen/index';
import Favorite from '../screen/FavoriteScreen';
import MyOrders from '../screen/OrderScreen';
import ProductDetail from '../screen/ProductDetailScreen';
import Cart from '../screen/CartScreen';
import Checkout from '../screen/CheckoutScreen';
import CheckoutHeader from '../components/Header/CheckoutHeader';
import SettingScreen from '../screen/SettingScreen';
import NotificationSettingScreen from '../screen/NotificationSettingScreen';
import PasswordSettingScreen from '../screen/PasswordSettingScreen';
import Recommend from '../screen/RecommendScreen';
import { scale, verticalScale } from '../constant/Scaling';
import MyProfile from '../screen/MyProfileDetailScreen';
const Tab = createBottomTabNavigator();
const BottomTabNavigation = ({ setDrawerType }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.orange600,
          paddingTop: verticalScale(8),
          borderTopLeftRadius: scale(30),
          borderTopRightRadius: scale(30),
        },
        tabBarActiveTintColor: Colors.yellow500,
        tabBarInactiveTintColor: Colors.white,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="restaurant-menu" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({ size, color }) => (
            <SimpleLineIcons name="heart" size={size} color={color} />
          ),
          // header: () => (
          //   <CheckoutHeader
          //     name="less-than"
          //     size={moderateScale(20)}
          //     Children="Favorites"
          //   />
          // ),
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="headphones" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={Checkout}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="NotificationSettingScreen"
        component={NotificationSettingScreen}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="RecommendScreen"
        component={Recommend}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="MyProfileDetail"
        component={MyProfile}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="PasswordSettingScreen"
        component={PasswordSettingScreen}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      />
      {/* <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarItemStyle: { display: 'none' },
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
