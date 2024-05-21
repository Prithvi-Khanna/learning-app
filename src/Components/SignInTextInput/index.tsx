import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

type PropsType = {
  isHelperText?: boolean;
  handleOnChangeText: (text: string) => void;
  value: string;
  placeHolder: string;
  isPasswordTrue?: boolean;
  multiline?: boolean;
};

const SignInTextInput = ({
  isHelperText,
  handleOnChangeText,
  value,
  placeHolder,
  isPasswordTrue,
  multiline,
}: PropsType) => {
  return (
    <View style={{justifyContent: 'space-between'}}>
      <TextInput
        multiline={multiline}
        maxLength={30}
        secureTextEntry={isPasswordTrue}
        value={value}
        placeholder={placeHolder}
        onChangeText={handleOnChangeText}
        style={{
          backgroundColor: '#FFFFFF',
          height: multiline ? 90 : 56,
          borderRadius: 12,
          paddingHorizontal: 20,
          fontSize: 16,
          paddingVertical: multiline ? 16 : 0,
        }}
      />
      {isHelperText ? (
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                color: '#0469DE',
                fontWeight: '700',
                marginTop: 10,
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default SignInTextInput;
