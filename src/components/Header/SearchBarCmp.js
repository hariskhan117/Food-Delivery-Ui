import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fonts from '../../constant/Fonts.js';
import { useNavigation } from '@react-navigation/native';
import { useDrawer } from '../../navigation/DrawerContext.js';

const SearchBarCmp = ({ title, subtitle }) => {
  const { setDrawerContent } = useDrawer();
  const navigation = useNavigation();
  // const openDrawer = type => {
  //   setDrawerType(type);
  //   navigation.openDrawer();
  // };
  return (
    <View style={styles.main}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              style={styles.txtInput}
              placeholder="Search"
              placeholderTextColor={Colors.text800}
            />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="tune-variant"
              size={moderateScale(18)}
              color={Colors.white}
            />
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => {
              setDrawerContent('cart');
              navigation.openDrawer();
            }}
            // onPress={
            // (() => navigation.navigate('Cart'), navigation.openDrawer())
            // }
          >
            <Feather
              name="shopping-cart"
              size={moderateScale(20)}
              color={Colors.orange600}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => {
              setDrawerContent('notification');
              navigation.openDrawer();
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={moderateScale(20)}
              color={Colors.orange600}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => {
              setDrawerContent('profile');
              navigation.openDrawer();
            }}
          >
            <FontAwesome
              name="user-o"
              size={moderateScale(20)}
              color={Colors.orange600}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.greetingContainer}>
        {title ? <Text style={styles.greetingTitle}>{title}</Text> : null}
        {subtitle ? (
          <Text style={styles.greetingSubtitle}>{subtitle}</Text>
        ) : null}
      </View>
    </View>
  );
};

export default SearchBarCmp;

const styles = StyleSheet.create({
  main: {
    paddingVertical: verticalScale(10),
    paddingBottom: scale(40),
    backgroundColor: Colors.yellow500,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  txtInput: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.light,
  },
  input: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(20),
    flex: 1,
    paddingHorizontal: scale(7),
    marginHorizontal: scale(20),
  },
  icon: {
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(30),
  },
  iconContainer: {
    flexDirection: 'row',
    marginRight: scale(10),
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(10),
    marginRight: verticalScale(7),
  },
  greetingContainer: {
    marginHorizontal: scale(23),
    marginTop: verticalScale(10),
  },
  greetingTitle: {
    fontSize: moderateScale(30),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.bold,
  },
  greetingSubtitle: {
    fontSize: moderateScale(13),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.medium,
  },
});
