import React, {useContext} from 'react';
import authContext from '../context/auth/authContext';
import Home from './Home';
import LoginPage from './Login';

const AuthGuard: React.FC<{}> = ({children}) => {
  const {authData} = useContext(authContext);

  return authData ? <Home></Home> : <LoginPage />;
};

export default AuthGuard;
