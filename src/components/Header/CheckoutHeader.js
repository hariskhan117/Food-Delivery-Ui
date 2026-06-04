import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';

const CheckoutHeader = ({ onPress, name, Children }) => {
  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{ justifyContent: 'flex-start' }}
          onPress={onPress}
        >
          <FontAwesome6
            name={name}
            size={moderateScale(15)}
            color={Colors.orange600}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer2}>
        <Text style={styles.headerTxt}>{Children}</Text>
      </View>
    </View>
  );
};

export default CheckoutHeader;

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.yellow500,
    flexDirection: 'row',
    paddingVertical: verticalScale(10),
    paddingBottom: verticalScale(40),
    alignItems: 'center',
    position: 'relative',

    justifyContent: 'center',
  },
  headerContainer: {
    // flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: 25,
    left: 30,
  },

  headerTxt: {
    fontSize: moderateScale(28),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.bold,
  },
  headerContainer2: {
    flexDirection: 'row',
  },
});
