import {AppSettings} from 'vactory-gatsby-core'

const authority = AppSettings.api.url.substr(0, AppSettings.api.url.length - 1);

export const IDENTITY_CONFIG = {
    authority: `${authority}`,
    client_id: AppSettings.oidcClientId,
    redirect_uri: `${AppSettings.frontendURL}signin-callback/`,
    automaticSilentRenew: true,
    accessTokenExpiringNotificationTime: 250,
    loadUserInfo: true,
    silent_redirect_uri: `${AppSettings.frontendURL}signin-callback/`,
    post_logout_redirect_uri: `${AppSettings.frontendURL}`,
    response_type: "code",
    scope: "openid",
    filterProtocolClaims: true,
};
