import { AuthConfiguration, authorize } from 'react-native-app-auth';

import config from '../../config';

export type Config = {
    issuer: string,
    clientId: string,
    clientSecret: string,
    endpoints: {
        authorization: string,
        token: string
    }
};

/**
 * Request an oauth2 token
 */

export const login = async () =>
{
    const { clientId, clientSecret, issuer } = config;

    const oauthConfig: AuthConfiguration = {
        issuer,
        serviceConfiguration: {
            authorizationEndpoint: `${issuer}${config.endpoints.authorization}`,
            tokenEndpoint: `${issuer}${config.endpoints.token}`
        },
        clientId,
        clientSecret,
        redirectUrl: 'nmp://oauth',
        scopes: [
            'openid'
        ]
    };

    try {
        const result = await authorize(oauthConfig);
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}