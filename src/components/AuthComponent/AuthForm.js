import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import InputCmp from '../InputCmp/InputCmp';
import Button from '../ButtonCmp/Button';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';

const AuthForm = ({ isLogin, onSubmit, credentialsValid }) => {
  const [inputs, setInputs] = useState({
    fullName: { value: '', isValid: true },
    email: { value: '', isValid: true },
    confirmEmail: { value: '', isValid: true },
    password: { value: '', isValid: true },
    confirmPassword: { value: '', isValid: true },
  });
  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputs(currInput => ({
      ...currInput,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));
  };

  const submitHandler = () => {
    onSubmit({
      fullName: inputs.fullName.value,
      email: inputs.email.value,
      confirmEmail: inputs.confirmEmail.value,
      password: inputs.password.value,
      confirmPassword: inputs.confirmPassword.value,
    });
  };
  return (
    <View style={{ gap: verticalScale(10), width: '100%' }}>
      <InputCmp
        children="Email"
        textInputConfig={{
          keyboardType: 'email-address',
          placeholder: 'Enter your Email',
          autoCapitalize: 'none',
          onChangeText: inputChangeHandler.bind(this, 'email'),
          value: inputs.email.value,
        }}
      />

      {!isLogin && (
        <InputCmp
          children="Confirm Email"
          textInputConfig={{
            keyboardType: 'email-address',
            placeholder: 'Enter your Email',
            autoCapitalize: 'none',
            onChangeText: inputChangeHandler.bind(this, 'confirmEmail'),
            value: inputs.confirmEmail.value,
          }}
        />
      )}
      <InputCmp
        children="Password"
        textInputConfig={{
          secureTextEntry: true,
          placeholder: '********',
          onChangeText: inputChangeHandler.bind(this, 'password'),
          value: inputs.password.value,
        }}
      />
      {!isLogin && (
        <InputCmp
          children="Confirm Password"
          textInputConfig={{
            secureTextEntry: true,
            placeholder: '********',
            onChangeText: inputChangeHandler.bind(this, 'confirmPassword'),
            value: inputs.confirmPassword.value,
          }}
        />
      )}
      {/* 
<View>

      <Button
        onPress={submitHandler}
        children={isLogin ? 'login' : 'signup'}
        isOrange={true}
        />
        </View> */}
      <TouchableOpacity style={styles.buttonContainer} onPress={submitHandler}>
        <Text style={styles.btnTxt}>{isLogin ? 'login' : 'SignUp'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: verticalScale(20),
    backgroundColor: Colors.orange600,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(10),
    marginHorizontal: scale(70),
    borderRadius: scale(30),
  },
  btnTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.white,
    textAlign: 'center',
  },
});
