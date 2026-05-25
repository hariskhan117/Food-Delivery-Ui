import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
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
  // {
  //   id: '6',
  //   image: require('../../assets/images/drinks.png'),
  //   title: 'Burger',
  // },
  // {
  //   id: '7',
  //   image: require('../../assets/images/drinks.png'),
  //   title: 'Burger',
  // },
  // {
  //   id: '8',
  //   image: require('../../assets/images/drinks.png'),
  //   title: 'Burger',
  // },
];
const ITEM_WIDTH =
  data.length >= 4 ? SCREEN_WIDTH * 0.2 : SCREEN_WIDTH / data.length;

const Category = ({
  selectedCategory,
  setSelectedCategory,
  isOrangeTheme,
  underLine,
}) => {
  const selectedIndex = data.findIndex(item => item.title === selectedCategory);
  const nextIndex = selectedIndex + 1;
  const previousIndex = selectedIndex - 1;
  // console.log(
  //   'Selected Index',
  //   selectedIndex,
  //   nextIndex,
  //   previousIndex,
  //   selectedCategory,
  // );
  // const product = data;
  // if (product.length > 4) {
  //   SCREEN_WIDTH * 0.2;
  // } else {
  //   SCREEN_WIDTH / data.length;
  // }
  return (
    <View style={styles.container}>
      {/* <View style={{ flexDirection: 'row' }}> */}
      {/* <View style={styles.emptyContainerLeft}></View> */}
      <FlatList
        data={data}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        pagingEnabled={false}
        horizontal
        showsHorizontalScrollIndicator={false}
        // keyExtractor={item => item.id.toString()}
        keyExtractor={item => item.id}
        // {/* {data.map((item, index) => { */}
        renderItem={({ item, index }) => {
          console.log('index', index);
          const isSelected = selectedCategory === item.title;

          return (
            <Pressable
              key={item.id}
              onPress={() => setSelectedCategory?.(item.title)}
              style={[
                styles.categoryContainer1,
                nextIndex === index ? styles.activeOrangeContainerNext : {},
                previousIndex === index
                  ? styles.activeOrangeContainerPrevious
                  : {},
                isOrangeTheme ? styles.orangeBg : styles.whiteBg,
              ]}
            >
              <View
                style={[
                  styles.categoryContainer,
                  isSelected && isOrangeTheme && styles.activeOrangeContainer,
                  isSelected && !isOrangeTheme && styles.activeWhiteContainer,
                  // {borderWidth: 1}
                ]}
              >
                <Image style={[styles.categoryImg]} source={item.image} />
                <Text style={[styles.categoryTxt]}>{item.title}</Text>
              </View>
            </Pressable>
          );
          // })
        }}
      />
      {/* <View style={styles.emptyContainerRight} /> */}
      {/* </View> */}
      {/* {underLine ? <View style={styles.underLine}></View> : null} */}
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  // emptyContainerLeft: {
  //   width: 20,
  //   height: 150,
  //   borderBottomRightRadius: scale(30),
  //   flex: 1,
  //   backgroundColor: Colors.orange600,
  // },
  // emptyContainerRight: {
  //   width: 30,
  //   height: 150,
  //   flex: 1,
  //   borderBottomLeftRadius: scale(30),
  //   backgroundColor: Colors.orange600,
  // },
  container: {
    // height: 138,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    marginTop: verticalScale(-23),
    // marginBottoFm: verticalScale(10),
    // marginHorizontal: scale(20),
    // overflow: 'hidden',
    // flex: 1,
    width: '100%',
    overflow: 'hidden',

    // borderWidth: 2,
  },
  orangeBg: { backgroundColor: Colors.orange600, },
  whiteBg: {
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.orangeBase,
  },
  activeOrangeContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    resizeMode: 'cover',
  },
  activeOrangeContainerNext: {
    borderBottomLeftRadius: scale(30),
  },
  activeOrangeContainerPrevious: {
    borderBottomRightRadius: scale(30),
  },
  activeWhiteContainer: {
    backgroundColor: Colors.white,
  },
  categoryContainer1: {
    flex: 1,
    width: ITEM_WIDTH,
    // overflow: 'hidden'
    // maxWidth: scale(73),
    // width : '100%',
    overflow: 'hidden',
    // borderWidth: 2,

    // borderWidth: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: 'center',
    // marginTop: verticalScale(20),
    // marginLeft: scale(22),
    // padding: scale(10),
  },
  categoryContainer: {
    // flexDirection: 'column',/
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(20),

    // marginLeft: scale(22),
    // flex: 1,
    width: '100%',
    // borderWidth: 2,
    padding: scale(13),
    // padding: 12,
  },
  categoryImg: {
    width: scale(49),
    height: verticalScale(62),
    resizeMode: 'contain',
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
    marginHorizontal: scale(24),
    width: scale(326),
    marginTop: verticalScale(12),
  },
});
