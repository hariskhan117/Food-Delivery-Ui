import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import AuthContent from '../../components/AuthComponent/AuthContent';
import { login } from '../../utils/Auth';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/Slices/AuthSlice';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Login = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      dispatch(setToken(token));
    } catch (error) {
      Alert.alert(
        'Authentication Failed!',
        'Could not log you in . please check your credentials',
      );
    }
    setIsAuthenticating(false);
  };
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <CheckoutHeader
          Children="Login"
          name="chevron-left"
          onPress={() => navigation.navigate('GetStarted')}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTxt}>WellcomeBack</Text>
        </View>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={80}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: verticalScale(80)
          }}
        >
          <View style={styles.formContainer}>
            <AuthContent isLogin={true} onAuthenticate={loginHandler} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Login;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    marginTop: -23,
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(20),
    backgroundColor: Colors.white,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingBottom: verticalScale(50),
  },
  headerTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.semibold,
    color: Colors.text800,
  },
  formContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: scale(25),
  },
});
