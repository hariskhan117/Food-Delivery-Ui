import {
  View,
  Text,
  Alert,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useState, version } from 'react';
import { useNavigation } from '@react-navigation/native';
import AuthForm from './AuthForm';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';

const AuthContent = ({ isLogin, onAuthenticate }) => {
  const navigation = useNavigation();
  const [credentialsValid, setCredentialsValid] = useState({
    email: true,
    confirmEmail: true,
    password: true,
    confirmPassword: true,
  });

  const switchHandler = () => {
    if (isLogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  const submitHandler = credentials => {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailAreEqual = email === confirmEmail;
    const passwordAreEqual = password === confirmPassword;
    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailAreEqual || !passwordAreEqual))
    ) {
      Alert.alert('Invalid Input', 'Please Check Your Entered Credentials');
      setCredentialsValid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  };
  return (
    // <ScrollView
    //   style={{ flex: 1, backgroundColor: Colors.white }}
    //   contentContainerStyle={{
    //     paddingHorizontal: scale(20),
    //     paddingTop: verticalScale(40),
    //   }}
    // >
    <View>
      {/* <Text style={styles.title}>{isLogin ? 'WellcomeBack' : null}</Text> */}
      <View>
        <AuthForm
          onSubmit={submitHandler}
          credentialsValid={credentialsValid}
          isLogin={isLogin}
        />
      </View>
      <Pressable onPress={switchHandler} style={styles.switchContainer}>
        <Text style={styles.switchTxt}>
          {isLogin ? "Don't have an account ? " : 'Already have an account ? '}
        </Text>
        <Text style={styles.switchLink}>{isLogin ? 'Signup' : 'Login'}</Text>
      </Pressable>
      {/* </ScrollView> */}
    </View>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.semibold,
    color: Colors.text800,
  },
  switchContainer: {
    marginTop: verticalScale(30),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  switchTxt: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text900,
  },
  switchLink: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.orange600,
  },
});
