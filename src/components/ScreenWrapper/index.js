import { View, Text } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children }) => {
  const insest = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insest.top,
        paddingBottom: insest.bottom,
        backgroundColor: 'white',
      }}
    >
      {children}
    </View>
  );
};

export default ScreenWrapper;
