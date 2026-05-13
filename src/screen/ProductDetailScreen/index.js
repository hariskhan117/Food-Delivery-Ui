import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { moderateScale, scale, verticalScale } from '../../constant/Scaling';
import { Colors } from '../../constant/Colors';
import Fonts from '../../constant/Fonts';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  return (
    <ScreenWrapper>
      <View style={styles.main}>
        <View style={styles.headerMain}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContainer2}>
              <TouchableOpacity>
                <FontAwesome6
                  name="less-than"
                  size={moderateScale(15)}
                  color={Colors.text800}
                />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>{product.name}</Text>
            </View>
            <View style={styles.headerIconContainer}>
              <AntDesign
                name="heart"
                size={moderateScale(15)}
                color={Colors.white}
              />
            </View>
          </View>
          <View style={styles.infoRatingContainer}>
            <Text style={styles.infoRatingTxt}>{product.rating}</Text>
            <AntDesign name="star" color={Colors.yellow500} />
          </View>
        </View>
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
});
