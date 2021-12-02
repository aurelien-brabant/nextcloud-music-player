import React, {useEffect, useState} from 'react';
import authContext, {AuthContextValue, AuthData} from './authContext';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthProvider: React.FC<{}> = ({children}) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  useEffect(() => {
    const loadDataFromLocalStorage = async () => {
      const authDataJSON = await AsyncStorage.getItem('@auth_data');

      if (authDataJSON) {
        const data: AuthData = JSON.parse(authDataJSON);

        const tokenDidExpire = new Date(data.expirationDate) <= new Date(Date.now());

        setAuthData(
          tokenDidExpire ? null : data,
        );

        if (tokenDidExpire) {
            await AsyncStorage.removeItem('@auth_data');
        }

      } else {
        console.log('No auth data found in async storage');
      }
    };
    // TODO: retrieve authentication details from device's internal storage on mount

    loadDataFromLocalStorage();
  }, []);

  return (
    <authContext.Provider
      value={{
        authData,
        setAuthData,
      }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
