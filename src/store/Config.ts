import { UserManagerSettings, WebStorageStateStore } from "oidc-client"

export const prodConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "https://cabinet.badeev.info/auth-complete",
    response_type: "code",
    loadUserInfo: true,
    scope: "openid profile Portfolio.API",
    post_logout_redirect_uri: "https://cabinet.badeev.info/signout",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    silent_redirect_uri: "https://cabinet.badeev.info/silent.html",
}

export const devConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "http://localhost:3000/auth-complete",
    response_type: "code",
    loadUserInfo: true,
    scope: "openid profile Portfolio.API",
    post_logout_redirect_uri: "http://localhost:3000/signout",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    silent_redirect_uri: "http://localhost:3000/silent.html",
}

export const YANDEX_TOKEN = "AgAAAAAr7vKQAAaBZ5S-_qh5tEU8kBa1RONuD7c"
export const COUNTER_ID = "65373601"
