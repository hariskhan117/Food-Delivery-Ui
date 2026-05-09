import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.container1}>
        <TextInput placeholder="Search" />
        <MaterialCommunityIcons
          name="tune-variant"
          size={moderateScale(20)}
          color={Colors.orange600}
        />
      </View>
      <View style={styles.container2}>
        <Feather
          name="shopping-cart"
          size={moderateScale(20)}
          color={Colors.orange600}
        />
        <Ionicons
          name="notifications-outline"
          size={moderateScale(20)}
          color={Colors.orange600}
        />
        <FontAwesome
          name="user-o"
          size={moderateScale(20)}
          color={Colors.orange600}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    // paddingHorizontal : 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // marginRight : 30,
    alignItems: 'center',

    // backgroundColor: 'red',
  },
  container2: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
});
