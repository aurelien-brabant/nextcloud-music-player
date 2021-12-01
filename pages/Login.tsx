import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import { login as nextcloudLogin } from '../api/nextcloud/auth';

const LoginPage: React.FC<{}> = () => {
    return (
        <SafeAreaView style={styles.container}>

            <View>
                <Text style={styles.title} > Authorization required </Text>
                <Text style={styles.subtitle}> Authorize NMP to access your nextcloud account to start listening to your music! </Text>
                <Button
                    onPress={() => nextcloudLogin()}
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