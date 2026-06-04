import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import ScreenWrapper from '../../components/ScreenWrapper';
import Button from '../../components/ButtonCmp/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { removeFromCart } from '../../store/Slices/CartSlice';
import { useNavigation } from '@react-navigation/native';
const MyOrders = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <CheckoutHeader
          name="chevron-left"
          Children="My Orders"
          onPress={() => navigation.navigate('Checkout')}
        />

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryBtn}>
            <Text style={styles.categoryBtnTxt}>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn2}>
            <Text style={styles.categoryBtnTxt2}>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryBtn2}>
            <Text style={styles.categoryBtnTxt2}>Cancelled</Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            contentContainerStyle={{ paddingBottom: verticalScale(170) }}
            data={cartItems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <View key={item.id} style={styles.itemContainer}>
                  <Image style={styles.itemImage} source={item.image} />
                  <View style={styles.itemListContainer}>
                    <View style={{ gap: 7 }}>
                      <Text style={styles.itemTitleTxt}>{item.name}</Text>
                      <Text style={styles.itemDateTxt}>12-04-2026</Text>
                      <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={() => dispatch(removeFromCart(item.id))}
                      >
                        <Text style={styles.btnTxt}>Cancel Order</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ gap: 7 }}>
                      <Text style={styles.itemPriceTxt}>
                        ${(item.price * item.quantity).toFixed(2)}
                      </Text>
                      <Text style={styles.itemDateTxt}>
                        {item.quantity} items
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default MyOrders;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(30),
    borderTopWidth: 1,
    borderColor: Colors.orange300,
    marginTop: verticalScale(20),

    // alignItems: 'center',
    // justifyContent : 'space-between'
  },
  itemImage: {
    width: scale(71),
    height: verticalScale(108),
    borderRadius: scale(20),
  },
  itemListContainer: {
    flex: 1,
    marginTop: verticalScale(20),
    // marginHorizontal: scale(20),
    marginLeft: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems : 'center'
  },
  itemTitleTxt: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.text800,
  },
  itemPriceTxt: {
    fontSize: moderateScale(20),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  itemDateTxt: {
    fontSize: moderateScale(14),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text800,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    width: scale(110),
    height: verticalScale(26),

    backgroundColor: Colors.orange600,
  },
  btnTxt: {
    fontSize: moderateScale(15),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.white,
  },
  categoryContainer: {
    marginTop: verticalScale(-20),
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingTop: verticalScale(30),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },
  categoryBtn: {
    backgroundColor: Colors.orange600,
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(104),
    height: verticalScale(28),
    borderRadius: scale(30),
  },
  categoryBtnTxt: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.white,
  },
  categoryBtn2: {
    backgroundColor: Colors.orangeBase,
    marginHorizontal: scale(10),
    width: scale(104),
    height: verticalScale(28),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBtnTxt2: {
    fontSize: moderateScale(17),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.orange600,
  },
});
