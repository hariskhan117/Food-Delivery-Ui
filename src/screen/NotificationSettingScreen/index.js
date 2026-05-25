import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, { useRef, useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';
const NotificationData = [
  {
    id: '1',
    name: 'General Notification',
  },
  {
    id: '2',
    name: 'Sound',
  },
  {
    id: '3',
    name: 'Sound Call',
  },
  {
    id: '4',
    name: 'Vibrate',
  },
  {
    id: '5',
    name: 'Special Offers',
  },
  {
    id: '6',
    name: 'Special Offers',
  },
  {
    id: '7',
    name: 'Promo and discount',
  },
  {
    id: '8',
    name: 'Cashback',
  },
];

const ToggleRowItem = ({ item }) => {
  const [isEnabled, setIsEnabled] = useState();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const toggleSwitch = () => {
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 0 : 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setIsEnabled(prevState => !prevState);
  };

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 34],
  });
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.orange600, Colors.orangeBase],
  });
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.itemTxt}>{item.name}</Text>
      <TouchableOpacity onPress={() => toggleSwitch()}>
        <Animated.View style={[styles.switchTrack, { backgroundColor }]}>
          <Animated.View
            style={[styles.switchCircle, { transform: [{ translateX }] }]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const NotificationSettingScreen = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <View>
          <CheckoutHeader
            name="chevron-left"
            Children="Notification Setting"
            onPress={() => navigation.navigate('SettingScreen')}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={NotificationData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ToggleRowItem item={item} />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default NotificationSettingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: verticalScale(-23),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingHorizontal: scale(40),
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: verticalScale(30),
    // paddingVertical: verticalScale(15),
  },
  itemTxt: {
    fontSize: moderateScale(20),
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.medium,
  },

  switchCircle: {
    width: scale(22),
    height: scale(22),
    borderRadius: scale(11),
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 4,
  },
  switchTrack: {
    width: verticalScale(65),
    height: verticalScale(32),
    borderRadius: scale(20),
    justifyContent: 'center',
    padding: 4,
  },
});
