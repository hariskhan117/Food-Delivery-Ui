import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/index';
import SearchBarCmp from '../../components/Header/SearchBarCmp';
import { Colors } from '../../constant/Colors';
import Category from '../../components/FoodCategory/Category';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import Fonts from '../../constant/Fonts';
import { RecommendList, Seller } from '../../data/HomeData/index';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <SearchBarCmp
            title="Good Morning"
            subtitle="Rise and shine! It's breakfast time"
          />
        </View>
        <View>
          <Category isOrangeTheme={false} underLine={true} />
        </View>

        <ScrollView>
          <View>
            <View style={styles.sellerContainer}>
              <Text style={styles.sellerTitle}>Best Seller</Text>
              <View style={styles.iconContainer}>
                <Text style={styles.sellerView}>View All</Text>
                <FontAwesome
                  name="greater-than"
                  size={moderateScale(15)}
                  color={Colors.orange600}
                />
              </View>
            </View>
            <FlatList
              data={Seller}
              horizontal
              showsHorizontalScrollIndicator={false}
              key={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View>
                    <View style={styles.imageContainer}>
                      <Image style={styles.img} source={item.image} />
                      <View style={styles.priceContainer}>
                        <Text style={styles.price}>{item.price}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.discountContaier}>
            <View style={styles.discBox}>
              <Text style={styles.discTxt}>
                Experience our delicious new dish
              </Text>
              <Text style={styles.disHeading}>30% OFF</Text>
            </View>
            <View style={styles.discImgContainer}>
              <Image
                style={styles.discImg}
                source={require('../../assets/images/pizza.png')}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.lineContainer}>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
            <View style={styles.activeLine}></View>
            <View style={styles.line}></View>
            <View style={styles.line}></View>
          </View>
          <View>
            <View style={styles.recmdContainer}>
              <Text style={styles.recmdTitle}>Recommend</Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={RecommendList}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <View style={styles.ratingContainer}>
                    <View>
                      <Image
                        style={styles.recmdImg}
                        source={item.image}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={styles.ratingBox}>
                      <Text>{item.rating}</Text>
                      <AntDesign
                        name="star"
                        size={moderateScale(15)}
                        color={Colors.yellow500}
                      />
                    </View>
                    <View style={styles.favContainer}>
                      <AntDesign
                        name="heart"
                        size={moderateScale(15)}
                        color={Colors.orange600}
                      />
                    </View>
                    <View style={styles.priceContainer2}>
                      <Text style={styles.price}>{item.price}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sellerContainer: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scale(23),
    alignItems: 'center',
  },
  sellerTitle: {
    fontSize: moderateScale(20),
    color: Colors.text800,
    fontFamily: Fonts.leagueSpartan.medium,
  },
  sellerView: {
    fontSize: moderateScale(12),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.orange600,
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  imageContainer: {
    marginLeft: scale(19),
    marginTop: verticalScale(10),
  },
  img: {
    width: scale(70),
    height: verticalScale(108),
  },
  priceContainer: {
    position: 'absolute',
    top: 90,
    right: 0,
    backgroundColor: Colors.orange600,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: scale(4),
    alignItems: 'center',
  },
  price: {
    fontSize: moderateScale(12),
    color: Colors.white,
    fontFamily: Fonts.leagueSpartan.regular,
  },
  discountContaier: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: verticalScale(10),
    backgroundColor: Colors.white,
  },
  discBox: {
    height: verticalScale(141),
    width: scale(150),
    backgroundColor: Colors.orange600,
    borderTopLeftRadius: moderateScale(25),
    borderBottomLeftRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  discTxt: {
    fontSize: moderateScale(16),
    marginHorizontal: scale(8),
    fontFamily: Fonts.leagueSpartan.regular,
    color: Colors.white,
    textAlign: 'center',
  },
  disHeading: {
    fontSize: moderateScale(32),
    fontFamily: Fonts.leagueSpartan.bold,
    color: Colors.white,
  },
  discImgContainer: {
    height: verticalScale(141),
    width: scale(170),
  },
  discImg: {
    height: verticalScale(141),
    width: scale(170),
    borderTopRightRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: verticalScale(20),
  },
  line: {
    height: verticalScale(5),
    width: scale(20),
    marginHorizontal: scale(7),
    backgroundColor: Colors.yellowBase,
    borderRadius: moderateScale(10),
  },
  activeLine: {
    height: verticalScale(5),
    width: scale(20),
    backgroundColor: Colors.orange600,
    borderRadius: moderateScale(10),
  },
  recmdContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: scale(27),
    marginBottom: verticalScale(20),
  },
  recmdTitle: {
    fontSize: moderateScale(20),
    fontFamily: Fonts.leagueSpartan.medium,
    color: Colors.text800,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginLeft: 22,
    position: 'relative',
    marginBottom: verticalScale(20),
  },
  recmdImg: {
    height: verticalScale(140),
    width: scale(159),
  },
  ratingBox: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    position: 'absolute',
    top: verticalScale(10),
    left: scale(5),
    borderRadius: moderateScale(10),
    paddingHorizontal: scale(4),
    alignItems: 'center',
    gap: scale(5),
  },
  favContainer: {
    backgroundColor: Colors.white,
    position: 'absolute',
    top: verticalScale(10),
    left: scale(62),
    paddingHorizontal: scale(3),
    paddingVertical: verticalScale(3),
    alignItems: 'center',
    borderRadius: moderateScale(20),
    justifyContent: 'center',
  },
  priceContainer2: {
    position: 'absolute',
    top: 110,
    right: 0,
    backgroundColor: Colors.orange600,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: scale(4),
    alignItems: 'center',
  },
});
