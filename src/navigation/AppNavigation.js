import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import DrawerNavigation from './DrawerNavigation';
import StackNavigation from './StackNavigation';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const token = useSelector(state => state.auth.token);
  return token ? <DrawerNavigation /> : <StackNavigation />;
};

export default AppNavigation;
