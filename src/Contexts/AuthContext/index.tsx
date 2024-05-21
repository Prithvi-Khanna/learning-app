import React, {FC, createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  isLoading: boolean;
  userToken: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
}

type Props = {
  children?: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  isLoading: false,
  userToken: null,
  signIn: () => {},
  signOut: () => {},
});

export const AuthProvider: FC<Props> = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userTokenFromStorage: string | null;
      try {
        userTokenFromStorage = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.error('Error reading user token from AsyncStorage:', e);
        userTokenFromStorage = null;
      }
      setIsLoading(false);
      setUserToken(userTokenFromStorage);
    };

    bootstrapAsync();
  }, []);

  const signIn = async (token: string) => {
    try {
      await AsyncStorage.setItem('userToken', token);
      setUserToken(token);
    } catch (e) {
      console.error('Error saving user token to AsyncStorage:', e);
    }
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (e) {
      console.error('Error removing user token from AsyncStorage:', e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userToken,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
