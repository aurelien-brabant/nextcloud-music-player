import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { login as nextcloudLogin } from '../api/nextcloud/auth';
import authContext, { AuthData } from '../context/auth/authContext';
import { removeComments } from '@babel/types';

const LoginPage: React.FC<{}> = () => {
    const { authData, setAuthData } = useContext(authContext);

    const handleLogin = async () => {
        try {
            const { accessToken, accessTokenExpirationDate: expirationDate, refreshToken, ...rem } = await nextcloudLogin();
            if (setAuthData) {
                const authData: AuthData = {
                   expirationDate,
                   accessToken,
                   refreshToken,
                   userId: rem.tokenAdditionalParameters?.user_id as string
                };

                setAuthData(authData);

                await AsyncStorage.setItem('@auth_data', JSON.stringify(authData));
            }
            
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={styles.title} > Authorization required </Text>
                <Text style={styles.subtitle}> Authorize NMP to access your nextcloud account to start listening to your music! </Text>
                <Button
                    onPress={() => handleLogin()}
                    title={'Login via OAuth2'}
                />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },

    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 10
    },
});

export default LoginPage;