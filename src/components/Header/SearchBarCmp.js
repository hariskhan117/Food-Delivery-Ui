import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SearchBarCmp = () => {
  return (
    <View style={styles.main}>
      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              style={styles.txtInput}
              placeholder="Search"
              placeholderTextColor={'Black'}
            />
          </View>
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name="tune-variant"
              size={moderateScale(20)}
              color={Colors.white}
            />
          </View>
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
    </View>
  );
};

export default SearchBarCmp;

const styles = StyleSheet.create({
  main: {
    height: moderateScale(60),
    justifyContent: 'center',
    backgroundColor: Colors.yellow500,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  txtInput : {
    fontSize : moderateScale(20)
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
    paddingHorizontal: 10,
    marginHorizontal: 40,
  },
  icon: {
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(30),
  },
  container2: {
    flexDirection: 'row',
    marginRight: scale(20),
  },
});
