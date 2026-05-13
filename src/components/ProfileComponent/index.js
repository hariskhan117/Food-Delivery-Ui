import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';

const ProfileData = [
  {
    id: '1',
    title: 'My Orders',
    image: require('../../assets/images/bag.png'),
  },
  {
    id: '2',
    title: 'My Profile',
    image: require('../../assets/images/myprofile.png'),
  },
  {
    id: '3',
    title: 'Delievery Address',
    image: require('../../assets/images/address.png'),
  },
  {
    id: '4',
    title: 'Payment Method',
    image: require('../../assets/images/payment.png'),
  },
  {
    id: '5',
    title: 'Contact us',
    image: require('../../assets/images/contact.png'),
  },
  {
    id: '6',
    title: 'Help & FAQs',
    image: require('../../assets/images/faq.png'),
  },
  {
    id: '7',
    title: 'Setting',
    image: require('../../assets/images/setting.png'),
  },
];

const ProfileCmp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/profile.png')}
        />
        <View style={styles.box}>
          <Text style={styles.subtitle}>John Smith</Text>
          <Text style={styles.email}>Loremipsum@email.com</Text>
        </View>
      </View>
      {ProfileData.map(item => (
        <TouchableOpacity key={item.id}>
          <View style={styles.itemContainer}>
            <View style={styles.iconContainer}>
              <Image style={styles.icon} source={item.image} />
            </View>
            <Text style={styles.title} key={item.id}>
              {item.title}
            </Text>
          </View>
          <View style={styles.underLine}></View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity key="Logout-btn" style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/logout.png')}
          />
        </View>

        <Text style={styles.title}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCmp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(15),
  },
  img: {
    height: scale(50),
    width: scale(50),
    borderRadius: moderateScale(30),
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  box: {
    marginHorizontal: scale(15),
  },
  subtitle: {
    fontSize: moderateScale(30),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  email: {
    fontSize: moderateScale(16),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.medium,
    marginTop: verticalScale(2),
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: verticalScale(20),
    paddingVertical: verticalScale(15),
    paddingHorizontal: scale(5),
  },
  iconContainer: {
    backgroundColor: Colors.white,
    padding: moderateScale(8),
    borderRadius: moderateScale(15),
  },
  icon: {
    width: scale(23),
    height: verticalScale(23),
  },
  title: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.yellowBase,
    marginLeft: scale(20),
    flex: 1,
  },
  underLine: {
    borderWidth: 1,
    marginTop: verticalScale(5),
    marginBottom: verticalScale(10),
    marginHorizontal: scale(5),
    borderColor: Colors.orangeBase,
  },
});
