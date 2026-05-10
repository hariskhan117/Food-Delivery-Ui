import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/index';
import SearchBarCmp from '../../components/Header/SearchBarCmp';
import { Colors } from '../../constant/Colors';

const Home = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <SearchBarCmp />
        </View>
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
});
