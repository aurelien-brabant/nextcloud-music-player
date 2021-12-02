import React, { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import authContext from '../context/auth/authContext';

const Home: React.FC<{}> = () => {
    const { authData } = useContext(authContext) 

    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 30 }}> Authenticated successfully to nextcloud as {authData?.userId} </Text>
            <Text>
                Access token will expire the: { authData?.expirationDate }
            </Text>
        </SafeAreaView>
    )
};

export default Home;