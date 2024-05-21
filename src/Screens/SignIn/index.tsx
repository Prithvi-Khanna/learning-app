import React, {useState} from 'react';
import {View, Button, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../Contexts/AuthContext';
import SignInTextInput from '../../Components/SignInTextInput';
// import { from 'react-native-size-matters';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const SignInScreen: React.FC = () => {
  const navigation = useNavigation();
  const {signIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const isDisabled = !username || !password || !isChecked;

  const handleSignInButton = async () => {
    // Your sign-in logic here
    await signIn('userAuthToken'); // Example: Assume 'userAuthToken' is the token received upon successful login
    navigation.navigate('AuthStackScreens');
  };

  const handleUsernameTextChange = (text: string) => {
    console.log('USERNAME', text);
    setUsername(text);
  };

  const handlePasswordTextChange = (text: string) => {
    console.log('PASWROD', text);
    setPassword(text);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flex: 0.35,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
        }}>
        <Image
          resizeMode="contain"
          style={{width: 220}}
          source={require('../../Assets/signInImg.png')}
        />
      </View>
      <View
        style={{
          flex: 0.65,
          borderRadius: 30,
          backgroundColor: '#F2F3F7',
          justifyContent: 'space-between',
          paddingVertical: 24,
          paddingHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: '#413D3D',
              marginBottom: 20,
            }}>
            Sign-in
          </Text>
          <View style={{height: 164, justifyContent: 'space-between'}}>
            <SignInTextInput
              placeHolder="Enter email or user name"
              value={username}
              handleOnChangeText={handleUsernameTextChange}
            />
            <SignInTextInput
              isPasswordTrue
              placeHolder="Password"
              value={password}
              handleOnChangeText={handlePasswordTextChange}
              isHelperText
            />
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', marginBottom: 14}}>
            <BouncyCheckbox
              size={25}
              fillColor="#B2D6FF"
              unFillColor="#FFFFFF"
              iconStyle={{borderColor: '#B2D6FF'}}
              innerIconStyle={{borderWidth: 2}}
              textStyle={{fontFamily: 'JosefinSans-Regular'}}
              onPress={(isChecked: boolean) => {
                setIsChecked(isChecked);
              }}
            />
            <Text style={{maxWidth: '90%', alignItems: 'center'}}>
              <Text style={{color: '#413D3D'}}>
                By signing up, you agree to our{' '}
                <Text style={{color: '#0469DE'}}>terms of service</Text> and{' '}
                <Text style={{color: '#0469DE'}}>privacy policy.</Text>
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            disabled={isDisabled}
            style={{
              backgroundColor: '#0469DE',
              borderRadius: 12,
              height: 46,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: isDisabled ? 0.5 : 1,
            }}
            onPress={handleSignInButton}>
            <Text style={{fontSize: 18, fontWeight: '700', color: '#FFFFFF'}}>
              Sign-In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
