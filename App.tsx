import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthProvider from './context/auth/AuthProvider';

import LoginPage from './pages/Login';
import AuthGuard from './pages/AuthGuard';

export const App = () => {
  return (
    <AuthProvider>
      <AuthGuard>
      </AuthGuard>
    </AuthProvider>
  );
};

export default App;