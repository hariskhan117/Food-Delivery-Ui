import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import Button from '../../components/ButtonCmp/Button';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        {/* <View style={styles.imgContainer}> */}
        <Image
          style={styles.img}
          source={require('../../assets/images/started.png')}
        />
        {/* </View> */}
        <View style={styles.contentContainer}>
          <View style={styles.itemContainer}>
            <Image
              style={styles.iconImg}
              source={require('../../../icon.png')}
            />
          </View>
          <Text style={styles.heading}>CraveX</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Text>
          </View>
          <Button
            children="Get Started"
            isOrange={true}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default GetStartedScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  img: {
    width: '100%',
    height: '70%',
    // objectFit : 'contain',
    resizeMode: 'stretch',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: verticalScale(-35),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    alignItems: 'center',
    // justifyContent : "center",

    width: '100%',
  },
  itemContainer: {
    // marginVertical : verticalScale(10)
    marginTop: verticalScale(30),
    marginBottom: verticalScale(10),
  },
  heading: {
    fontSize: moderateScale(26),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.bold,
  },
  iconImg: {
    width: scale(40),
    height: verticalScale(28),
  },
  textContainer: {
    marginHorizontal: scale(40),
  },
  text: {
    fontSize: moderateScale(14),
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.medium,
  },
});
