import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import AuthContent from '../../components/AuthComponent/AuthContent';
import { createUser } from '../../utils/Auth';
import Checkout from '../CheckoutScreen';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { useDispatch } from 'react-redux';
import { setToken, setUserData } from '../../store/Slices/AuthSlice';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../constant/Fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Signup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({ email, password }) => {
    console.log('tt', signupHandler);

    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      dispatch(setToken(token));
      console.log('Token', token);
    } catch (error) {
      Alert.alert(
        'Authentication Failed',
        'could not create user please check your input',
      );
    }
    setIsAuthenticating(false);
  };
  return (
    <ScreenWrapper>
      <View style={{ flex: 1 }}>
        <CheckoutHeader
          Children="New Account"
          name="chevron-left"
          onPress={() => navigation.navigate('Login')}
        />
        <View style={styles.headerContainer}>
          <Text style={styles.headerTxt}>Create Account</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
          <KeyboardAwareScrollView
            keyboardShouldPersistTaps="handled"
            extraScrollHeight={80}
            enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 80 }}
          >
            <View style={styles.formContainer}>
              <AuthContent isLogin={false} onAuthenticate={signupHandler} />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  formContainer: {
    // flex: 1,
    marginTop: -23,
    backgroundColor: Colors.white,
    paddingHorizontal: scale(20),
    // paddingTop: verticalScale(20),
  },
  headerContainer: {
    marginTop: -23,
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(20),
    backgroundColor: Colors.white,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    // paddingBottom: verticalScale(50),
  },
  headerTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.semibold,
    color: Colors.text800,
  },
});
