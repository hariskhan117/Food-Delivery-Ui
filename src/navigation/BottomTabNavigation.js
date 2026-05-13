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
import Help from '../screen/HelpScreen';
import ProductDetail from '../screen/ProductDetailScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: Colors.orange600 },
        tabBarActiveTintColor: Colors.white,
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
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="clipboard-list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="headphones" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="ProductDetail" component={ProductDetail} options={{
        tabBarItemStyle : {display : 'none'}
      }}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
