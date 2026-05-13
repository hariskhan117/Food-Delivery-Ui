import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import SearchBarCmp from '../../components/Header/SearchBarCmp';
import Category from '../../components/FoodCategory/Category';
import { Colors } from '../../constant/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { FoodData } from '../../data/MenuData/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Snacks');
  const filteredData = FoodData.filter(
    item => item.category === selectedCategory,
  );
  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.main}>
          <SearchBarCmp />

          <Category
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            isOrangeTheme={true}
          />

          <View style={styles.sortContainer}>
            <View style={styles.txtContainer}>
              <Text style={styles.sortTxt}>Sort By</Text>
              <Text style={styles.popularTxt}>Popular</Text>
            </View>
            <View style={styles.icon}>
              <MaterialCommunityIcons
                name="tune-variant"
                size={moderateScale(12)}
                color={Colors.white}
              />
            </View>
          </View>
          <FlatList
            data={filteredData}
            contentContainerStyle={{ paddingBottom: verticalScale(50) }}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ProductDetail', { product: item })
                  }
                >
                  <View style={styles.imgContainer}>
                    <Image style={styles.img} source={item.image} />
                  </View>
                  <View style={styles.infoContainer}>
                    <View style={styles.infoTxtContainer}>
                      <Text style={styles.infoTxt}>{item.name}</Text>
                    </View>
                    <View style={styles.infoRatingContainer}>
                      <Text style={styles.infoRatingTxt}>{item.rating}</Text>
                      <AntDesign
                        name="star"
                        size={moderateScale(12)}
                        color={Colors.yellow500}
                      />
                    </View>
                    <View>
                      <Text style={styles.infoPrice}>{item.price}</Text>
                    </View>
                  </View>
                  <Text style={styles.infoTitle}>{item.title}</Text>
                </TouchableOpacity>
                <View style={styles.underLine}></View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Menu;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(25),
    marginTop: verticalScale(10),
    marginBottom: scale(20),
  },
  txtContainer: {
    flexDirection: 'row',
  },
  sortTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text800,
  },
  popularTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.orange600,
    marginLeft: scale(10),
  },
  icon: {
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(30),
  },
  itemContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginBottom: verticalScale(30),
  },
  img: {
    height: verticalScale(174),
    width: scale(323),
    borderRadius: moderateScale(50),
  },
  imgContainer: {
    alignItems: 'center',
  },
  infoContainer: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(32),
    alignItems: 'center',
  },
  infoTxtContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoTxt: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.poppins.semibold,
    color: Colors.text800,
  },
  infoRatingContainer: {
    flexDirection: 'row',
    marginLeft: scale(12),
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(2),
    paddingHorizontal: scale(6),
    borderRadius: moderateScale(20),
    gap: 5,
    alignItems: 'center',
  },
  infoRatingTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.white,
  },
  infoPrice: {
    fontSize: moderateScale(18),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.orange600,
  },
  infoTitle: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text800,
    alignItems: 'flex-start',
    // marginHorizontal: scale(22),
    paddingHorizontal: scale(32),
    paddingVertical: verticalScale(5),
  },
  underLine: {
    borderWidth: 1,
    borderColor: Colors.orangeBase,
    marginHorizontal: scale(32),
    marginTop: verticalScale(30),
  },
});
