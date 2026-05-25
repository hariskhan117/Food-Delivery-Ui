import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import { useNavigation } from '@react-navigation/native';
import Fonts from '../../constant/Fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/Slices/CartSlice';
import { useDrawer } from '../../navigation/DrawerContext';
import { toggleFavorite } from '../../store/Slices/FavoriteSlice';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const favoriteItems =
    useSelector(state => state.favorite?.favoriteItems) || [];
  const isFavorite =
    favoriteItems.length > 0
      ? favoriteItems.some(item => item?.id === product?.id)
      : false;
  const { setDrawerContent } = useDrawer();
  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  console.log('cOUNT', count);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    console.log('Cart', handleAddToCart);
    const cartItem = {
      ...product,
      quantity: count > 0 ? count : 1,
    };

    dispatch(addToCart(cartItem));
    setDrawerContent('cart');
    navigation.openDrawer();
  };
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <View style={styles.headerMain}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContainer2}>
              <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                <FontAwesome6
                  name="less-than"
                  size={moderateScale(15)}
                  color={Colors.text800}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{product.name}</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.headerIconContainer,
                isFavorite
                  ? { backgroundColor: Colors.white }
                  : styles.headerIconContainer,
              ]}
              onPress={() => dispatch(toggleFavorite(product))}
            >
              {isFavorite ? (
                <AntDesign
                  name="heart"
                  size={moderateScale(15)}
                  color={Colors.orange600}
                />
              ) : (
                <AntDesign
                  name="hearto"
                  size={moderateScale(15)}
                  color={Colors.white}
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.headerRatingContainer}>
            <Text style={styles.headerRatingTxt}>{product.rating}</Text>
            <AntDesign name="star" color={Colors.yellow500} />
          </View>
        </View>
        <View style={styles.productContainer}>
          <View style={styles.productImgContainer}>
            <Image style={styles.productImg} source={product.image} />
          </View>

          <View style={styles.productPriceContainer}>
            <Text style={styles.productPrice}>{product.price}</Text>

            <View style={styles.productAddContainer}>
              <TouchableOpacity
                style={styles.cartButton}
                onPress={() => {
                  if (count > 1) {
                    setCount(count - 1);
                  }
                }}
              >
                <Entypo
                  name="minus"
                  size={moderateScale(20)}
                  color={Colors.white}
                />
              </TouchableOpacity>
              <Text style={styles.cartTxt}>{count}</Text>
              <TouchableOpacity
                onPress={() => setCount(count + 1)}
                style={styles.cartButton}
              >
                <Entypo
                  name="plus"
                  size={moderateScale(20)}
                  color={Colors.white}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 22 }}>
          <Text style={styles.productTitle}>{product.title}</Text>
        </View>
        <TouchableOpacity style={styles.addToCartBtn} onPress={handleAddToCart}>
          <SimpleLineIcons
            name="handbag"
            size={moderateScale(20)}
            color={Colors.white}
          />
          <Text style={styles.addTxt}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerMain: {
    backgroundColor: Colors.yellow500,
  },
  headerContainer: {
    paddingHorizontal: scale(22),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.text800,
    marginHorizontal: scale(20),
  },
  headerIconContainer: {
    paddingVertical: scale(5),
    paddingHorizontal: scale(5),
    backgroundColor: Colors.orange600,
    borderRadius: moderateScale(30),
  },
  headerRatingContainer: {
    width: scale(45),
    flexDirection: 'row',
    marginHorizontal: scale(50),
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(20),
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(40),
  },
  headerRatingTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.white,
  },
  productContainer: {
    marginTop: verticalScale(-23),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    backgroundColor: Colors.white,
  },
  productImgContainer: {
    // marginTop: verticalScale(20),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(30),
    marginHorizontal: scale(22),
    // backgroundColor: 'red',
    borderBottomWidth: 1,
    borderColor: Colors.orangeBase,
    paddingBottom: verticalScale(15),
  },
  productImg: {
    width: scale(339),
    height: verticalScale(229),
    resizeMode: 'cover',
    borderRadius: moderateScale(40),
  },
  productPrice: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.orange600,
  },
  productPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(22),
    // backgroundColor: 'red',
    marginHorizontal: scale(22),
    borderBottomWidth: 1,
    borderColor: Colors.orangeBase,
    paddingBottom: verticalScale(15),
    // paddingVertical : verticalScale(20),
    marginVertical: verticalScale(15),
  },
  productAddContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: Colors.orange600,
    paddingHorizontal: scale(4),
    paddingVertical: verticalScale(4),
    alignItems: 'center',
    borderRadius: scale(40),
    justifyContent: 'center',
    marginHorizontal: scale(15),
  },
  cartTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.text800,
  },

  productTitle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text800,
    marginBottom: verticalScale(30),
  },
  addToCartBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(40),
    marginHorizontal: scale(50),
    borderRadius: moderateScale(30),
  },
  addTxt: {
    fontSize: moderateScale(20),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.medium,
    marginHorizontal: scale(15),
  },
});
