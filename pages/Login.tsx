import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { login as nextcloudLogin } from '../api/nextcloud/auth';

const LoginPage: React.FC<{}> = () => {
    const [ userLogin, setUserLogin ] = useState('');
    const [ userPassword, setUserPassword ] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}> Hi! Please login to your nextcloud instance to continue </Text>
            
            <View style={styles.form}>
                <View style={styles.inputSection}>

                    <Text style={styles.inputLabel}> Login </Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize={'none'}
                        onChangeText={setUserLogin}
                        value={userLogin}
                        autoCorrect={false}
                    />

                    <Text style={styles.inputLabel}> Password </Text>
                    <TextInput style={styles.input}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        onChangeText={setUserPassword}
                        value={userPassword}
                    />

                </View>
                <Button
                 onPress={() => nextcloudLogin(userLogin, userPassword)}
                 title={'Login'}
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
        fontSize: 22,
        textAlign: 'center'
    },

    inputSection: {
        marginBottom: 20,
        marginTop: 20,
    },

    inputLabel: {
        marginTop: 30,
        marginBottom: 10,
        textTransform: 'uppercase',
        fontSize: 15,
        color: '#777'
    },

    input: {
        borderBottomWidth: 2,
        paddingBottom: 7,
        borderBottomColor: 'rgba(0, 0, 0, .15)',
        fontSize: 16
    },

    form: {
        width: '80%'
    }
});

export default LoginPage;