import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Feather from 'react-native-vector-icons/Feather';
import Fonts from '../../constant/Fonts';

const InputCmp = ({ children, Forgot, textInputConfig }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = textInputConfig?.secureTextEntry;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{children}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          {...textInputConfig}
          secureTextEntry={isPassword ? !showPassword : false}
          placeholderTextColor={Colors.text800}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(prev => !prev)}>
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={moderateScale(20)}
              color={Colors.orange600}
            />
          </TouchableOpacity>
        )}
      </View>
      {Forgot && (
        <View style={styles.forgotPassContainer}>
          <Text style={styles.forgotPassTxt}>Forgot Password</Text>
        </View>
      )}
    </View>
  );
};

export default InputCmp;

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // backgroundColor: Colors.white,
    width: '100%',
    marginBottom: verticalScale(10),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.text800,
    height: '100%',
    paddingVertical: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.yellowBase,
    borderRadius: scale(20),
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    // height: verticalScale(55),
    // marginBottom: 15,
  },
  title: {
    fontSize: moderateScale(16),
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
