import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

const AuthLoading = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default AuthLoading;
