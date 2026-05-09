import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../../constant/Colors';

const ScreenWrapper = ({ children }) => {
  const insest = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insest.top,
        paddingBottom: insest.bottom,
        backgroundColor: Colors.white,
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
