import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { Colors } from '../../constant/Colors';
import { useDispatch, useSelector } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../../store/Slices/CartSlice';
import { useNavigation } from '@react-navigation/native';

const Cart = ({ navigation }) => {
  // const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart.items);
  const Amount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();
  // const handleCheckout = () => (

  // )

  return (
    <View style={styles.main}>
      <View style={styles.cartContainer}>
        <View style={styles.cartImgContainer}>
          <Image
            style={styles.cartImg}
            source={require('../../assets/images/cart.png')}
          />
        </View>
        <Text style={styles.cartTitle}>Cart</Text>
      </View>
      {/* <View style={styles.underLine}></View> */}
      {cartItems.length === 0 ? (
        <>
          <View>
            <Text style={styles.cartSubtitle}>Your Cart is empty</Text>
          </View>
          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Tabs', {
                  screen: 'Menu',
                })
              }
            >
              <Image
                style={styles.addImg}
                source={require('../../assets/images/addtocart.png')}
              />
            </TouchableOpacity>
            <Text style={styles.addToCartTxt}>Want to add something?</Text>
          </View>
        </>
      ) : (
        <View style={{ flex: 1 }}>
          <Text style={styles.cartSubtitle}>
            You have {cartItems.length}{' '}
            {cartItems.length > 1 ? 'items' : 'item'} in the cart
          </Text>

          <FlatList
            data={cartItems}
            scrollEnabled={false}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: verticalScale(30) }}
            ListFooterComponent={
              <>
                <View style={styles.subTotalContainer}>
                  <Text style={styles.subTotal}>subTotal</Text>
                  <Text style={styles.subTotal}>${Amount.toFixed(2)}</Text>
                </View>
                <TouchableOpacity
                  style={styles.checkoutContainer}
                  onPress={() =>
                    navigation.navigate('Tabs', {
                      screen: 'Checkout',
                    })
                  }
                >
                  <Text style={styles.checkOutTxt}>Checkout</Text>
                </TouchableOpacity>
              </>
            }
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <View style={styles.productImgCnt}>
                  <Image style={styles.productImg} source={item.image} />
                </View>

                <View style={styles.itemContent}>
                  <Text
                    style={styles.productName}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>

                  <Text style={styles.productPrice}>
                    ${item.totalPrice.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.itemProductCardRight}>
                  <TouchableOpacity
                    style={styles.productAddBtn}
                    onPress={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Entypo
                      name="minus"
                      size={moderateScale(20)}
                      color={Colors.orange600}
                    />
                  </TouchableOpacity>
                  <Text style={styles.cartTxt}>{item.quantity}</Text>
                  <TouchableOpacity
                    style={styles.productAddBtn}
                    onPress={() => dispatch(increaseQuantity(item.id))}
                  >
                    <Entypo
                      name="plus"
                      size={moderateScale(20)}
                      color={Colors.orange600}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.orange600,
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(16),
    marginTop: verticalScale(10),
    // paddingBottom: verticalScale(60),
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.yellow500,

    paddingBottom: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  cartImg: {
    width: scale(25),
    height: scale(25),
    resizeMode: 'cover',
  },
  cartTitle: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.white,
  },
  cartImgContainer: {
    padding: scale(6),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(30),
    marginHorizontal: scale(11),
  },
  underLine: {
    borderWidth: 1,
    borderColor: Colors.yellow500,
    marginHorizontal: 22,
    marginVertical: verticalScale(20),
  },
  cartSubtitle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.white,
    textAlign: 'center',
  },
  addImg: {
    width: scale(150),
    height: scale(150),
  },
  addToCartContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(40),
    paddingHorizontal: scale(22),
  },
  addToCartTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.white,
    textAlign: 'center',
  },
  itemCard: {
    flexDirection: 'row',
    // alignItems: 'center',
    padding: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: verticalScale(15),
    paddingBottom: verticalScale(15),

    borderBottomWidth: 1,
    borderColor: Colors.yellow500,
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(10),
  },
  itemProductCardRight: {
    marginTop: verticalScale(35),

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: scale(75),
  },
  productImgCnt: {
    width: scale(80),
    alignItems: 'flex-start',
  },
  productImg: {
    width: scale(80),
    height: scale(80),
    borderRadius: moderateScale(20),
    resizeMode: 'cover',
    // borderWidth: 1,
  },
  productName: {
    fontSize: moderateScale(15),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.medium,
    marginBottom: verticalScale(4),
  },
  productPrice: {
    fontSize: moderateScale(14),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.light,
  },
  cartTxt: {
    color: Colors.white,
    fontSize: moderateScale(13),
    fontFamily: Fonts.leagueSpartan.regular,
    textAlign: 'center',
    flex: 1,
  },
  productAddBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(22),
    height: scale(22),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(11),
  },
  subTotalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: verticalScale(30),
    paddingBottom: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: Colors.yellow500,
  },
  checkoutContainer: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.yellow500,
    paddingVertical: verticalScale(5),
    marginHorizontal: scale(30),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(20),
  },
  checkOutTxt: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.orange600,
  },
  subTotal: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.white,
  },
});
