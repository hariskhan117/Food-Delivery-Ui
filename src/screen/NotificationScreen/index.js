import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { Colors } from '../../constant/Colors';

const NotificationData = [
  {
    id: '1',
    title: 'We have added a product you might like.',
    image: require('../../assets/images/meals.png'),
  },
  {
    id: '2',
    title: 'One of your favorite is on promotion.',
    image: require('../../assets/images/heart.png'),
  },
  {
    id: '3',
    title: 'Your order has been delivered',
    image: require('../../assets/images/bag.png'),
  },
  {
    id: '4',
    title: 'The delivery is on his way',
    image: require('../../assets/images/driver.png'),
  },
];

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/images/notification.png')}
        />
        <Text style={styles.headerTxt}>Notifications</Text>
      </View>
      <View style={styles.underLine}></View>
      {NotificationData.map(item => (
        <TouchableOpacity key={item.id}>
          <View>
            <View style={styles.listContainer}>
              <View style={styles.listImgContainer}>
                <Image style={styles.listImg} source={item.image} />
              </View>
              <View style={styles.listTxtContainer}>
                <Text style={styles.listTxt}>{item.title}</Text>
              </View>
            </View>
            <View style={styles.lineList}></View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(20),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImg: {
    width: scale(22),
    height: verticalScale(31),
    resizeMode: 'cover',
  },
  headerTxt: {
    fontSize: moderateScale(22),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.white,
    marginHorizontal: scale(22),
  },
  underLine: {
    borderWidth: 1,
    borderColor: Colors.orangeBase,
    marginVertical: verticalScale(30),
  },
  listContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'center',
  },
  listImg: {
    width: scale(21),
    height: verticalScale(26),
    resizeMode: 'cover',
  },
  listImgContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
  },
  listTxt: {
    fontSize: moderateScale(15),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  listTxtContainer: {
    paddingHorizontal: scale(25),
    marginRight: scale(80),
  },
  lineList: {
    borderWidth: 1,
    borderColor: Colors.orangeBase,
    marginBottom: verticalScale(30),
  },
});
