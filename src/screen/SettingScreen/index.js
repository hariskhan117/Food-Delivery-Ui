import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, { version } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Entypo from 'react-native-vector-icons/Entypo';
import Fonts from '../../constant/Fonts';
import { useNavigation } from '@react-navigation/native';

const SettingData = [
  {
    id: 1,
    name: 'Notification Setting',
    image: require('../../assets/images/notificationicon.png'),
    screen: 'NotificationSettingScreen',
  },
  {
    id: 2,
    name: 'Password Setting',
    image: require('../../assets/images/password.png'),
    screen: 'PasswordSettingScreen',
  },
  // {
  //   // id: 3,
  //   // name: 'Delete Account',
  //   // image: require('../../assets/images/myprofile.png'),
  //   // // screen : false
  // },
];

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <View>
          <CheckoutHeader name="less-than" Children="Settings"
          onPress={() => navigation.navigate('Menu')}
          />
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={SettingData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                key={item.id}
                onPress={() => navigation.navigate(item.screen)}
              >
                <View style={styles.productItemContainer}>
                  <Image style={styles.productImg} source={item.image} />
                  <Text style={styles.productTxt}>{item.name}</Text>
                </View>
                <Entypo
                  name="chevron-down"
                  size={moderateScale(20)}
                  color={Colors.orange600}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: Colors.white,

    marginTop: verticalScale(-20),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
  },
  productContainer: {
    paddingTop: verticalScale(40),
    flexDirection: 'row',
  },
  productItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    flex: 1,
  },
  productImg: {
    width: scale(25),
    height: verticalScale(35),
    color: Colors.orange600,
  },
  productTxt: {
    fontSize: moderateScale(20),
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.medium,
    textAlign: 'center',
  },
});
