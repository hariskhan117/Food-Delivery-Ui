import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import InputCmp from '../../components/InputCmp/InputCmp';
import Button from '../../components/ButtonCmp/Button';

const PasswordSettingScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <CheckoutHeader
          name="chevron-left"
          Children="Password Setting"
          onPress={() => navigation.navigate('SettingScreen')}
        />

        <View style={styles.inputMain}>
          <View style={styles.inputContainer}>
            <InputCmp children="Current Password" Forgot />
          </View>
          <View>
            <InputCmp children="New Password" />
          </View>
          <View>
            <InputCmp children="Confirm New Password" />
          </View>
          <Button children="Change Password" isOrange={true} />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PasswordSettingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  inputMain: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: verticalScale(-23),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    paddingHorizontal: scale(40),
  },
  inputContainer: {
    marginTop: verticalScale(30),
  },
});
