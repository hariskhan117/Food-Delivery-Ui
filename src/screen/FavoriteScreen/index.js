import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/Slices/FavoriteSlice';
import ScreenWrapper from '../../components/ScreenWrapper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../../constant/Colors';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import CheckoutHeader from '../../components/Header/CheckoutHeader';
import Fonts from '../../constant/Fonts';
import { useNavigation } from '@react-navigation/native';

const Favorite = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favItem = useSelector(state => state.favorite.favoriteItems);
  console.log('Items :', favItem.length);

  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <View>
          <CheckoutHeader name="less-than" Children="Favorites" />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headingTxt}>
            It's time to buy your favorite dish.
          </Text>
        </View>
        {favItem.length === 0 ? (
          <>
            <View style={styles.favSelectedContainer}>
              <Text style={styles.favSelectedTxt}>
                No Favorite Dishes Are Selected{' '}
              </Text>
              <View style={{ alignItems: 'center' }}>
                <Text style={styles.favSelectedTxt}>Add Some Dishes</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                  <Image
                    style={styles.addFavImg}
                    source={require('../../assets/images/addtocart.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.favCardMain}>
            <FlatList
              data={favItem}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              // horizontal
              contentContainerStyle={{ paddingBottom: verticalScale(100) }}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                console.log(item);

                return (
                  <View style={styles.favCardContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ProductDetail', {
                          product: item,
                        })
                      }
                    >
                      <Image style={styles.favImg} source={item.image} />
                      <View style={styles.favListContainer}>
                        <Text style={styles.favTitle}>{item.name}</Text>
                        <Text style={styles.favDescription} numberOfLines={2}>
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.favIconContainer}
                      onPress={() => dispatch(toggleFavorite(item))}
                    >
                      <AntDesign
                        name="heart"
                        size={moderateScale(17)}
                        color={Colors.orange600}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    </ScreenWrapper>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerContainer: {
    backgroundColor: Colors.white,
    // backgroundColor: 'red',
    marginTop: verticalScale(-23),
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: verticalScale(30),
    // marginHorizontal : 22
  },
  headingTxt: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.orange600,
  },
  favCardContainer: {
    position: 'relative',

    marginHorizontal: scale(10),
  },
  favCardMain: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  favImg: {
    width: scale(158),
    height: scale(141),
    resizeMode: 'cover',
    borderRadius: scale(30),
  },
  favListContainer: {
    width: scale(158),
    marginVertical: verticalScale(10),
  },
  favTitle: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: Colors.orange600,
    fontFamily: Fonts.leagueSpartan.medium,
    marginBottom: verticalScale(3),
  },
  favDescription: {
    textAlign: 'center',
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.light,
    color: Colors.text800,
  },
  favIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(5),
    paddingHorizontal: scale(5),
    borderRadius: scale(20),
  },
  favSelectedContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  favSelectedTxt: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.orange600,
  },
  addFavImg: {
    width: scale(100),
    height: scale(100),
    // backgroundColor : Colors.orange300
  },
});
