import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';

const data = [
  {
    id: '1',
    image: require('../../assets/images/snacks.png'),
    title: 'Snacks',
  },
  {
    id: '2',
    image: require('../../assets/images/meal.png'),
    title: 'Meal',
  },
  {
    id: '3',
    image: require('../../assets/images/vegan.png'),
    title: 'Vegan',
  },
  {
    id: '4',
    image: require('../../assets/images/desert.png'),
    title: 'Dessert',
  },
  {
    id: '5',
    image: require('../../assets/images/drinks.png'),
    title: 'Drinks',
  },
];

const Category = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.categoryContainer}>
              <Image style={styles.categoryImg} source={item.image} />
              <Text style={styles.categoryTxt}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.underLine}></View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: verticalScale(-23),
  },
  categoryContainer: {
    marginTop: verticalScale(20),
    marginLeft: scale(22),
    alignItems: 'center',
  },
  categoryImg: {
    width: scale(49),
    height: verticalScale(62),
  },
  categoryTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.text800,
  },
  underLine: {
    borderWidth: 1,
    borderColor: Colors.orange300,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:scale(24),
    width: scale(326),
    marginTop: verticalScale(12),
  },
});
