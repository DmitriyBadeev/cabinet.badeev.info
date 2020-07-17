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
    automaticSilentRenew: true,
    silent_redirect_uri: "https://cabinet.badeev.info/silent.html",
}

const devConfig: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "http://localhost:3000/auth-complete",
    response_type: "code",
    scope: "openid Portfolio.API",
    post_logout_redirect_uri: "https://badeev.info",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    automaticSilentRenew: true,
    silent_redirect_uri: "http://localhost:3000/silent.html",
}

const getConfig = () => {
    const hostname = window.location.hostname

    if (hostname === "localhost" || hostname === "127.0.0.1") {
        return devConfig
    }

    return prodConfig
}

const userManager = new UserManager(getConfig())

userManager.events.addAccessTokenExpired(function () {
    console.log("token has expired")
})

userManager.events.addSilentRenewError(function () {
    console.log("error in silent renew")
})

userManager.events.addAccessTokenExpiring(function () {
    console.log("renew")
    userManager.getUser().then((user) => {
        user && window.localStorage.setItem("token", `Bearer ${user.access_token}`)
    })
})

export default class AuthService {
    @observable user: User | null = null
    @observable isAuthenticating = true
    @observable isLoadingUser = true

    @computed get isAuthenticated() {
        return this.user != null && this.user.access_token && !this.user.expired
    }

    @action signin() {
        userManager.signinRedirect()
    }

    @action signinComplete() {
        this.isAuthenticating = true

        userManager
            .signinRedirectCallback()
            .then((user) => {
                console.log("callback user")
                console.log(user)
                this.setUser(user)
                this.isAuthenticating = false
            })
            .catch((e) => {
                this.handleError(e)
            })
    }

    @action loadUser() {
        this.isLoadingUser = true

        userManager
            .getUser()
            .then((user) => {
                console.log("loaded user")
                console.log(user)

                if (user !== null) {
                    this.setUser(user)
                }
                this.isLoadingUser = false
            })
            .catch((e) => {
                this.handleError(e)
            })
    }

    @action signout() {
        userManager.signoutRedirect()
    }

    setUser(user: User) {
        this.user = user
        window.localStorage.setItem("token", `Bearer ${user.access_token}`)

        console.log(this.user.expired)
        console.log(this.user.expires_in)
    }

    handleError(error: any) {
        this.user = null
        window.localStorage.removeItem("token")
        console.error("Problem with authentication: ", error)
    }
}
