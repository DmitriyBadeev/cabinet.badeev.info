import { UserManager, UserManagerSettings, User, WebStorageStateStore } from "oidc-client"
import { action, observable, computed } from "mobx"

const prodConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "https://cabinet.badeev.info/auth-complete",
    response_type: "code",
    scope: "openid Portfolio.API",
    post_logout_redirect_uri: "https://badeev.info",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
}

const devConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "http://localhost:3000/auth-complete",
    response_type: "code",
    scope: "openid Portfolio.API",
    post_logout_redirect_uri: "https://badeev.info",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
}

const getConfig = () => {
    const hostname = window.location.hostname

    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return devConfig
    }

    return prodConfig
}

const userManager = new UserManager(getConfig())

export default class AuthService {
    @observable user: User | null = null
    @observable isAuthenticating = true
    @observable isLoadingUser = true

    @computed get isAuthenticated() {
        return this.user !== null
    }

    @action signin() {
        userManager.signinRedirect()
    }

    @action signinComplete() {
        this.isAuthenticating = true

        userManager
            .signinRedirectCallback()
            .then((user) => {
                this.user = user
                console.log("collback user")
                console.log(user)
                this.isAuthenticating = false
            })
            .catch((e) => {
                console.log(e)
                console.log(this.user)
            })
    }

    @action loadUser() {
        this.isLoadingUser = true

        userManager.getUser().then((user) => {
            console.log("loaded user")
            console.log(user)

            this.user = user
            this.isLoadingUser = false
        })
    }

    @action signout() {
        userManager.signoutRedirect()
    }
}
