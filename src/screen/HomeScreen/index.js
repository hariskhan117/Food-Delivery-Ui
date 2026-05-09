import { View, Text } from 'react-native';
import React from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/index';
import  Header  from '../../components/Header/index';

const Home = () => {
  return (
    <ScreenWrapper>
      <View>
        <View>
          <Header />
        </View>

      </View>
    </ScreenWrapper>
  );
};

export default Home;
