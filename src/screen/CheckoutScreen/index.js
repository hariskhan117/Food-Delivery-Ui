import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../../store/Slices/CartSlice';
import Button from '../../components/ButtonCmp/Button';
import { useNavigation } from '@react-navigation/native';
import { removeFromCart } from '../../store/Slices/CartSlice';

const Checkout = () => {
  const navigation = useNavigation();
  const Amount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={styles.main}>
          <CheckoutHeader
            onPress={() => navigation.openDrawer('cart')}
            name="less-than"
            Children="Confirm Order"
          />
          {/* <Text>Cart items</Text> */}
          <View style={styles.shippingHeader}>
            <View style={styles.shippingContainer}>
              <Text style={styles.shippingTitle}>Shipping Address</Text>
              <TouchableOpacity>
                <Feather
                  name="edit-3"
                  size={moderateScale(20)}
                  color={Colors.orange600}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputTxt}
                placeholder="778 Locust View Drive Oaklanda, CA"
                placeholderTextColor={Colors.text800}
              />
            </View>
          </View>

          <View style={styles.summaryContainer}>
            <Text style={styles.summaryTxt}>Order Summary</Text>
            <View style={styles.summaryEditTxtContainer}>
              <Text style={styles.summaryEditTxt}>Edit</Text>
            </View>
          </View>
          <FlatList
            data={cartItems}
            contentContainerStyle={{ paddingBottom: verticalScale(40) }}
            scrollEnabled={false}
            ListFooterComponent={
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                }}
              >
                <View style={styles.footer}>
                  <Text style={styles.subtotalTxt}>Subtotal</Text>
                  <Text style={styles.subtotalTxt}>${Amount.toFixed(2)}</Text>
                </View>
                <Button children="Place Order" />
              </View>
            }
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.productItemContainer}>
                <View style={styles.productImgContainer}>
                  <Image style={styles.productImg} source={item.image} />
                </View>
                <View style={styles.productListContainer}>
                  <Text style={styles.productTitle} numberOfLines={1}>
                    {item.name}
                  </Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.orange300,
                      marginTop: verticalScale(25),
                      borderRadius: moderateScale(20),
                      paddingVertical: verticalScale(3),
                      marginRight: scale(20),
                      paddingLeft: scale(10),
                    }}
                  >
                    <Text style={styles.productOrderTxt}>Cancel Order</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.productPriceContainer}>
                  <TouchableOpacity
                    onPress={() => dispatch(removeFromCart(item))}
                  >
                    <Feather
                      name="trash-2"
                      size={moderateScale(20)}
                      color={Colors.orange600}
                    />
                  </TouchableOpacity>
                  <View style={styles.productPriceBox}>
                    <Text style={styles.productPriceTxt}>
                      ${item.totalPrice.toFixed(2)}
                    </Text>
                  </View>
                  <View style={{ marginVertical: verticalScale(5) }}>
                    <Text
                      style={{
                        fontSize: moderateScale(14),
                        fontFamily: Fonts.leagueSpartan.light,
                        color: Colors.text800,
                      }}
                    >
                      {item.quantity} items
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: scale(10),
                    }}
                  >
                    <TouchableOpacity>
                      <Feather
                        name="edit-3"
                        size={moderateScale(17)}
                        color={Colors.orange600}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.productAddBtn}
                      onPress={() => dispatch(decreaseQuantity(item.id))}
                    >
                      <Entypo
                        name="minus"
                        size={moderateScale(17)}
                        color={Colors.white}
                      />
                    </TouchableOpacity>
                    <Text style={styles.cartTxt}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.productAddBtn}
                      onPress={() => dispatch(increaseQuantity(item.id))}
                    >
                      <Entypo
                        name="plus"
                        size={moderateScale(17)}
                        color={Colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  shippingHeader: {
    // marginHorizontal : scale(25),
    // alignItems: 'center',

    backgroundColor: Colors.white,
    marginTop: verticalScale(-23),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },
  shippingContainer: {
    marginVertical: verticalScale(20),
    flexDirection: 'row',
    // justifyContent : 'center'
    alignItems: 'center',
    // paddingHorizontal : scale(40), 
    // backgroundColor: Colors.yellowBase,
    marginHorizontal: scale(30),
    gap: scale(10),
    // justifyContent: 'center',
  },
  shippingTitle: {
    fontSize: moderateScale(24),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.text800,
  },
  inputContainer: {
    backgroundColor: Colors.yellowBase,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(15),
    marginHorizontal: scale(20),
    borderRadius: scale(30),
    marginBottom: verticalScale(40),
  },
  inputTxt: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.leagueSpartan.regular,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.orangeBase,
    marginHorizontal: scale(22),
    alignItems: 'center',
    paddingBottom: verticalScale(20),
  },
  summaryTxt: {
    fontSize: moderateScale(20),
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  summaryEditTxt: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.orange600,
  },
  summaryEditTxtContainer: {
    backgroundColor: Colors.orange300,
    paddingHorizontal: scale(20),
    borderRadius: moderateScale(20),
  },
  productItemContainer: {
    marginHorizontal: scale(22),
    // marginVertical: 20,
    flexDirection: 'row',
    // justifyContent : 'space-between',
    // alignItems : 'center',
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderColor: Colors.orangeBase,
    paddingVertical: verticalScale(30),
    // paddingBottom : 40
    // marginVertical: verticalScale(10),
  },
  productImgContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  productImg: {
    width: scale(71),
    height: verticalScale(108),
    resizeMode: 'cover',
    borderRadius: moderateScale(25),
  },
  productListContainer: {
    flex: 1,
    // backgroundColor: 'gray',
    // marginHorizontal: scale(10),
    // alignItems: 'center',
    justifyContent: 'center',
    padding: scale(14),
  },
  productTitle: {
    fontSize: moderateScale(20),
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  productOrderTxt: {
    textAlign: 'center',
    fontSize: moderateScale(15),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.orange600,
  },
  productPriceContainer: {
    // flex: 1,
    // backgroundColor: 'white',
    // flexDirection: 'row',
    alignItems: 'flex-end',
    // justifyContent: 'center',
  },
  productPriceTxt: {
    fontSize: moderateScale(20),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  productPriceBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: verticalScale(15),
  },
  productAddBtn: {
    paddingVertical: scale(3),
    paddingHorizontal: scale(3),
    backgroundColor: Colors.orange600,
    borderRadius: moderateScale(30),
  },
  cartTxt: {
    fontSize: moderateScale(17),
    // backgroundColor : 'red',
    // flex: 1,
    textAlign: 'center',
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.regular,
  },
  footer: {
    flexDirection: 'row',
    borderColor: Colors.orangeBase,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: scale(22),
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  subtotalTxt: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.text800,
  },
});
