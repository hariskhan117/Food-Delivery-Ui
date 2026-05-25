import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Feather from 'react-native-vector-icons/Feather';
import Fonts from '../../constant/Fonts';

const InputCmp = ({ children, Forgot }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="***********"
          placeholderTextColor={Colors.text800}
        />
        <Feather
          name="eye-off"
          size={moderateScale(20)}
          color={Colors.orange600}
        />
      </View>
      <View style={styles.forgotPassContainer}>
       {Forgot ? <Text style={styles.forgotPassTxt}>Forgot Password</Text> 
        : null  }
      </View>
    </View>
  );
};

export default InputCmp;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: Colors.white,
  },
  input: {
    fontSize: moderateScale(20),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.yellowBase,
    borderRadius: scale(20),
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(3),
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.text800,
    marginBottom: verticalScale(15),
  },
  forgotPassContainer: {
    paddingVertical: verticalScale(20),
    // backgroundColor: 'white',
    alignItems: 'flex-end',
  },
  forgotPassTxt: {
    fontSize: moderateScale(15),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.medium,
  },
});
