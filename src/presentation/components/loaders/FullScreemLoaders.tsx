import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const FullScreemLoaders = () => {
  return (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <ActivityIndicator size="large" color="#5252fd" />
        
    </View>
  );
};