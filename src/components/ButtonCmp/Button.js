import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { version } from 'react';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';

const Button = ({ children, isOrange }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[styles.button, isOrange ? styles.orangeBg : styles.button]}
      >
        <Text
          style={[styles.btnTxt, isOrange ? styles.orangeTxt : styles.btnTxt]}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  orangeBg: {
    backgroundColor: Colors.orange600,
  },
  button: {
    backgroundColor: Colors.orange300,
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(25),
    borderRadius: scale(30),
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: moderateScale(23),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.regular,
  },
  orangeTxt: {
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.medium,
  },
});
