import { View, Text } from 'react-native';
import React from 'react';
import Home from '../screen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../constant/Colors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel : false,
        tabBarStyle: { backgroundColor: Colors.orange600 },
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.white,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size,color}) => (
          <SimpleLineIcons name='home' size={size} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
