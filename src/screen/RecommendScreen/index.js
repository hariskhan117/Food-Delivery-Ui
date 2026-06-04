import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { FoodData } from '../../data/MenuData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useDrawer } from '../../navigation/DrawerContext';
import { addToCart } from '../../store/Slices/CartSlice';

const ProductCard = ({ item, onAddToCart }) => {
  const [count, setCount] = useState(1);
  const basePrice = Number(item.price.replace('$', ''));
  const { setDrawerContent } = useDrawer();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleShoppingCart = () => {
    const cartItem = {
      ...item,
      quantity: count,
    };
    dispatch(addToCart(cartItem));
    setDrawerContent('cart');
    navigation.openDrawer();
  };

  return (
    <View key={item.id} style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {
            product: item,
          })
        }
      >
        <Image style={styles.productImg} source={item.image} />
        <View style={styles.productTxtContainer}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productSubTitle} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.productListContainer}>
        <Text>${(basePrice * count).toFixed(2)}</Text>
        <View style={styles.productBtnContainer}>
          <Pressable
            style={styles.productMinusBtn}
            onPress={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            <AntDesign
              name="minus"
              size={moderateScale(13)}
              color={Colors.white}
            />
          </Pressable>
          <View style={{ marginHorizontal: scale(15) }}>
            <Text>{count}</Text>
          </View>
          <Pressable
            style={styles.productAddBtn}
            onPress={() => setCount(count + 1)}
          >
            <AntDesign
              name="plus"
              size={moderateScale(13)}
              color={Colors.white}
            />
          </Pressable>
          <Pressable
            onPress={handleShoppingCart}
            style={styles.produtCartContainer}
          >
            <Feather
              name="shopping-cart"
              size={moderateScale(15)}
              color={Colors.white}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Recommend = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <CheckoutHeader name="chevron-left" Children="Recommendations" 
        onPress={()=> navigation.navigate('HomeScreen')}
        />
        <View style={styles.headingContainer}>
          <Text style={styles.headingTxt}>Discover the dishes</Text>
          <Text style={styles.headingTxt}>recommended by the chef.</Text>
        </View>
        <View>
          <FlatList
            data={FoodData}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: verticalScale(170) }}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <ProductCard item={item} />}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headingContainer: {
    backgroundColor: Colors.white,
    marginTop: verticalScale(-20),
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    paddingVertical: verticalScale(25),

    // justifyContent: 'center',
    alignItems: 'center',
  },
  headingTxt: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.orange600,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    marginHorizontal: scale(15),
    paddingBottom: verticalScale(25),
  },
  productImg: {
    width: scale(158),
    height: verticalScale(141),
    borderRadius: scale(30),
  },
  productTxtContainer: {
    marginVertical: verticalScale(10),
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap: 3,
  },
  productTitle: {
    fontSize: moderateScale(16),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.text800,
  },
  productSubTitle: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text800,
  },
  productListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  productAddBtn: {
    width: scale(15),
    height: scale(15),
    backgroundColor: Colors.orange600,
    borderRadius: scale(15 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(10),
  },
  productMinusBtn: {
    width: scale(15),
    height: scale(15),
    backgroundColor: Colors.orange300,
    borderRadius: scale(15 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  produtCartContainer: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(20 / 2),
    backgroundColor: Colors.orange600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
