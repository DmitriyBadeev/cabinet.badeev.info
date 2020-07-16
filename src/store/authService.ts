import { UserManager, UserManagerSettings, User } from "oidc-client"
import { action, observable } from "mobx"

const config: UserManagerSettings = {
    authority: "https://identity.badeev.info",
    client_id: "spa_badeev",
    redirect_uri: "https://cabinet.badeev.info/auth-complete",
    response_type: "id_token token",
    scope: "openid Portfolio.API",
    post_logout_redirect_uri: "https://badeev.info",
}

const userManager = new UserManager(config)

export default class AuthService {
    @observable user: User | null = null

    @action signin() {
        userManager.signinRedirect()
    }

    @action async signinComplete() {
        userManager.signinRedirectCallback().then((user) => {
            this.user = user
        })
    }

    @action async loadUser() {
        userManager.getUser().then((user) => {
            console.log(user)

            this.user = user
        })
    }
}
