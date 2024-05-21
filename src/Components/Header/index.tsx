import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1E1E2D'}}>
      <View
        style={{
          backgroundColor: '#1E1E2D',
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={require('../../Assets/hamburger.png')}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 16, fontWeight: '700', color: '#FFF',marginLeft:6}}>
            Learning Hub
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginRight:10}}>
            <Image
              resizeMode="contain"
              source={require('../../Assets/bell.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              resizeMode="contain"
              source={require('../../Assets/userLogo.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
