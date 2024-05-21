import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthProvider, useAuth} from './src/Contexts/AuthContext';
import SignIn from './src/Screens/SignIn';
import Dashboard from './src/Screens/Dashboard';
import CourseDetails from './src/Screens/CourseDetails';
import AuthLoadingScreen from './src/Screens/AuthLoading';
import {ActivityIndicator, Image, View} from 'react-native';
import AuthLoading from './src/Screens/AuthLoading';
import Header from './src/Components/Header';
import {CoursesProvider} from './src/Contexts/CoursesContext';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const {isLoading, userToken} = useAuth();
  console.log('AUTHTHTHT', isLoading, '  TOKEENN', userToken);

  const RegistrationStackScreens = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: '', headerLeft: () => <CustomBackButton />}}
      />
    </Stack.Navigator>
  );

  const CustomBackButton = () => (
    <Image
      style={{width: 78, height: 36}}
      resizeMode="contain"
      source={require('./src/Assets/digiaccelLogo.png')}
    />
  );

  const AuthStackScreens = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{header: () => <Header />}}
      />
      <Stack.Screen
        name="Details"
        component={CourseDetails}
        options={{header: () => <Header />}}
      />
    </Stack.Navigator>
  );

  return (
    <AuthProvider>
      <CoursesProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={
              userToken ? 'AuthStackScreens' : 'RegistrationStackScreens'
            }>
            {isLoading ? (
              <AuthLoading />
            ) : (
              <>
                <Stack.Screen
                  name="RegistrationStackScreens"
                  component={RegistrationStackScreens}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="AuthStackScreens"
                  component={AuthStackScreens}
                  options={{headerShown: false}}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </CoursesProvider>
    </AuthProvider>
  );
};

export default App;
